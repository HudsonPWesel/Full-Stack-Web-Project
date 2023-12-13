const catchAsync = require('../util/catchAsync');
module.exports =  catchAsync(async (req, res, next) => {
    console.log(req.headers);
    res.send('iowjefoi');
    // Get token and check if there
    // Verify token
    // check if user still exists
    // check fi user hcanged password after the token was issued
    next();
});

