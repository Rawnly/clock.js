$(document).ready(function() {
  var firstClock = new Clock();
  firstClock.setBackground('body');
  firstClock.new('#ms', true, false);
//nomsClock
  var secondClock = new Clock();
  secondClock.new('#noMs', false, false);
 //hexClock
  var hex = new Clock();
  hex.new('#hexClock', false, true);
  $('#col').val('#fff');
});
