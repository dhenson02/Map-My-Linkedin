/*global define*/

define(function(){
    'use strict';
    var map = new google.maps.Map(document.getElementById('map-location'),
    {
        zoom:3,
        center: new google.maps.LatLng(39.742043, -104.991531)
    });
    var geocoder = new google.maps.Geocoder();



    return {
        map: map,
        geocoder: geocoder
    };
});