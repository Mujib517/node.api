var defaultCtrl = function () {

    var get = function (req, res) {
        res.status(200)
            .send("Express API");
    };

    var health = function (req, res) {
        var health = { status: "Up" };
        res.status(200);
        res.json(health);
    };

    //revealing module design pattern
    return{
        get:get,
        health:health
    }
};


module.exports = defaultCtrl(); 