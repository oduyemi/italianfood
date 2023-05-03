<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'italian' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' |Q<)9{^I2YxcGFWdc)]sys![&Jz^y9HZN[9yFHpXt7t=lRrZFw(|_d0YSFu@:LJ' );
define( 'SECURE_AUTH_KEY',  'B*rO*jN.P5pR/ySbeZ{=_[>sDkWyL#%-A-KBW*HP{{p47nctXOK*d&p^C4xl.EM+' );
define( 'LOGGED_IN_KEY',    ' tu{Ljm]TW2s9_{Z&Vh?!*__8bK]ghl/V.rh8<=m>6c#UTx4-6Sz]w_%Z]h(F^Bs' );
define( 'NONCE_KEY',        'jFNwDP)m;SqN4h,NchVK%GWxi0xGU1I>)Y)YB]oO_MQg>F]T9`iw}EP_7@HR_&uf' );
define( 'AUTH_SALT',        '!;&Yiftmsw{5S>Mh7Zt15,Lw{lL}&xO0sfOp*K/v1!OzjavKIck~1maOb,u=0_#B' );
define( 'SECURE_AUTH_SALT', 'Jd{nrGs*bJ:XOK|*vb2Bo5,0 1*J0EY`thjkaPgN!BXLzE@-@,_+7dKGx3<sG|P?' );
define( 'LOGGED_IN_SALT',   'Q0zv:7!wZa`8OU(!h.yVRF]2cYSeCT>]4vAu8+(Wqx_FYNG8!H%712|[E.!gjN?-' );
define( 'NONCE_SALT',       ';8@aoO6Ck+McxxA#}`<>AfOW/9:CM@@[jzU)FiyB_#q8Pk]7mh|[-j0REN6D~HtH' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
