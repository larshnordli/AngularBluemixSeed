'use strict';

describe('Controller: HowToCtrl', function() {

    // load the controller's module
    beforeEach(module('angularBluemixSeedApp'));

    var HowToCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        HowToCtrl = $controller('HowToCtrl', {
            $scope: scope
                // place here mocked dependencies
        });
    }));

    it('should attach a list of awesomeThings to the scope', function() {
        expect(HowToCtrl.awesomeThings.length).toBe(3);
    });
});
