const users = ["Quentin", "Alex"];

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
};