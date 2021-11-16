import { planQueries } from './plan';
import { basicSpecificationQueries } from './shiyousho';

const resolvers = {
  Query: {
    ...planQueries,
    ...basicSpecificationQueries,
  }
};

export default resolvers;