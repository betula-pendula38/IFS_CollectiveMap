
const map = L.map('map', {
    crs: L.CRS.Simple
});

/* create large map background image, first coordinate [0,0] is origin, second coordinate is image resolution in px[   ,   ]*/
const bounds = [[0, 0], [595, 842]];
const image = L.imageOverlay('website_mockup.png', bounds).addTo(map);

/* create smaller image in a boundingbox defined by two points in our 100x100px grid*/
const bounds2 = [[100,100], [200, 200]];
const image2 = L.imageOverlay('website_mockup.png', bounds2).addTo(map);


map.fitBounds(bounds);
map.setMinZoom(1)

var hash = new L.Hash(map);


/* SCALE "BAR": create interactive element printing the zoomlevel*/
map.on('zoomend', function (e){


        console.log(e);
        
        /* read out zoomlevel into a variable we cann access*/
        const z = e.target._zoom;


        /* if statement*/
        if(z>2){

            /* use cosole log for troubleshooting, print out values onm the website*/
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