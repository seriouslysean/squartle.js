# Squartle.js

### jQuery plugin to create a grid of fully responsive squares including hover states with an optional banner

Demonstrations available at the [official Squartle.js project page](http://splitleaf.github.io/Splitleaf_Squartle/).

### Installation

Include jquery.squartle.min.js *after* you load the jQuery library:

    <script src="/path/to/jquery.js"></script>
    <script src="/path/to/jquery.squartle.min.js"></script>

### Usage (Default)

    $('.squartle').squartle();

### Usage (Custom Options)

    $('.squartle').squartle({
      itemsAcross: '6'
    });

### Options

    {
      containerClass: "squartle-container", // CSS class for the container
      heroClass: "squartle-hero", // CSS class for the heroes
      heroContainerClass: "squartle-heroes", // CSS class for the hero container
      heroDefault: 0, // Which hero to show first
      heroEnable: true, // Whether or not hero banners will be enabled
      imageClass: "squartle-image", // CSS class for the item images
      imageHoverClass: "squartle-image-hover", // CSS class for the image hover state
      itemClass: "squartle-item", // CSS class for the list items
      itemsAcross: '3' // Maximum number of items across; width is automatically set
      linkClass: "squartle-link", // CSS class for the link
      listClass: "squartle-list", // CSS class for the list
      videoClass: "squartle-video", // CSS class for the hero video
      videoContainerClass: "squartle-videos", // CSS class for the hero video container
      videoCustomSelector: false // Custom jquery selector for targeting different video providers (e.g. "iframe[src*='youtube.com']")
    }

### Planned

* Adding event hooks for various actions (linkClick, heroComplete, etc)