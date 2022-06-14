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

- Il est possible d'enlever les parenthèses quand on ne passe qu'un seul argument
- Dès que la fonction doit s'étaler sur plusieur lignes (pour une meilleure lisibilité par exemple) les accolades _{ }_ doivent être présente et le mot réservé _return_ doit être rajouter.

```js
const myfunction = (a, b) => {
  let x = a * b;
  if (x > 3) return "hello world";
};
console.log(myfunction(4, 3)); //output = hello world
```

# Ressources

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
