

const env = {
  database: 'apistiendaropa',
  username: 'apistiendaropa_user',
  password: '1AHQ6vLQx0EOzE6f9dc5nwv5hUykFTlU',
  host: 'dpg-cqlek088fa8c73appv6g-a.oregon-postgres.render.com',
  dialect: 'postgres',
  pool: {
    max: 5, 
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;