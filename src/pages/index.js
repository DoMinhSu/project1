import React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Slides from './../components/index/Slides'
import Shipping from './../components/index/Shipping'
import Brand from './../components/index/Brand'
import ListProducts from '../components/index/ListProducts'
import { useStaticQuery, graphql } from 'gatsby'
const IndexPage = () => {
    const data = useStaticQuery(graphql`
  query {
        newestProduct : allContentfulProduct(sort: {fields: createdAt, order: DESC}, limit: 10) {
            edges {
                node {
                    name
                    price
                    promotionPrice
                    slug
                    id
                    image {
                        fluid {
                        src
                        }
                    }
                    content {
                        json
                    }
                }
            }
        }
        promotionProtion : allContentfulProduct(sort: {fields: createdAt, order: DESC}, limit: 10, filter: {promotionPrice: {gt: 0}}) {
            edges {
              node {
                name
                price
                promotionPrice
                slug
                id
                image {
                    fluid {
                        src
                    }
                }
              }
            }
          }
    }
`)

    return (
        <Layout>

            {/* <Image /> */}



            {/* <Slides />
    <Shipping/>
    <FeatureProducts/>
    <Brand/> */}
            <ListProducts title={"Newest Products"} data={data.newestProduct.edges} />
            <ListProducts title={"promotion Products"} data={data.promotionProtion.edges} />
        </Layout>
    )
}




export default IndexPage
