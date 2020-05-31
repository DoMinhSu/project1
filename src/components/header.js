import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
  <header>
    <div className="main_header">
      <div className="header_top">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-5">
              <div className="header_contact_info">
                <ul>
                  <li><a href="tel:(+800)123456789"><i className="icon-call-in" /> (+800)123456789</a></li>
                  <li><a href="mailto:http://1.envato.market/9LbxW"><i className="icon-envelope" /> has@posthemes.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
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
            </div>
          </div>
        </div>
      </div>
      <div className="header_middle sticky-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-3 offset-md-5 offset-lg-0 col-5 offset-3 col-sm-5">
              <div className="logo">
                <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-8">
              {/*main menu start*/}
              <div className="main_menu">
                <nav>
                  <ul>
                    <li><a className="active" href="index.html">home<i className="fa fa-angle-down" /></a>
                      <ul className="sub_menu">
                        <li><a href="index.html">Home shop 1</a></li>
                        <li><a href="index-2.html">Home shop 2</a></li>
                        <li><a href="index-3.html">Home shop 3</a></li>
                        <li><a href="index-4.html">Home shop 4</a></li>
                      </ul>
                    </li>
                    <li className="mega_items"><a href="shop.html">shop<i className="fa fa-angle-down" /></a>
                      <div className="mega_menu">
                        <ul className="mega_menu_inner">
                          <li><a href="#">Shop Layouts</a>
                            <ul>
                              <li><a href="shop-fullwidth.html">Full Width</a></li>
                              <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                              <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                              <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a></li>
                              <li><a href="shop-list.html">List View</a></li>
                            </ul>
                          </li>
                          <li><a href="#">other Pages</a>
                            <ul>
                              <li><a href="cart.html">cart</a></li>
                              <li><a href="wishlist.html">Wishlist</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                              <li><a href="my-account.html">my account</a></li>
                              <li><a href="404.html">Error 404</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Product Types</a>
                            <ul>
                              <li><a href="product-details.html">product details</a></li>
                              <li><a href="product-sidebar.html">product sidebar</a></li>
                              <li><a href="product-grouped.html">product grouped</a></li>
                              <li><a href="variable-product.html">product variable</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Makeup</a>
                            <ul>
                              <li><a href="shop.html">Eyes</a></li>
                              <li><a href="shop.html">Lips</a></li>
                              <li><a href="shop.html">Face</a></li>
                              <li><a href="shop.html">Makeup Tools</a></li>
                            </ul>
                          </li>
                          <li className="h_banner_menu2">
                            <div className="header_banner_menu">
                              <a href="#"><img src="assets/img/bg/banner12.jpg" alt="" /></a>
                            </div>
                            <div className="header_banner_menu">
                              <a href="#"><img src="assets/img/bg/banner13.jpg" alt="" /></a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><a href="blog.html">blog<i className="fa fa-angle-down" /></a>
                      <ul className="sub_menu pages">
                        <li><a href="blog-details.html">blog details</a></li>
                        <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                        <li><a href="blog-sidebar.html">blog sidebar</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html"> Contact Us</a></li>
                    <li><a href="about.html"> About us</a></li>
                    <li><a href="#">pages <i className="fa fa-angle-down" /></a>
                      <ul className="sub_menu pages">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">services</a></li>
                        <li><a href="faq.html">Frequently Questions</a></li>
                        <li><a href="contact.html">contact</a></li>
                        <li><a href="login.html">login</a></li>
                        <li><a href="404.html">Error 404</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*main menu end*/}
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-4">
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
                  {/*mini cart*/}
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
                  {/*mini cart end*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
