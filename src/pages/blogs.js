import React from "react"
import Layout from "../components/Layout"
import {graphql} from "gatsby"

export default function Blogs({data}) {
    return (
        <Layout>
            {
                data.allFile.nodes.map(node => 
                    <li key={node.relativePath}>
                        <p>{node.relativePath}</p>
                        <p>{node.extension}</p>
                        <p>{node.birthTime}</p>
                        <p>{node.prettySize}</p>
                    </li>
                )
            }
        </Layout>
    )
}

export const query = graphql `
    query {
        allFile {
            nodes {
                ext
                relativePath
                birthTime(fromNow: true)
                prettySize
            }
        }
    }
`