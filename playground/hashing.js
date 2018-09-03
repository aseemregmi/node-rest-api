const bcrypt = require('bcryptjs');

let password = '123abc';

bcrypt.genSalt(100, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

const hashedPassword =
  '$2a$10$Abo6hQBbv5PEAlQqBsa9BOi/G9u29.DD7Cnbj47V0hjKVuMo.ntD.';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
