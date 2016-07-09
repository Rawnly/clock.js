(function( $ ) {
  $.fn.newClock = function ( options ) {

    var t, tNoMs, hexTime, element; // here we making this variables local to current jQuery object

    function time() {
      d = new Date();
      day = {
        h: d.getHours(),
        m: d.getMinutes(),
        s: d.getSeconds(),
        ms: d.getMilliseconds()
      };

      function check(i) {
        if (i < 10) {i = "0" + i;}
        return i;
      }

      day.h = check(day.h);
      day.m = check(day.m);
      day.s = check(day.s);

      t = day.h + ":" + day.m + ":" + day.s + ":" + day.ms;
      tNoMs = day.h + ":" + day.m + ":" + day.s;
      hexTime = '#' + day.h + '' + day.m + '' + day.s;
    }

    // opt must be local too
    var opt = $.extend({
      ms: false,
      type: 'classic'
    }, options );

    element = this; //you don't need here $(this)

    var timer = setInterval(function () {
      time();
      switch (opt.ms) {
        case true:
          time();
          element.html(t);
          break;
        case false:
          switch (opt.type) {
            case 'classic':
              time();
              element.html(tNoMs);
              break;
            case 'hex':
              time();
              element.html(hexTime);
              break;
          }
          break;
      }
    }, 1);
  };
} ( jQuery ) );
