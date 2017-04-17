beforeEach(function() {
  // expect(moviesPage.getTitleText()).textEqual('21 Movies')
  this.addMatchers({
    textEquals: function(util, customEqualityMatchers) {
      // util.equals(a, b, customEqualityMatchers)
      return {
        compare: function(actual, expected) {
          var ret = {};
          // pass, message
          ret.pass = actual === expected;
          if (ret.pass)
            ret.message = 'Hurray, the text is equal';
          else
            ret.message = 'Expected ' + actual + ' to equal ' + expected + ', but was ' + actual;

          return ret;
        }
      }
    }
  })
})