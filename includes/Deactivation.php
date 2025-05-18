<?php

namespace BDPlugins\CF7GoogleSheet;

defined('ABSPATH') || exit;

class Deactivation {
    public static function inactive() {
        flush_rewrite_rules();
    }
}