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

        it('Should return error if no name provided is given ', function() {
            checkFuntion(req, res);

            expect(res.sendCalledWith).to.contain('error');
        });

        it('Should return provider name', function() {
            req.body.name = 'some provider name';

            checkFuntion(req, res);

            expect(res.sendCalledWith).to.contain(req.body.name);
        });
    })
});