import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import FeaturedBlog from "../components/FeaturedBlog"
import BlogListing from "../components/BlogListing"
import SearchContainer from "../components/SearchContainer"
import Seo from "../components/Seo"

export default function IndexPage({data,pageContext}) {
    const {nodes} = data.allMarkdownRemark
    return (
        <Layout>
            <Seo/>
           <div className="columns">
               {
                   nodes.slice(0,2).map(node=>
                        <div key={node.id} className="column">
                            <FeaturedBlog blog={node}/>
                        </div>
                   )
               }
           </div>
           <div className="p-4">
               <BlogListing 
                    blogs={nodes}
                    search={() => <SearchContainer searchIndex={pageContext.searchIndex}/> }
               />
           </div>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery{
        allMarkdownRemark(
            limit: 3
            sort: { order: DESC, fields: frontmatter___rating}
        ) {
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