window.onload = () => {

    let latitude = Number($('#longitude').val());
    let longitude = Number($('#latitude').val());
    
    let barMarker = {
        lat: latitude, 
        lng: longitude
    };

    const map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: barMarker
        });
    
    const marker = new google.maps.Marker({position: barMarker, map: map});


    const input = document.getElementById("address-input");

    const autocomplete = new google.maps.places.Autocomplete(
      input
    );

    autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

    autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17); 
        }

        const latitude = document.getElementById("latitude").value = map.getCenter().lat();
        const longitude = document.getElementById("longitude").value = map.getCenter().lng();

        const myLatlng = new google.maps.LatLng(Number(latitude),Number(longitude));

        const marker = new google.maps.Marker({position: myLatlng});
        marker.setMap(map);
      });



 }


// window.onload = () => {
//     let latitude = Number($('#latitude').val());
//     let longitude = Number($('#longitude').val());

//     let bar = {
//         lat: latitude, 
//         lng: longitude
//     };

//     const map = new google.maps.Map(
//         document.getElementById('map'), {
//             zoom: 15,
//             center: bar
//         });
    
//     const marker = new google.maps.Marker({position: bar, map: map});
// }