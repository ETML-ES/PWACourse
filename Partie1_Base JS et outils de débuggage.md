---
marp: true
---

<!--
paginate: true
_paginate: false
headingDivider: 2
footer: 'ETML-ES / Base JS et outils de débuggage'
header: ' [](https://github.com/NF01/mthw/blob/main/README.md)'
size: 16:9
-->

 <!-- 
 script to link to html to enable darkmode
 <script defer src="index.js"></script>
 -->

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@600&display=swap');

@font-face {
  font-family: 'icomoon';
  src: url('./fonts/icomoon.ttf') format('truetype');
}


section h1 {
  font-size: 1.5rem;
  font-family: 'Nunito';
  color: black;
  padding-bottom: 1rem;
  padding-top:10px

}

section.align h1{
  padding-bottom: 0.5rem
}

section p {
  font-size: 0.8rem;
  font-family: 'Nunito', sans-serif;
}

section footer {
  font-size: 0.5rem;
  font-family: 'Nunito', sans-serif;
}


section header a:nth-child(1):after{
  font-size: 0.9rem;
  font-family: 'icomoon', sans-serif;
  content: "\eab0";
  color: black;
  opacity: 30%
}

section header a:nth-child(2):after{
  font-size: 0.9rem;
  font-family: 'icomoon', sans-serif;
  content: "\e9d6";
  color: black;
  opacity: 30%
}

section::after {
  font-size: 1rem;
  font-family: 'Nunito', sans-serif;
}

section code{
  font-family: 'Red Hat Mono', monospace;
  font-size: 5rem
}

section a{
  color: #D10A11;
}



/* darkMode */

section.darkmode p {
  color: white
}

section.darkmode header a:nth-child(1):after{
  font-size: 0.9rem;
  font-family: 'icomoon', sans-serif;
  content: "\eab0";
  color: white;
  opacity: 30%
}

section.darkmode header a:nth-child(2):after{
  font-size: 0.9rem;
  font-family: 'icomoon', sans-serif;
  content: "\e9d6";
  color: white;
  opacity: 30%
}
section.darkmode h1{
  color: white
}
section.darkmode{
  background-color: #1C1C1C
}
section.darkmode code{
  color: white
}
section.darkmode pre{
  background-color: #1C1C1C
}


</style>

# Javascript => arrow function

#

### old one

```js
let x = myFunction(4, 3);
function myFunction(a, b) {
  return a * b;
}
console.log(x); //output = 12
```

### new one

```js
const myfunction = (a, b) => a * b;
console.log(myfunction(4, 3)); //output = 12
```

# Less is more

Les fonctions fléchés surtout appelées "arrow function" ont été introduites dans JS pour compacter le langage et le rendre plus lisible et moins onereux en lignes de code

### Particularités

Il est possible d'enlever les parenthèses quand on ne passe qu'un seul argument

```js
const myfunction = (a) => a * 20;
console.log(myfunction(4)); //output = 60
```

# Ressources

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
