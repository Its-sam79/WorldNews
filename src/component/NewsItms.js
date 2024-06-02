import React, { Component } from 'react'

export class NewsItms extends Component {

  render() {
    let { title, discription, author, imgUrl, NewsUrl } = this.props;
    return (
      <div>
        <div className="card" >
          {/* style={{width: "18rem"}} */}
          <img src={imgUrl} className="card-img-top" style={{ height: "200px" }} alt="..." />
          <div className="card-body">
            <h4 className="card-title">{title}...</h4>
            <p className="card-text">{discription}...</p>
            <h5 className="author">{author}</h5>
            <a href={NewsUrl} target='_blank' className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}


export default NewsItms