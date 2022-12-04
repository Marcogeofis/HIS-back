const bcrypt = require('bcrypt');

async function hashPasword(){
  const myPassword = 'micuenta bb 888'; // $2b$10$D0m1FheJAcC6r/lT5pjSgOKMopQZi6x9zUbekbYOSCh/GjrXcfxa2
  const hash = await bcrypt.hash(myPassword, 10) // 10 es el número de encritaciones que hace
  console.log(hash);
}

hashPasword();

/**
 * al correr el programa me genero mi password encriptado de myPassword
 * despues del $2b$10$ lo demas es la incriptación que me genero.
 * $2b$10$D0m1FheJAcC6r/lT5pjSgOKMopQZi6x9zUbekbYOSCh/GjrXcfxa2
 */
