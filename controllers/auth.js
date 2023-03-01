const bcrypt = require("bcrypt")
const user = require("../models/user")

var userAuthenticated;

const authenticate = (path,email, req, res) => {
    console.log("auh",userAuthenticated)

    if (userAuthenticated) {
        req.session.loggedIn = true;
        req.session.username = email;
        res.redirect("/useraccount");
    } else {

        res.redirect('/login');
    }
}

// Signup
const hash_password = (username, email, plaintext,req,res) => {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(plaintext, salt, function (err, hash) {
            save_data(username, email, hash,req,res)
        });
    });
}
const save_data = async (username, email, password,req,res) => {
    const data = new user({
        name: username,
        email: email,
        password: password
    })
    await data.save().then((result) => {
       if (result) {
        userAuthenticated = true
         authenticate("/useraccount",email,req,res)
       }
    }).catch((err) => {
        console.log(err)
    })
}
// Login
const validate = async (useremail, password, req, res) => {
    var email = useremail
    await user.find({ email: email }).then(async (result) => {
        if (result.length > 0) {
            const hash = result[0].password
            await bcrypt.compare(password, hash).then((data) => {
                if (data == true) { userAuthenticated = true } else { userAuthenticated = false }
                authenticate("/useraccount",email,req, res)
            }).catch((err) => {
                // console.log(err)
            })
        }
    }).catch((err) => {
        console.log(err)
    })
}


module.exports = { hash_password, validate }