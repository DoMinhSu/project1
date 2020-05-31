import React from 'react'

export default function Shipping() {
    return (
        <div className="shipping_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single_shipping">
                <div className="shipping_icone">
                  <img src="assets/img/about/shipping1.png" alt="" />
                </div>
                <div className="shipping_content">
                  <h3>Free Shipping</h3>
                  <p>On all orders over $75.00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single_shipping">
                <div className="shipping_icone">
                  <img src="assets/img/about/shipping2.png" alt="" />
                </div>
                <div className="shipping_content">
                  <h3>Free Returns</h3>
                  <p>If goods have problems</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single_shipping">
                <div className="shipping_icone">
                  <img src="assets/img/about/shipping3.png" alt="" />
                </div>
                <div className="shipping_content">
                  <h3>Secure Payment</h3>
                  <p>100% secure payment</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single_shipping">
                <div className="shipping_icone">
                  <img src="assets/img/about/shipping4.png" alt="" />
                </div>
                <div className="shipping_content">
                  <h3>Gift Service</h3>
                  <p>Support gift service</p>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>
    )
}
