# Frontend Mentor -  Expenses Chart
This is a solution to the xxxxxx challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:


- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day's bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page


### Screenshot

![](./design/desktop-design.jpg)


### Links
- Live Site URL: [Link](https://comforting-shortbread-7e4bb1.netlify.app/)

## My process
I created this simple project without any @media queries (responsive design with clamp() and relative measures was enough).

I started with creating HTML structure. Once created, I only needed minor adjustements later on with classes. Then I styled everything in css.

At first I wanted to create the info on hover as a hidden element that would be toggled to visible on hover but in the end I decided to create the span element through JS everytime on hover (some more js practice, as toggle "display" class would probably be more efficient in here).

As for JS, it works but I don't really like using if...else for inserting data from array. I need to come back to this project after learning more about work with APIs and do it properly. I don't want to copy-paste any youtube ready solution.


### Built with
-HTML
-CSS
-Vanilla Javascript


### What I learned

I learned more DOM manipulation, i.e. creating and appending HTML on mouseover and necessary mouseleave event. I also learnt basic use of array elements. I learned how to fetch API from .json file, though I need to learn more to be able to use it in a way I wanted here (will go back to this project later).

## Author
- GitHub - [Marcin Suski](https://github.com/marcinsuski)
