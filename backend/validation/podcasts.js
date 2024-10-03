import yup from "yup";
import { checkUnknownValues } from "./helper.js";

export const getAllPodcastsValidation = yup
  .object()
  .shape({
    search: yup.string().trim().max(100),
    title: yup.string().trim().max(100),
    categoryName: yup.string().trim().max(100),
    page: yup.string().trim().max(100),
    limit: yup.string().trim().max(100),
  })
  .test(
    "custom-validation",
    "Custom validation failed",
    checkUnknownValues([], ["search", "title", "categoryName", "page", "limit"])
  );
