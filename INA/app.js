const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport')
const bodyParser =  require('body-parser')

const chatbot = require('./handlers/chatbot')
const imageGenerator = require('./handlers/imageGenerator')
const contentFilter = require('./handlers/contentFilter')
const config = require('./utils/loadConfiguration')();
const serviceLocator = require('./utils/serviceLocator')(config);
const keys = require('./config/keys')
// order swapped becoz earlier getting Schema hasn't been registered for model "users"
require('./models/User')
require('./services/passport')

if(process.env.NODE_ENV === 'production'){
    // Express will serve up produciton assets like main.js file or main.css file
    app.use(express.static('../client/build'))
    // Express will serve up index.html file if it dosen't recognize the route
    const path = require('path')
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname, '../client', 'build','index.html'))
    })
}

const app = express(); 

// CookieSession extracts the cookie out of the request and stores it in req.session. Passport then make use of req.session to pull user id out of req.data.

app.use(bodyParser.json())

app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app);
// require('./routes/surveyRoutes')(app);

mongoose.connect(keys.mongoURI) 

app.use(express.json());

app.post('/api/completions',contentFilter(serviceLocator),chatbot(serviceLocator))

app.post('/generateImage' , imageGenerator(serviceLocator))

app.use((err, req, res, next) => {
    delete err.stack;
    return res.status(err.statusCode || 500).send(err.message || 'Some error occured');
})

app.listen(3001 , () => console.log('Server is up and Running'));  