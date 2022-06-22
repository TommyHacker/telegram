exports.getAll = (req, res) => {
  try {
    const telegraphs = "all telegraphs";
    res
      .status(200)
      .json({ success: true, message: "got all telegraphs", data: telegraphs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOne = (req, res) => {
  try {
    const { id } = req.params;
    const telegraph = "one telegraph";
    res
      .status(200)
      .json({ success: true, message: "got one telegraph", data: telegraph });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.create = (req, res) => {
  try {
    const { title, pseudonym, body } = req.body;
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
