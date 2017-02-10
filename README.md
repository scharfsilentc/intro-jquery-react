# Intro to jQuery and React

## Introduction
This workshop is a followup to the [Vanilla JS Workshop](https://github.com/DecodeMTL/vanilla-js-projects/). In there, you learned the basics of how to use JavaScript in a browser environment to make web pages dynamic. This consisted mainly in three things:

  * Manipulating the DOM
  * Listening to and handling DOM Events
  * Making AJAX calls

A few years ago, these things were quite difficult to do using the vanilla JavaScript functionality bundled with the browsers. The APIs were sometimes inconsistent between browsers, and some things were not meant to be heavily manipulated. Even something as easy as adding a class name to a DOM element used to require string manipulation and `RegExp` rather than simply adding a new class to a list with `classList`.

### Selecting elements
One of the super useful functions you learned about is `querySelectorAll`. It allows you to pass it any CSS selector, as simple as `#app` or as complex as `#app ul.images img[alt]`, and returns a `NodeList` of all the matching elements. In 2008, when jQuery got out, there was no straightforward way to do this with vanilla DOM functions. All you had was `getElementById`, `getElementsByTagName` and `getElementsByClassName`. The "magical" `$` function that was jQuery allowed you to do just that, and it returned a [jQuery "collection"](https://learn.jquery.com/using-jquery-core/working-with-selections/). This not only provided a huge upgrade from the DOM, but also allowed for a chained API as described in the link.

### Events
Another extremely useful function you learned about is `addEventListener`. It allows you to add as many event listeners on an element as you want. But things have not always been like that. For instance, Internet Explorer only started supporting this function as of version 9. [jQuery's event system](https://learn.jquery.com/events/) was again a blessing for developers of the time who had to support browsers old and new. It allowed us to write cleaner code, and supported a really [nice API for event delegation](https://learn.jquery.com/events/event-delegation/). By now you know how important delegation is to the performance of your application, so you can understand why jQuery was super welcome at the time.

### AJAX
In the Vanilla JS workshop, you learned about the Promise-returning `fetch` function, used to make HTTP requests in the context of an already-loaded web page. You're probably starting to get the picture here... `fetch` is so new that it's not even available in some "modern" browsers yet. Internet Explorer never supported it (only the Edge browser), and it still can't be used on Mobile Safari up to this day (Feb 2017).

The legacy AJAX api is `XMLHttpRequest`. It's about as nice to use as is cleaning up your floor with a poor little kitten while it's clawing and biting you -- don't do that, it's only an image. Here's an example of the wonderful `XMLHttpRequest`:

```javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
}
xhr.open('GET', 'http://example.com', true);
xhr.send(null);
```

I rest my case. Oh and if that wasn't enough, version 6 of Internet Explorer -- which you don't hear a lot about these days thankfully -- did not support the same syntax so to support it you had to use this gem instead:

```javascript
if (window.XMLHttpRequest) {
    //Firefox, Opera, IE7, and other browsers will use the native object
    var request = new XMLHttpRequest();
} else {
    //IE 5 and 6 will use the ActiveX control
    var request = new ActiveXObject("Microsoft.XMLHTTP");
}
```

[Go rinse your eyes a bit](http://eyebleach.me/) and come back to learn about the magic of jQuery!

### Conclusion
As you start studying jQuery, you might ask yourself what's the point? With all the modern JavaScript APIs, reproducing the niceness of jQuery is becoming more and more trivial, **especially if you don't need to support older browsers**.

In reality though, there are tons of companies out there still using jQuery for various reasons. The three main ones are IE6 support, legacy code maintenance, and making use of ["jQuery plugins"](https://plugins.jquery.com/). *Since one of the goals of this bootcamp is to make you job-ready*, we're going to spend a bit of time getting familiar with the jQuery API, keeping in mind that it's **only a nice wrapper around the DOM and `XMLHttpRequest`**.

At the end of this workshop, we're going to make a transition to React JS by completing an online activity that makes the bridge between the two libraries. This will lead in very well to next week, where we'll spend the whole week getting familiar with building user interfaces and small, stateful applications with React.

---

## Reference
The [jQuery Learning Center](https://learn.jquery.com/) is one of the best references to learn about jQuery. It's a lot more user-friendly than the pure [jQuery API Documentation](https://api.jquery.com/).

Here are some selected articles from the Learning Center that you can use in order to help you complete the workshop and get more familiar with jQuery.

### jQuery and the DOM
* [Selecting elements](https://learn.jquery.com/using-jquery-core/selecting-elements/)
* [Working with selections](https://learn.jquery.com/using-jquery-core/working-with-selections/)
* [The jQuery object](https://learn.jquery.com/using-jquery-core/jquery-object/)
* [Manipulating elements](https://learn.jquery.com/using-jquery-core/manipulating-elements/)
* [Attributes](https://learn.jquery.com/using-jquery-core/attributes/)

### jQuery and Events
* [Document Ready](https://learn.jquery.com/using-jquery-core/document-ready/)
* [Introducing events](https://learn.jquery.com/events/introduction-to-events/)
* [jQuery event basics](https://learn.jquery.com/events/event-basics/)
* [Handling events](https://learn.jquery.com/events/handling-events/)
* [Understanding event delegation](https://learn.jquery.com/events/event-delegation/)

### jQuery and AJAX
* [Intro to Ajax](https://learn.jquery.com/ajax/)
* [Key concepts](https://learn.jquery.com/ajax/key-concepts/)
* [Ajax-related methods](https://learn.jquery.com/ajax/jquery-ajax-methods/)
* [`jQuery.getJSON`](https://api.jquery.com/jQuery.getJSON/)
* [Ajax and forms](https://learn.jquery.com/ajax/ajax-and-forms/)

### General
* [Beware anonymous functions](https://learn.jquery.com/code-organization/beware-anonymous-functions/)
* [Introduction to effects](https://learn.jquery.com/effects/intro-to-effects/)

---

## Your Work
Your work will consist in implementing two of the three Vanilla JS projects using jQuery instead of directly using DOM functions. This will be the best way for you to compare what you have already learned with the jQuery API.

To do this, you'll need to include the jQuery library in your page by adding a `<script>` tag before your own. This script contains the whole code of jQuery, which provides you functions that in turn use the DOM on your behalf. jQuery provides you its API by creating a global variabled called `$` -- yes, this is a valid variable name and jQuery thinks it's so important that it uses it ;)

Follow the instructions on the [jQuery CDN site](https://code.jquery.com/) to include the **uncompressed 1.x version of jQuery**.

### Weather App
As a first practice, you will reimplement the [Vanilla JS Weather App](https://github.com/DecodeMTL/vanilla-js-projects#project-1-weather-app) using jQuery. To get some good practice, you should do this by yourself. Keep the HTML exactly the same except for the jQuery `<script>` tag. Since this will be your first tiny app using jQuery, we provided a [reference solution](weather.js). As always, looking at a solution will not make you smarter or more proficient. At best it should help you verify that your already working version is not too bloated or awkward.

### Next
Depending on your level of comfort, you have the choice to either reimplement the [Flickr Photo Browser](https://github.com/DecodeMTL/vanilla-js-projects#project-2-flickr-api-photo-browser) or the [Vanilla BlackJack Game](https://github.com/DecodeMTL/vanilla-js-projects#project-3-vanilla-blackjack) using jQuery instead of Vanilla JS.

## Transition!
One thing you might have noticed whether you're using vanilla JavaScript or jQuery, especially if you implemented the BlackJack game, is that keeping track of the **state** of your application is not trivial. In your code, you have variables that represent the current state of your game e.g. whether you're loading an AJAX call or whether the player has an Ace in their hand, the current score of the player, etc.

In a jQuery or DOM-based application, you are basically keeping track of this **state** in two places: as variables in your code, and as represented in the DOM with some elements. You have to manually modify the DOM in order to keep it in line with the state of your app/game. In a big application, this can quickly get out of hand.

Next week, we will study the React library which helps keep this problem in check by allowing you to **only change your state variables, and updating the DOM on your behalf.** As an introduction to React, follow this online activity called [ReactJS Introduction for people who know just enough jQuery to get by](http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/). Not only will it allow you to get a bit more jQuery practice, it will also show you how even with something as small as a tweet box, React can be a life saver in terms of keeping your application view consistent with your **state**.

We only get to say this a few times throughout the bootcamp but here it goes:

:boom: :warning: :fire: :exclamation: :boom: :warning: :fire: :exclamation: :boom: :warning: :fire: :exclamation: :boom: :warning: :fire: :exclamation: :boom: :warning: :fire: :exclamation:

**Completing this tutorial from beginning to end while giving it 110% of your focus is a really good way to get introduced to React, and is a great preparation for what is coming next week. Failure to complete at least this tutorial will make it much harder for you to follow with us next week.**

:boom: :warning: :fire: :exclamation: :boom: :warning: :fire: :exclamation: :boom: :warning: :fire: :exclamation: :boom: :warning: :fire: :exclamation: :boom: :warning: :fire: :exclamation:

While React is definitely far from being the only UI library that exists out there, the concepts it will teach you will make it much easier to learn any other application framework you will encounter. Its component-centric architecture and declarative nature can be found in many other frameworks such as Angular, Web Components and many others. Learning React is a great way to start your adventure in the world of front-end development.

## What next?
To be well prepared for next week, follow this FREE online course from [egghead.io](https://egghead.io). Even though it will be brutal, it will expose you to a lot of the concepts that we will look at early next week.

<p align="center">
  <a href="https://egghead.io/courses/react-fundamentals">
    <h1>React Fundamentals</h1>
    <img src="https://d2eip9sf3oo6c2.cloudfront.net/series/covers/000/000/003/full/course_banner.png?1457396165">
  </a>
</p>
