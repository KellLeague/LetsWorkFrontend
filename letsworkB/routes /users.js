const express = require('express')
// const {db} = require('./dbConnect');
const UsersRoutes  = express.Router();
const UsersService = require('../services/users')

// get, put, post, delete, patch 
UsersRoutes.get('/username/:username', (req, res, next) => {
    const {username} = req.params

    UsersService.getUserByUsername(username)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

// UsersRoutes.get('/email', (req, res, next) => {
//     const {} = req.params

//     UsersService.getUserByUsername(username)
//         .then(data => {
//             res.json(data)
//         })
//         .catch(err => {
//             res.json(err)
//         })
// })



module.exports = UsersRoutes;