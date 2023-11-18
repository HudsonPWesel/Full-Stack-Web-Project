exports.login = (req,res) => {
    const {email, password } = req.body;
    console.log(email, password)
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');

}
