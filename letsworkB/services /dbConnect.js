const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/letswork');

module.exports = {
    db,
}