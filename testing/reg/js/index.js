// Interactive Map
// 09/2015

var selects = true;

$(function(){

  $.getJSON('data/data.json', function(data) {
  // load title
   $('title').html(data.title);
  
  // cities data
    var cityArea = data.cities;
    var otherCities = data.cityAreaData;


// dialog settings
$("#dialog").dialog({
  autoOpen: false,
  resizable: false,
  width: 90+'%',
  height: 800,
  modal: true,
  show: {
    effect: "fade",
    duration: 500
  },
  hide: {
    effect: "fade",
    duration: 500
  },
  close: function(event, ui) {
    selects = !selects;
  }

});

// slider
$( "#slider" ).slider();


// usa
$('#usa').vectorMap({ 
  map: 'us_aea'

});


// map settings
$('#map').vectorMap({
  regionsSelectable: false,
  regionsSelectableOne: false,
  markersSelectableOne: true,
  onMarkerClick: function(e, el, code) {
    // openDialog(el);
   // $('#map').vectorMap('map', 'us_aea');
  },
  onRegionClick: function(e, el, code){
    
  },
  map: 'world_mill_en',
  setFocus: cityArea,  
  zoomOnScrollSpeed: 6,
  zoomStep: 3,
  markerStyle: {
      initial: {
        fill: '#F8E23B',
        stroke: '#383f47'
      }
    },
  markers: cityArea,
  labels: {
        markers: {
          render: function(index){
            return cityArea[index].name;
          }
        }
    },
    series: {
      markers: [{
        attribute: 'image',
        scale: {
          'main': 'images/marker.png'
        },
        values: cityArea.reduce(function(p, c, i){ p[i] = c.status; return p }, {})
      }]
    },
    markerLabelStyle: {
      initial: {
       'font-family': 'Verdana',
       'font-size': '18',
       'font-weight': 'bold',
        cursor: 'default',
        fill: 'black'
       },
     hover: {
       cursor: 'pointer'
       }
    },
    regionStyle: {
      initial: {
        fill: '#6CB737'
      },
      selected: {
        fill: '#F4A582'
      }
    }
});


// open dialog and show data
var openDialog = function(index){
  $("#dialog").dialog("open");
    $("#dialog").dialog("option", "title", cityArea[index].name +' - Books Listing');
    // get html
    var html = '';
    // loop through all the books
    for(var i=0; i<cityArea[index].Books.length; i++){
      // html += '<h3>'+cityArea[el].Books[i].title+'</h3><div><p>'+cityArea[el].Books[i].description+'</p></div>';
      html += '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title"><strong>'+ cityArea[index].Books[i].title +'</strong></h3></div><div class="panel-body"><div class="col-md-3"><img src="'+cityArea[index].Books[i].image+'"class="img-responsive"/></div><div class="col-md-9">'+ cityArea[index].Books[i].description +'</div></div></div>';
    }
    // display inside accordion
    $('#accordion').html(html);
}


// get map
var map = $("#map").vectorMap('get', 'mapObject');

}); // end json 

// size map based on window size
$("svg").width('auto');
$("svg").css('height', $(window).height());



console.log('window height', $(window).height());

});