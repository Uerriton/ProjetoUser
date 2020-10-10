// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-fe00e1d4e556527319e830b4b2041c04c446a607.c5wczbegn0wh.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'jND02AT.jL48Jer{ul0AHy1_*6;,za,['
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}