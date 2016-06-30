$( document ).ready(function() {
});     

        function initMap() {
          var mapDiv = document.getElementById('map');
          var map = new google.maps.Map(mapDiv, {
              center: {lat: 39.4403, lng: -84.9997},
              zoom: 8
          });
        }   