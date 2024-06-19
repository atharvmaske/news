import React, { useEffect, useState } from "react";
import Nitems from "./Nitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

 const News = (props)=>  {

  const [articles , setArticles]=useState([]);
  const [page , setPage]=useState(1);
  const [pageSize , setPagesize]=useState(6);
  const [loading , setLoading]=useState(6);
  document.title = `${props.category}-News Buddy..`;
 useEffect(() => {
    fetchNews();
  }, [page, props.category]);

  const fetchNews = async () => {
    try {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3baf657765d9418a90de241fd08f1526&page=${page}&pageSize=${pageSize}`;
      props.setProgress(30);
      const response = await fetch(url);
      props.setProgress(70);
      const data = await response.json();
      props.setProgress(90);
      setArticles(data.articles);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news articles", error);
    }
  };
  const prev = async () => {
    setLoading(true);
    setPage(page - 1);
  };
  const next = async () => {
    setLoading(true);
    setPage(page + 1);
  };

    const defaultDescription =
      "Welcome to the live updates platform for Hindustan Times. Follow all the major news update...";

    return (
      <>
        <div style={{ textAlign: "center", marginTop: "79px" }}>
          <div
            className="head"
            style={{
              backgroundColor: "white",
              width: "9 00px",
              margin: "0 auto",
              textAlign: "center",
              borderRadius: "29px",
              marginBottom: "39px",
            }}
          >
            <h1 style={{cursor: 'pointer'}} >News Buddy...{props.category}</h1>
            <p>Get The Latest News Around The World In One Click</p>
          </div>
          {loading && <Spinner />}
          {!loading && articles && articles.length > 0 && (
            <div className="row">
              {articles.map((article) => (
                <div className="col-md-4" key={article.url}>
                  <Nitems
                    title={
                      article.title
                        ? article.title.slice(0, 40)
                        : "Title not available"
                    }
                    description={
                      article.description
                        ? article.description.slice(0, 80)
                        : defaultDescription.slice(0, 80)
                    }
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                    urlToImage={
                      article.urlToImage
                        ? article.urlToImage
                        : "https://images.moneycontrol.com/static-mcnews/2022/05/pjimage-55.jpg"
                    }
                    newsUrl={article.url}
                  />
                </div>
              ))}
            </div>
          )}
          {!loading && (!articles || articles.length === 0) && (
            <p>No articles found.</p>
          )}
          <div className="d-flex justify-content-around" style={{marginBottom:'29px'}}>
            <button
              disabled={page <= 1}
              onClick={prev}
              className="btn btn-primary"
            >
              &larr; Previous
            </button>
            <button onClick={next} className="btn btn-primary" >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  };


// News.defaultProps = {
//   country: "in",
//   category: "general",
//   pageSize: 6,
// };

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
