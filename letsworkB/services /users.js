const {db} = require('./dbConnect');
const UsersService = {};

UsersService.create = (captions, likes, comments) => {
    const sql = `INSERT INTO users (captions, likes, comments) VALUES ($[captions], $[likes], $[comments])`
    return db.one(sql, {captions, likes, comments});
}

UsersService.getUserByUsername = (username) => {
    const sql = `SELECT * FROM users WHERE username = $[username]`
    return db.any(sql, {username})
}


module.exports = UsersService;


