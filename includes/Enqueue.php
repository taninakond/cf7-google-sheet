<?php

namespace BDPlugins\CF7GoogleSheet;

use BDPlugins\CF7GoogleSheet\RestAPI\Settings;
use BDPlugins\CF7GoogleSheet\Utils\Singleton;

defined('ABSPATH') || exit;

class Enqueue
{
    use Singleton;

    private function doHooks()
    {
        add_action('admin_enqueue_scripts', [$this, 'adminScripts']);
    }

    public function adminScripts()
    {
        $this->rScript('dashboard', [], ['localize_script' => true]);
        $this->rStyle('dashboard');
    }

    private function script($handle, $deps = [], $args = [])
    {

        $settings = get_option(Settings::OPTION_KEY, []);

        $defaultArgs = [
            'ver' => BDPCGS_VERSION,
            'in_footer' => true,
            'type' => 'enqueue',
            'dev_port' => 5175,
            'dev_deps' => ['react', 'react-jsx-runtime', 'wp-element', 'wp-i18n'],
            'localize' => [
                'ajax_url' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('wp_rest'),
                'rest_url' => rest_url('bdpcgs/v1/'),
                'settings' => $settings,
                'settingsDraft' => $settings,
                'defaultSettings' => bdpcgs_get_settings_defaults(),
                'changesQueue' => [],
            ],
            'localize_script' => false,
            'localize_script_name' => 'bdpcgs',
        ];

        $args = wp_parse_args($args, $defaultArgs);


        $assetsPath = BDPCGS_DIR . '/assets/js/' . $handle . '.asset.php';

        if (file_exists($assetsPath)) {
            $assets = require_once $assetsPath;
            $deps = wp_parse_args($deps, $assets['dependencies']);
        }

        $srcPath = BDPCGS_DIR . '/assets/js/' . $handle . '.js';
        $src = BDPCGS_ASSETS .'/js/'. $handle . '.js';


        if (defined('WP_ENVIRONMENT_TYPE') && (WP_ENVIRONMENT_TYPE === 'development' || WP_ENVIRONMENT_TYPE === 'local')) {
            $args['ver'] = $assets['version'] ?? BDPCGS_VERSION;
            $src = "http://localhost:$args[dev_port]/$handle.js";
            $deps = wp_parse_args($deps, $args['dev_deps']);
        }

        if ($args['type'] === 'register') {
            wp_register_script("bdpcgs-$handle", $src, $deps, $args['ver'], $args['in_footer']);
        } elseif ($args['type'] === 'enqueue') {
            wp_enqueue_script("bdpcgs-$handle", $src, $deps, $args['ver'], $args['in_footer']);
        }

        if ($args['localize_script']) {
            wp_localize_script("bdpcgs-$handle", $args['localize_script_name'], $args['localize']);
        }
    }

    private function style($handle, $deps = [], $args = [])
    {
        $defaultArgs = [
            'ver' => BDPCGS_VERSION,
            'in_footer' => false,
            'type' => 'enqueue',
            'media' => 'all',
            'dev_port' => 5175,
        ];

        $args = wp_parse_args($args, $defaultArgs);

        $src = BDPCGS_ASSETS . '/css/' . $handle . '.css';

        if (defined('WP_ENVIRONMENT_TYPE') && (WP_ENVIRONMENT_TYPE === 'development' || WP_ENVIRONMENT_TYPE === 'local')) {
            $src = "http://localhost:$args[dev_port]/$handle.css";
            $args['ver'] = time();
        }

        if ($args['type'] === 'register') {
            wp_register_style("bdpcgs-$handle", $src, $deps, $args['ver'], $args['media']);
        } elseif ($args['type'] === 'enqueue') {
            wp_enqueue_style("bdpcgs-$handle", $src, $deps, $args['ver'], $args['media']);
        }
    }

    private function rStyle($handle, $deps = [], $args = [])
    {
        $args['type'] = 'register';
        $this->style($handle, $deps, $args);
    }

    private function rScript($handle, $deps = [], $args = [])
    {
        $args['type'] = 'register';
        $this->script($handle, $deps, $args);
    }
}
