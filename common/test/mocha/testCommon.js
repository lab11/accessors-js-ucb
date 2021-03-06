// @version: $$Id: testCommon.js 783 2016-05-13 18:55:54Z cxh $$
// Run the test/TestComposite code in accessors/web/test/TestComposite.js
// To run this test, do:
//   sudo npm install -g mocha
//   mocha TestCommon.js
// To run all the tests, cd to the top level directory and run 'ant tests'.
// See https://chess.eecs.berkeley.edu/ptexternal/wiki/Main/JSMocha
describe('hosts/browser/common/test/mocha/testCommon.js or hosts/common/test/mocha/testCommon.js (symlink): CommonTests', function () {
    it('Load and run the accessor common host tests', function () {
        var testCommon = require('../testCommon.js');
    });
});
