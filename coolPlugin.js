/**
 * Cool Plugin!
 */
;(function ($, document, window, undefined) {

    // strict mode
    "use strict";

    /**
     * Cache.
     */
    var $window = $(window);

    /**
	 * Cool Plugin object.
     */
    var CoolPlugin = function (form, settings) {

        /**
         * Attributes.
         */
        var api = {};


        /**
        *   Init funciton.
        */
        function __init() {}


        /**
         * API definition.
         */
        //api.run = ;

        // auto-init
        __init();

        // return public functions
        return api;
	};


    /**
     * jQuery function.
     */
    $.fn.coolPlugin = function () {

        // process the plugin settings
        var settings = $.extend(true, {}, $.fn.coolPlugin.defaults, arguments[0]);

        // create an instance for each of the forms
        this.each(function () {
            new CoolPlugin($(this), settings);
        });

	};



    /**
     * Plugin defaults.
     */
    $.fn.coolPlugin.defaults = {

        /**
         * Data attributes.
         */
        attributes: {

        },

        /**
         * Callbacks.
         */
        callbacks: {

        },

        /**
         * CSS classes.
         */
        classes: {
        	error: "error"
        }
    };

})(jQuery, document, window);