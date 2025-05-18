<?php

namespace BDPlugins\CF7GoogleSheet;

use BDPlugins\CF7GoogleSheet\Utils\Singleton;

defined('ABSPATH') || exit;

class Admin {
    use Singleton;

    private function doHooks() {
        add_action('admin_menu', [$this, 'adminMenu']);
    }

    public function adminMenu() {
        add_menu_page(
            'CF7 Google Sheet',
            'Google Sheet',
            'manage_options',
            'cf7-google-sheet',
            [$this, 'dashboard'],
            BDPCGS_ASSETS . '/images/icon.png'
        );
    }

    public function dashboard() {
        printf('<div id="bdpcgs-dashboard" class="bdpcgs-dashboard bdpcgs-toplevel-wrapper"><h1>%s</h1></div>', __('CF7 Google Sheet', 'cf7-google-sheet'));
    }
}
