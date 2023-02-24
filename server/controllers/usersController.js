const User = require("../models/user"),
    getUserParams = body => {
        return {
            username: body.username,
            password: body.password,
            email: body.email,
            contact_info: body.contact_info,
            avatar: body.avatar,
            status: body.status,
        }
    }

module.exports = {
    getUser: (req, res, next) => {
        let userId = req.params.id;
        User.findById(userId)
            .then(user => {
                res.locals.user = user;
                res.json({
                    status: httpStatus.OK,
                    data: res.locals
                })
            })
            .catch(error => {
                console.log(`Error ${error.message}`);
                next();
            })
    },
    create: (req, res, next) => {
        const userParams = getUserParams(req.body);
        const newUser = new User(userParams);
        const validate = newUser.joiValidate(userParams);


        if (validate.error) {
            console.log("Validate failed!");
            console.log(validate.error);
            return next();
        }

        newUser.save((error, user) => {
            if (user) {
                console.log("user created succesful");
                res.send("user created succesful");
                // res.locals.redirect = "/user";
            } else {
                console.log(error);
                // res.locals.redirect = "/user/new";
                next();
            }
        })
    }
}