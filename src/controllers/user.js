const User = require('../models/user');
const AppError = require('../util/appError');
// TODO: LEARN HOW TO STORE IMAGES AND SEND RESPONSE TO FRONT-END
exports.clearUsers = () => {
	User.destroy({
		where: {},
		truncat: true,
	});
};
exports.createTemplateUsers = ( firstName, lastName, email, imageUrl, subheading, password, passwordConfirm) => {
    if(!firstName || !lastName || !email || !imageUrl || !subheading || !password || !passwordConfirm)
        throw new Error('Empty Field');
	User.create({ firstName, lastName, email, imageUrl, subheading, password, passwordConfirm});
};


