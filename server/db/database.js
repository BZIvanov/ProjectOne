const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  const db = mongoose.connection;

  db.once('open', (err) => {
    if (err) throw err;

    console.log('Database ready');
  });

  db.on('error', (reason) => {
    console.log(reason);
  });
};
