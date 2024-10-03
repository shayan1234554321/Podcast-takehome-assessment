import express from "express";
import podcastController from "../../controller/v1/podcast.js";

const router = express.Router();

router.get("/", podcastController.getAllPodcasts);

export default router;
