module.exports = (hbs) => {

  hbs.registerHelper('selectedHelper', function(option, value){
    if (option == value) {
        return ' selected';
    } else {
        return ''
    }
  });
}

    hbs.registerHelper('isSelf', function(array, options) {
      if(array[0] == array[1]){
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    })
}              

