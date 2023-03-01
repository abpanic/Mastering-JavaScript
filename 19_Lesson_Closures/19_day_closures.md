<div align="center">
  <h1> Masterings Of JavaScript: Closures</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/abhilash-panicker-68952b159/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://github.com/abpanic/">
  <img alt="Github Follow" src="https://img.shields.io/github/followers/abpanic?style=social">
  </a>

<sub>Author:
<a href="https://dbugr.vercel.app/" target="_blank">Abhilash Panicker</a><br>
<small> January, 2020</small>
</sub>

</div>

[<< Lesson 18](../18_Lesson_Promises/18_Lesson_promises.md) | [Lesson 20 >>](../20_Lesson_Writing_clean_codes/20_Lesson_writing_clean_codes.md)

![Mastering JavaScript](../images/banners/MasteringJavscript.png)_1_19.png)
- [Lesson 19](#Lesson-19)
	- [Closure](#closure)
	- [Exercises](#exercises)
		- [Exercises: Level 1](#exercises-level-1)
		- [Exercises: Level 2](#exercises-level-2)
		- [Exercises: Level 3](#exercises-level-3)

# Lesson 19

## Closure

JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

```js
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
```

```sh
1
2
3
```

Let us more example of inner functions

```js
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
```

```sh
1
0
```

🌕 You are making progress. Maintain your momentum,  keep the good work.  Now do some exercises for your brain and for your muscle.

## Exercises

### Exercises: Level 1

1. Create a closure which has one inner function

### Exercises: Level 2

1. Create a closure which has three inner functions

### Exercises: Level 3

1. Create a personAccount out function. It has firstname, lastname, incomes, expenses  inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

🎉 CONGRATULATIONS ! 🎉

[<< Lesson 18](../18_Lesson_Promises/18_Lesson_promises.md) | [Lesson 20 >>](../20_Lesson_Writing_clean_codes/20_Lesson_writing_clean_codes.md)