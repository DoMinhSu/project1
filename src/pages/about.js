import React from 'react'
import Layout from './../components/layout'
export default function about() {
    return (
        <Layout>
            <div>
                {/*about section area */}
                <section className="about_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <figure>
                                    <div className="about_thumb">
                                        <img src="assets/img/about/about1.jpg" alt="" />
                                    </div>
                                    <figcaption className="about_content">
                                        <h1>We are a digital agency focused on delivering content and utility user-experiences.</h1>
                                        <p>Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu phasellus risus urna aliquam, ornare.</p>
                                        <div className="about_signature">
                                            <img src="assets/img/about/about-us-signature.png" alt="" />
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                {/*about section end*/}
                {/*chose us area start*/}
                <div className="choseus_area" data-bgimg="assets/img/about/about-us-policy-bg.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="single_chose">
                                    <div className="chose_icone">
                                        <img src="assets/img/about/About_icon1.png" alt="" />
                                    </div>
                                    <div className="chose_content">
                                        <h3>Creative Design</h3>
                                        <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single_chose">
                                    <div className="chose_icone">
                                        <img src="assets/img/about/About_icon2.png" alt="" />
                                    </div>
                                    <div className="chose_content">
                                        <h3>100% Money Back Guarantee</h3>
                                        <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single_chose">
                                    <div className="chose_icone">
                                        <img src="assets/img/about/About_icon3.png" alt="" />
                                    </div>
                                    <div className="chose_content">
                                        <h3>Online Support 24/7</h3>
                                        <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*chose us area end*/}
                {/*services img area*/}
                <div className="about_gallery_section">
                    <div className="container">
                        <div className="about_gallery_container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <article className="single_gallery_section">
                                        <figure>
                                            <div className="gallery_thumb">
                                                <img src="assets/img/about/about2.jpg" alt="" />
                                            </div>
                                            <figcaption className="about_gallery_content">
                                                <h3>What do we do?</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <article className="single_gallery_section">
                                        <figure>
                                            <div className="gallery_thumb">
                                                <img src="assets/img/about/about3.jpg" alt="" />
                                            </div>
                                            <figcaption className="about_gallery_content">
                                                <h3>Our Mission</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <article className="single_gallery_section">
                                        <figure>
                                            <div className="gallery_thumb">
                                                <img src="assets/img/about/about4.jpg" alt="" />
                                            </div>
                                            <figcaption className="about_gallery_content">
                                                <h3>History Of Us</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*services img end*/}
            </div>
        </Layout>
    )
}
