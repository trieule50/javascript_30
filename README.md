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