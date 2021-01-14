import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
return( 
    <div className="ui container comments">
     <div className="comments">
       <a href="/" className="avatar"> 
       <img alt="avatar" src={faker.image.avatar()}/> 
        </a>
        <div className="content">
          <a href="/" className="author">
            Aizaz Ur Rehman
          </a>
          <div className="metadata">
            <span className="date"> today at 6:00 pm</span>
          </div>
          <div className="text">
            React is going well so far.
          </div>
        </div>
     </div>

     <div className="comments">
       <a href="/" className="avatar"> 
       <img alt="avatar" src={faker.image.avatar()}/> 
        </a>
        <div className="content">
          <a href="/" className="author">
            Aizaz Ur Rehman
          </a>
          <div className="metadata">
            <span className="date"> today at 6:00 pm</span>
          </div>
          <div className="text">
            React is going well so far.
          </div>
        </div>
     </div>

     <div className="comments">
       <a href="/" className="avatar"> 
       <img alt="avatar" src={faker.image.avatar()}/> 
        </a>
        <div className="content">
          <a href="/" className="author">
            Aizaz Ur Rehman
          </a>
          <div className="metadata">
            <span className="date"> today at 6:00 pm</span>
          </div>
          <div className="text">
            React is going well so far.
          </div>
        </div>
     </div>
   </div> 
)
};


ReactDOM.render(<App/>,document.querySelector('#root'));



