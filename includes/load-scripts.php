<?php
/**
 * This file loads all needed files.
 *
 * @package K5HH's Antenna Calculator
 * @since 1.1.0
 */

//// Check if widget is active
//function k5hh_ac_detect_widget() {
//    return is_active_widget( false, false, 'lidd_mc_widget', true );
//}

function khrc_add_plugin_scripts() {

    // Register and Enqueue a Stylesheet
    // get_template_directory_uri will look up parent theme location
    wp_register_style( 'k5hh_ac_style', K5HH_AC_URL . 'css/antenna-calculator.css', '', K5HH_AC_VERSION, 'all');
    wp_enqueue_style( 'k5hh_ac_style' );

    // Register and Enqueue a Script
    // get_stylesheet_directory_uri will look up child theme location
    wp_register_script( 'k5hh_ac_script', K5HH_AC_URL . 'js/antenna-calculation-min.js', 'jquery', K5HH_AC_VERSION, true);
    wp_enqueue_script( 'k5hh_ac_script' );

}
add_action( 'wp_enqueue_scripts', 'khrc_add_plugin_scripts' );
