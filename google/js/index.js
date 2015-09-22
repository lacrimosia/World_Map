// Interactive Google Map
// 09/2015

var map;

// function initMap() {
    var myLatlng = {
        lat: -25.363,
        lng: 131.044
    };
    var centerZone = {
        lat: 0,
        lng: 0
    };

  // map settings 
    map = new google.maps.Map(document.getElementById('map'), {
        center: centerZone,
        zoom: 3,
        minZoom: 3,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        animation: google.maps.Animation.DROP
    });


// add dynamic location markers
$.getJSON('data/data.json').done(function(data){
    $.each(data.Locations, function(i, value) {
        var instructions = data.instructions;
        var titleName = data.titles;
        var areaName = value.name;
        var currentIndex = i;
        var html = "";
        var printed = false;
        
        $('.className').text(titleName);
        $('.instructions').text(instructions);
        
        var myLatlng = new google.maps.LatLng(value.lat, value.lon);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: areaName,
            label: areaName
        });

        marker.addListener('click', function() {
            map.setZoom(6);
            map.setCenter(marker.getPosition());
            addInfo(marker, areaName);
            $('.BookTitle').html('<i class="fa fa-thumb-tack "></i> '+areaName);
            printed = true;

            function addInfo(marker, theName) {
                var infowindow = new google.maps.InfoWindow({
                    content: theName
                });

                marker.addListener('click', function() {
                    infowindow.open(marker.get('map'), marker);
                });

            }

         
        // show books and description

        $.each(data.Locations[currentIndex].Books, function(x, value){
                html += '<div class="panel panel-default"><div class="panel-heading" role="tab" id="heading'+x+'"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+x+'" aria-expanded="false" aria-controls="collapse'+x+'">'+value.name+'</a> <i class="fa fa-chevron-right pull-right"></i></h4></div><div id="collapse'+x+'" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading'+x+'"><div class="panel-body"><div class="col-md-2"><img src="images/'+value.image+'" class="img-responsive" /></div><div class="col-md-10">'+value.description+'</div></div></div></div></div>';
                $('#accordion').html(html);      
        });
           
        }); 


        

    });
}); // end loop 

    //  google.maps.event.addDomListener(window, 'load', initMap);
//}