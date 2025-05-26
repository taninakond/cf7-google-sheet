<?php
namespace BDPlugins\CF7GoogleSheet;

use BDPlugins\CF7GoogleSheet\Utils\Singleton;

defined('ABSPATH') || exit;

class Enqueue {
    use Singleton;

    private function doHooks() {
        add_action('admin_enqueue_scripts', [$this, 'adminScripts']);
    }

    public function adminScripts() {
        $this->rStyle('dashboard');
        $this->rScript('dashboard');
    }

    private function script($handle, $deps = [], $args = []) {

        $defaultArgs = [
            'ver' => BDPCGS_VERSION,
            'in_footer' => true,
            'type' => 'enqueue',
        ];

        $args = wp_parse_args($args, $defaultArgs);
        

        $assetsPath = BDPCGS_DIR . '/assets/js/' . $handle . '.asset.php';

        if (file_exists($assetsPath)) {
            $assets = require_once $assetsPath;
            $deps = wp_parse_args($deps, $assets['dependencies']);
            if(defined('WP_ENVIRONMENT_TYPE') && (WP_ENVIRONMENT_TYPE === 'development' || WP_ENVIRONMENT_TYPE === 'local') ) {
                $args['ver'] = $assets['version'];
            }
        }

        $srcPath = BDPCGS_DIR . '/assets/js/' . $handle . '.js';

        if (file_exists($srcPath)) {
            if($args['type'] === 'register') {
                wp_register_script('bdpcgs-'.$handle, BDPCGS_ASSETS . '/js/' . $handle . '.js', $deps, $args['ver'], $args['in_footer']);
            }elseif($args['type'] === 'enqueue') {
                wp_enqueue_script('bdpcgs-'.$handle, BDPCGS_ASSETS . '/js/' . $handle . '.js', $deps, $args['ver'], $args['in_footer']);
            }
        }
    }

    private function style($handle, $deps = [], $args = []) {
        $defaultArgs = [
            'ver' => BDPCGS_VERSION,
            'in_footer' => false,
            'type' => 'enqueue',
            'media' => 'all',
        ];

        $args = wp_parse_args($args, $defaultArgs);

        $srcPath = BDPCGS_DIR . '/assets/css/' . $handle . '.css';        
        if (file_exists($srcPath)) {
            if($args['type'] === 'register') {
                wp_register_style('bdpcgs-'.$handle, BDPCGS_ASSETS . '/css/' . $handle . '.css', $deps, $args['ver'], $args['media']);
            }elseif($args['type'] === 'enqueue') {
                wp_enqueue_style('bdpcgs-'.$handle, BDPCGS_ASSETS . '/css/' . $handle . '.css', $deps, $args['ver'], $args['media']);
            }       
        }       
    }

    private function rStyle($handle, $deps = [], $args = []) {
        $args['type'] = 'register';
        $this->style($handle, $deps, $args);
    }

    private function rScript($handle, $deps = [], $args = []) {
        $args['type'] = 'register';
        $this->script($handle, $deps, $args);
    }
}   