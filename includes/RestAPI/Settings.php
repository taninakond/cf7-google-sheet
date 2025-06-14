<?php

namespace BDPlugins\CF7GoogleSheet\RestAPI;

defined("ABSPATH") || exit;

class Settings
{
    public const OPTION_KEY = "cf7_google_sheet";

    public static function get($request)
    {
        $key = sanitize_key(wp_unslash($request->get_param("key")));
        $default = sanitize_text_field(wp_unslash($request->get_param("default")));

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
        $validations = bdpcgs_get_settings_validation_keys();
        $clean_data = [];

        foreach ($validations as $key => $rule) {
            if ($request->has_param($key)) {
                $raw_value = wp_unslash($request->get_param($key));

                if (is_array($rule)) {
                    if ($rule['type'] === 'array' && isset($rule['items'])) {
                        $clean_data[$key] = [];

                        if (is_array($raw_value)) {
                            foreach ($raw_value as $item_key => $item_value) {
                                $clean_data[$key][$item_key] = self::sanitize_value_by_type($item_value, $rule['items']);
                            }
                        }
                    }
                } else {
                    $clean_data[$key] = self::sanitize_value_by_type($raw_value, $rule);
                }
            }
        }

        $settings = get_option(self::OPTION_KEY, []);
        $data = wp_parse_args($clean_data, $settings);

        update_option(self::OPTION_KEY, $data);
        return rest_ensure_response([
            'success' => true,
            'data' => $data,
        ]);
    }

    private static function sanitize_value_by_type($value, $type)
    {
        switch ($type) {
            case 'text':
                return sanitize_text_field($value);

            case 'int':
                return absint($value);

            case 'bool':
                return (bool) $value;

            case 'key':
                return sanitize_key($value);

            case 'array':
                if (!is_array($value)) {
                    return [];
                }
                return array_map('sanitize_text_field', $value);

            default:
                return sanitize_text_field($value);
        }
    }
}
