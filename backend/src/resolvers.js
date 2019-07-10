const User = require("./models/User");

module.exports = {
  Query: {
    users: () => User.find(),
    user: (source, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: (source, { name, email }) => User.create({ name, email }),
    deleteUser: async (souce, { id }) => await User.findByIdAndDelete(id)
  }
};
