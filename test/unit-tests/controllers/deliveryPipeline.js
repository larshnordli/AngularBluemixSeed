'use strict';

describe('Controller: DeliveryPipelineCtrl', function() {

    // load the controller's module
    beforeEach(module('angularBluemixSeedApp'));

    var DeliveryPipelineCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        DeliveryPipelineCtrl = $controller('DeliveryPipelineCtrl', {
            $scope: scope
                // place here mocked dependencies
        });
    }));

    it('should attach a list of awesomeThings to the scope', function() {
        expect(DeliveryPipelineCtrl.awesomeThings.length).toBe(3);
    });
});
