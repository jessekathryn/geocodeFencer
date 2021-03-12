# geoCodeFencer
Field Maker SAP with JavaScript ES6 inside Rails API 

A single page Javascript application for creating and saving field locations with a Google API enabling user to create farm attributes.

As an extension of CattleLog App, the farm maker is used to test run the ability to draw and edit fields given the longitude and latitude coordinates.  The satellite image is provided via Google's Map API and front-end design is built with JavaScript. This project will ultimately belong to the Rails App, Cattlelog and will later be published to Heroku.

The front-end design is based off of Farm apps and a boostrap theme created in Cattlelog and will remain consistent, as if  user logs into his/her dashboard, but this SAP will not use authentication; rather, be acclamated into the auth of Cattelog Rails App, which uses bcrpyt gem. The icons and colors are custom.

# Installation
front end:

OS X & Linux:

```npm install```

back end:

```bundle install```

# Development setup
front end:

```npm start```

back end:

```
rails db:create 

rails db:migrate 

rails s
