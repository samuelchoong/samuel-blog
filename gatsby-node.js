
const axios = require('axios')
const {createFilePath} = require('gatsby-source-filesystem')

exports.createPages = async ({graphql, actions: {createPage}}) => {
    //fetch data
    //you can use create page pages API to pull unstructurize data in Gatsby Page
    //benefits: its more familiar and comfortable, if you are new to GraphQL
    //no intermediate steps, just fetch and go
    const res =  await axios.get("https://jsonplaceholder.typicode.com/posts")
    const posts = res.data

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
            path: frontmatter.slug,
            component: require.resolve("./src/templates/blog.js"),
            context: {
                slug: frontmatter.slug
            }
        })
    })
    posts.forEach(post => {
        createPage({
            path: `/post/${post.id}`,
            component: require.resolve("./src/templates/post.js"),
            context:  {post} 
        })
    });

    createPage({
        path: "/posts",
        component: require.resolve("./src/templates/posts.js"),
        context: { posts }
    })
}

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const posts = res.data

    posts.forEach(post=>{
        const node = {
            title: post.title,
            body: post.body,
            // node id must be globally unique
            id: createNodeId(`Post-${post.id}`),
            // id to the parent node
            parent: null,
            // ID to the children nodes
            children: [],
            // internal fields are not usually use
            internal: {
                // globally unique node type
                type: "Post",
                // "Hash" or short digital summary of this node
                contentDigest: createContentDigest(post),
                // content exposing raw content of this node
                content: JSON.stringify(post)
            }
        }

        actions.createNode(node)
    })
}

// exports.onCreateNode = ({node,getNode,actions}) => {
//     if(node.internal.type == "MarkdownRemark") {
//         const slug = createFilePath({node,getNode,basePath: "blogs"})
//         actions.createNodeField({
//             node,
//             name: "slug",
//             value: slug
//         })
//     }
// }