Project Title - Squarespace
=======
> Project Title Squarespace template code.



## Project Overview
The Project Title project is a complex content-driven web-app built on the Squarespace website platform. This repository is our production-ready web template for the Squarespace platform written in HTML, CSS, JavaScript and Squarespace's template language.

In addition to this repo, we're also managing a [top-level repo](https://github.com/your-username/your-project-title) that contains our configurations, source code, dev tools, workflow and essentially everything but Squarespace template code itself.

*Note: The reason we manage two separate repositories is explained in the [top-level repo's readme](https://github.com/your-username/your-project-title).*



## Squaresapce Template Info
We've tried to document everything as thoroughly as possible, within some of the template source code. Please review the following notes to understand how this template works with our top-level repo.

### What Makes Up This Template:
There are 3 primary components to this template.

* **The Squarespace template code** - Written in HTML and Squarespace's template language.
* **Our post-build JavaScript file** - Compiled to [/scripts/app.js](/scripts/app.js) and [/scripts/app.min.js](/scripts/app.min.js) using Webpack in our top-level build process.
* **Our post-build CSS file** - Compiled to [/styles/screen.css](/styles/screen.css) using Sass in our top-level build process.

We don't do any CSS or JavaScript work inside of this repo's source code. Typically we're doing all CSS/JavaScript in the top-level source code and compiling it into this production-ready Squarespace template.