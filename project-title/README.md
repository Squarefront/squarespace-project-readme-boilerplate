Squarespace PROJECT_TITLE
=======
> Squarespace PROJECT_TITLE top-level Squarespace development code.



## Project Overview
The PROJECT_TITLE project is a complex web-app built on the Squarespace website platform. This top-level repository is for configurations, source code, dev tools, workflow and essentially everything but the Squarespace template code itself.

In addition to this top-level repo, we also manage a [production-ready Squarespace template](https://github.com/GITHUB_USERNAME/PROJECT_TITLE_SLUG) hosted in another Github repo.

Squarespace websites, by default, come with Git installed. Each Squarespace website is essentially running live on its own master branch and we cannot change that. So in our [Squarespace template](https://github.com/GITHUB_USERNAME/PROJECT_TITLE_SLUG) repo you'll see that we have a three Git remotes set up.

* **Origin:** The Github repo for the production-ready template. This is for keeping the most up-to-date version in Github for reference.
* **Main:** The main remote powers [PROJECT_TITLE](http://PROJECT_URL.com).
* **Staging:** The staging remote powers [PROJECT_TITLE](http://staging.PROJECT_URL.com).

*Note: the Origin and Main remotes should be running the most up-to-date version of the template.*


## More Project Details

### Current Top-level Development Overview

Here's a little bit about the technology used in this project.

* Uses [npm scripts](https://docs.npmjs.com/misc/scripts) for task management instead of Grunt/Gulp.
* Custom modular JavaScript app. Mostly [ES6 spec](http://caniuse.com/#search=es6), transpiled with [Babel](https://github.com/babel/babel) and bundled with [Webpack](https://github.com/webpack/webpack) using the [Babel Loader](https://github.com/babel/babel-loader).
* Linted with [ESlint](https://github.com/eslint/eslint). Documented with [JSDoc](https://github.com/jsdoc3/jsdoc) syntax.
* [Hobo](https://github.com/properjs/hobo) (jQuery alternative), used for simple DOM utilities.
* Most touch interactions normalized with [Hammer.js](http://hammerjs.github.io/).
* External web service dependencies: [Firebase](https://firebase.com), [Localize](https://localizejs.com), [Swiftype](http://swiftype.com), [Google Maps](https://developers.google.com/maps/).
* Backend micro-services using Node.js on [Google Cloud Functions](https://cloud.google.com/functions/docs) and/or [Webtask.io](https://webtask.io)
* Modular CSS with Sass and PostCSS Autoprefixing.



## Working on this Project:

### Access Privileges

In order to work on this project you'll need access to some (or all) of these web services:

* **Top-level Code Repository** - Github
    * [AUTHOR_NAME's Github organization](https://github.com/GITHUB_USERNAME/PROJECT_TITLE_SLUG).
* **Main Website (PROJECT_URL)** - Squarespace
    * You need Administrator Permissions for  [https://PROJECT_URL.squarespace.com](https://PROJECT_URL.squarespace.com)
* **Staging Website (staging.PROJECT_URL)** - Squarespace
    * You need Administrator Permissions for  [https://PROJECT_URL-staging.squarespace.com](https://PROJECT_URL-staging.squarespace.com)

### Bug Tracking & Issues

* **Team Bug Tracking & Issues** - Asana
    * https://app.asana.com/
    * Get project access from AUTHOR_NAME.
* **Development Bug Tracking & Issues** - Github
    * https://github.com/GITHUB_USERNAME/PROJECT_TITLE_SLUG/issues

### Points of Contact:

* **AUTHOR_NAME**
    * Lead Developer
    * Email: [name@domain.com](mailto:name@domain.com)
    * Github: [github.com/GITHUB_USERNAME](https://github.com/GITHUB_USERNAME)

* **Squarespace Support**
    * Platform Support
    * Email: [customercare@squarespace.com](mailto:customercare@squarespace.com)
    * Official Documentation: [https://developers.squarespace.com](https://developers.squarespace.com)
    * Official Help Site: [https://help.squarespace.com](https://help.squarespace.com)



## Getting Started

### Clone

Clone this project to your local machine.

```shell
git clone git@github.com:GITHUB_USERNAME/PROJECT_TITLE_SLUG.git PROJECT_TITLE_SLUG
```

`cd` into your newly created project folder.

Then clone the [PROJECT_TITLE Squarespace Template repository](https://github.com/GITHUB_USERNAME/PROJECT_TITLE_SLUG_TEMPLATE) into `sqs_template`.

```shell
git clone git@github.com:GITHUB_USERNAME/PROJECT_TITLE_SLUG_TEMPLATE sqs_template
```

### Install

Install all project dependencies.

The only global dependencies required to work on this project are [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), and a [Squarespace Node Server](https://github.com/NodeSquarespace) that enables local development of Squarespace websites.

All build and watch tasks are run via `npm` using local dev dependencies.


```shell
npm install
```

You should now have all your dependencies installed into the `node_modules` folder.

This project includes a custom build of jQuery to remove unnecessary jQuery methods that hardly anyone uses anymore. I've created an npm task that downloads jQuery and does a custom build. Run that:

```
npm run jquery
```

If this was successful, you should now have a new folder `js/lib/jquery/dist` which contains the custom build of jQuery.

### Workflow

Now that you have everything, it's time to work. This project currently uses a simple approach to running tasks. Right now there's a NPM task that watches your CSS and JavaScript files and automatically compiles them to a storage area in this project, `sqs_template`. Start up the watch task:

```
npm start
```

### Local Development

Squarespace is a software as a service platform so local development is limited. When working locally, create a branch on the **Origin** remote and test your updates locally using the [node-squarespace-server](https://github.com/NodeSquarespace). The node-squarespace-server allows you to authenticate with, and cache, a Squarespace website so you can work locally. *This is not an official Squarespace project, so the server isn't perfect and crashes often!*

The node server has a configuration option to specify a Squarespace website to cache content from. This is configured to connect to the Main website at `https://PROJECT_URL.squarespace.com`. The node-squarespace-server authenticates to Squarespace using your Squarespace account. If you have **Administrator** access to the Main website, it should work fine. The only point of the node-squarespace-server is to cache the website locally to test design and development updates locally while using a copy of the website content.

Install the node-squarespace-server globally.

```
npm i -g node-squarespace-server
```

Once installed, `cd` into the Squarespace template and run the server:

```
cd sqs_template

# Run the server
sqs server

# Run the server with livereload
sqs server --reload

# Run the server on a specific port
sqs server --port=8000

# Bust local cache
sqs buster

# View api
sqs
```

I normally use the `sqs buster` command whenever a crash happens.

If you experience issues with continuous server crashing or things not working properly, please report to Jason Barone or [submit an issue](https://github.com/NodeSquarespace/node-squarespace-server/issues).

#### Local Development Issues

If you're experiencing issues with the node-squarespace-server and unable to properly work, you can optionally SFTP Upload directly to a website. If you do this, please keep in contact with other devs working on this project.

Squarespace and local development is not great, and it's something their team is working to improve.

### Staging

As mentioned, we have three repos (remotes) where we push the template code base to. When doing development, you should be working locally on a branch of the **Origin**, or just working locally on your machine.

When updates are ready for live testing, `git push` to the **Staging** master branch, which will put your updates live to https://PROJECT_TITLE_SLUG-staging.squarespace.com. Again, keep in contact with other devs.

### Production

After updates have been live tested on Staging, we can work to get these into production by pushing to the **Main** master remote.

This process should be reworked to keep everything in sync with developers on the project. Currently we do not have a code review or pull request workflow, but it's probably recommended that we start.
