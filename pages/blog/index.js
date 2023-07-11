import React, { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Head from "next/head";
import Link from "next/link";
import { Blocks } from 'react-loader-spinner'
import axios from "axios";
// import { fontSize } from "@mui/system";

function Blog() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://api.nftconstructer.com/api/blog').then((res)=> setPosts(res.data));
    setLoading(false);
  }, []);

  if(loading){
    return <Blocks
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{ }}
    wrapperClass="blocks-wrapper"
  />;
  }

  return (
    <>
      <Head>
        <title>Explore more about nft defi and blockchain fundamentals- NFT Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://nftconstructer.com/blog" />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link rel="canonical" href="https://nftconstructer.com/blog" />

        <meta
          name="description"
          content="Blockchain development is increasing day by day and business of nft development, metaverse development, DeFi development getting important…"
        ></meta>
        <meta
          name="og:description"
          content="Blockchain development is increasing day by day and business of nft development, metaverse development, DeFi development getting important…"
        ></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Explore more about nft defi and blockchain fundamentals- NFT Constructer" />
        <meta property="og:image" content="assets/img/meta/blog.jpg" />
        <meta property="image" content="assets/img/meta/blog.jpg" />
        <meta
          name="keywords"
          content="nft, full stack, web development, website, website design , website development,development, nft constructer, minting website"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      {/* <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>

      

      {/* <OfferA /> */}
      <div id="blog" className="cpy-6">
        <section>
          <div className="container">
            <div className="blog-section-title">
              <p className="sm-title">My Blog</p>
              <h2 className="sec-title">Latest News</h2>
              <p className="sec-des">
                Get more software development information about exchange
                software wallet software derivate products and ETC
              </p>
            </div>

            <div className="blog-container">
              {posts.length == 0 ? 
              <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{ }}
              wrapperClass="blocks-wrapper"
              />
              : posts.map((post, index) => (
                <div className="blog-post " key={index}>
                  <div className="blog-img">
                    <img
                      height="auto"
                      width="auto"
                      src={post.main_image}
                      alt={post.seo_title}
                    />
                  </div>
                  <div className="about-blog">
                    {/* <Link href={post.slug}>
                      <a className="urbanist-black-18">
                        {post.title.substring(0, 40)}
                      </a>
                    </Link> */}
                    <h2 className="urbanist-black-18"><Link href={`/blog/${post.slug}`} >
                     {post.title}
                    </Link></h2>
                    <p className="raleway-grey-16">
                      <span className="author-name-post">{post.author}</span>{" "}
                      <div className="space">|</div>
                      <span className="post-date">{post.created_date}</span>
                    </p>
                    <p
                      className="sm-des"
                      dangerouslySetInnerHTML={{
                        __html: post.description.substring(0, 100),
                      }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

Blog.layout = AppLayout;

export default Blog;
