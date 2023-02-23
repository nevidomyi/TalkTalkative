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
    getUser : (req, res, next) => {
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
        console.log(req.body);

        let userParams = getUserParams(req.body);
        let newUser = new User(userParams);
        let error = newUser.joiValidate(userParams);


        if (error) {
            console.log("Validate failed!");
            console.log(error);
            return next();
        }

        User.register(newUser, (error, user) => {
            if (user) {
                console.log("user created succesful");
                // res.locals.redirect = "/user";
            } else {
                console.log(error);
                // res.locals.redirect = "/user/new";
                next();
            }
        })
    }
}