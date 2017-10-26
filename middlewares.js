var jwt=require('jsonwebtoken');

var middlewares = {
    isAuthorized: function (req, res, next) {

        var token = req.headers["authorization"];

        jwt.verify(token, 'secret', function (err, userInfo) {
            if (!err) next();
            else {
                res.status(401);
                res.send("Unauthorized");
            }
        });
    }
}


module.exports = middlewares;