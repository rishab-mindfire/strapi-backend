/**
 * `global-papulate` middleware
 */

import type { Core } from '@strapi/strapi';

// Define the structure of populate
const populate = {
  header: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ['url'],
          },
        },
      },
      navItems: {
        populate: '*',
      },
    },
  },
  footer: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ['url'],
          },
        },
      },
      socialLinks: {
        populate: {
          image: {
            fields: ['url'],
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    //add query to populate
    ctx.query.populate = populate;
    strapi.log.info('In global-papulate middleware.');
    await next();
  };
};
