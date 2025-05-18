<?php

namespace BDPlugins\CF7GoogleSheet\Utils;

if (!defined('ABSPATH')) exit;

class Autoload
{
    public static function register()
    {
        spl_autoload_register([self::class, 'bdpcgsPhpClientAutoload']);
    }

    /**
     * Autoload function for classes in the CodeConfig\SGD namespace.
     *
     * @param string $className Fully qualified class name.
     */
    public static function bdpcgsPhpClientAutoload($className)
    {
        $namespace = 'BDPlugins\\CF7GoogleSheet\\';

        // Ensure the class belongs to the correct namespace.
        if (strncmp($namespace, $className, strlen($namespace)) !== 0) {
            return;
        }

        // Get namespace mappings.
        $allFiles = self::getAutoloadPath();

        foreach ($allFiles as $prefix => $directories) {
            if (strncmp($prefix, $className, strlen($prefix)) === 0) {
                // Remove the prefix from the class name and construct the file path.
                $relativeClass = str_replace($prefix, '', $className);
                $filePath = str_replace('\\', DIRECTORY_SEPARATOR, $relativeClass) . '.php';

                foreach ($directories as $directory) {
                    $fullPath = rtrim($directory, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $filePath;
                    if (file_exists($fullPath)) {
                        require_once $fullPath;
                        return;
                    }
                }
            }
        }
    }

    /**
     * Maps namespace prefixes to directory paths.
     *
     * @return array
     */
    public static function getAutoloadPath()
    {
        return [
            'BDPlugins\\CF7GoogleSheet\\' => [BDPCGS_INCLUDES],
            'BDPlugins\\CF7GoogleSheet\\Models' => [BDPCGS_MODELS],
            'BDPlugins\\CF7GoogleSheet\\Utils' => [BDPCGS_UTILS],
            'BDPlugins\\CF7GoogleSheet\\Google' => [BDPCGS_VENDORS . '/Google']
        ];
    }
}