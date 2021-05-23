
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
    const itemsPerPage = 3
    const numOfPages = Math.ceil(nodes.length / itemsPerPage)

    Array.from({length: numOfPages}).forEach((_, i) => {
        const page = i + 1
        createPage({
            path: page ===1 ? `/blogs` : `/blogs/${page}`,
            component: require.resolve('./src/templates/blogsPaginated.js'),
            context: {
                limit: itemsPerPage,
                skip: i * itemsPerPage,
                currentPage: page,
                numOfPages
            }
        })
    })
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