import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import resolvers from "./resolvers";

const UserProfileType = new GraphQLObjectType({
  name: "UserProfile",
  fields: {
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    nombre: { type: GraphQLString },
    biografia: { type: GraphQLString },
    role: { type: GraphQLInt },
    two_factor_enabled: { type: GraphQLBoolean },
  },
});

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    profile: {
      type: UserProfileType,
      resolve: resolvers.getProfile,
    },
  },
});

export default new GraphQLSchema({
  query: QueryType,
});
