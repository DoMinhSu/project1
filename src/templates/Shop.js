import React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Slides from '../components/index/Slides'
import Shipping from '../components/index/Shipping'
import Brand from '../components/index/Brand'
import ListProducts from '../components/index/ListProducts'
import Breadcrumb from './../components/common/breadcrumb'
import { useStaticQuery, graphql } from 'gatsby'
const Shop = (props) => {
    const { data, pageContext } = props
    console.log(props);

    return (
        <Layout>
            <Breadcrumb category="All products" />
            <ListProducts  data={data.allContentfulProduct.nodes} />

            <div className="pagination-shop">
                {
                    pageContext.humanPageNumber != 1 && <Link to={pageContext.previousPagePath}>Previous</Link>
                }
                Page {pageContext.humanPageNumber}
                {
                    pageContext.humanPageNumber != pageContext.numberOfPages && <Link to={pageContext.nextPagePath}>Next</Link>
                }

            </div>
        </Layout>
    )
}


export const pageQuery = graphql`
    query  ($skip: Int, $limit: Int) {
        allContentfulProduct(
            sort: {fields: createdAt, order: DESC}
            limit: $limit
            skip: $skip

        ) {
            nodes {
                name
                price
                promotionPrice
                slug
                id
                image {
                    fluid{
                        ...GatsbyContentfulFluid
                      }
                }
            }
        }
  
    }
`

export default Shop
