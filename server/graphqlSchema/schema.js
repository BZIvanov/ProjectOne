const graphql = require('graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;
const Movie = require('../models/movie');
const Actor = require('../models/actor');

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  description: 'Here are the available fields for a movie',
  fields: () => ({                               // here we set fields to be a function, because otherwise once we have more Types and they are using each other we will run to the problem of using something before it is defined
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
    mainActor: {
      type: ActorType,
      resolve(parent, args) {
        return Actor.findById(parent.actorID)
      }
    }
  })
});

const ActorType = new GraphQLObjectType({
  name: 'Actor',
  description: 'Here are the available fields for an actor',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return Movie.find({ actorID: parent.id })   // actorID here is from the Model based on which we filter
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Pick a query type',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Movie.findById(args.id);
      }
    },
    actor: {
      type: ActorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Actor.findById(args.id);
      }
    },
    movies: {
      type: GraphQLList(MovieType),
      resolve(parent, args) {
        return Movie.find({});
      }
    },
    actors: {
      type: GraphQLList(ActorType),
      resolve(parent, args) {
        return Actor.find({});
      }
    }
  }
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'Pick a mutation type',
  fields: {
    addMovie: {
      type: MovieType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },   // with GraphQlNonNull we make the name required
        year: { type: GraphQLInt },
        actorID: { type: GraphQLID }
      },
      resolve(parent, args) {
        const movie = new Movie({
          name: args.name,
          year: args.year,
          actorID: args.actorID
        });
        return movie.save();      // here we use return to get the data from creation in the graphql playground
      }
    },
    addActor: {
      type: ActorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt }
      },
      resolve(parent, args) {
        const actor = new Actor({
          name: args.name,
          age: args.age
        });
        return actor.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
