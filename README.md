Splitleaf_Squartle
========

jQuery plugin to stylize a grid of image squares, including hover states

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
      listClass: "squartle-list", // CSS class for the list
      itemClass: "squartle-item", // CSS class for the list items
      imageClass: "squartle-image", // CSS class for the item images
      imageHoverClass: "squartle-image-hover", // CSS class for the image hover state
      itemsAcross: '3' // Maximum number of items across; width is automatically set
    }
