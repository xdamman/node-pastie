var expect = require('chai').expect
  , pastie = require('../lib/pastie');

describe("Pastie", function() {

  describe('Create', function() {
    it('Creates a new private pastie with a string', function(done) {
      pastie.create("Hello world", function(err, url) {
        expect(err).to.not.exist;
        // console.log("URL: ",url);
        expect(url).to.match(/pastie.org\/private\/.+/);
        done();
      });
    });

    it('Creates a new public pastie with an object', function(done) {
      pastie.create({message: "hello world"}, { private: false }, function(err, url) {
        expect(err).to.not.exist;
        // console.log("URL: ",url);
        expect(url).to.match(/pastie.org\/[0-9]+/);
        done();
      });
    });
  });
});
