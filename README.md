# Tech Blog

## Description

A content management system (CMS) is a software application that enables users to create, edit, collaborate on, publish and store digital content. This CRUD (create, read, update, and delete) application creates a CMS-style blog site similar to a Wordpress site following the MVC (Model–view–controller) paradigm in architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM (Object–relational mapping), and the express-session npm package for authentication.

### User Story

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Acceptance Criteria

```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

A step-by-step description of how to get the development environment running.

Install the database by running the following command in the mysql terminal

```
SOURCE: schema.sql
```

Use the following command to install the necessary packages

```
npm install (package_name@version)
```

This application uses the following:

[Bcrypt](https://www.npmjs.com/package/bcrypt) as a library to help you hash passwords.

[Connect Session Sequelize](https://www.npmjs.com/package/connect-session-sequelize) session store for connect-session using sequelize.

[Dotenv](https://www.npmjs.com/package/dotenv) to load environment variables from a .env file.

[Express](https://www.npmjs.com/package/express/v/4.16.4) as a node js web application framework.

[Express Handlebars](https://www.npmjs.com/package/express-handlebars) compiles templates into JavaScript functions.

[Express Session](https://www.npmjs.com/package/express-session) is a simple session middleware for Express. Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.

[MySQL2](https://www.npmjs.com/package/mysql2) to connect to your MySQL database.

[Sequelize](https://sequelize.org/docs/v6/) as a promise-based Node.js ORM tool for MySQL.


## Usage

A CMS-style blog site to add blog posts and comments on the blog posts.

### Deployed Site
https://thawing-springs-36978.herokuapp.com/

### Screenshot Desktop View


### Screenshot Tablet View


### Screenshot Mobile View



## Credits

Tutor: Doug Kumagai:
<br />
https://www.linkedin.com/in/doug-kumagai/
<br />
https://github.com/ndesmic
<br />

mdn web docs: https://developer.mozilla.org/en-US/

Markdown License badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

shields.io: https://shields.io/

Insomnia: https://insomnia.rest/

Bcrypt: https://www.npmjs.com/package/bcrypt

Connect Session Sequelize: https://www.npmjs.com/package/connect-session-sequelize

dotenv: https://www.npmjs.com/package/dotenv

Express: https://www.npmjs.com/package/express/v/4.16.4

Express Handlebars: https://www.npmjs.com/package/express-handlebars

Express Session: https://www.npmjs.com/package/express-session

MySQL2: https://www.npmjs.com/package/mysql2

Sequelize: https://sequelize.org/docs/v6/

Handlebars: https://handlebarsjs.com/

A Step By Step Guide To Using Handlebars With Your Node js App: https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65

Express Session Cookie: https://github.com/expressjs/session#cookie

https://favicon.io/
<br />
- favicon generator / converter

Image Online: https://crop-circle.imageonline.co/
<br />
- crop a circle in image online

Wikimedia: https://commons.wikimedia.org/wiki/Main_Page
<br />
- images

Open Access at the National Gallery of Art: https://www.nga.gov/open-access-images.html
<br />
- images

Getty Museum Collection: https://www.getty.edu/art/collection/
<br />
- images


## License

Please refer to the LICENSE in the repo.

---

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



