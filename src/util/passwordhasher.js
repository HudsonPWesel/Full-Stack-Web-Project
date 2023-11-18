const bcrypt = require('bcrypt');

module.exports = (user) => {
    return bcrypt.hash(user.password, 10)
        .then(hash => {
            console.log(user.password)
            console.log(hash);
            user.password = hash;
            user.passwordConfirm = hash;
            
        })
        .catch(err => { 
            throw new Error(); 
        });
}
