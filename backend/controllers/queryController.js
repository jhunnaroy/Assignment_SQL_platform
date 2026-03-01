const pool = require("../config/pg");
const Attempt = require("../models/Attempt");

const runQuery = async (req, res) => {
    console.log("BODY RECEIVED:", req.body); 
  const { query, assignmentId } = req.body;

  try {
    const result = await pool.query(query);

    await Attempt.create({
      assignmentId,
      query,
      isSuccessful: true,
      resultPreview: result.rows.slice(0, 5),
    });

    res.json({
      success: true,
      rowCount: result.rowCount,
      rows: result.rows,
    });

  } catch (error) {

    await Attempt.create({
      assignmentId,
      query,
      isSuccessful: false,
    });

    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { runQuery };


