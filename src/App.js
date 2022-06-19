import BlogCards from './BlogCards';
import { isArrayEmpty } from './utils';
import React from 'react'

class App extends React.Component{
  state = {
    showBlogs : true

  }

  
   myArr =[ {
    title : 'Blog1',
    description : "This is a lorem ipsum description meant for react"
  },
  {
    title : 'Blog2',
    description : "This is a lorem ipsum description meant for react"

  },
  {
    title : 'Blog3',
    description : "This is a lorem ipsum description meant for react"

}]

 blogCards = isArrayEmpty(this.myArr) ? [] : this.myArr.map((item =>{

  return (
    <div  key={item.title} className ='flex'>

      <BlogCards title = { item.title } description = { item.description }/>

    

    </div>
  )

}))

onHideBtn = () =>{
  this.setState((prevState, prevProps) => {
    return { showBlogs: !prevState.showBlogs }
  }) 

}



render(){
  return (
    <div className='App' >
    <button onClick = {this.onHideBtn}>{
      
      this.state.showBlogs ? 'Hide List' : 'Show Blogs'
    }
    </button>
<br></br>
<div className = 'row'>

  { 
  
  this.state.showBlogs ? this.blogCards : null
  
  }
      </div>


   </div>
  )
}
}
  

export default App;
