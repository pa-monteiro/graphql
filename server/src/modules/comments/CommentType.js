import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
    name: 'CommentType',
    fields: {
        id: {
            type: GraphQLNonNull(GraphQLString)
        },
        name: {
            type: GraphQLNonNull(GraphqlString)
        },
        content: {
            type: GraphQLNonNull(GraphqlString)
        },
        createdAt: {
            type: GraphQLNonNull(GraphQLDateTime)
        },
        updatedAt: {
            type: GraphQLNonNull(GraphQLDateTime)
        }
    }
})