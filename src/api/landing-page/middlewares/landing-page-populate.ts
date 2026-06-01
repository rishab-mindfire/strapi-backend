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
          link: true,
          image: {
            fields: ['alternativeText', 'url'],
          },
        },
      },

      'blocks.markdown': true,

      'blocks.person-card': {
        populate: {
          image: {
            fields: ['alternativeText', 'url'],
          },
        },
      },

      'blocks.faqs': {
        populate: '*',
      },

      'blocks.newsletter': true,

      'blocks.featured-article': {
        populate: '*',
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In landing-page-populate middleware.');
    await next();
  };
};
