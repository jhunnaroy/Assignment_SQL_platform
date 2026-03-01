const forbidden = ["DROP", "DELETE", "UPDATE", "INSERT", "ALTER", "TRUNCATE"];

const validateQuery = (req, res, next) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const upperQuery = query.trim().toUpperCase();

  if (!upperQuery.startsWith("SELECT")) {
    return res.status(400).json({
      error: "Only SELECT queries are allowed",
    });
  }

  for (let word of forbidden) {
    if (upperQuery.includes(word)) {
      return res.status(400).json({
        error: "Dangerous query detected",
      });
    }
  }

  next();
};

module.exports = validateQuery;