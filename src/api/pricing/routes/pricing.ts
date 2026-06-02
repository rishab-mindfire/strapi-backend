/**
 * pricing router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::pricing.pricing', {
  config: {
    find: {
      middlewares: ['api::pricing.pricing'],
    },
  },
});
