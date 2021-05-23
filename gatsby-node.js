
const axios = require('axios')


exports.createPages = async ({graphql, actions: {createPage}}) => {

    const result = await graphql(`
        query{
            allMarkdownRemark{
                nodes{
                    frontmatter{
                        slug
                    }
                }
            }
        }
    `)
    const nodes = result.data.allMarkdownRemark.nodes
    nodes.forEach(node=>{
        const {frontmatter} = node
        createPage({
            path: `/blogs/${frontmatter.slug}`,
            component: require.resolve("./src/templates/blog.js"),
            context: {
                slug: frontmatter.slug
            }
        })
    })
}