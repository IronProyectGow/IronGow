module.exports = (hbs) => {
    hbs.registerHelper('isSelf', function(array, options) {
      if(array[0] == array[1]){
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    })
}              