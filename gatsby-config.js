/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-bigcommerce',
      options: {
          // REQUIRED
          clientId: 'q4zqharj798bbvhfc5npg2bh5lkdajj',
          secret: 'a7850e0b4cd3e166b1a6c42d2d6200944112995f7090a6223918534d767b6713',
          accessToken: 'bhx0sw63shz2x0tj3inasewd4jh3g0',
          storeHash: 'i0hl4l1z1p',
          logLevel: 'info',
          nodeName: 'BigCommerceNode',
          apiVersion: 'v3',
          endpoints: {
            BigCommerceProducts: "/catalog/products?include=images",
            BigCommerceCategories: "/catalog/categories",
      }
    }
  }
],
  
}
