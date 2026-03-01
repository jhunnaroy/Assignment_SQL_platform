const pool = require("../config/pg");

// Get All
const getAssignments = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM assignments ORDER BY id ASC"
    );

    res.json({
      success: true,
      data: result.rows,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get By ID
const getAssignmentById = async (req, res) => {
 
  try {
   
    console.log("ID RECEIVED:", req.params.id);

    const result = await pool.query(
      "SELECT * FROM assignments WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Assignment not found",
      });
    }

    res.json({
      success: true,
      data: result.rows[0],
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  getAssignments,
  getAssignmentById,
};