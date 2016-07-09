$(document).ready(function() {
  $('#ms').newClock();
  $('#noMs').newClock({
    ms:false
    //default is classic
  });
  $('#hexClock').newClock({
    type: 'hex' //hex does not support ms!
    //default ms are false!
  })
});
