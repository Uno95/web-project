function initMap(lt, lg,len) {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 10,
    center: {lat: lt, lng: lg}
  });

  for(i=0;i< len;i++){
      console.log("lat: "+ obj[i].admin.lat);
      setMarkers(map,parseFloat(obj[i].admin.lat),parseFloat(obj[i].admin.lng),len);
      //console.log(parseInt(latitude[i]),parseInt(longitude[i]));
  }
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.


function setMarkers(map,lt,lg,len) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(80, 92),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
    for (var i = 0; i < len; i++) {
      var marker = new google.maps.Marker({
        position: {lat: lt, lng: lg},
        map: map,
        icon: image,
        shape: shape,
        title: loc
      });
      console.log(lt,lg);
    }

}
