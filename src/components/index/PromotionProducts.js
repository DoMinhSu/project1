import React from 'react'
import Slider from "react-slick";
import Slides from './Slides'
import { Link, useStaticQuery, graphql } from 'gatsby'
export default function PromotionProducts() {
    const settings = {
        dots: false,
        prevArrow: false,
        nextArrow: false,

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const data = useStaticQuery(graphql`
    query {
        allContentfulProduct(sort: {fields: createdAt, order: DESC}, limit: 10, filter: {promotionPrice: {gt: 0}}) {
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
    const edges = data.allContentfulProduct.edges;


    return (
        <div className="product_area  mb-95">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="product_header">
                            <div className="section_title">
                                <h2>promotion products</h2>
                                {/* <p>Browse the collection of our tab products.</p> */}
                            </div>
                        </div>
                    </div>
                    {
                        edges.map((item, i) => {
                            return (
                                <div className="col-lg-3">
                                    <div className="product_items">
                                        <article className="single_product">
                                            <figure>
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src={item.node.image.fluid.src} alt="" /></a>
                                                    {/* <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt="" /></a> */}
                                                    {/* <div className="label_product">
                                                        <span className="label_sale">-20%</span>
                                                    </div> */}
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="add_to_cart"><a href="cart.html" title="Add tob cart"><i className="icon-bag icons" /></a></li>
                                                            <li className="wishlist"><a href="wishlist.html" title="Add to Wishlist"><i className="icon-heart icons" /></a></li>
                                                            <li className="compare"><a href="#" title="Add to Compare"><i className="icon-shuffle icons" /></a></li>
                                                            <li className="quick_button"><a href="#" data-toggle="modal" data-target="#modal_box" title="quick view"> <i className="icon-eye icons" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <figcaption className="product_content">
                                                    <h4 className="product_name"><Link to={`/${item.node.slug}`}>{item.node.name}</Link></h4>
                                                    <div className="price_box">
                                                        <span className="old_price">${item.node.price}</span>
                                                        <span className="current_price">${item.node.promotionPrice}</span>
                                                    </div>
                                                    {/* <div className="product_rating">
                                                        <ul>
                                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                                        </ul>
                                                    </div> */}
                                                </figcaption>
                                            </figure>
                                        </article>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
                {/* <div className="product_container">
                    <Slides data={edges}/>
                </div> */}
            </div>
        </div>



    )
}
