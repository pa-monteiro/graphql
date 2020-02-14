import {GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';
import CommentType from './CommentType';
import { getComments } from './CommentLoader';

export const mutations = {
    saveComment: {
        type: CommentType,
        resolve: saveComment,
        args: {
            input: {
            type: new GraphQLInputObjectType({
                name: 'CommentInput',
                fields: {
                    name: {
                        type: GraphQLString
                    },
                    content: {
                        type: GraphQLString
                    }
                }            
            })
        }
        }       
    }        
}

export const queries = {
    getComments: {
        type: GraphQLList(CommentType),
        resolve: getComments
    }
}