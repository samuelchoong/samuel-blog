import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Markdown ({data}) {
    const {totalCount,nodes} = data.allMarkdownRemark
    return (
        <>
            <Layout>
                <h4>{totalCount} Posts</h4>
                {nodes.map(({id,fields, frontmatter,excerpt}) =>
                    <div key={id}>
                        <h3>
                            {frontmatter.title}
                            <span> - {frontmatter.date}</span>
                        </h3>
                        <p>{excerpt}</p>
                        <p>{frontmatter.slug}</p>
                    </div>    
                )}
            </Layout>
        </>
    )
}

export const query = graphql`
    query MyQuery{
        allMarkdownRemark {
            totalCount
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                    subtitle
                }
                excerpt
            }
        }
    }
`