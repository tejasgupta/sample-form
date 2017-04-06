// state validation
var states = ["alaska", "alabama", "arkansas", "american samoa", "arizona", "california", "colorado", "connecticut", "columbia", "delaware", "florida", "georgia", "guam", "hawaii", "iowa", "idaho", "illinois", "indiana", "kansas", "kentucky", "louisiana", "massachusetts", "maryland", "maine", "michigan", "minnesota", "missouri", "mississippi", "montana", "north carolina", " north dakota", "nebraska", "new hampshire", "new jersey", "new mexico", "nevada", "new york", "ohio", "oklahoma", "oregon", "pennsylvania", "puerto rico", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "virginia", "virgin islands", "vermont", "washington", "wisconsin", "west virginia", "wyoming"];

window.Parsley.addValidator('state', {
  validateString: function(value) {
    if(jQuery.inArray( value.toLowerCase() , states ) === -1 ) return false
    else return true;
  },
  messages: {
    en: 'enter valid US state'  }
});

// Slider
var slider = new Slider("#ex6");
slider.on("slide", function(sliderValue) {
    document.getElementById("ex6SliderVal").textContent = sliderValue;
});

// On submit
 $('#exampleForm').parsley().on('form:submit', function() {
    $('#onSubmit').modal('show');
    return false; 
  });