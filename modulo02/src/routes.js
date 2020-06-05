const {Router} = require('express');
const User = require('./app/models/User');
const UserController = require('./app/controllers/UserController');

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Eric dos Reis Alves',
        email: 'eralves02@hotmail.com',
        password_hash: '123456',
    });

    res.json(user);
})

routes.post('/users', UserController.store);

module.exports = routes;