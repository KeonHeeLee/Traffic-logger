import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json({
        message: "GET = Hello World!"
    });
});

router.post("/hello", (req, res) => {
    return res.status(200).json({
        message: "POST = Hello World!"
    });
});

export default router;