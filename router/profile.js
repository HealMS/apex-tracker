const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get('/:platform/:gamertag', async (req, res, next) => {
    const headers = {
        "TRN-Api-Key": process.env.TRACKER_API_KEY
    };
    const { platform, gamertag } = req.params;
    try {
        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, {
            headers
        });
        const data = await response.json();
        //not found
        if (data.errors && data.errors.length) {
            return res.sendStatus(404).json({
                message: "profile Not found"
            });
        }
        //found
        res.json(data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;