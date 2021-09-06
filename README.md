# 30 Day Vanilla JavaScript Challenge
The purpose of the challenge is to build unique, JavaScript Program each day. No pre-processors or frameworks.

## Credits
Please visit [JavaScript30](https://javascript30.com/) for more information.

### Day 1 - JavaScript Drum Kit
#### Learning Experience
From this project, I have learned two new materials. 
1. Data attributes

Data attributes allow coder to create any keys by putting `<data>` in front. This project uses data attributes to connect the audio to the div. 

2. Transitionend

Transitionend is an event that fired when a CSS trantion has completed. This project uses transitionend to remove the border of the keys. 

### Day 2 - CSS + JS Clock
#### Learning Experience
From this project, I solidify my understanding of transforms vs. transitions and the usage of the object Date. 

Transforms: Allows elements styled to be transformed in 2D or 3D space. In this project, transforms was used to allow the hands to rotate on its origin rather its midpoint.

Transitions: Allows property changes in CSS to occur smoothly over a specified duration. In this project, transitions was used to allow the hands to move from one degree to another.

Date: In this project, Date was called as a constructor as well as use serials of methods i.e `<getSeconds()>`, `<getMinutes()>`, `<getHours()>`

### Day 3 - Playing with CSS Variables and JS
#### Learning Experience
From this project, I have learned:
1. `<this.dataset>` is a read-only property of HTML element that provides read/write access to custom data attributes. `<this.dataset>` return an object.

### Day 4 - Array Cardio Day 1
#### Learning Experience

**Filer**
The filter method creates a **new array** that pass the text implemented by the function.
```JS
.filter((element, index, array) =>{

}, thisArg)
```

**Map**
The map method creates a **new array** with the results of calling a provided function on each element.
```JS
.map((element, index, array) =>{

})
```

**Sort**
The sort method sorts the element of an array **in place** and return a sorted array.
```JS
.sort((firstEl, secondEl) => {

} )
```

**Reduce**
The reduce method executes a user-supplied 'reducer' callback function.
```JS
.reduce((previousValue, currentValue, currentIndex, array) => {
    
}, initialValue)
```
### Day 5 - Flex Panel Gallery
#### Learning Experience
From this project, I solidify my understanding of flexbox and learned another way to use transition. 

New terms learned:

**Flex** is a CSS shorthand property that sets how an flex item will grow or shrink to fit the container.

**translateY** is a function that repositions an element vertically on a 2D plan.
### Day 6 - Ajax Type Ahead
#### Learning Experience
From this project, I have learned the object RegExp.

**RegExp / Regular Expressions** is used for matching text with a pattern. 

Syntax for RegExp: `</pattern/modifiers>`

Modifiers includes:
- "g" : Perform global match
- "i" : Perform case-insentive matching
- "m" : Perform multiline matching
### Day 7 - Array Cardio Day 2
#### Learning Experience

**Some**
The some method tests whether at least one element in the array pass the test implemented.
```JS
.some((element, index, array) =>{

})
```

**Every**
The every method tests whether all elements in the array pass the test implemented.
```JS
.every((element, index, array) =>{

})
```

**Find**
The find method returns the value of the first element that satisfies the provided testing function. If no values satify, underfinded is returned.
```JS
.find((element, index, array) =>{

})
```
**FindIndex**
The findIndex method returns the index of the first elementt that satisfies the provided testing function. If no element satify, -1 is returned.
```JS
.findIndex((element, index, array) =>{

})
```
### Day 8 - Fun with HTML5 Canvas
#### Learning Experience

**getContext**
The getContext method returns a drawing context on the canvas.
```JS
let ctx = canvas.getContext(contextType, contextAttributes);
```
**lineJoin**
- is a property of canvas 2D to determine the shape used to join two line.
```JS
ctx.lineJoin = "bevel" || "round" || "miter";
```
**lineCap**
- is a property of canvas 2D to determine the shape used to draw the end points of lines.
```JS
ctx.lineCap = "butt" || "round" || "square";
```

### Day 9 - Dev Tools Domination
#### Learning Experience

From this project, I have learned different methods to the console object.

`<console.assert>` - log a message if the first arguement is false.

`<console.clear>` - clear the console

`<console.count>` - log the time the line is being called

`<console.group>` - create an new inline group

`<console.info>` - informative logging of information.

`<console.time>` - starts a timer with a name specified as an input parameter.

### Day 10 - Hold Shift and Check Checkboxes
#### Learning Experience

One big take away from this project is the function `<this>` keyword.

`<this>` is a reference to an object and in strict mode.

### Day 11 - Custom Video Player
#### Learning Experience
From this project, I learned to word with mp3 files / HTML Media Element. 

**Syntax**
```JS
var isPaused = audioOrVideo.paused
```

### Day 12 - Key Sequence Detection
#### Learning Experience

From this project, I solidify my understanding of `<e.key>`. 

`<e.key>` - is a read-only property that returns the valus of the key pressed by the user.

### Day 13 - Slide in on Scroll
#### Learning Experience

From this project, I learned the following term and concepts:

`<debounce>` - is a function that makes the code is only triggered once per user input. This is useful in search box-suggestions, text-field auto saves and image scroll in.

`<offsetTop>` - is a read-oly property that returns the distance of the outer border of the current element relative to the inner border of the top of the offset parent node.

### Day 14 - JS References VS Coding
#### Learning Experience

From this project, I solidify my understanding of creating a copy of an array and object. 

### Day 15 - LocalStorage and Event Delegation
#### Learning Experience

From this project, I solidify my understanding of local storage and learned the following: event delegation.

Instead of attaching event listeners directly to the buttons, you delegate the listening to the parent.

### Day 16 - CSS Text Shadow Mouse Move Effect
#### Learning Experience

From this project, I solidify my understanding of x and y values and then convert it to text shadow pixals.

### Day 17 - Sorting Band Names without Articles
#### Learning Experience
From this project, I learned RegExp to ignore articles to return a sorted list. 

```JS
.replace(/^(a |the |an)/i, '').trim()
```

RegExp is an object that is used for matching text with a pattern. 

`<trim>`: is a method the removes whitespace from both ends of a string.

### Day 18 - Adding Up Times with Reduce
#### Learning Experience

From this project, I solidify my understanding of the reduce method. 

One thing to watch out is whether the function will return a node list or an array.

### Day 19 - Webcam Fun
#### Learning Experience

`<.getUserMedia()>` method prompts the user for permission to use a media input.

`<.toDataURL()>` method return a data URI containing a representation of the image.

### Day 20 - Speech Detection
#### Learning Experience

SpeechRecognition is the controller interface for the recognition service.

### Day 21 - Geolocation
#### Learning Experience

Goelocation allows the user to provide their location to web applications.