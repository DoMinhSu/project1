// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// You can delete this file if you're not using it
const { paginate } = require('gatsby-awesome-pagination');
const path = require(`path`)
const slugify = require('slugify')
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }

// }
// video {
//     file {
//     url
//     }
// }
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allContentfulProduct {
                edges {
                    node {
                        name
                        price
                        promotionPrice
                        slug
                        id
                        description {
                            internal {
                            content
                            }
                        }
                        content {
                            json
                            internal {
                            content
                            }
                        }

                        image {
                            fluid {
                              src
                            }
                          }
                    }
                }
            }
        }
  `)
    const products = result.data.allContentfulProduct.edges
    console.log(products);
    
    products.forEach((node) => {
        createPage({
            path: node.node.slug,
            component: path.resolve(`./src/templates/Product.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                product:node.node
            },
        })

        paginate({
            createPage, // The Gatsby `createPage` function
            items: products, // An array of objects
            itemsPerPage: 2, // How many items you want per page
            pathPrefix: '/shop', // Creates pages like `/blog`, `/blog/2`, etc
            component: path.resolve('./src/templates/Shop.js'), // Just like `createPage()`
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                limit:2,
                skip:0
            },
          })
    })
}