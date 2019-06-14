module.exports = {
    checkFuntion: function(req, res) {
        if (!req.body.name) {
            res.send('An error occurred: Name is a required paramter');
            return;
        }
        res.send('Returning provider name: '.concat(req.body.name));
    }
};