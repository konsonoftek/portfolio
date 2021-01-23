const fs = require('fs');
require('dotenv').config();

fs.writeFileSync('./.env', `REACT_APP_USER_ID=${process.env.REACT_APP_USER_ID}\n`);