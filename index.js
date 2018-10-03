const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const useBodyParser = bodyParser.json({ type: '*/*'});

const User = require('./models/user');

const mongoose = require('mongoose');
mongoose.connect('mongodb://LaoShiMahan:password0@ds213513.mlab.com:13513/signup-dev', {
    useNewUrlParser: true
});

const cors = require('cors');
app.use(cors());

app.get('/', function(req, res) {
    res.send({
        message: `up and running on port: 5000`
    });
});

app.post('/api/signup', useBodyParser, function(req, res) {
    //get username and password from body
    const body = req.body;
    const email = body.email;
    const password = body.password;

    //create a new user model instance in MongoDB
    User.findOne({ email: email }, async (err, existingUser) => {
        if(err) { res.send(err) }
        if(existingUser) {
            return res.status(422).send({
                message: 'email in use'
            });
        }

        const user = new User({
            email,
            password
        });

        // save the user in MongoDB
        try {
            await user.save()

            res.send({
                success: true,
                message: 'account created',
                user
            });
        } catch (err) {
            console.log(err);
            res.status(422).send(err);
        }
    });

    //send the user back to front end client react app
    res.send({
        success: true,
        user: {
            email,
            password
        }
    });
});

app.post('/api/signin', useBodyParser, function(req, res) {
    //get username and password from body
    const body = req.body;
    const email = body.email;
    const password = body.password;

    //create a new user model instance in MongoDB
    User.findOne({ email: email }, (err, existingUser) => {
        if(err) { res.send(err) }
        if(existingUser) {
            if (password ===existingUser.password) {
                res.send({
                    success: true,
                    message: "User successfully signed in",
                    user: existingUser
                });
            } else {
                res.send({
                    success: true,
                    message: "Incorrect email or password"
                });
            }
        } else {
            res.send({
                success: true,
                message: "Incorrect email or password"
            });
        }
    });
});

const PORT = process.env.PORT || 5000;
console.log('listening on port: ', PORT);
app.listen(PORT);