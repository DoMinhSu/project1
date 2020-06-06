import React from 'react'

export default function footer() {
    return (
        <div>
            <div className="newsletter_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-5">
                            <div className="newsletter_title">
                                <h3>Join Our Newsletter</h3>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-7">
                            <div className="newsletter_desc">
                                <p>Get the latest updates on new products and upcoming sales</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="subscribe_form">
                                <form id="mc-form" className="mc-form footer-newsletter">
                                    <input id="mc-email" type="email" autoComplete="off" placeholder="Your email address" />
                                    <button id="mc-submit"><i className="icon-envelope-letter icons" /></button>
                                </form>
                                {/* mailchimp-alerts Start */}
                                <div className="mailchimp-alerts text-centre">
                                    <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                                    <div className="mailchimp-success" />{/* mailchimp-success end */}
                                    <div className="mailchimp-error" />{/* mailchimp-error end */}
                                </div>{/* mailchimp-alerts end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*newsletter area end*/}
            {/*footer area start*/}
            <footer className="footer_widgets">
                <div className="container">
                    <div className="footer_top">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-7">
                                <div className="widgets_container footer_contact">
                                    <h3>About us</h3>
                                    <div className="footer_desc">
                                        <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
                                    </div>
                                    <div className="need_help">
                                        <h4>NEED HELP?</h4>
                                        <a href="tel:(+800)123456789"><i className="icon-call-in" /> (+800)123456789</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-5">
                                <div className="widgets_container widget_menu">
                                    <h3>Custom Links</h3>
                                    <div className="footer_menu">
                                        <ul>
                                            <li><a href="#">Legal Notice</a></li>
                                            <li><a href="#">  Prices dro</a></li>
                                            <li><a href="#">New products</a></li>
                                            <li><a href="#">Best sales</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="my-account.html"> My account</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-3">
                                <div className="widgets_container widget_menu">
                                    <h3>My Account</h3>
                                    <div className="footer_menu">
                                        <ul>
                                            <li><a href="#">Personal info</a></li>
                                            <li><a href="#"> Orders</a></li>
                                            <li><a href="#">Affiliate</a></li>
                                            <li><a href="#">Credit slips</a></li>
                                            <li><a href="#">Addresses</a></li>
                                            <li><a href="#"> Best sales</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-5">
                                <div className="widgets_container widget_social">
                                    <h3>Follow us on</h3>
                                    <div className="footer_social">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-google" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4">
                                <div className="widgets_container widget_menu">
                                    <h3>My Account</h3>
                                    <div className="footer_payment">
                                        <img src="assets/img/icon/payment2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-3">
                                <div className="footer_logo">
                                    <a href="index.html"><img src="assets/img/logo/logo2.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="footer_link_menu">
                                    <ul>
                                        <li><a href="services.html">Service</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5">
                                <div className="copyright_area">
                                    <p>Copyright © {new Date().getFullYear()}  <a href="index.html">Clima</a>.  <a href="https://hasthemes.com/" target="_blank">All rights reserved.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*footer area end*/}
            {/* modal area start*/}
            <div className="modal fade" id="modal_box" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="ion-android-close" /></span>
                        </button>
                        <div className="modal_body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-sm-12">
                                        <div className="modal_tab">
                                            <div className="tab-content product-details-large">
                                                <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/productbig1.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab2" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/productbig2.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab3" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/productbig3.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab4" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/productbig4.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal_tab_button">
                                                <ul className="nav product_navactive owl-carousel" role="tablist">
                                                    <li>
                                                        <a className="nav-link active" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false"><img src="assets/img/product/product11.jpg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false"><img src="assets/img/product/product3.jpg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link button_three" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false"><img src="assets/img/product/product5.jpg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false"><img src="assets/img/product/product14.jpg" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-12">
                                        <div className="modal_right">
                                            <div className="modal_title mb-10">
                                                <h2>Donec Ac Tempus</h2>
                                            </div>
                                            <div className="modal_price mb-10">
                                                <span className="new_price">$64.99</span>
                                                <span className="old_price">$78.99</span>
                                            </div>
                                            <div className="modal_description mb-15">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam, reiciendis maiores quidem aperiam, rerum vel recusandae </p>
                                            </div>
                                            <div className="variants_selects">
                                                <div className="variants_size">
                                                    <h2>size</h2>
                                                    <select className="select_option" defaultValue={1}>
                                                        <option value={1}>s</option>
                                                        <option value={1}>m</option>
                                                        <option value={1}>l</option>
                                                        <option value={1}>xl</option>
                                                        <option value={1}>xxl</option>
                                                    </select>
                                                </div>
                                                <div className="variants_color">
                                                    <h2>color</h2>
                                                    <select className="select_option" defaultValue={1}>
                                                        <option value={1}>purple</option>
                                                        <option value={1}>violet</option>
                                                        <option value={1}>black</option>
                                                        <option value={1}>pink</option>
                                                        <option value={1}>orange</option>
                                                    </select>
                                                </div>
                                                <div className="modal_add_to_cart">
                                                    <form action="#">
                                                        <input min={1} max={100} step={2} defaultValue={1} type="number" />
                                                        <button type="submit">add to cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal_social">
                                                <h2>Share this product</h2>
                                                <ul>
                                                    <li className="facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                                                    <li className="twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                                                    <li className="pinterest"><a href="#"><i className="fa fa-pinterest" /></a></li>
                                                    <li className="google-plus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                                                    <li className="linkedin"><a href="#"><i className="fa fa-linkedin" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal area end*/}
            {/*news letter popup start*/}
            <div className="newletter-popup">
                <div id="boxes" className="newletter-container">
                    <div id="dialog" className="window">
                        <div id="popup2">
                            <span className="b-close"><span>close</span></span>
                        </div>
                        <div className="box">
                            <div className="newletter-title">
                                <h2>Newsletter</h2>
                            </div>
                            <div className="box-content newleter-content">
                                <label className="newletter-label">Enter your email address to subscribe our notification of our new post &amp; features by email.</label>
                                <div id="frm_subscribe">
                                    <form name="subscribe" id="subscribe_popup">
                                        {/* <span class="required">*</span><span>Enter you email address here...</span>*/}
                                        <input type="text" defaultValue name="subscribe_pemail" id="subscribe_pemail" placeholder="Enter you email address here..." />
                                        <input type="hidden" defaultValue name="subscribe_pname" id="subscribe_pname" />
                                        <div id="notification" />
                                        <a className="theme-btn-outlined"><span>Subscribe</span></a>
                                    </form>
                                    <div className="subscribe-bottom">
                                        <input type="checkbox" id="newsletter_popup_dont_show_again" />
                                        <label htmlFor="newsletter_popup_dont_show_again">Don't show this popup again</label>
                                    </div>
                                </div>
                                {/* /#frm_subscribe */}
                            </div>
                            {/* /.box-content */}
                        </div>
                    </div>
                </div>
                {/* /.box */}
            </div>
            {/* <script src="assets/js/vendor/jquery-3.4.1.min.js"></script>
            <script src="assets/js/popper.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/owl.carousel.min.js"></script>
            <script src="assets/js/slick.min.js"></script>
            <script src="assets/js/jquery.magnific-popup.min.js"></script>
            <script src="assets/js/jquery.counterup.min.js"></script>
            <script src="assets/js/jquery.countdown.js"></script>
            <script src="assets/js/jquery.ui.js"></script>
            <script src="assets/js/jquery.elevatezoom.js"></script>
            <script src="assets/js/isotope.pkgd.min.js"></script>
            <script src="assets/js/slinky.menu.js"></script>
            <script src="assets/js/plugins.js"></script>

            <script src="assets/js/main.js"></script> */}
        </div>
    )
}
