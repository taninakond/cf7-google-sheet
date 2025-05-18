<?php
namespace BDPlugins\CF7GoogleSheet;

defined('ABSPATH') || exit;

class Activation {
    public static function active() {
        flush_rewrite_rules();
    }
}