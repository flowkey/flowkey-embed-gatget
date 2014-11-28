(function() {
  var player = new VersalPlayerAPI();

  var freeSongs = [
      // live server
      "xDkvdP5Cdw8ogh8Y5", // Easy Can can
      "4EmWxxNgaBRBdXgA6", // Au Claire de la lune
      "uRf29A9LSupgAJvYB", // twinkle twinkle
      "TuqCfNWCca8AFtu2A", // Mary had a little lamp
  ];

  player.addEventListener('attributesChanged', function(attributes) {
    // var embedCodeMatches = (attributes.embedCode || '').match(/educreations.com\/lesson\/embed\/([0-9]+)\//);
    // console.log('https://www.educreations.com/lesson/embed/' + embedCodeMatches[1]);
    // if(embedCodeMatches) {
      var url = attributes.embedCode;
      var avaliable = false;
      // check if provided url is one of the free Songs
      jQuery.each(freeSongs, function(index,value){
        if( url.indexOf(value) > -1){
          avaliable = true;
        }
      })

      if(url && avaliable){
              $('body').html('<iframe width="480" height="210" src="'+url+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>');
      }else{
        $('body').html('<div class="gadget-embed-not-valid">There is no URL or the selected song is not one of the free songs!</div>');
      }

  });

  player.setPropertySheetAttributes({
    embedCode: {
      type: 'TextArea',
      title: 'Embed Code'
    }
  });
  player.startListening();
  player.watchBodyHeight();
})();
