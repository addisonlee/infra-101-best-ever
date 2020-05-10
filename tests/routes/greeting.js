const expect = require('chai').expect;

const { checkFunction } = require('../../routes/greeting');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) {
        this.sendCalledWith = arg;
    }
};

// I would have rejected this had it been a PR - when it comes to testing endpoints,
// I prefer integration style tests using something like:
// https://www.chaijs.com/plugins/chai-http/
describe('Greetings Route', function() {
    describe('checkFunction() function', function() {

        it('Should return error if no name provided ', function() {
            checkFunction(req, res);

            expect(res.sendCalledWith).to.contain('error');
        });

        it('Should return successful message if name provided', function() {
            req.body.name = 'some provided name';

            checkFunction(req, res);

            expect(res.sendCalledWith).to.contain(req.body.name);
        });
    })
});
