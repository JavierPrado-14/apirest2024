

const env = {
  database: 'practica_parcial_eiaz',
  username: 'practica_parcial_eiaz_user',
  password: 'WzRmFOzcqe0JlYDzA1Jo385OsShXgXZD',
  host: 'dpg-crop7shu0jms73cdeql0-a.oregon-postgres.render.com',
  dialect: 'postgres',
  pool: {
    max: 5, 
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;