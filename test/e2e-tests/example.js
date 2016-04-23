'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Routing', function() {
    it('should render / when user navigates to /', function() {
        browser.get('#/');
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });
    it('should render /howto when user navigates to /howto', function() {
        browser.get('#/deliveryPipeline');
        expect(browser.getLocationAbsUrl()).toMatch("/deliveryPipeline");
    });
    it('should render /when user navigates to /notcorrectroute', function() {
        browser.get('#/notcorrectroute');
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });
    it('The "Git repo"-link should equal "https://github.com/langz/AngularBluemixSeed.git"', function() {
        browser.get('#/');
        expect(element(by.css('#gitLink')).getAttribute('href')).toEqual('https://github.com/langz/AngularBluemixSeed.git');
    });
});
