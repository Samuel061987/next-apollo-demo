import casual from "casual";

export default {
  Query: {
    users: (parent, args) => {
      const no_of_records = 2000;
      let users = [];
      let result = [];
      const allusers = Array(no_of_records);

      for (let i = 0; i < no_of_records; i++) {
        allusers.push({
          name: casual.name,
          address: casual.address,
          email: casual.email,
          phone: casual.phone,
        });
      }
      if (allusers.length > no_of_records) {
        users = allusers.slice(no_of_records, 2 * no_of_records);
      } else {
        users = allusers;
      }

      for (let i = 0; i <= users.length; i++) {
        if (i >= args.offset) {
          result.push(users[i]);
        }
        if (args.limit && result.length === args.limit) {
          break;
        }
      }
      return result;
    },
  },
};