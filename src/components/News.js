import React, { Component } from 'react';
import Nitems from './Nitems';
import Spinner from './Spinner';

class News extends Component {
    constructor(props) {
        super();
        this.state = {
            articles: [],  
            page:1,
            pageSize: props.pagesize,
            loading: true
        };
    }
    
    async componentDidMount() {
        this.fetchNews();
    }
    fetchNews = async () => {
        try {
            const { page, pageSize ,loading} = this.state;
            const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3baf657765d9418a90de241fd08f1526&page=${page}&pageSize=${pageSize}`;
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ articles: data.articles, loading:false });
        } catch (error) {
            console.error("Error fetching news articles", error);
        }
    }
        prev = async () => {
            this.setState({ loading: true });
            this.setState(prevState => ({   
                page: prevState.page - 1
            }), this.fetchNews);
       
    }
    next = async () => {
        this.setState({ loading: true });
        this.setState(prevState => ({
            page: prevState.page + 1
        }), this.fetchNews);
    }

    render() {
        const { articles,page} = this.state;
        const a = "Welcome to the live updates platform for Hindustan Times. Follow all the major news update...";

        return (
            <>
           
            <div style={{ textAlign: 'center', marginTop: '29px' }}>
                <div className="head" style={{ backgroundColor: 'white', width: '500px', margin: '0 auto', textAlign: 'center', borderRadius: '29px', marginBottom: '39px' }}>
                <h1>News Buddy...</h1>
                <p>Get The Latest News Around The World In One Click</p>
                </div>
                {this.state.loading && <Spinner/>}
                <div className="row" >
                    {articles.map((article) => (
                        <div className="col-md-4" key={article.url}>
                            <Nitems
                                title={article.title.slice(0 ,40)}
                                description={article.description? article.description.slice(0,80):a.slice(0,80)}
                                urlToImage={article.urlToImage? article.urlToImage : "https://images.moneycontrol.com/static-mcnews/2022/05/pjimage-55.jpg"}
                                newsUrl={article.url}
                                key={article.url}
                                />
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-around">
                <button  disabled={this.state.page<=1} onClick={this.prev} className="btn btn-primary">&larr; Previous</button>
                <button onClick={this.next} className="btn btn-primary"> Next &rarr;</button>
               </div>
            </div>
                    </>
        );
    }
}

export default News;
