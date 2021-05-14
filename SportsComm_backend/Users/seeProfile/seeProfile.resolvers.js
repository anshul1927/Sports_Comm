import user from "../../models/user";

export default {
  Query: {
    seeProfile: (_, { username }, { logedInUser }) =>
      user.findOne({
        username,
      }),
  },
};
