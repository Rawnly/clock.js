#Usage
to create a clock use this: 
```JavaScript
//yourJsFile.js

var clock = new Clock(); //define clock

//set clock element
clock.new('#myClock') //'.class' or '#id' or 'tagname'
```

also to change background color based on clock hex code (es. 12:00:30 am is #120030) use this 

```javascript
//var clock = new Clock();

clock.setBackground('body') //also like new();you can change the selector to classes, id or other tagnames
```

so easy, the same fo text color with `clock.setColor();`.

##Dependencies
Clock.js need [jQuery](https://github.com/jquery/jquery) to works, snippet below:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
```
