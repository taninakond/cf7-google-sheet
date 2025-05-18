<?php

namespace BDPlugins\CF7GoogleSheet\Utils;

defined('ABSPATH') || exit('No direct script access allowed');

trait Singleton
{
    protected static $instance = null;

    /**
     * Private constructor to prevent direct instantiation.
     */
    public function __construct($args = null)
    {
        // Prevent instantiation.
    }

    /**
     * Returns an instance of the class. If the class has not yet been instantiated, it will be instantiated first.
     *
     * @param mixed $args The arguments to pass to the constructor, if any.
     * @param string $argsName The name of the argument to check for when determining if a new instance should be created. Defaults to 'accountId'.
     *
     * @return static
     */
    final public static function getInstance($args = null, $argsName = 'accountId')
    {
        $isExistsProperty = property_exists(static::class, $argsName);

        if (null === static::$instance || ($isExistsProperty && static::$instance->{$argsName} != $args)) {
            static::$instance = new static($args);
            if (method_exists(static::$instance, 'doHooks')) {
                static::$instance->doHooks();
            }
        }

        return static::$instance;
    }
}