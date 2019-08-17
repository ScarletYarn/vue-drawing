# vue drawing

This is a very simple online drawing board based on Vue.js and paper.js

It is convenient to use it in your project if you like it.

Simple stroke, redo, undo, text input will be supported. 

Vue Drawing is under development, and not all core feature is available. Anyway, all the fundamental feature will come out soon, for I am using it in my own project. 

To use it, install it as a dependency. It is just a normal Vue plugin.

```shell script
npm install vue-drawing
```

then register it in your vue project.
```javascript
import VueDrawing from "VueDrawing";

Vue.use(VueDrawing);

new Vue()       // register all plugins before instantiate Vue
```

then you can use the tag anywhere you like in your project.
If you want to export the canvas, just click the button on the right, and an event 
will be triggered, which single parameter will be the SVG representation of the canvas as a String.
```vue
<template>
  <vue-drawing @image-export="exportHandler"></vue-drawing>
</template>

<script>
  export default {
    // other code in a usual .vue file
    methods: {
      exportHandler (svg) {
        console.log(svg)
      }
    }
  }
</script>
```
