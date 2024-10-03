import * as yup from "yup";
import { getAllPodcastsValidation } from "../../validation/podcasts.js";
import view from "../../view/v1/podcast.js";

const getAllPodcasts = async (req, res) => {
  const { query } = req;
  try {
    await getAllPodcastsValidation.validate(query);

    const result = await view.getAllPodcasts({ query });
    res
      .status(result.status || 200)
      .set("Content-Type", result.contentType || "application/json")
      .send(result.data || null);
  } catch (validationError) {
    if (validationError instanceof yup.ValidationError) {
      res.status(400).json({ error: validationError.message });
    } else {
      res.status(500).send("Error getting podcasts");
    }
  }
};

const controller = {
  getAllPodcasts,
};

export default controller;
