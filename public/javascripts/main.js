window.onload = () => {
    let latitude = Number($('#latitude').val());
    let longitude = Number($('#longitude').val());

    let bar = {
        lat: latitude, 
        lng: longitude
    };
    console.log(bar);

    const map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: bar
        });
    
    const marker = new google.maps.Marker({position: bar, map: map});
}

