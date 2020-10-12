<?php


/* Adding CSS & JS */
function fgsp_custom_theme() {
    wp_register_style( 'custom_css', get_template_directory_uri() . '/assets/css/style.css', false, '1.0.0' );
    wp_enqueue_style( 'custom_css' );
    wp_enqueue_script( 'main-scripts',  get_template_directory_uri() . '/assets/js/fgsp.js', array(), '1.0.0', true);
}
add_action( 'wp_enqueue_scripts', 'fgsp_custom_theme');

function fgsp_init() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('html5',
    array('comment-list', 'comment-form', 'search-form')
);

}
add_action('after_setup_theme', 'fgsp_init');


?>