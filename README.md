# Word Watch 👀

## Process
1. Try to fix vulnerabilities:
- Timebox efforts
- Run `npm audit fix` ; Try to add dependencies, Break stuff
- Start over, run `npm audit fix`, stick with that to move onto JS code
2. Look at code
- Try to decipher comments within `docs/bundle.js`
- Find `src/index.js`
- Make simple `JQuery` call work
- Select elements, navigate through parents/children
- Try simple `ajax` request,
3. Write code
a. Build `get` request for top word
- Hit endpoint in `Postman`
- Hit endpoint with `$.ajax`
- Parse return within `$.ajax` success function
- Build function to display results
b. Build `post` request for input string
- Hit endpint in `Postman`
- Hit endpoint with `$.ajax`
- Figure out `JQuery` "on-click" function
- Figure out parsing string into words
- Build callback function for "on-click" combining post with `ajax`, string parsing, loop

Deploy
- Try from `master` branch
- Try from `gh-pages` branch
- Try from `master/docs` branch
- Try adding `JQery` to index page
- Wait...
- Something ended up working.

Deployed at https://wipegup.github.io/ww_exercise/


> Seeing is believing...

Today, your task is to bring Word Watch👀 to life! Find the API docs [here](https://github.com/turingschool-examples/word-watch-api). Essentially, you have two user stories:

1. When the user comes to the page, they should see the top word and it's count on the right side of the page.
2. When the user types a piece of text in text field and clicks the break down button, that word should be added to the master list of words. The piece of text could be a single word, or an entire essay. Make sure to read the API documentation carefully so you understand what needs to happen on the front end.

NOTE: The user should **never** have to refresh the page to see updated information.

If you finish these two user stories, consider:

- if the users' input does not change the top word, there is no notification to the user that their word(s) was/were submitted. Can you provide some sort of notification to make a better user experience?
- the current styling for the top word is pretty lame. Can you make it a little more exciting/clear while keeping it classy?
- testing your Word Watch functions.

## Workflow

Fork or clone this so you have your own Word Watch Repo.

You should commit as you normally would - when a new piece of functionality is built out and everything is clean and working. This should be an independent challenge, but we don't want you banging your head against the wall all morning. If you are stuck on setup or something weird, don't spend too long before you reach out to an instructor - we can get you going in the right direction. The point of this is not to frustrate you!

## Submission

Please DM Dione and Cory with your finished repo by noon to show us your 🔥awesome🔥 apps. By that time, please have your project deployed to GitHub pages. Also, if you did run the API locally and were hitting that, please change the URL to the Heroku endpoints so it's easier for instructors to check real quick.

## Environment Setup

Clone and navigate to the directory in your preferred way, or

```shell
git clone git@github.com:turingschool-examples/word_watch.git
cd word_watch
```

Then, get those dependencies:

```shell
npm install
```

If you run into issues where JavaScript you wrote isn't coming through the browser, try:

```shell
npm run build
```

Open your app on a webpack server:

```shell
npm start
```

And navigate to:

```
http://localhost:8080
```

  * *Note* make sure to keep `npm start` running during your development.

If you need to start the webpack server for some reason:

```shell
ctrl + c
```

To run the tests:

```shell
npm test
```

## Word Watch API

* Documentation can be found [here](https://github.com/turingschool-examples/word-watch-api)
* You can choose if you want to use ther Heroku API, or run the API locally. If you are using the Heroku API, remember that a lot of other students may be as well, so you'll have less control over if that top word is changing, etc.
