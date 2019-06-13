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
        it('Should error out if no name provided ', function() {
            checkFuntion(req, res);
            expect(res.sendCalledWith).to.contain('error');
        });
    })
});