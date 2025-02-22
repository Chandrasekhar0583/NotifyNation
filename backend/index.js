    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');
    const cors = require('cors');
    const mongoose = require('mongoose');
    const bodyparser = require('body-parser');
    const Route = require("./Routes/FirstRoutes");
    var dotenv = require("dotenv");

    var index = express();

    dotenv.config();
    // Middleware setup

    const FRONTEND_URL = process.env.FRONTEND_URL;
    index.use(cors({
        origin: FRONTEND_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }));
    index.use(bodyparser.json());
    index.use(logger('dev'));
    index.use(express.json());
    index.use(express.urlencoded({ extended: false }));
    index.use(cookieParser());
    index.use(express.static(path.join(__dirname, 'public')));

    mongoose.connect(process.env.MONGO_URI)
    .then((res) => {
        console.log('DB connected successfully...');
    })
    .catch(err => {
        console.error('MongoDB connection error:');
    })
    // Routes setup
    index.use("/",Route );

    // Fallback route for 404
    index.use(function(req, res, next) {
        next(createError(404));
    });

    // Error handler for APIs
    index.use(function(err, req, res, next) {
        res.status(err.status || 500).json({
            message: err.message,
            error: req.app.get('env') === 'development' ? err : {}
        });
    });

    index.listen(5000, function() {
        console.log("Server started on port 5000");
    });

    module.exports = index;
