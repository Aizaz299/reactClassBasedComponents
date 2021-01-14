import React from 'react'
import faker from 'faker'

const CommentDetail = () => {
return (
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

);
};


export default CommentDetail;