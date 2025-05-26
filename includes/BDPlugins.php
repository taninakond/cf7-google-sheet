<?php

namespace BDPlugins\CF7GoogleSheet;

use BDPlugins\CF7GoogleSheet\Utils\Singleton;

class BDPlugins
{
    use Singleton;

    public function __construct()
    {
        $this->init();
    }

    private function init() {
        register_activation_hook(BDPCGS_FILE, [Activation::class, 'active']);
        register_activation_hook(BDPCGS_FILE, [Deactivation::class, 'inactive']);

        // Initialize the classes.
        Admin::getInstance();
        Enqueue::getInstance();
    }

    private function doHooks(){
        add_filter('plugin_row_meta', [$this, 'pluginRowMeta'], 10, 2);

        add_filter('plugin_action_links_' . plugin_basename(BDPCGS_FILE), [$this, 'actionLinks']);
        add_action('rest_api_init', [RestAPI::class, 'registerRoutes']);

    }

    public function pluginRowMeta($links, $file)
    {
        if ($file == plugin_basename(BDPCGS_FILE)) {
            $links[] = sprintf('<a target="_blank" href="%s">%s</a>', BDPCGS_DOCUMENTATION_URL, __('Docs & FAQs', 'cf7-google-sheet'));
        }
        return $links;
    }

    public function actionLinks($links)
    {
        $links[] = sprintf('<a target="_blank" href="%s">%s</a>', admin_url('admin.php?page=cf7-google-sheet'), __('Dashboard', 'cf7-google-sheet'));
        return $links;
    }
}