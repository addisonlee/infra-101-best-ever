const expect = require('chai').expect;

const { checkFuntion } = require('../../routes/greeting');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) {
        this.sendCalledWith = arg;
    }
};

describe('Greetings Route', function() {
    describe('CheckFuntion() function', function() {

        it('Should return error if no name provided ', function() {
            checkFuntion(req, res);

            expect(res.sendCalledWith).to.contain('error');
        });

        it('Should return successful message if name provided', function() {
            req.body.name = 'some provided name';

            checkFuntion(req, res);

            expect(res.sendCalledWith).to.contain(req.body.name);
        });
    })
});