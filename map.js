
const map = L.map('map', {
    crs: L.CRS.Simple
});

const bounds = [[0, 0], [595, 842]];
const image = L.imageOverlay('website_mockup.png', bounds).addTo(map);

map.fitBounds(bounds);
map.setMinZoom(1)

var hash = new L.Hash(map);

map.on('zoomend', function (e){
        console.log(e);
        const z = e.target._zoom;


        /* if statement*/
        if(z>2){

            /* use cosole log for troubleshooting, reading out values onm the website*/
            console.log();

            /* document(read this html document). query selector(read out this variable) innerHTML(change the value in the html div*/
            document.querySelector("#scale_10").innerHTML = z;
        


        }

});


/* create popup*/
var popup = L.popup();

function onMapClick(e) {
    popup
        /* read latitude + longitude coordinates*/
        .setLatLng(e.latlng)
        /* write coordinates into popup*/
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);