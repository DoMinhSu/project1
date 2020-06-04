import React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Slides from './../components/index/Slides'
import Shipping from './../components/index/Shipping'
import Brand from './../components/index/Brand'
import ListProducts from '../components/index/ListProducts'
import { useStaticQuery, graphql } from 'gatsby'
import { orderBy } from 'lodash'
const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query{
                products : allContentfulProduct(sort: {fields: createdAt, order: DESC}) {
                    nodes {
                      id
                      createdAt
                      name
                      price
                      promotionPrice
                      slug
                      image {
                        fluid{
                          ...GatsbyContentfulFluid
                        }
                      }
                    }
                  }
            }
    `)
    const {products} = data
    console.log(products);

    const newestProducts = orderBy(products.nodes, ['createdAt'], ['desc']).slice(0, 10)
    const promotionProducts = products.nodes.filter(product => {
        return product.promotionPrice > 0 
    });
    return (
        <Layout>
            <ListProducts title={"promotion Products"} data={promotionProducts} />

            <ListProducts title={"Newest Products"} data={newestProducts} /> 
        </Layout>
    )
}




export default IndexPage
