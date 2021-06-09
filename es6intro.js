// no longer using var 
// let 
// const

// function countColor(colors = []) {
//   return colors.length
// }

// console.log(countColor(['red', 'blue']))
// console.log(countColor())

const cl = (msg) => {
  console.log(msg)
}

//  this way bind the function into the object 
// const nameofFunction = () => {
//   //logic
//   // return 
// }

//  constructor  this bind.nameofFunction
// const nameofFunction {
  
// }

// () => cl("hello world")

// function showUserInfo( name, options = {}) {
//   let likes = options.like
//   let followers = options.followers
//   let following = options.following
// }

// function showUserInfo( name, { likes, followers, following } = {}) {
//   cl(likes)
//   cl(followers)
//   cl(following)
// }

// showUserInfo( "bob",{likes: 2, followers: 34, following: 5})

// rest params, for unnumbered params and we are using ... and the name ref of all of the rest of the parameter, only works for functions, params are with functions
// const showTrendingTag = (...hashtags) => {
//   for(let i of hashtags) {
//     cl(i)
//   }
// }

// const showTrendingTag = (firstTag, secondTag, ...hashtags) => {
//   cl(firstTag)
//   cl(secondTag)
//   for(let i of hashtags) {
//     cl(i)
//   }
// }

// showTrendingTag(["puppy", "lite", 'slam'])
// showTrendingTag(["puppy"])
// showTrendingTag("cooking", "fire", ["puppy", "puppy", "lite", 'slam', "puppy", "lite", 'slam'])

// Spread op, mostly on objects and it will spread out everything that object has
// const getMovies("/movies", () => {
//   let movies = db.movies 
//   cl(...movies)
// })

// let colors = ["red", "pink", "blue", "yellow"]

// cl(...colors)

// const { first_name, age, email} = {...this.state}

// const person = { first_name: "jill", age: 7, email: "adsfasdfasfd@email.com" }
// let first_name = person.first_name
// let age = person.age 
// let email = person.email
// const { first_name, age, email } = person

// string interpolation
// `${first_name} welcome`

// ** - exponent 

// package 
import React from 'react'
//  component
// export default
import HomePage from './shared/HomePage'
// export 
import { MainMenu } from './menus/Menus'

import HomePg, { Menu, Button } from './tools'


// file name Pages.js
// const HomePage = () => {
//   return (
//     // ...
//   )
// }

// export const ContactPage = () => {
//   return()
// }

// export const AboutPage = () => {
//   return()
// }

// export default HomePage 


// import Homepage, { ContactPage, AboutPage} from './Pages'