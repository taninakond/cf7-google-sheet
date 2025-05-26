<?php
namespace BDPlugins\CF7GoogleSheet\Abstracts;

/**
 * Class Routes
*/
abstract class Routes {
    
    /**
     * Register the API routes
     * 
     * @since 1.0.0
     * 
     * @return void
    */
    public function __construct()
    {
        add_action('rest_api_init', array($this, 'register_routes'));
    }

    /**
     * Register routes
     * 
     * @since 1.0.0
     * 
     * @return void
    */
    abstract public function registerRoutes();
}