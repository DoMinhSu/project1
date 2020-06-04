import React from 'react'
import Slider from "react-slick";
import Slides from './Slides'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
export default function ListProducts({ title, data }) {
    const settings = {
        dots: false,
        prevArrow: false,
        nextArrow: false,

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    console.log(data);

    return (
        <div className="product_area  mb-95">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="product_header">
                            <div className="section_title">
                                <h2>{title}</h2>
                                {/* <p>Browse the collection of our tab products.</p> */}
                            </div>
                        </div>
                    </div>
                    {
                        data.map((item, i) => {
                            return (
                                <div className="col-lg-3" key={item.id}>
                                    <div className="product_items">
                                        <article className="single_product">
                                            <figure>
                                                <div className="product_thumb">
                                                    <Link to={`/${item.slug}`} className="primary_img" href="product-details.html">
                                                        {/* <img src={item.image.fixed.base64} alt="" /> */}
                                                        <Img
                                                            fluid={item.image.fluid}
                                                            objectFit="cover"
                                                            objectPosition="50% 50%"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="action_links">
                                                        <ul>
                                                            {/* <li className="add_to_cart"><a href="cart.html" title="Add tob cart"><i className="icon-bag icons" /></a></li>
                                                            <li className="wishlist"><a href="wishlist.html" title="Add to Wishlist"><i className="icon-heart icons" /></a></li>
                                                            <li className="compare"><a href="#" title="Add to Compare"><i className="icon-shuffle icons" /></a></li> */}
                                                            <li className="quick_button"><Link to={`/${item.slug}`} data-toggle="modal" data-target="#modal_box" title="Quick view"> <i className="icon-eye icons" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <figcaption className="product_content">
                                                    <h4 className="product_name"><Link to={`/${item.slug}`}>{item.name}</Link></h4>
                                                    <div className="price_box">
                                                        <span className={item.promotionPrice ? "old_price" : "current_price"}>${item.price}</span>
                                                        {
                                                            item.promotionPrice && <span className="current_price">${item.promotionPrice}</span>
                                                        }

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
