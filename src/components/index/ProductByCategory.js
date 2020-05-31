import React from 'react'
import Slider from "react-slick";

export default function ProductByCategory() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className="product_area  mb-95">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="product_header">
                            <div className="section_title">
                                <h2>Our Categories</h2>
                                <p>Browse the collection of our tab products.</p>
                            </div>
                            <div className="product_tab_btn">
                                <ul className="nav" role="tablist">
                                    <li>
                                        <a className="active" data-toggle="tab" href="#makeup" role="tab" aria-controls="makeup" aria-selected="true">
                                            Makeup
                      </a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#skin" role="tab" aria-controls="skin" aria-selected="false">
                                            Skin Care
                      </a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#health" role="tab" aria-controls="health" aria-selected="false">
                                            Health Care
                      </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_container">
                    <Slider {...settings}>
                        <article className="single_product">
                            <figure>
                                <div className="product_thumb">
                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                    <div className="label_product">
                                        <span className="label_sale">-20%</span>
                                    </div>
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
                                    <h4 className="product_name"><a href="product-details.html">Juicy Couture Tricot Logo Stripe Jacket</a></h4>
                                    <div className="price_box">
                                        <span className="old_price">$35.00</span>
                                        <span className="current_price">$28.00</span>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                        </ul>
                                    </div>
                                </figcaption>
                            </figure>
                        </article>
                        <article className="single_product">
                            <figure>
                                <div className="product_thumb">
                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                    <div className="label_product">
                                        <span className="label_sale">-20%</span>
                                    </div>
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
                                    <h4 className="product_name"><a href="product-details.html">Juicy Couture Tricot Logo Stripe Jacket</a></h4>
                                    <div className="price_box">
                                        <span className="old_price">$35.00</span>
                                        <span className="current_price">$28.00</span>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                        </ul>
                                    </div>
                                </figcaption>
                            </figure>
                        </article>
                        <article className="single_product">
                            <figure>
                                <div className="product_thumb">
                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                    <div className="label_product">
                                        <span className="label_sale">-20%</span>
                                    </div>
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
                                    <h4 className="product_name"><a href="product-details.html">Juicy Couture Tricot Logo Stripe Jacket</a></h4>
                                    <div className="price_box">
                                        <span className="old_price">$35.00</span>
                                        <span className="current_price">$28.00</span>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                        </ul>
                                    </div>
                                </figcaption>
                            </figure>
                        </article>
                        <article className="single_product">
                            <figure>
                                <div className="product_thumb">
                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                    <div className="label_product">
                                        <span className="label_sale">-20%</span>
                                    </div>
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
                                    <h4 className="product_name"><a href="product-details.html">Juicy Couture Tricot Logo Stripe Jacket</a></h4>
                                    <div className="price_box">
                                        <span className="old_price">$35.00</span>
                                        <span className="current_price">$28.00</span>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                        </ul>
                                    </div>
                                </figcaption>
                            </figure>
                        </article>
                        <article className="single_product">
                            <figure>
                                <div className="product_thumb">
                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                    <div className="label_product">
                                        <span className="label_sale">-20%</span>
                                    </div>
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
                                    <h4 className="product_name"><a href="product-details.html">Juicy Couture Tricot Logo Stripe Jacket</a></h4>
                                    <div className="price_box">
                                        <span className="old_price">$35.00</span>
                                        <span className="current_price">$28.00</span>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                        </ul>
                                    </div>
                                </figcaption>
                            </figure>
                        </article>
                        <article className="single_product">
                            <figure>
                                <div className="product_thumb">
                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                    <div className="label_product">
                                        <span className="label_sale">-20%</span>
                                    </div>
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
                                    <h4 className="product_name"><a href="product-details.html">Juicy Couture Tricot Logo Stripe Jacket</a></h4>
                                    <div className="price_box">
                                        <span className="old_price">$35.00</span>
                                        <span className="current_price">$28.00</span>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                        </ul>
                                    </div>
                                </figcaption>
                            </figure>
                        </article>
                        <article className="single_product">
                            <figure>
                                <div className="product_thumb">
                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                    <div className="label_product">
                                        <span className="label_sale">-20%</span>
                                    </div>
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
                                    <h4 className="product_name"><a href="product-details.html">Juicy Couture Tricot Logo Stripe Jacket</a></h4>
                                    <div className="price_box">
                                        <span className="old_price">$35.00</span>
                                        <span className="current_price">$28.00</span>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                        </ul>
                                    </div>
                                </figcaption>
                            </figure>
                        </article>
                        <article className="single_product">
                            <figure>
                                <div className="product_thumb">
                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                    <div className="label_product">
                                        <span className="label_sale">-20%</span>
                                    </div>
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
                                    <h4 className="product_name"><a href="product-details.html">Juicy Couture Tricot Logo Stripe Jacket</a></h4>
                                    <div className="price_box">
                                        <span className="old_price">$35.00</span>
                                        <span className="current_price">$28.00</span>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                        </ul>
                                    </div>
                                </figcaption>
                            </figure>
                        </article>
                        <article className="single_product">
                            <figure>
                                <div className="product_thumb">
                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                    <div className="label_product">
                                        <span className="label_sale">-20%</span>
                                    </div>
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
                                    <h4 className="product_name"><a href="product-details.html">Juicy Couture Tricot Logo Stripe Jacket</a></h4>
                                    <div className="price_box">
                                        <span className="old_price">$35.00</span>
                                        <span className="current_price">$28.00</span>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                            <li><a href="#"><i className="ion-android-star" /></a></li>
                                        </ul>
                                    </div>
                                </figcaption>
                            </figure>
                        </article>



                    </Slider>
                </div>
            </div>
        </div>



    )
}
