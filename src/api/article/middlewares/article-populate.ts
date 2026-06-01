/**
 * `article-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  featuredImage: {
    fields: ['url', 'alternativeText'],
  },
  author: {
    populate: {
      image: {
        fields: ['url', 'alternativeText'],
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In article-populate middleware.');

    await next();
  };
};
