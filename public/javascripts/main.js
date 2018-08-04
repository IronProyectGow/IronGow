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
            zoom: 4,
            center: bar
        });
}

