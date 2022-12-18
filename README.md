# LightBnB Project - Module 5

## Looking for the perfect getaway? Whether it's Canada, Spain, Australia, or even something more daring such as the inside of an Alliance Navy starship (cue Mass Effect references)? 

!["home-me"](/docs/lightbnb-ME.png)

## LightBnB will allow users to do all this and more! Get ready or an adventure of a lifetime and find your dream destination today!!

# LightBnB Project Details

## This project has been completed by Alexander Van-Nugent, a student from the LHL Web Flex Bootcamp.

Using a provided respository as practice code, students are expected to design a database and use server-side JavaScript to display the information from queries to web pages. They will be able to apply their existing knowledge of complex SQL queries, database and ERD (entity relationship diagram) design to integrate the database with a Node backend.

# LightBnB ERD
!["ERD"](/docs/lightbnb-erd-lex.png)

# Final Product Screenshots

## Home Page
!["home-page"](/docs/lightbnb-home.png)

## Search Page
!["search-page"](/docs/lightbnb-search.png)

## Create New Listing
!["new-listing"](/docs/lightbnb-createlisting.png)

# Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
4. If this repository is missing the LightBnB_WebApp directory, redownload it.
5. Download LHL front-end boilerplate from https://github.com/lighthouse-labs/LightBnB_WebApp
6. Do NOT clone this repository. Download it as a ZIP file and extract the packaged directory into this forked repository.
7. Start the web server using the `npm run local` command within directory LightBnB_WebApp. The app will be served at <http://localhost:3000/>.
8. Go to <http://localhost:3000/> in your browser.

# Dependencies
- bcrypt
- body-parser
- cookie-session
- express
- nodemon

# LightBnB_WebApp Details

## Project Structure

```
├── public
│   ├── index.html
│   ├── javascript
│   │   ├── components 
│   │   │   ├── header.js
│   │   │   ├── login_form.js
│   │   │   ├── new_property_form.js
│   │   │   ├── property_listing.js
│   │   │   ├── property_listings.js
│   │   │   ├── search_form.js
│   │   │   └── signup_form.js
│   │   ├── index.js
│   │   ├── libraries
│   │   ├── network.js
│   │   └── views_manager.js
│   └── styles
├── sass
└── server
  ├── apiRoutes.js
  ├── database.js
  ├── json
  ├── server.js
  └── userRoutes.js
```

* `public` contains all of the HTML, CSS, and client side JavaScript. 
  * `index.html` is the entry point to the application. It's the only html page because this is a single page application.
  * `javascript` contains all of the client side javascript files.
    * `index.js` starts up the application by rendering the listings.
    * `network.js` manages all ajax requests to the server.
    * `views_manager.js` manages which components appear on screen.
    * `components` contains all of the individual html components. They are all created using jQuery.
* `sass` contains all of the sass files. 
* `server` contains all of the server side and database code.
  * `server.js` is the entry point to the application. This connects the routes to the database.
  * `apiRoutes.js` and `userRoutes.js` are responsible for any HTTP requests to `/users/something` or `/api/something`. 
  * `json` is a directory that contains a bunch of dummy data in `.json` files.
  * `database.js` is responsible for all queries to the database. It doesn't currently connect to any database, all it does is return data from `.json` files.

# Mass Effect References To Try

## **Commander Shepards Cabin Aboard the SR2-Normandy Docked in Vancouver Alliance Dock**
### *Want to know what its like to sleep like a war-hero? Well now you can! Book Shepards cabin today. The slight buzzing of the SR2-Normandy's engine will lull you to sleep. We guarantee that this will be your favorite cabin on the Normandy!*
- You can find this by searching by city *Vancouver* 
!["normandy"](/docs/normandy.png)

## **Liara T'soni's Nos Astra Apartment on Illium**
### *Book a visit to Liara's lavish apartment in Nos Astra, located on the planet Illium! The spacious area and backlight aquarium are sure to satisfy those with high-end needs.*
- You can find this by searching by city *Nos Astra* 
!["illium"](/docs/illium.jpg)

## **Captain Anderson's Penthouse Suite on the Citadel**
### *Looking for a large open suite where you and all your closest companions can throw a major party after fighting a evil clone of yourself? You've come to the right place! This decked out pad comes with a waterfall wall and massive indoor fireplace that is sure to keep any party-goers interested.*
- You can find this by searching by city *Citadel* 
!["citadel"](/docs/citadel.png)