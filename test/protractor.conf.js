exports.config = {
    specs: ['e2e-tests/*.js'],
    baseUrl: 'http://localhost:9000/',
    capabilities: {
       'browserName': 'chrome'
     },
framework: 'jasmine2',
     jasmineNodeOpts: {
       showColors: true,
       defaultTimeoutInterval: 30000,
       isVerbose : true,
       includeStackTrace : true
     },
     onPrepare: function() {
       var jasmineReporters = require('jasmine-reporters');
       jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
           consolidateAll: true,
           savePath: 'test/reports',
           filePrefix: 'e2e-tests'
       }));
     }
  };



if (process.env.APP_NAME && process.env.APP_NAME !== '') {
exports.config.baseUrl = 'http://' + process.env.APP_NAME + '.mybluemix.net/';
if (process.env.SAUCE_USERNAME == '' || process.env.SAUCE_ACCESS_KEY == '') {
  console.warn(
    '\nPlease configure your sauce credential:\n\n' +
    'export SAUCE_USERNAME=<SAUCE_USERNAME>\n' +
    'export SAUCE_ACCESS_KEY=<SAUCE_ACCESS_KEY>\n\n'
  );
  throw new Error('Missing Sauce Labs Credentials!');
}
else{
  exports.config.sauceUser = process.env.SAUCE_USERNAME;
  exports.config.sauceKey =  process.env.SAUCE_ACCESS_KEY;
}
exports.config.multiCapabilities = [{
  'browserName': 'firefox'
}, {
  'browserName': 'chrome'
},
{
  'browserName': 'safari'
}, {
  'browserName': 'internet explorer'
}];
}
