<?php

namespace BDPlugins\CF7GoogleSheet\RestAPI;

defined("ABSPATH") || exit;

class Settings
{
    public const OPTION_KEY = "cf7_google_sheet";

    public static function get($request)
    {
        $key = $request->get_param("key");
        $default = $request->get_param("default");

        $settings = get_option(self::OPTION_KEY, []);

        if (empty($key)) {
            return rest_ensure_response([
                'success' => true,
                'data' => $settings,
            ]);
        }

        if (empty($settings[$key])) {
            return rest_ensure_response([
                'success' => true,
                'data' => $default,
            ]);
        }

        return rest_ensure_response([
            'success' => true,
            'data' => $settings[$key] ?? $default
        ]);
    }

    public static function update($request)
    {
        $settings = get_option(self::OPTION_KEY, []);
        $data = wp_parse_args($request->get_params(), $settings);

        update_option(self::OPTION_KEY, $data);
        return rest_ensure_response([
            'success' => true,
            'data' => $data,
        ]);
    }

}
