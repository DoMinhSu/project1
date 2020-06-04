import React from 'react'

export default function breadcrumb({ category }) {
    return (
        <div className="breadcrumbs_area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            {/* <h3>{category}</h3> */}
                            <ul>
                                <li><a href="index.html">home</a></li>
                                <li> {category}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
