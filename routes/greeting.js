module.exports = {
    checkFuntion: function(req, res) {
        if (!req.body.name) {
            res.send('An error occurred: Name is a required parameter');
            return;
        }
        res.send('Returning provided name: '.concat(req.body.name));
    }
};