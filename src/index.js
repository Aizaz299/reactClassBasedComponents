import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js';

const App = () => { //parent prop
return( 
    <div className="ui container comments">
        <CommentDetail img={faker.image.avatar()} author="Aizaz" time="today at 4:40pm"  comment="BEST!!"/>
        <CommentDetail img={faker.image.avatar()} author="Rehman" time="today at 5:40am" comment="Average"/>
        <CommentDetail img={faker.image.avatar()} author="Saeed" time="yesterday at 3:99pm" comment="Very BAD!"/>        
   </div> 
)
};


ReactDOM.render(<App/>,document.querySelector('#root'));



