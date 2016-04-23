'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Routing', function() {
    it('should render / when user navigates to /', function() {
        browser.get('#/');
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });
    it('should render /howto when user navigates to /howto', function() {
        browser.get('#/howto');
        expect(browser.getLocationAbsUrl()).toMatch("/howto");
    });
    it('should render /when user navigates to /notcorrectroute', function() {
        browser.get('#/notcorrectroute');
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });

});
