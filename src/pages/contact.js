import React from 'react'
import Layout from './../components/layout'
export default function contact() {
    return (
        <Layout>
            <div>
                {/*contact map start*/}
                <div className="contact_map">
                    <div className="map-area">
                        <div id="googleMap" />
                    </div>
                </div>
                {/*contact map end*/}
                {/*contact area start*/}
                <div className="contact_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="contact_message content">
                                    <h3>contact us</h3>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                                    <ul>
                                        <li><i className="fa fa-fax" />  Address : No 40 Baria Sreet 133/2 NewYork City</li>
                                        <li><i className="fa fa-phone" /> <a href="#">Infor@roadthemes.com</a></li>
                                        <li><i className="fa fa-envelope-o" /><a href="tel:0(1234)567890">0(1234) 567 890</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="contact_message form">
                                    <h3>Tell us your project</h3>
                                    <form id="contact-form" method="POST" action="https://demo.hasthemes.com/clima/clima/assets/mail.php">
                                        <p>
                                            <label> Your Name (required)</label>
                                            <input name="name" placeholder="Name *" type="text" />
                                        </p>
                                        <p>
                                            <label>  Your Email (required)</label>
                                            <input name="email" placeholder="Email *" type="email" />
                                        </p>
                                        <p>
                                            <label>  Subject</label>
                                            <input name="subject" placeholder="Subject *" type="text" />
                                        </p>
                                        <div className="contact_textarea">
                                            <label>  Your Message</label>
                                            <textarea placeholder="Message *" name="message" className="form-control2" defaultValue={""} />
                                        </div>
                                        <button type="submit"> Send</button>
                                        <p className="form-messege" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*contact area end*/}
            </div>
        </Layout>
    )
}
