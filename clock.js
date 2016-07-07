  function Clock() {
    this.new = function (selector, tf) {
      if (tf === true) {
        setInterval(function () {
          var d = new Date();
          var day = {
            h: d.getHours(),
            m: d.getMinutes(),
            s: d.getSeconds(),
            ms: d.getMilliseconds()
          };

          day.h = check(day.h);
          day.m = check(day.m);
          day.s = check(day.s);
          day.ms = check(day.ms);

          function check(i) {
            if (i < 0) {i = "0" + i;}
            return i;
          }

          var t = day.h + ":" + day.m + ":" + day.s + ":" + day.ms;
          var hexTime = '#' + day.h + '' + day.m + '' + day.s;

          $(selector).html(t);
        }, 1);
      } else {
        setInterval(function () {
          var d = new Date();
          var day = {
            h: d.getHours(),
            m: d.getMinutes(),
            s: d.getSeconds()
          };

          day.h = check(day.h);
          day.m = check(day.m);
          day.s = check(day.s);

          function check(i) {
            if (i < 0) {i = "0" + i;}
            return i;
          }

          var t = day.h + ":" + day.m + ":" + day.s;
          var hexTime = '#' + day.h + '' + day.m + '' + day.s;

          $(selector).html(t);
        }, 1);
      }
    };
    this.setBackground = function (element) {
      setInterval(function () {
        var d = new Date();
        var day = {
          h: d.getHours(),
          m: d.getMinutes(),
          s: d.getSeconds()
        };

        day.h = check(day.h);
        day.m = check(day.m);
        day.s = check(day.s);

        function check(i) {
          if (i < 0) {i = "0" + i;}
          return i;
        }

        var t = day.h + ":" + day.m + ":" + day.s + ":" + day.ms;
        var hexTime = '#' + day.h + '' + day.m + '' + day.s;

        $(element).css('background-color', hexTime);
      }, 1);
    };
    this.setColor = function (element) {
      setInterval(function () {
        var d = new Date();
        var day = {
          h: d.getHours(),
          m: d.getMinutes(),
          s: d.getSeconds()
        };

        day.h = check(day.h);
        day.m = check(day.m);
        day.s = check(day.s);

        function check(i) {
          if (i < 0) {i = "0" + i;}
          return i;
        }

        var t = day.h + ":" + day.m + ":" + day.s + ":" + day.ms;
        var hexTime = '#' + day.h + '' + day.m + '' + day.s;

        $(element).css('color', hexTime);
      }, 1);
  };
}
