function Clock() {
  function temp() {
    d = new Date();
    day = {
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

    t = day.h + ":" + day.m + ":" + day.s + ":" + day.ms;
    tNoMs = day.h + ":" + day.m + ":" + day.s;
    hexTime = '#' + day.h + '' + day.m + '' + day.s;
  }

  this.new = function (selector, tf, type) {
    temp();
    function getStatus(variable) {
      if (variable === true) {
        return variable;
      } else {
        return variable;
      }
    }
    setInterval(function () {
      if (tf === true) {
        $(selector).html(t);
      } else {
        $(selector).html(tNoMs);
      }

      if (type === true) {
        $(selector).html(hexTime);
      }
    }, 1);
  };
  this.setBackground = function (element) {
    setInterval(function () {
      temp();
      $(element).css('background-color', hexTime);
    }, 1);
  };
  this.setColor = function (element) {
    temp();
    setInterval(function () {
      $(element).css('color', hexTime);
    }, 1);
};
}
