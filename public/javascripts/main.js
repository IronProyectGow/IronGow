// window.onload = () => {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 40.43, lng: -3.69},
//         zoom: 13
//     });

//     var input = document.getElementById('pac-input');
//     map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

//     var autocomplete = new google.maps.places.Autocomplete(input);

//     autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

    // autocomplete.addListener('place_changed', function() {
    //     infowindow.close();
    //     marker.setVisible(false);
    //     var place = autocomplete.getPlace();
    //     if (!place.geometry) {
    //       // User entered the name of a Place that was not suggested and
    //       // pressed the Enter key, or the Place Details request failed.
    //       window.alert("No details available for input: '" + place.name + "'");
    //       return;
    //     }
    
    //     // If the place has a geometry, then present it on a map.
    //     if (place.geometry.viewport) {
    //       map.fitBounds(place.geometry.viewport);
    //     } else {
    //       map.setCenter(place.geometry.location);
    //       map.setZoom(17);  // Why 17? Because it looks good.
    //     }
    //     marker.setPosition(place.geometry.location);
    //     marker.setVisible(true);
    
    //     var address = '';
    //     if (place.address_components) {
    //       address = [
    //         (place.address_components[0] && place.address_components[0].short_name || ''),
    //         (place.address_components[1] && place.address_components[1].short_name || ''),
    //         (place.address_components[2] && place.address_components[2].short_name || '')
    //       ].join(' ');
    //     }
    
    //     infowindowContent.children['place-icon'].src = place.icon;
    //     infowindowContent.children['place-name'].textContent = place.name;
    //     infowindowContent.children['place-address'].textContent = address;
    //     infowindow.open(map, marker);
    //   });
//}


window.onload = () => {
    let latitude = Number($('#latitude').val());
    let longitude = Number($('#longitude').val());

    let bar = {
        lat: latitude, 
        lng: longitude
    };

    const map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: bar
        });
    
    const marker = new google.maps.Marker({position: bar, map: map});
}


