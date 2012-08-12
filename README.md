node-pastie
===========

Wrapper to create new paste on http://pastie.org 

# Installation

    npm install node-pastie

# Usage

    var pastie = require('node-pastie');

You can create a pastie with a string:

    pastie.create("Any string can fit here", function(err, url) {
      console.log("Pastie url: "+url);
    });

Or you can simply pass an object (that will be stringified)

    pastie.create({message: "You can pass objects too!"}, function(err, url) {
      console.log("Pastie url: "+url);
    });

# Options

By default, it creates a private pastie, you can create a public pastie by passing the option `{private: false}`

    pastie.create({message: "You can pass objects too!"}, { private: false }, function(err, url) {
      console.log("Pastie url: "+url);
    });

# Test

You can run the tests with `mocha`

# Author

Xavier Damman (@xdamman)
