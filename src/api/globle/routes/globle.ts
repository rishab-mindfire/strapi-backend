/**
 * globle router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::globle.globle', {
  config: {
    find: {
      middlewares: ['api::globle.global-papulate'],
    },
  },
});
