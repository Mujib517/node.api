var User = require('../models/user.model');
var jwt = require('jsonwebtoken');

module.exports = {
    signup: function (req, res) {
        var user = new User(req.body);

        user.save(function (err, user) {
            if (err) {
                res.status(500);
                res.send("Internal Server Error");
            }
            else {
                res.status(201);
                res.send("Successfully registered");
            }
        });
    },

    signin: function (req, res) {
        var username = req.body.username;
        var password = req.body.password;

        User.findOne({ username: username, password: password })
            .exec()
            .then(function (user) {
                if (user) {

                    var token = jwt.sign({username:user.username}, 'secret',{expiresIn:'5m'});
                    //send token back to the user
                   
                    var response = {
                        username: user.username,
                        token: token
                    };
                    res.status(200);
                    res.send(response);
                }
                else {
                    res.status(401);
                    res.send("Unauthorized");
                }
            })
            .catch(function (err) {
                res.status(401);
                res.send("Unauthorized");
            });
    }
};