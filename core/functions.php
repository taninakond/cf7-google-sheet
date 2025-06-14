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
