/**
 * `landing-page-populate` middleware
 */
import type { Core } from '@strapi/strapi';

// Define the population structure directly
const populate = {
  blocks: {
    on: {
      'blocks.hero': {
        populate: {
          links: true,
          image: {
            fields: ['alternativeText', 'url'],
          },
        },
      },

      'blocks.section-heading': true,

      'blocks.card-grid': {
        populate: {
          cards: true,
        },
      },

      'blocks.component-content-with-image': {
        populate: {
          image: {
            fields: ['alternativeText', 'url'],
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    // Stringify the object directly
    ctx.query.populate = populate;

    strapi.log.info('In landing-page-populate middleware.');
    await next();
  };
};
