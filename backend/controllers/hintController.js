const { generateHint } = require("../services/llmService");

const getHint = async (req, res) => {
  const { question, query } = req.body;

  try {
    const hint = await generateHint(question, query);

    res.json({
      success: true,
      hint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to generate hint",
    });
  }
};

module.exports = { getHint };