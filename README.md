# Squartle.js

### jQuery plugin to stylize a grid of image squares, including hover states

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
      heroContainerClass: "squartle-heroes", // CSS class for the hero container
      heroEnable: true, // Whether or not hero banners will be enabled
      heroClass: "squartle-hero", // CSS class for the heroes
      heroDefault: 0, // Which hero to show first
      linkClass: "squartle-link", // CSS class for the link
      listClass: "squartle-list", // CSS class for the list
      itemClass: "squartle-item", // CSS class for the list items
      imageClass: "squartle-image", // CSS class for the item images
      imageHoverClass: "squartle-image-hover", // CSS class for the image hover state
      itemsAcross: '3' // Maximum number of items across; width is automatically set
    }
