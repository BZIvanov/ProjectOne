const graphql = require('graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = graphql;

// TODO implement database and remove dummy data
const movies = [
  {id: '1', name: 'Fun movie', year: 2016, actorID: '2'},
  {id: '2', name: 'Scary movie', year: 2018, actorID: '1'},
  {id: '3', name: 'Fun Series', year: 2015, actorID: '3'},
  {id: '4', name: 'Action movie', year: 2019, actorID: '2'},
  {id: '5', name: 'Animal movie', year: 2010, actorID: '5'}
];
const actors = [
  {id: '1', name: 'Ema Stone', age: 22},
  {id: '2', name: 'Ivan Petrov', age: 33},
  {id: '3', name: 'Kelly R', age: 31},
  {id: '4', name: 'Marc David', age: 21},
  {id: '5', name: 'Katherine Dewmon', age: 27}
];

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
        return actors.filter(actor => parent.actorID === actor.id)[0];
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
        return movies.filter(movie => parent.id === movie.actorID);
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
        return movies.filter(movie => movie.id === args.id)[0];
      }
    },
    actor: {
      type: ActorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return actors.filter(actor => actor.id === args.id)[0];
      }
    },
    movies: {
      type: GraphQLList(MovieType),
      resolve(parent, args) {
        return movies;
      }
    },
    actors: {
      type: GraphQLList(ActorType),
      resolve(parent, args) {
        return actors;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
