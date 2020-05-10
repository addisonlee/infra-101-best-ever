module.exports = {
    checkFunction: function(req, res) {
        if (!req.body.name) {
            res.send('Error: "name" is a required parameter');
            return;
        }
        res.send('Greetings: ' + req.body.name);
    }
};
