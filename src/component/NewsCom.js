import React, { Component } from 'react'
import NewsItms from './NewsItms'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


export class NewsCom extends Component {
  articles = []

  static defaultProps = {
    catagory: 'business'
  }
  PropTypes = {
    catagory: PropTypes.string
  }



  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.Capitalize(this.props.catagory) + ' - WorldNews'}`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=afd5c40e5c3c4fb8be67a76f3df23e72`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });

  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=afd5c40e5c3c4fb8be67a76f3df23e72`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });

  }

render() {
  return (
    <div className='container my-2'>
      <h1>Top Headlines</h1>
      <hr />

      {this.state.loading && <Spinner />}
      <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner />}
      >
        <div className='container'>

        <div className='row mt-5'>

        

          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4 my-2' key={element.url}>
              <NewsItms title={element.title ? element.title.slice(0, 50) : ""} discription={element.description ? element.description.slice(0, 100) : ""} author={element.author ? element.author : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2024/01/zac-wolff-uuwA21vmI3o-unsplash-652x435.jpg"} NewsUrl={element.url ? element.url:"https://indianexpress.com"} />
            </div>

          })}
</div>
        </div>
      </InfiniteScroll>
    </div>
  )
}
}

export default NewsCom
