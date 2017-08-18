## Setup

From your challenges directory, run the following:

```no-highlight
$ et get react-router-exercise
$ cd react-router-exercise
$ npm install
$ npm start
```

In a separate terminal window, run:

```no-highlight
$ bundle
$ ruby server.rb
```

## Instructions

In this exercise you're going to be creating a custom greeting generator using React Router.
There will be a default greeting and default goodbye component that will have default
messages for [Ron Swanson of Parks and Recreation](https://www.youtube.com/watch?v=nWIeYfDdzHo).
There is also a custom greeting generator component that allows a user to insert a name and choose whether
the message is a greeting or a goodbye.

  1. Familiarize yourself with the different sub-apps (`Greeting`, `Goodbye` and `CustomGreeting`)
  you'll be rendering in the app folder. These pieces of the application will form the different
  sections of your greeting generator. Note that the `Form` is a component rendered within the
  `CustomGreeting` component to get user input.

  2. Create a Router in App that renders the `Greeting`, `Goodbye` and `CustomGreeting` components at appropriate Routes.
  They do not need to be nested routes. Use your best judgement to come up with appropriate route paths in your router. You should also have a component that is set up to render at the route path. Test out your routes in the browser to make sure that it's working correctly!

  3. Now we will refactor. Often sites have a navigation bar at the top with links to the various sections of the website.
  Creating such a nav bar using React Router `Link` components can be a very powerful and seamless way to allow users to easily move through your site without page reloads. Create a `NavBar` Component with React Router `Link`s
  that links to all the different pages in your app. You should then refactor your router to allow the same nav links to appear at the top of each page using nested Routes. This will involve making sure the three main sub-apps `Greeting`, `Goodbye` and `CustomGreeting` are hooked up correctly to the new `NavBar` (hint: you'll need to render these sections as children within `NavBar`).

## Bonus Challenges

  1. Let's be honest, right now this site looks terrible. Smooth navigation using something like React Router is only
  part of a good User Interface. No one is going to get excited about this plain background and plain
  text. Use what you've learned so far about CSS and styling during the Front End Week to make this app
  something you'd actually want to show people. Remember, in Sinatra, your css file goes in the `public` folder.

  2. Make a presentational component that is rendered in the `CustomGreeting` and turns it into a greeting card look alike
  that Tom Haverford would approve!

  3. Refactor the `CustomGreeting` component so that it saves greetings to state and can allow for
  multiple people to be greeted on the page.
