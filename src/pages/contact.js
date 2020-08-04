import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/styledHero"
import Contact from "../components/Contact/Contact"

export const getMainImageContact = graphql`
  query {
    file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default function contact({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) {
  return (
    <Layout>
      <StyledHero img={fluid} />
      <Contact />
    </Layout>
  )
}
