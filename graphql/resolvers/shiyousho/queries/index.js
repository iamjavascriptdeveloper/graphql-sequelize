

import { default as basicSpecificationQueries } from './basicspecificationqueries';
import { default as roomQueries } from './roomqueries';

const shiyoushoQueries = {
  ...roomQueries,
  ...basicSpecificationQueries,
};
    
export default shiyoushoQueries;