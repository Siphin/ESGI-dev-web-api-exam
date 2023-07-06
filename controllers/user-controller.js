const users = ["Quentin", "Alex"];

exports.getAllUsers = (req, res) => {
  res.json(users);
};