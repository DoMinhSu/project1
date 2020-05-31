import React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Slides from './../components/index/Slides'
import Shipping from './../components/index/Shipping'
import FeatureProducts from './../components/index/FeatureProducts'
import Brand from './../components/index/Brand'
import ProductByCategory from './../components/index/ProductByCategory'
import { useStaticQuery, graphql } from 'gatsby'
const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulProducts {
          id
          name
          image {
            contentful_id
            description
            file {
              url
            }
          }
        }
      }
    `
  )
  console.log(data);
  
  return (
    <Layout>

      {/* <Image /> */}



      {/* <Slides />
    <Shipping/>
    <FeatureProducts/>
    <Brand/> */}
      <ProductByCategory />
    </Layout>
  )
}




export default IndexPage
