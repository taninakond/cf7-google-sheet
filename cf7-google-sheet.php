<?php

namespace bdplugins;

use BDPlugins\CF7GoogleSheet\BDPlugins;
use BDPlugins\CF7GoogleSheet\Utils\Autoload;

/**
 * Plugin Name:         CF7 For Google Sheet
 * Description:         Contact form 7 for Google Sheet, easy to connect Google Sheet with Contact Form 7 submit data
 * Version:             1.0.0
 * Requires at least:   5.2
 * Requires PHP:        7.4
 * Author:              bdplugins
 * License:             GPL v2 or later
 * License URI:         https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:         cf7-google-sheet
 * Domain Path:         /languages/
**/

if (!defined('ABSPATH')) {
    exit;
}

if (! function_exists('bdpcgs')) {
    function bdpcgs()
    {

        if (!defined('BDPCGS_FILE')) {
            define('BDPCGS_FILE', __FILE__);
        }

        // Include plugin config file;
        require_once plugin_dir_path(BDPCGS_FILE) . 'core/config.php';

        $includeFiles = [
            'Autoload' => BDPCGS_UTILS,
        ];

        foreach ($includeFiles as $fileName => $filePath) {
            $includeFile = "$filePath/$fileName.php";
            if (file_exists($includeFile)) {
                require_once $includeFile;
            }
        }

        Autoload::register();
        BDPlugins::getInstance();

        do_action('bdpcgs_loaded');
    }
}

bdpcgs();
