/**
 * Splitleaf_Squartle
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the MIT LICENSE
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/MIT
 *
 * @category   Splitleaf
 * @package    Splitleaf_Squartle
 * @copyright  Copyright 2013 Splitleaf, LLC
 * @license    http://opensource.org/licenses/MIT
 * @author     Sean Kennedy <sean@splitleaf.net>
 * @version    1.0.0
 */
;(function ($, window, document, undefined) {
    
    // Defaults
    var pluginName = "squartle";
    // overrideable defaults
    var defaults = {
        containerClass: "squartle-container",
        listClass: "squartle-list",
        itemClass: "squartle-item",
        imageClass: "squartle-image",
        imageHoverClass: "squartle-image-hover",
        itemsAcross: '3'
    };

    // plugin constructor
    function Squartle(element, options) {
        this.element = element;
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Squartle.prototype = {
        init: function() {
            this._setClasses();
            this._setStyles();
            this._setHover();
        },
        
        // set element classes
        _setClasses: function() {
            $(this.element).addClass(this.options.containerClass);
            $('ul', this.element).addClass(this.options.listClass);
            $('li', this.element).addClass(this.options.itemClass);
            $('img', this.element).addClass(this.options.imageClass);
        },

        // set item styles
        _setStyles: function() {
            width = 100/this.options.itemsAcross;
            $(this.element).css('overflow', 'hidden');
            $('ul', this.element).css('overflow', 'hidden');;
            $('li', this.element)
                .css('overflow', 'hidden')
                .css('float', 'left')
                .css('display', 'block')
                .css('position', 'relative')
                .css('width', width+'%');
            $('img', this.element)
                .css('height', 'auto')
                .css('width', 'auto')
                .css('max-width', '100%')
                .css('display', 'block')
                .css('top', '0')
                .css('left', '0');
        },

        // set hover
        _setHover: function() {
            options = this.options;
            $('li', this.element).each(function(){
                links = $('a', this);
                images = $('img', this);
                if (links.length) {
                    links.each(function(){
                        link = $(this);
                        image = $('> img', this);
                        if (image.data('hover')) {
                            hover = $('img')
                                .attr('src', image.data('hover'))
                                .attr('alt', $(this).attr('alt'))
                                .css('position', 'absolute')
                                .css('top', '0')
                                .css('left', '0')
                                .css('z-index', '10')
                                .css('display', 'none')
                                .addClass(options.imageHoverClass);
                            $(link).append(hover);
                            $(link).hover(function(e){
                                e.preventDefault();
                                $('> .'+options.imageHoverClass, this).finish().fadeIn('fast');
                            },
                            function(e){
                                e.preventDefault();
                                $('> .'+options.imageHoverClass, this).finish().fadeOut('fast');
                            });
                        }
                    });
                } else {
                    console.log('No link found!');
                }
            });
        }
    };

    // plugin wrapper
    $.fn[ pluginName ] = function (options) {
        return this.each(function () {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Squartle( this, options ));
            }
        });
    };

})(jQuery, window, document);