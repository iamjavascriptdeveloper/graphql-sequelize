import { planQueries } from './plan';
import { shiyoushoQueries } from './shiyousho';

// main queries
const resolvers = {
  Query: {
    ...planQueries,
    ...shiyoushoQueries,
  }
};

export default resolvers;