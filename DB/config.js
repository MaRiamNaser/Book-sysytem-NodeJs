module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'M_aryasmoh109',
  DB: 'book_store',
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
}