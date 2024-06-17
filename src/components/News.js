import React, { Component } from "react";
import Nitems from "./Nitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 6,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      pageSize: props.pageSize,
      loading: true,
    };
    document.title = `${this.props.category}-News Buddy..`;
  }

  async componentDidMount() {
    this.fetchNews();
    
  }
  fetchNews = async () => {
    try {
      
      const { page, pageSize, loading } = this.state;
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3baf657765d9418a90de241fd08f1526&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ articles: data.articles, loading: false });
    } catch (error) {
      console.error("Error fetching news articles", error);
    }
  };
  prev = async () => {
    this.setState({ loading: true });
    this.setState(
      (prevState) => ({
        page: prevState.page - 1,
      }),
      this.fetchNews
    );
  };
  next = async () => {
    this.setState({ loading: true });
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      this.fetchNews
    );
  };

  render() {
    const { articles, loading, page } = this.state;
    const defaultDescription =
      "Welcome to the live updates platform for Hindustan Times. Follow all the major news update...";

    return (
      <>
        <div style={{ textAlign: "center", marginTop: "29px" }}>
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
            <h1>News Buddy...{this.props.category}</h1>
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
              onClick={this.prev}
              className="btn btn-primary"
            >
              &larr; Previous
            </button>
            <button onClick={this.next} className="btn btn-primary" >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
