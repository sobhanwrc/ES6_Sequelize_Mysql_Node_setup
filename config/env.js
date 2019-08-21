const env = {
    database: 'medusOrderTransactionDB',
    username: 'onoadmin',
    password: 'on0Metr*1218',
    host: '13.232.255.48',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
module.exports = env;
  