require('dotenv').config();
const app = require('./server/app');

app.listen(process.env.PORT, () => {
  console.log(`ProductsAPI now listening on ${process.env.PORT}`);
});