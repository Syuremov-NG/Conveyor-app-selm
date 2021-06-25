import express from "express";
const router = express.Router();

import res1 from "./jsons/res1.js";
import res2 from "./jsons/res2.js";
import res3 from "./jsons/res3.js";

const dataArr = [res1, res2, res3];

const getRandomInt = () => dataArr[Math.floor(Math.random() * dataArr.length)];

// @route GET api/test/
// @desc get json
// @access Public
router.get("/", async (req, res) => {
  try {
    return res.json({ success: true, res: getRandomInt() });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, res: "Something went wrong..." });
  }
});

export default router;
