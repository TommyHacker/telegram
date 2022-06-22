const Telegraph = require("../models/Telegraph");

exports.getAll = async (req, res) => {
  try {
    const telegraphs = await Telegraph.all;
    res
      .status(200)
      .json({ success: true, message: "got all telegraphs", data: telegraphs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const telegraph = await Telegraph.findById(id);
    res
      .status(200)
      .json({ success: true, message: "got one telegraph", data: telegraph });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const telegraph = await Telegraph.create(req.body);
    res
      .status(201)
      .json({
        success: true,
        message: "created telegraph successfully.",
        data: telegraph,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
