(function() {
  'use strict';

  describe('Unit: common.factories', function() {

    // Load modules require for depency injection.
    beforeEach(function() {
      module('common.factories');
    });

    describe('objectUtilities factory', function() {
      var array, arrayCloned, object, objectCloned, objectUtilitiesFactory;

      // Mock some factories for testing
      beforeEach(inject(function($injector) {
        objectUtilitiesFactory = $injector.get('objectUtilities');

        array = [
          '123', '456', '789', '6807'
        ];
        object = {
          'name'  : 'peter',
          'age'   : 18,
          'sex'   : 'male'
        };
      }));

      it('Checking clone object', function() {

        // Cloned stuff
        var arrayCloned     = objectUtilitiesFactory.cloneObject(array);
        var objectCloned    = objectUtilitiesFactory.cloneObject(object);

        // Check cloned stuff equal
        expect(arrayCloned).toEqual(array);
        expect(objectCloned).toEqual(object);

        // Change property of cloned stuff for testing
        arrayCloned[0]      = '456';
        objectCloned.name   = 'david';

        // Check cloned stuff not equal after change property value
        expect(arrayCloned).not.toEqual(array);
        expect(objectCloned).not.toEqual(object);
      });

      it('Checking Array type', function() {
        expect(objectUtilitiesFactory.isArray(object)).toBe(false);
        expect(objectUtilitiesFactory.isArray(array)).toBe(true);
      });

      it('Checking Array empty', function() {
        var arrayEmpty = [];

        expect(objectUtilitiesFactory.isArrayEmpty(arrayEmpty)).toBe(true);
        expect(objectUtilitiesFactory.isArrayEmpty(array)).toBe(false);
      });

      it('Checking Object empty', function() {
        var objectEmpty = {};

        expect(objectUtilitiesFactory.isObjectEmpty(objectEmpty)).toBe(true);
        expect(objectUtilitiesFactory.isObjectEmpty(object)).toBe(false);
      });
    });
  });
})();