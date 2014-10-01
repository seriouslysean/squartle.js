# Squartle.js

### jQuery plugin to create a grid of fully responsive squares including hover states with an optional banner

Demonstrations available at the [official Squartle.js project page](http://splitleaf.github.io/squartle.js/).

### Installation

Include jquery.squartle.min.js *after* you load the jQuery library:

    <script src="/path/to/jquery.js"></script>
    <script src="/path/to/jquery.squartle.min.js"></script>

### Markup

Add as many list items as you need for your content.

    <div class="squartle">
      <ul>
          <li>
              <!-- Square -->
              <a href="http://www.splitleaf.net" title="Splitleaf, LLC">
                <img src="path/to/image/" alt="1" data-hover="path/to/image/hover/">
              </a>
              <!-- Hero -->
              <div>
                <img src="path/to/image/">
              </div>
          </li>
      </ul>
    </div>

### Usage (Default)

    $('.squartle').squartle();

### Usage (Custom Options)

    $('.squartle').squartle({
      itemsAcross: '6'
    });

### Options

    {
      // container
      containerClass: "squartle-container", // CSS class for the container
      containerMaxWidth: '100%', // Adds a max with for the container
      containerMinWidth: '0', // Adds a min width for the container
      // heroes
      heroEnable: true, // Whether or not hero banners will be enabled
      heroContainerClass: "squartle-heroes", // CSS class for the hero container
      heroClass: "squartle-hero", // CSS class for the heroes
      heroDefault: 0, // Which hero to show first
      videoClass: "squartle-video", // CSS class for the hero video
      videoContainerClass: "squartle-videos", // CSS class for the hero video container
      videoCustomSelector: false // Custom jquery selector for targeting different video providers (e.g. "iframe[src*='youtube.com']")
      // list
      listClass: "squartle-items", // CSS class for the list
      // items
      itemsAcross: 3, // Maximum number of items across; item width is automatically set to a percentage (100/itemsAcross)
      itemClass: "squartle-item", // CSS class for the list items
      // links
      linkClass: "squartle-link", // CSS class for the link
      // images
      imageClass: "squartle-image", // CSS class for the item images
      imageHoverClass: "squartle-image-hover", // CSS class for the image hover state
      // events
      beforeInit: function(){}, // Fires before the plugin initializes
      onLinkClick: function(){}, // Fires after a link is clicked initializes
      afterInit: function(){} // Fires after the plugin initializes
    }

### Planned
* Adding additional event hooks for various actions (
* Adding/Improving support for elements other than images in the squares/heroes
