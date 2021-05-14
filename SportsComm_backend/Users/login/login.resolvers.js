import user from "../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      const userlogin = await user.findOne({ username });
      if (!userlogin) {
        return {
          ok: false,
          error: "User not found",
        };
      }
      // if user is found then check passowrd with args.password
      const passwordOk = await bcrypt.compare(password, userlogin.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "Incorrect password",
        };
      }

      // issue a token and send it to user
      const token = jwt.sign(
        { exp: Math.floor(Date.now() / 1000) + 60 * 60, id: userlogin._id },
        process.env.SECRET_KEY
      );
      console.log(userlogin.idType);
      return {
        ok: true,
        token,
        type: userlogin.idType,
      };
    },
  },

  Query: {
    getRole: async (_, { username }, { logedInUser }) => {
      try {
        const role = await user.findOne(
          {
            username,
          },
          "idType"
        );
        console.log("role", role);

        return {
          type: role.idType,
        };
      } catch (e) {
        console.log(e);
      }
    },
  },
};
