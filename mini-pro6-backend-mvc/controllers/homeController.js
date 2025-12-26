// Home controller
exports.getHome = (req, res) => {
  res.json({ message: "Welcome to the Home route!" });
};

// Dynamic route: current server time
exports.getTime = (req, res) => {
  const currentTime = new Date();
  res.json({ message: `Current server time is ${currentTime.toLocaleTimeString()}` });
};

// POST: echo JSON input
exports.postEcho = (req, res) => {
  const data = req.body;

  // Bonus: simple validation
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: "JSON body is empty" });
  }

  res.json({ received: data });
};
