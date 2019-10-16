import React from 'react';
import './Jumbotron.css';
import blogEntries from '../myBlog.json';


class Intro extends React.Component {

   constructor(props) {
      super(props);
      this.sectionStyle = {
         backgroundImage: `url(${props.bgImg})`,
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
         position: "relative",
         color: "white"
      }

   }

   render() {
      return (
         <React.Fragment>
            <div id="jumbotron" className="jumbotron jumbotron-fluid" style={this.sectionStyle}>
               <div className="container">
                  <h1 className="display-4">{this.props.title}</h1>
                  <p className="lead">{this.props.content}</p>
                  <p>{blogEntries.blogPosts[0].title}</p>
                  <p>{blogEntries.blogPosts[0].question[1]}</p>
                  
               </div>
            </div>
         </React.Fragment>
      )

   }


}

export default Intro;