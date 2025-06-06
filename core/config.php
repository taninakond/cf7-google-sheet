<?php
defined('ABSPATH') || exit;

if (!defined('BDPCGS_DIR')) {
    define('BDPCGS_DIR', plugin_dir_path(BDPCGS_FILE));
}

if (!defined('BDPCGS_URL')) {
    define('BDPCGS_URL', plugin_dir_url(BDPCGS_FILE));
}

if (!defined('BDPCGS_INCLUDES')) {
    define('BDPCGS_INCLUDES', BDPCGS_DIR . 'includes');
}

if (!defined('BDPCGS_ASSETS')) {
    define('BDPCGS_ASSETS', BDPCGS_URL . 'assets');
}

if (!defined('BDPCGS_MODELS')) {
    define('BDPCGS_MODELS', BDPCGS_DIR . 'models');
}

if (!defined('BDPCGS_VENDORS')) {
    define('BDPCGS_VENDORS', BDPCGS_DIR . 'vendors');
}

if (!defined('BDPCGS_UTILS')) {
    define('BDPCGS_UTILS', BDPCGS_DIR . 'utils');
}

if (!defined('BDPCGS_VERSION')) {
    define('BDPCGS_VERSION', '1.0.0');
}

if (!defined('BDPCGS_TEXTDOMAIN')) {
    define('BDPCGS_TEXTDOMAIN', 'cf7-google-sheet');
}

if (!defined('BDPCGS_NAME')) {
    define('BDPCGS_NAME', 'CF7 For Google Sheet');
}

if (!defined('BDPCGS_DESCRIPTION')) {
    define('BDPCGS_DESCRIPTION', 'Contact form 7 for Google Sheet, easy to connect Google Sheet with Contact Form 7 submit data');
}

if (!defined('BDPCGS_AUTHOR')) {
    define('BDPCGS_AUTHOR', 'bdplugins');
}

if (!defined('BDPCGS_AUTHOR_URL')) {
    define('BDPCGS_AUTHOR_URL', 'https://bdplugins.com');
}

if (!defined('BDPCGS_GITHUB_URL')) {
    define('BDPCGS_GITHUB_URL', 'https://github.com/bdplugins/cf7-google-sheet');
}

if (!defined('BDPCGS_SUPPORT_URL')) {
    define('BDPCGS_SUPPORT_URL', 'https://bdplugins.com/support');
}

if (!defined('BDPCGS_DOCUMENTATION_URL')) {
    define('BDPCGS_DOCUMENTATION_URL', 'https://bdplugins.com/docs/cf7-google-sheet');
}