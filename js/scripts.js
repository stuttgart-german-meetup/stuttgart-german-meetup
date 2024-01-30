jQuery(document).ready(function () {
  jQuery("#nanogallery2").nanogallery2({
    // ### gallery settings ###
    thumbnailHeight: 250,
    thumbnailWidth: 250,
    itemsBaseURL: "img/gallery/",

    // ### gallery content ###
    items: [
      { src: "IMG_2146.JPG", srct: "IMG_2146.JPG" },
      { src: "IMG_2147.JPG", srct: "IMG_2147.JPG" },
      { src: "IMG_2155.JPG", srct: "IMG_2155.JPG" },
      { src: "IMG_2168.JPG", srct: "IMG_2168.JPG" },
      { src: "IMG_8221_md.jpg", srct: "IMG_8221_md.jpg" },
      { src: "IMG_8225_md.jpg", srct: "IMG_8225_md.jpg" },
      { src: "IMG_8226.jpg", srct: "IMG_8226.jpg" },
      { src: "IMG_8227.jpeg", srct: "IMG_8227.jpeg" },
    ],
    // GALLERY AND THUMBNAIL LAYOUT
    galleryMosaic: [
      // default layout
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 4, r: 1 },
      { w: 2, h: 1, c: 5, r: 1 },
      { w: 2, h: 2, c: 5, r: 2 },
      { w: 1, h: 1, c: 4, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 2, h: 1, c: 3, r: 4 },
      { w: 1, h: 1, c: 5, r: 4 },
      { w: 1, h: 1, c: 6, r: 4 },
    ],

    // GALLERY THEME
    galleryTheme: {
      thumbnail: { background: "#ff0000" },
    },
  });

  /*
    jQuery("#nanogallery").nanogallery2({
        
      // CONTENT SOURCE
      // The optional add-on nanoPhotosProvider is used for this example - this is not mandatory and can easily be replaced by a list of medias

      itemsBaseURL:     'img/gallery/',
      
      // ### gallery content ### 
      items: [
          { src: 'IMG_2146.JPG', srct: 'IMG_2146.JPG', title: 'Berlin 1' },
          { src: 'IMG_2147.JPG', srct: 'IMG_2147.JPG', title: 'Berlin 2' },
          { src: 'IMG_2155.JPG', srct: 'IMG_2155.JPG', title: 'Berlin 3' },
          { src: 'IMG_2168.JPG', srct: 'IMG_2168.JPG', title: 'Berlin 4' }
        ],
     
      // GALLERY AND THUMBNAIL LAYOUT
      galleryMosaic : [                       // default layout
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 4, r: 1 },
        { w: 2, h: 1, c: 5, r: 1 },
        { w: 2, h: 2, c: 5, r: 2 },
        { w: 1, h: 1, c: 4, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 2, h: 1, c: 3, r: 4 },
        { w: 1, h: 1, c: 5, r: 4 },
        { w: 1, h: 1, c: 6, r: 4 }
      ],
      galleryMosaicXS : [                     // layout for XS width
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 1, h: 1, c: 3, r: 4 }
      ],
      galleryMosaicSM : [                     // layout for SM width
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 1, h: 1, c: 3, r: 4 }
      ],
      galleryMaxRows: 1,
      galleryDisplayMode: 'rows',
      gallerySorting: 'random',
      thumbnailDisplayOrder: 'random',

      thumbnailHeight: '180', thumbnailWidth: '220',
      thumbnailAlignment: 'scaled',
      thumbnailGutterWidth: 0, thumbnailGutterHeight: 0,
      thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,

      thumbnailToolbarImage: null,
      thumbnailToolbarAlbum: null,
      thumbnailLabel: { display: false },

      // DISPLAY ANIMATION
      // for gallery
      galleryDisplayTransitionDuration: 1500,
      // for thumbnails
      thumbnailDisplayTransition: 'imageSlideUp',
      thumbnailDisplayTransitionDuration: 1200,
      thumbnailDisplayTransitionEasing: 'easeInOutQuint',
      thumbnailDisplayInterval: 60,

      // THUMBNAIL HOVER ANIMATION
      thumbnailBuildInit2: 'image_scale_1.15',
      thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
      touchAnimation: true,
      touchAutoOpenDelay: 500,

      // LIGHTBOX
      viewerToolbar: { display: false },
      viewerTools:    {
        topLeft:   'label',
        topRight:  'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton'
      },

      // GALLERY THEME
      galleryTheme : { 
        thumbnail: { background: '#111' },
      },
      
      // DEEP LINKING
      locationHash: true
    });
    */

  const map = L.map("locations__map").setView([51.505, -0.09], 13);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([51.5, -0.09])
    .addTo(map)
    .bindPopup("<b>Hello world!</b><br />I am a popup.")
    .openPopup();

  const circle = L.circle([51.508, -0.11], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 500,
  })
    .addTo(map)
    .bindPopup("I am a circle.");

  const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
  ])
    .addTo(map)
    .bindPopup("I am a polygon.");

  const popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent(`You clicked the map at ${e.latlng.toString()}`)
      .openOn(map);
  }

  map.on("click", onMapClick);
});
