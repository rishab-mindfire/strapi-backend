/**
 * `pricing` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  priceCard: {
    populate: '*',
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In pricing middleware.');
    await next();
  };
};
