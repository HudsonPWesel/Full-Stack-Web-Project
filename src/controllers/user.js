const User = require('../models/user');

// TODO: LEARN HOW TO STORE IMAGES AND SEND RESPONSE TO FRONT-END
exports.clearUsers = () => {
	User.destroy({
		where: {},
		truncat: true,
	});
};
exports.createTemplateUsers = (
	firstName,
	lastName,
	email,
	imageUrl,
	subheading
) => {
	User.create({
		firstName,
		lastName,
		email,
		imageUrl,
		subheading,
	});
};
