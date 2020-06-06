/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
    )

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                // <title>DIGIWEB - Thiết Kế Web Trọn Gói Chuẩn SEO Giá Rẻ, Nhanh Chóng</title>
                // <meta name="keywords" content="haravan themes, thiết kế web, thiết kế web bán hàng, thiết kế web chuẩn SEO, thiết kế web giá rẻ">
                // <meta property="og:image" content="http://hstatic.net/173/1000012173/10/2015/11-17/fb_og.jpg"></meta>
                // <meta property="og:site_name" content="Themes Store Haravan"></meta>
                // <meta name="copyright" content="Trangsucvn.com"></meta>
                // <meta name="author" content="Trangsucvn.com"></meta>
                // <link rel="shortcut icon" type="image/x-icon" href="https://trangsucvn.com/static/img/favicon.ico"></link>
                // <link rel="canonical" href="https://trangsucvn.com/html-359-vong-ma-nao.html"></link> link cho 1 sản phẩm
                // <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
                // <meta property="og:locale" content="vi_VN"></meta>
                // <meta property="og:type" content="article"></meta>
                // <meta property="og:url" content="https://phongthuyxanh.vn/vong-tay-phong-thuy-da-ma-nao-do.html"></meta>
                // <meta property="article:section" content="Vòng tay phong thủy"></meta>
                // <meta property="article:published_time" content="2016-03-17T03:26:26+00:00"></meta>
                // <meta property="article:modified_time" content="2019-12-22T04:31:18+00:00"></meta>
                // <meta property="og:updated_time" content="2019-12-22T04:31:18+00:00"></meta>
                // <meta property="og:image" content="https://phongthuyxanh.vn/wp-content/uploads/MA-NAO-DO-1.jpg"></meta>
                // <meta property="og:image:secure_url" content="https://phongthuyxanh.vn/wp-content/uploads/MA-NAO-DO-1.jpg"></meta>
                // <meta property="og:image:width" content="400"></meta>
                // <meta property="og:image:height" content="300"></meta>

                // <meta name="twitter:card" content="summary"></meta>
                // <meta name="twitter:description" content="Vòng tay phong thủy đá mã não đỏ là biểu tượng của sức khỏe, sự hưng thịnh và trường thọ, và còn được dùng thích hợp làm bùa hộ mệnh. XEM NGAY"></meta>
                // <meta name="twitter:title" content="Vòng tay phong thủy đá mã não đỏ - Đá tự nhiên"></meta>
                // <meta name="twitter:image" content="https://phongthuyxanh.vn/wp-content/uploads/MA-NAO-DO-1.jpg"></meta>
                // <link rel="dns-prefetch" href="//fonts.googleapis.com"></link>  dns prefetch
                // <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
                // <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
                // <meta name="robots" content="index, follow"></meta>
                // <meta name="theme-color" content="#1a344f"></meta>
                // <link rel="alternate" type="application/rss+xml" title="Lập trình cuộc sống - Chỉ là blog của một thằng coder" href="https://laptrinhcuocsong.com/feed.xml"></link>
{/* <meta property="fb:app_id" content="299675953750632"></meta> */}
{/* <meta property="fb:admins" content="100008271487366"> */}
{/* <meta property="fb:pages" content="367752623589322"> */}
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO
