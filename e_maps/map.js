<script>

var map = L.map('map').setView([37.0902, -95.7129], 4);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)


var customLayer = L.geoJSON(null, {
    pointToLayer: function (feature, latlng) {


    var color = 'transparent'
    // if (feature.properties.PrimSource === "natural gas") {
    //   color = 'orange'
    // }
     
    // if (feature.properties.PrimSource === "biomass") {
    //   color = 'fdbf6f'
    // }
       if (feature.properties.PrimSource === "coal") {
          color = 'gray'
       }
    // if (feature.properties.PrimSource === "geothermal") {
    //   color = '#00441b'
    // }
    // if (feature.properties.PrimSource === "hydroelectric") {
    //   color = '1f78b4'
    // }
    // if (feature.properties.PrimSource === "nuclear") {
    //   color = '#e31a1c'
    // }


    return L.circleMarker(latlng, {
      radius: (Math.sqrt(feature.properties.Total_MW))/5,
      fillColor: color,
      color: color,
      weight: 1,
      opacity: 0.5,
      fillOpacity: 0.5
    })
  }
})

data = omnivore.topojson('PowerPlants_US_201710.json', null, customLayer).addTo(map)
console.log(data)

var marker = new L.marker([23.3078, -80.7], { opacity: 0.000 }); 
marker.bindTooltip("There are 400 coal-powered electric plants in the United States. </br> They generated 30 percent of the U.S. electricity last year.", {permanent: true, className: "my-label", offset: [0, 0] });
marker.addTo(map);

</script>