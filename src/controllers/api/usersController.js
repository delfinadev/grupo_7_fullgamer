const db = require("../../../database/models");

controller = {
    list: (req, res) => {
        db.Usuarios.findAll({
            attributes: ["id", "user", "email"]
        })
            .then((users) => {
                let usersList = [];

                users.forEach(function(user) {
                    usersList.push({
                        id: user.id,
                        name: user.user,
                        email: user.email,
                        detail: "/api/users/" + user.id
                    })
                });
            
                return res.json({
                    count: users.length,
                    users: usersList
                })
                .catch(error => {
                    console.log(error);
                });
            })
    },
    detail: (req, res) => {
        db.Usuarios.findByPk(req.params.id)
            .then(user => {
                return res.json({
                    id: user.id,
                    name: user.user,
                    email: user.email,
                    notifications: user.notifications,
                    url: "/img/users/" + user.image
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = controller;