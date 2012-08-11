var request = require('superagent')
  ;


/*
 * Usage: var pastie = require('node-pastie');
 *        
 *        // code can be an object or a string 
 *        // options is optional, default: { private: true }
 *        pastie.create(code, options, function(error, pastieUrl) {
 *          console.log("New pastie created at " + pastieUrl);
 *        });
 *
 */


 module.exports = {
      create: function(code, options, fn) {
        if(!fn && typeof options == 'function') { 
          fn = options; options = null;
        }

        if(typeof fn != 'function') 
          throw new Error("You must provide a callback function");

        options = options || {};
        options.private = (typeof options.private == 'boolean') ? options.private : true;

        var body = (typeof code == 'string') ? code : JSON.stringify(code);

        request
            .post("http://pastie.org/pastes")
            .type('form')
            .send({ 
                'paste[body]' : body   
              , 'paste[authorization]' : 'burger'
              , 'paste[restricted]' : (options.private) ? 1 : 0
            })
            .end(function(res) {
              if(res.status!=200) return fn(new Error("Couldn't create the pastie, HTTP code: "+res.code));

              var path = res.req.path;
              var url = "http://pastie.org"+path;
              fn(null, url);
            });
      }
 };
