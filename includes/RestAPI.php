<?php

namespace BDPlugins\CF7GoogleSheet;

use BDPlugins\CF7GoogleSheet\RestAPI\Settings;
use CodeConfig\EAW\Utils\Singleton;

defined('ABSPATH') || exit;

class RestAPI
{
    use Singleton;
    public static function registerRoutes()
    {
        register_rest_route('bdpcgs/v1', '/settings/', [
            [
                'methods' => 'GET',
                'callback' => [Settings::class, 'get'],
                'permission_callback' => [self::class, 'canManageOptions']
            ],
            [
                'methods' => 'POST',
                'callback' => [Settings::class, 'update'],
                'permission_callback' => [self::class, 'canManageOptions'],
                'args' => [
                    'api_key' => [
                        'type' => 'string',
                        'sanitize_callback' => 'sanitize_text_field',
                        'required' => 'false',
                    ],
                    'enabled' => [
                        'type' => 'boolean',
                        'required' => 'false',
                    ]
                ]
            ]
        ]);
    }

    public static function canManageOptions()
    {
        return current_user_can('manage_options');
    }
}
