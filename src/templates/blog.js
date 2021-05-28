import React from "react"
import Layout from "../components/Layout"
import {graphql} from "gatsby"
import "./blog.scss"
import Seo from "../components/Seo"

export default function Blog({data}) {
    const { html, frontmatter: {title, subtitle, coverImage, slug} } = data.markdownRemark
    const seo = {
        title,
        description: subtitle,
        image: coverImage,
        url: `/blogs/${slug}`
    }
    return (
        <Layout seo={seo}>
            <Seo {...seo}
            />
           <h1>{title}</h1>
           <div className="blog-content" dangerouslySetInnerHTML={{__html: html}}></div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}){
            html
            frontmatter {
                title
                subtitle
                coverImage
                slug
            }
        }
    }
`
