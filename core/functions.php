<?php

defined("ABSPATH") || exit;

if (!function_exists("bdpcgs_get_settings_validation_keys")) {
    function bdpcgs_get_settings_validation_keys()
    {
        if (defined('BDPCGS_SETTINGS_VALIDATION_KEYS')) {
            return BDPCGS_SETTINGS_VALIDATION_KEYS;
        }

        return []; // Or false/null based on your needs
    }
}

if (!function_exists('bdpcgs_get_settings_defaults')) {
    function bdpcgs_get_settings_defaults()
    {
        if (defined('BDPCGS_SETTINGS_DEFAULTS')) {
            return BDPCGS_SETTINGS_DEFAULTS;
        }

        return []; // Or false/null based on your needs
    }
}
