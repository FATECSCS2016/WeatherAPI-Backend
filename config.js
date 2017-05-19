module.exports = {
    databaseUrl: process.env.NODE_ENV === 'production' ? '172.17.0.1' : 'localhost'
}