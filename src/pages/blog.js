import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/styledHero"

export const getMainImageBlog = graphql`
  query {
    file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const blog = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <StyledHero img={fluid} />
    </Layout>
  )
}

export default blog
