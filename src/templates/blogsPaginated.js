
import React from "react"
import { graphql,Link } from "gatsby"
import BlogListing from "../components/BlogListing"
import Layout from "../components/Layout"

export default function BlogsPaginated({pageContext,data}) {
    const {limit,currentPage,numOfPages} = pageContext
    const { nodes } = data.allMarkdownRemark

    const isFirst = currentPage === 1
    const isLast = currentPage === numOfPages

    const prevPage = currentPage - 1 === 1 ? "" : (currentPage-1).toString()
    const nextPage = (currentPage + 1 ).toString()



    return (
        <Layout>
            <BlogListing blogs={nodes}></BlogListing>
            <Link 
                className="button is-small" 
                to={`/blogs/${prevPage}`} 
                disabled={isFirst}
                rel="prev">
                Previous
            </Link>
            {' '}

            <Link 
                    className="button is-small" 
                    to={`/blogs/${nextPage}`} 
                    disabled={isLast}
                    rel="next">
                Next
            </Link>
        </Layout>
    )
}

export const query = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { order: DESC, fields: frontmatter___date}
            limit:$limit, 
            skip:$skip) {
            nodes {
                frontmatter{
                    subtitle,
                    title,
                    slug,
                    date(formatString: "DD MMMM, YYYY"),
                    author
                }
            }
        }
    }
`