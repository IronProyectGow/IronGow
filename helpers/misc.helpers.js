module.exports = (hbs) => {
  hbs.registerHelper('isArtist', function(array) {
    if(array[0] == array[1]){
      return '<h1>Edit</h1>'
    } else {
      return ''
    }
  });
}