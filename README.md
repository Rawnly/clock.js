#Usage
Download our [latest release](https://github.com/Rawnly/clock.js/releases) and include `clock.js` file 
```html
<script src=".../path/to/clock.js"> </script>
```
then to create a new clock use this: 
```JavaScript
//set clock element
$('#myDiv').newClock({
  //options
  type: 'classic', //by default is classic
  ms: false //by default is false
});
```

If you want you can display ms with `$('#myDiv').newClock({ms:true});` or use the hex clock format `$('#myDiv').newClock({type:'hex'});` (ms must be false for hex clock)

##Dependencies
Clock.js need [jQuery](https://github.com/jquery/jquery) to works, snippet below:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
```

#Other
- A preview is available [**here**](https://webe.io/clocktest)
- Coded with [**Atom**](http://atom.io), an amazing code editor
- Made with love by [**Rawnly**](http://github.com/Rawnly) under [**MIT License**](https://github.com/Rawnly/clock.js/blob/master/LICENSE)
