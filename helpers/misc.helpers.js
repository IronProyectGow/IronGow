module.exports = (hbs) => {
  hbs.registerHelper('isArtist', function(array, options) {
    
    if(array[0] == array[1]){
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
	
  hbs.registerHelper('isBar', function(array, options) {
    
    if(array[0] == array[1]){
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  hbs.registerHelper('isOwner', function(array, options) {
    
    if(array[0] == array[1]){
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
}