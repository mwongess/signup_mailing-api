const dbConfig = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  server: process.env.SERVER,
  pool: {
    max: 10,
    min: 5,
    idleTimeoutMillis: 3000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};
