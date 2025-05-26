<?php
namespace BDPlugins\CF7GoogleSheet;

defined('ABSPATH') || exit;

class RestAPI
{

    public static function registerRoutes()
    {
        register_rest_route('bdpcgs/v1', '/settings/', [
            'methods' => 'GET',
            'callback' => [__CLASS__, 'getSettings'],
            'permission_callback' => [__CLASS__, 'check_permission']
        ]);
    }
}