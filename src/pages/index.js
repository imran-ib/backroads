import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"
import StyledHero from "../components/styledHero"

export const getMainImageIndex = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Home = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <StyledHero home="true" img={fluid}>
        <Banner
          title="continue exploring"
          info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
}
export default Home
