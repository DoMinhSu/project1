import React from 'react'
import Slider from "react-slick";
import slugify from 'slugify'
import { Link } from 'gatsby'
export default function Slides({ data }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true
  };
  console.log(data);

  return (
    <div>
      <Slider {...settings}>
        {
          data.map((item, i) => {
            return (
              <div className="single_slider d-flex align-items-center" data-bgimg="assets/img/slider/slider1.jpg" style={{ height: "auto" }} key={i}>
                <div className="container">
                  <div className="row">
                    {/* <div className="col-12"> */}
                      <div className="slider_content">
                        <h2>new Styles</h2>
                        <img src={item.node.image.fluid.src} alt={item.node.description}/>
                        <Link to={item.node.slug}>{item.node.name}</Link>
                        {/* <p>
                          {item.node.description}
                        </p> */}
                        {/* <a href="shop.html">Shop Now </a> */}
                      </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            )
          })
        }


      </Slider>
    </div>
  )
}
