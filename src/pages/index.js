import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "../components/Layout"
import FeaturedBlog from "../components/FeaturedBlog"

export default function IndexPage({data}) {
    const {nodes} = data.allMarkdownRemark
    return (
        <Layout>
           <div className="columns">
               {
                   nodes.slice(0,2).map(node=>
                        <div key={node.id} className="column">
                            <FeaturedBlog blog={node}/>
                        </div>
                   )
               }
           </div>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery{
        allMarkdownRemark {
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                    subtitle
                    slug
                    author
                }
            }
        }
    }
`