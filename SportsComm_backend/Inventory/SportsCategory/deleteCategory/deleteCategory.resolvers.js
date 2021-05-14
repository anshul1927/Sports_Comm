import Sports from "../../../models/equipments";

export default {
  Mutation: {
    deleteCategory: async (_, { category }) => {
      try {
        console.log("##");

        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "nothing",
        };
      }
    },
  },
};
