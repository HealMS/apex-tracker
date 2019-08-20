const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const errorHandler = require("errorhandler");
// load env
dotenv.config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 7001;
if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
    app.use(errorHandler());
}

app.use('/api/v1/profile', require("./router/profile"));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public'));

    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
}
// error handler  after all middlewares
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Server Error"
    });
});

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});