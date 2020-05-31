import React from 'react'
import Slider from "react-slick";
export default function Slides() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
        <Slider {...settings}>
        {/* <section className="slider_section">
        <div className="slider_area owl-carousel"> */}
          <div className="single_slider d-flex align-items-center" data-bgimg="assets/img/slider/slider1.jpg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="slider_content">
                    <h2>new Styles</h2>
                    <h1>Natural Skincare</h1>
                    <p>
                      Lab Series Skincare for Women - Lookfantastic UK
                    </p>
                    <a href="shop.html">Shop Now </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider d-flex align-items-center" data-bgimg="assets/img/slider/slider2.jpg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="slider_content">
                    <h2>makeup Enhance</h2>
                    <h1>Natural Beauty</h1>
                    <p>
                      Cosmetics Siennas Eyeshadow Palette Tutorial
                    </p>
                    <a href="shop.html">Shop Now </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div>
      </section> */}
        </Slider>
      </div>
    )
}
