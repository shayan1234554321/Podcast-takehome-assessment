import express from "express";
import podcastRoute from "./podcast.js";

const router = express.Router();

router.use("/podcasts", podcastRoute);

export default router;
