const bcrypt = require('bcrypt');

async function verifyPasword(){
  const myPassword = 'micuenta bb 888';
  const hash = '$2b$10$D0m1FheJAcC6r/lT5pjSgOKMopQZi6x9zUbekbYOSCh/GjrXcfxa2'
  const isMatch = await bcrypt.compare(myPassword, hash) //  sete verificara si hacer match
  console.log(isMatch);
}

verifyPasword();
