import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import slugify from 'slugify'
const Header = ({ siteTitle }) => {
    // const data = useStaticQuery(
    //   graphql`
    //     query {
    //         allContentfulCategory(filter: {node_locale: {eq: "en-US"}}) {
    //           totalCount
    //           nodes {
    //             id
    //             title
    //             name
    //             parentCategory {
    //               name
    //               id
    //               title
    //             }
    //           }
    //         }


    //     }
    //   `
    // )

    return (
        <header>
            <div className="main_header">
                <div className="header_top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-5">
                                <div className="header_contact_info">
                                    <ul>
                                        <li><a href="tel:(+800)123456789"><i className="icon-call-in" /> (+800)123456789</a></li>
                                        <li><a href="mailto:http://1.envato.market/9LbxW"><i className="icon-envelope" /> has@posthemes.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-lg-7 col-md-7">
                <div className="language_currency text-right">
                  <ul>
                    <li><a href="#"><i className="icon-shuffle" /> Compare (3)</a></li>
                    <li className="account"><a href="#"><i className="icon-user" />  Setting <i className="icon-right ion-ios-arrow-down" /></a>
                      <ul className="dropdown_currency">
                        <li><a href="#">€ Euro</a></li>
                        <li><a href="#">£ Pound Sterling</a></li>
                        <li><a href="#">$ US Dollar</a></li>
                      </ul>
                    </li>
                    <li className="currency"><a href="#"> USD $ <i className="icon-right ion-ios-arrow-down" /></a>
                      <ul className="dropdown_currency">
                        <li><a href="#">€ Euro</a></li>
                        <li><a href="#">£ Pound Sterling</a></li>
                        <li><a href="#">$ US Dollar</a></li>
                      </ul>
                    </li>
                    <li className="language"><a href="#"><img src="assets/img/icon/language.png" alt="" /> English <i className="icon-right ion-ios-arrow-down" /></a>
                      <ul className="dropdown_language">
                        <li><a href="#">French</a></li>
                        <li><a href="#">Spanish</a></li>
                        <li><a href="#">Russian</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div> */}
                        </div>
                    </div>
                </div>
                {/* <ul className="sub_menu">
                              <li><a href="index.html">Home shop 1</a></li>
                              <li><a href="index-2.html">Home shop 2</a></li>
                              <li><a href="index-3.html">Home shop 3</a></li>
                              <li><a href="index-4.html">Home shop 4</a></li>
                            </ul> */}
                <div className="header_middle sticky-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-3 offset-md-5 offset-lg-0 col-5 offset-3 col-sm-5">
                                <div className="logo">
                                    <Link to="/">
                                        <img 
                                            src="assets/img/logo/logo.png" alt="logos" 
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                {/*main menu start*/}
                                <div className="main_menu">
                                    <nav>
                                        <ul>
                                            <li><Link activeClassName="active" to="/">
                                                home
                                                {/* <i className="fa fa-angle-down" /> */}
                                                </Link>
                                            </li>
                                            <li><Link activeClassName="active" to="/shop">
                                                shop
                                                
                                                </Link>
                                            </li>
                                            {/* {
                        data.allContentfulCategory.nodes.map((item, i) => {
                          return (
                            <li className="menu-item-has-children active">
                              <Link
                                // className="active"
                                to={`/${slugify(item.name)}`}
                              >
                                {item.name}
                              </Link>
                             





                            </li>
                          )
                        })
                      } */}


                                            <li><Link to="/contact"> Contact Us</Link></li>
                                            <li><Link to="/about"> About us</Link></li>

                                        </ul>
                                    </nav>
                                </div>
                                {/*main menu end*/}
                            </div>

                            {/* <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                                <div className="header_account_area">
                                    <div className="header_account_list search_list">
                                        <a href=""><i className="icon-magnifier icons" /></a>
                                        <div className="dropdown_search">
                                            <form action="#">
                                                <input placeholder="Search entire store here ..." type="text" />
                                                <button type="submit"><i className="icon-magnifier icons" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="header_account_list">
                                        <a href="wishlist.html"><i className="icon-heart" />
                                            <span className="item_count">3</span>
                                        </a>
                                    </div>
                                    <div className="header_account_list  mini_cart_wrapper">
                                        <a href=""><i className="icon-bag" />
                                            <span className="item_count">2</span>
                                        </a>
                                        <div className="mini_cart">
                                            <div className="cart_gallery">
                                                <div className="cart_item">
                                                    <div className="cart_img">
                                                        <a href="#"><img src="assets/img/s-product/product.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="cart_info">
                                                        <a href="#">Juicy Couture Tricot</a>
                                                        <p>1 x <span> $30.00 </span></p>
                                                    </div>
                                                    <div className="cart_remove">
                                                        <a href="#"><i className="ion-ios-close-outline" /></a>
                                                    </div>
                                                </div>
                                                <div className="cart_item">
                                                    <div className="cart_img">
                                                        <a href="#"><img src="assets/img/s-product/product2.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="cart_info">
                                                        <a href="#">Juicy Couture Juicy</a>
                                                        <p>1 x <span> $29.00 </span></p>
                                                    </div>
                                                    <div className="cart_remove">
                                                        <a href="#"><i className="ion-ios-close-outline" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini_cart_table">
                                                <div className="cart_table_border">
                                                    <div className="cart_total">
                                                        <span>Sub total:</span>
                                                        <span className="price">$125.00</span>
                                                    </div>
                                                    <div className="cart_total mt-10">
                                                        <span>total:</span>
                                                        <span className="price">$125.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini_cart_footer">
                                                <div className="cart_button">
                                                    <a href="cart.html"><i className="fa fa-shopping-cart" /> View cart</a>
                                                </div>
                                                <div className="cart_button">
                                                    <a href="checkout.html"><i className="fa fa-sign-in" /> Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
