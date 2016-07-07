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
    hexTime = '#' + day.h + '' + day.m + '' + day.s;
  }

  this.new = function (selector, tf, type) {
    temp();
    if (tf === true) {
      setInterval(function () {
        if (type === false || type === undefined) {
          $(selector).html(t);
        } else if (type === true && ts === false) {
          $(selector).html(hexTime);
        } else {
          console.error('Maybe you set true ms, disable it to display hexcode');
        }
      }, 1);
    } else {
      setInterval(function () {
        temp();
        if (type === false || type === undefined) {
          $(selector).html(t);
        } else if (type === true) {
          $(selector).html(hexTime);
        }
      }, 1);
    }
  };
  this.setBackground = function (element) {
    setInterval(function () {
      temp();
      $(element).css('background-color', hexTime);
    }, 1);
  };
  this.setColor = function (element) {
    setInterval(function () {
      $(element).css('color', hexTime);
    }, 1);
};
}
