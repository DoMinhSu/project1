import React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Slides from '../components/index/Slides'
import Shipping from '../components/index/Shipping'
import Brand from '../components/index/Brand'
import ListProducts from '../components/index/ListProducts'

import { useStaticQuery, graphql } from 'gatsby'
const Shop = (props) => {
    const { pageContext } = props
    console.log(props);

    const data = useStaticQuery(graphql`

    query ($skip: Int, $limit: Int) {
    allContentfulProduct(
        sort: {fields: createdAt, order: DESC}
        limit: $limit
        skip: $skip

    ) {
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
            createdAt
            }
        }
    }
  }
  
  `)

    return (
        <Layout>
            <ListProducts title={"All Products"} data={data.allContentfulProduct.edges} />

            <div className="pagination-shop">
                <Link to={pageContext.previousPagePath}>Previous</Link>
                {pageContext.humanPageNumber}
                <Link to={pageContext.nextPagePath}>Next</Link>
            </div>
        </Layout>
    )
}




export default Shop
