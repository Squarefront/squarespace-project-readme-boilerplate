Squarespace PROJECT_TITLE
=======
> Squarespace PROJECT_TITLE top-level Squarespace development code.



## Project Overview
The PROJECT_TITLE is a complex web-app built on the Squarespace website platform. This top-level repository is for configurations, source code, dev tools, workflow and essentially everything but the Squarespace template code itself.

In addition to this top-level repo, we also manage a [production-ready Squarespace template](https://github.com/YOUR_PROJECT_URL) hosted in another Github repo.

Squarespace websites, by default, come with Git installed. Each Squarespace website is essentially running live on its own master branch and we cannot change that. So in our [Squarespace template](https://github.com/YOUR_PROJECT_URL) repo you'll see that we have a three Git remotes set up.

* **Origin:** The Github repo for the production-ready template. This is for keeping the most up-to-date version in Github for reference.
* **Main:** The main remote powers [PROJECT_TITLE](http://PROJECT_URL.com).
* **Staging:** The staging remote powers [PROJECT_TITLE_STAGING](http://PROJECT_URL_STAGING.com).

*Note: the Origin and Main remotes should be running the most up-to-date version of the template.*