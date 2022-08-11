// Initialize and add the map
//theZoom=17;


function initMap() {
    // The location of sentinelocation
    const sentinelocation = { lat: -12.1418028, lng: -76.983706 }; 
    // The map, centered at sentinelocation
    const map = new google.maps.Map(
      document.getElementById("map"), 
      {
      zoom: 17,
      center: sentinelocation,
    });

    /*
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: sentinelocation,
    });*/
  
    const SentinelString =
                        '<div id="content">' +                        
                        '<h3>Sentinel</h1>' +
                        '<div id="bodyContent">' +
                        "Local WiFi LAN Server, located somewhere " +
                        "in the WiFi coberture zone, so it can reach within the secure zone all devices and guns wich " +
                        "enters, so, give access to devices, and LOCK the electronic trigger in the gun to save the " +
                        "zone of intentional or accedental shooting events." +
                        "</p>" +
                        '<p>Tanks to <a href="https://sites.google.com/teletrackingsac.net/teletrackingsac">' +
                        "TeleTracking SAC</a> " +
                        "(last visited July 22, 2022).</p>" +
                        "</div>" +
                        "</div>";

    const SecureZoneString =
                        '<div id="content">' +
                        '<div id="zoneNotice">' +
                        "</div>" +
                        '<h1 id="firstHeading" class="firstHeading">Secure Zone</h1>' +
                        '<div id="bodyContent">' +
                        "<p><b>Secure Zone</b>, Local WiFi LAN Server <b>cobertured Secure Zone</b>, centralized by Sentinel " +
                        "Any device or gun which enters this zone, will be marked on map." +
                        "</p>" +
                        '<p>Tanks to <a href="https://sites.google.com/teletrackingsac.net/teletrackingsac">' +
                        "TeleTracking SAC</a> " +
                        "(last visited July 22, 2022).</p>" +
                        "</div>" +
                        "</div>";

    const Sentinelinfowindow = new google.maps.InfoWindow({
      content: SentinelString,
    
    });

    const SecureZoneinfowindow = new google.maps.InfoWindow({
      content: SecureZoneString,
    
    });

    
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: sentinelocation,
      label: "Sentinel 31",
      icon: '',
      map: map,
      icon: new google.maps.MarkerImage('/svg_icons/router-svgrepo-com.svg',
        null, null, null, new google.maps.Size(24,24)),
      draggable: false,
      //title: "Sentinel 1",
    });

    marker.addListener("click", () => {
      Sentinelinfowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
      
    const secureZone = new google.maps.Circle({
        strokeColor: '#00FF00',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#00FF00',
        fillOpacity: 0.15,
        map: map,
        center: new google.maps.LatLng(sentinelocation),
        radius: 200,
    });    

    secureZone.addListener("click", () => {
      SecureZoneinfowindow.open({
        anchor: secureZone,
        map,
        shouldFocus: false,
      });
    });
    

  }

  window.initMap = initMap;