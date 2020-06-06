import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Breadcrumb from '../components/common/breadcrumb'
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from "gatsby-image/withIEPolyfill"
import { isUndefined } from 'lodash'
import Gallery from '../components/common/Gallery'

export default function Product(props) {
    const { pageContext } = props
    const { product } = pageContext
    const ratioVideo =
        console.log(props);
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { data } = node
                const { target } = data
                const { fields } = target

                if (fields && fields.file && fields.file["en-US"].contentType.includes("image")) {

                    return (
                        <div>
                            <img
                                src={`https:${fields.file["en-US"].url}`}
                                style={{
                                    // height: fields.file["en-US"].details.image.height+"px",
                                    // width: fields.file["en-US"].details.image.width+"px"
                                    maxWidth: "100%"
                                }}
                                alt={`${fields.description}`}
                            />
                        </div>
                    )
                }
            },
            [INLINES.HYPERLINK]: (node) => {
                const { data } = node
                if (data && data.uri.includes("youtube.com/")) {
                    const lastIndex = data.uri.lastIndexOf('/')
                    const videoId = data.uri.slice(lastIndex);
                    return (
                        <div
                            style={{
                                position: "relative",
                                paddingBottom: "56.25%",
                                height: "0",
                                overflow: "hidden",
                            }}>
                            <iframe style={{
                                display: "block",
                                margin: "0 auto",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                            }}
                                src={`https://www.youtube.com/embed${videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    )
                }
            },

        },
    };
    const items = product.images?.map((item) => {
        return {
            original: item.file.url,
            thumbnail: item.file.url,
            fullscreen: item.file.url,
        }
    }) || [];
    console.log(product);

    return (
        <Layout>
            {pageContext.name}
            <div>
                {/*product details start*/}
                <div className="product_details mb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <div className="product-details-tab">
                                    <div id="img-1" className="zoomWrapper single-zoom">
                                        {/* <img src={product.image.fluid.src} /> */}
                                        <Gallery items={items} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="product_d_right">
                                    <form action="#">
                                        <div className="productd_title_nav">
                                            <h1>{product.name}</h1>
                                        </div>
                                        <div className="price_box">
                                            <span className="old_price">${product.price}</span>
                                            <span className="current_price">${product.promotionPrice}</span>
                                        </div>
                                        <div className="product_desc">
                                            {product.description.internal.content}
                                        </div>
                                        {/* <div className="product_variant color">
                                            <h3>Available Options</h3>
                                            <label>color</label>
                                            <ul>
                                                <li className="color1"><a href="#" /></li>
                                                <li className="color2"><a href="#" /></li>
                                                <li className="color3"><a href="#" /></li>
                                                <li className="color4"><a href="#" /></li>
                                            </ul>
                                        </div> */}
                                        {/* <div className="product_variant quantity">
                                            <label>quantity</label>
                                            <input min={1} max={100} defaultValue={1} type="number" />
                                            <button className="button" type="submit">add to cart</button>
                                        </div> */}
                                        {/* <div className=" product_d_action">
                                            <ul>
                                                <li><a href="#" title="Add to wishlist">+ Add to Wishlist</a></li>
                                                <li><a href="#" title="Add to wishlist">+ Compare</a></li>
                                            </ul>
                                        </div> */}
                                        {/* <div className="product_meta">
                                            <span>Category: <a href="#">Clothing</a></span>
                                        </div> */}
                                    </form>
                                    {/* <div className="priduct_social">
                                        <ul>
                                            <li><a className="facebook" href="#" title="facebook"><i className="fa fa-facebook" /> Like</a></li>
                                            <li><a className="twitter" href="#" title="twitter"><i className="fa fa-twitter" /> tweet</a></li>
                                            <li><a className="pinterest" href="#" title="pinterest"><i className="fa fa-pinterest" /> save</a></li>
                                            <li><a className="google-plus" href="#" title="google +"><i className="fa fa-google-plus" /> share</a></li>
                                            <li><a className="linkedin" href="#" title="linkedin"><i className="fa fa-linkedin" /> linked</a></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*product details end*/}
                {/*product info start*/}
                <div className="product_d_info mb-57">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="product_d_inner">
                                    <div className="product_info_button">
                                        <ul className="nav" role="tablist">
                                            <li>
                                                <a className="active" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Detail</a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" href="#sheet" role="tab" aria-controls="sheet" aria-selected="false">Specification</a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews (1)</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="info" role="tabpanel">
                                            {/* <div className="product_info_content" dangerouslySetInnerHTML={{ __html: documentToHtmlString(product.content.json, options) }} */}
                                            <div className="product_info_content"
                                            >
                                                {
                                                    documentToReactComponents(product.content.json, options)

                                                }
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="sheet" role="tabpanel">
                                            <div className="product_d_table">
                                                <form action="#">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="first_child">Compositions</td>
                                                                <td>Polyester</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="first_child">Styles</td>
                                                                <td>Girly</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="first_child">Properties</td>
                                                                <td>Short Dress</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </form>
                                            </div>
                                            <div className="product_info_content">
                                                <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="reviews" role="tabpanel">
                                            <div className="reviews_wrapper">
                                                <h2>1 review for Donec eu furniture</h2>
                                                <div className="reviews_comment_box">
                                                    <div className="comment_thmb">
                                                        <img src="assets/img/blog/comment2.jpg" alt="" />
                                                    </div>
                                                    <div className="comment_text">
                                                        <div className="reviews_meta">
                                                            <div className="star_rating">
                                                                <ul>
                                                                    <li><a href="#"><i className="ion-android-star" /></a></li>
                                                                    <li><a href="#"><i className="ion-android-star" /></a></li>
                                                                    <li><a href="#"><i className="ion-android-star" /></a></li>
                                                                    <li><a href="#"><i className="ion-android-star" /></a></li>
                                                                    <li><a href="#"><i className="ion-android-star" /></a></li>
                                                                </ul>
                                                            </div>
                                                            <p><strong>admin </strong>- September 12, 2018</p>
                                                            <span>roadthemes</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comment_title">
                                                    <h2>Add a review </h2>
                                                    <p>Your email address will not be published.  Required fields are marked </p>
                                                </div>
                                                <div className="product_ratting mb-10">
                                                    <h3>Your rating</h3>
                                                    <ul>
                                                        <li><a href="#"><i className="ion-android-star" /></a></li>
                                                        <li><a href="#"><i className="ion-android-star" /></a></li>
                                                        <li><a href="#"><i className="ion-android-star" /></a></li>
                                                        <li><a href="#"><i className="ion-android-star" /></a></li>
                                                        <li><a href="#"><i className="ion-android-star" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_review_form">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <label htmlFor="review_comment">Your review </label>
                                                                <textarea name="comment" id="review_comment" defaultValue={""} />
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <label htmlFor="author">Name</label>
                                                                <input id="author" type="text" />
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <label htmlFor="email">Email </label>
                                                                <input id="email" type="text" />
                                                            </div>
                                                        </div>
                                                        <button type="submit">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
