const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const errorHandler = require("errorhandler");
// load env
dotenv.config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 7001;
app.use(errorHandler());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}

app.use('/api/v1/profile', require("./router/profile"));

app.use((err, req, res) => {
    if (err) {
        res.status(500).json({
            message: "Server Error"
        });
    }
});

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});