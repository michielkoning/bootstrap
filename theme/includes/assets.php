<?php
function theme_style()
{
    // Theme stylesheet.
    $version = wp_get_theme()->get('Version');
    wp_enqueue_style(
        'gradient',
        get_template_directory_uri() . '/scripts/main.css',
        false,
        $version
    );
}

add_action('wp_enqueue_scripts', 'theme_style');

function add_scripts()
{
    $version = wp_get_theme()->get('Version');

    wp_enqueue_script(
        'functions',
        get_template_directory_uri() . '/scripts/main.js',
        null,
        $version
    );
}

add_action('wp_enqueue_scripts', 'add_scripts');
