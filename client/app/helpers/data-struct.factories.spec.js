(function() {
  'use strict';

  describe('Unit: data-struct.factories', function() {

    // Load modules require for depency injection.
    beforeEach(function() {
      module('common.factories');
      module('data-struct.factories');
    });

    describe('traverseStacks factory', function() {
      var traverseStacksFactory, stacks, cases;

      // Mock some factories for testing
      beforeEach(inject(function($injector) {
        traverseStacksFactory = $injector.get('traverseStacks');
        stacks = [
          [0], [123, 1234], [566, 978, 100], [56, 67]
        ];
      }));

      it('should match number of cases occur and equal each case element value', function() {
        cases = traverseStacksFactory(stacks);

        // Check number of cases occur and compare their value
        expect(cases.length).toEqual(12);
        expect(cases).toEqual([
          [0,1234,100,67],[0,1234,100,56],[0,1234,978,67],[0,1234,978,56],[0,1234,566,67],[0,1234,566,56],
          [0,123,100,67],[0,123,100,56],[0,123,978,67],[0,123,978,56],[0,123,566,67],[0,123,566,56]]
        );
      });
    });
  });
})();