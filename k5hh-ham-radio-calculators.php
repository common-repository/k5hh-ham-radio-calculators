<?php
/**
 * Plugin Name: K5HH Ham Radio Calculators
 * Plugin URI: http://k5hh.com/k5hh-amateur-radio-calculators/
 * Description: This plugin calculates the length of halfwave dipoles.
 * Version: 1.1.0
 * Author: JD Toony
 * Author URI: http://k5hh.com/
 * License: GPL2
 **/

// Make sure the plugin is accessed through the appropriate channels
defined('ABSPATH') || die;

defined( 'KHRC_PLUGIN_PATH_ROOT' ) or define( 'KHRC_PLUGIN_PATH_ROOT', plugin_dir_path( __FILE__ ) );

defined( 'K5HH_AC_URL' ) or define( 'K5HH_AC_URL', plugin_dir_url( __FILE__ ) );
defined( 'K5HH_AC_VERSION' ) || define( 'K5HH_AC_VERSION', '1.1.0' );

include ( KHRC_PLUGIN_PATH_ROOT . 'includes/form.php' );
include ( KHRC_PLUGIN_PATH_ROOT . 'includes/load-scripts.php' );

/* Stop Adding Functions Below this Line */
