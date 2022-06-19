import React from 'react'
import { dumpLogs } from './utils'
import BlogCard from './BlogCard.css'

class BlogCards extends React.Component {
  state= {
    likeCount : 0
  }
  onLikeBtn = () =>{
    this.setState((prevState, prevProps) =>{
      return { likeCount: prevState.likeCount+1 }
    })
  }

  render (){
    return(
    
    <div className='blog'>
        <h2>{this.props.title}</h2>
        <p> { this.props.description } </p>
        <p>Like Count <span className='count'>: { this.state.likeCount }</span></p>
        <button onClick={this.onLikeBtn}>Like</button>
    </div>
  )}
}

export default BlogCards