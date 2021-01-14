import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => { //parent prop
return( 
    <div className="ui container comments">
     <ApprovalCard>
         <div> <h3>Warning!</h3>
         Do you want to continune?
         </div>
     </ApprovalCard>
     
     
     <ApprovalCard> 
            <CommentDetail 
                img={faker.image.avatar()} 
                author="Aizaz" time="today at 4:40pm"  
                comment="BEST!!" btnApprove="Approve" 
                btnReject ="Reject"
            />
        </ApprovalCard>
        <ApprovalCard>
      <CommentDetail 
        img={faker.image.avatar()} 
        author="Rehman" time="today at 5:40am" 
        comment="Average" btnApprove="Approve" 
        btnReject ="Reject"
        />
      </ApprovalCard>
        

        <ApprovalCard> 
        <CommentDetail 
        img={faker.image.avatar()} 
        author="Saeed" 
        time="yesterday at 3:99pm" 
        comment="Very BAD!" btnApprove="Approve" 
        btnReject ="Reject"
        />        
        </ApprovalCard>
   </div> 
)
};


ReactDOM.render(<App/>,document.querySelector('#root'));



