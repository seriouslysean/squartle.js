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
        heroContainerClass: "squartle-heroes",
        heroEnable: true,
        heroClass: "squartle-hero",
        heroDefault: 0,
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
            this._setClasses(this.element, this.options);
            this._setStyles(this.element, this.options);
            this._setHover(this.element, this.options);
            if (this.options.heroEnable)
                this._setHero(this.element, this.options);
        },
        
        // set element classes
        _setClasses: function(element, options) {
            $(element).addClass(options.containerClass);
            $('> ul', element).addClass(options.listClass);
            $('> ul > li', element).addClass(options.itemClass);
            $('> ul > li div', element).addClass(options.heroClass);
            $('> ul > li img', element).addClass(options.imageClass);
        },

        // set item styles
        _setStyles: function(element, options) {
            width = 100/options.itemsAcross;
            $(element).css('overflow', 'hidden');
            $('> ul', element).css('overflow', 'hidden');
            $('> ul > li', element)
                .css('overflow', 'hidden')
                .css('float', 'left')
                .css('display', 'block')
                .css('position', 'relative')
                .css('width', width+'%');
            $('> ul > li > div', element)
                .css('overflow', 'hidden')
                .css('position', 'relative')
                .css('height', 'auto')
                .css('width', '100%');
            console.log($('> ul > li > div', element).children('*'));
            $('> ul > li > div', element).children('*')
                .css('width', '100%')
                .css('max-width', '100%');
            $('> ul > li img', element)
                .css('height', 'auto')
                .css('width', 'auto')
                .css('max-width', '100%')
                .css('display', 'block')
                .css('top', '0')
                .css('left', '0');
        },

        // set hover
        _setHover: function(element, options) {
            $('li', element).each(function(){
                links = $('a', this);
                images = $('img', this);
                if (links.length) {
                    links.each(function(){
                        link = $(this);
                        image = $('> img', link);
                        if (image.data('hover')) {
                            hover = $('<img>')
                                .attr('src', image.data('hover'))
                                .attr('alt', image.attr('alt'))
                                .css('height', 'auto')
                                .css('width', 'auto')
                                .css('max-width', '100%')
                                .css('position', 'absolute')
                                .css('top', '0')
                                .css('left', '0')
                                .css('z-index', '10')
                                .css('display', 'none')
                                .addClass(options.imageHoverClass);
                            $(link).append(hover);
                            $(link).hover(function(e){
                                e.preventDefault();
                                if (!$(this).hasClass('active'))
                                    $('> .'+options.imageHoverClass, this).finish().fadeIn('fast');
                            },
                            function(e){
                                e.preventDefault();
                                if (!$(this).hasClass('active'))
                                    $('> .'+options.imageHoverClass, this).finish().fadeOut('fast');
                            });
                            $(link).click(function(e){
                                e.preventDefault();
                                // hide others
                                notActive = $('> a', $(this).parent().siblings().not($(this).parent()));
                                notActive.removeClass('active');
                                $('> .'+options.imageHoverClass, notActive).finish().fadeOut('fast');
                                // activate
                                $(this).addClass('active');
                                $('> .'+options.imageHoverClass, this).finish().fadeIn('fast');
                                // show hero if needed
                                if (options.heroEnable) {
                                    // elements
                                    hero = $('> div > div', element).get($(this).parent().index());
                                    notActive = $('> div > div', element).not(hero);
                                    // bring the active hero to the top
                                    $(hero).css('z-index', '10');
                                    // send the inactive heroes to the back
                                    $(notActive).css('z-index', '0');
                                    // hide and show
                                    $(notActive).finish().slideUp('fast');
                                    $(hero).finish().slideDown('fast');
                                }
                            });
                        }
                    });
                } else {
                    console.log('No link found!');
                }
            });
        },

        // set hero
        _setHero: function(element, options) {
            // create hero container
            if (!$('> .'+options.heroContainerClass, element).length) {
                heroesContainer = $('<div>').addClass(options.heroContainerClass);
                $(element).prepend(heroesContainer);
            }
            // move heroes in to the container
            $('li', element).each(function(){
                heroes = $('> div', this);
                $('> div', element).append(heroes);
            });
            // Activate default hero
            $('a', $('> ul > li', element).get(options.heroDefault)).click();
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