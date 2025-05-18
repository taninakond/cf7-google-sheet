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
        wp_enqueue_style('cf7-google-sheet-dashboard', BDPCGS_ASSETS . '/css/style.css', [], BDPCGS_VERSION);
        $dependencies = require_once BDPCGS_DIR . '/assets/js/dashboard.asset.php';

        wp_enqueue_script('cf7-google-sheet-dashboard', BDPCGS_ASSETS . '/js/dashboard.js', $dependencies['dependencies'], BDPCGS_VERSION, true);
    }
}   