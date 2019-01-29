import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import CardTemplateForCommentDetail from './CardTemplateForCommentDetail';
import * as serviceWorker from './serviceWorker';


const App = () => {
   return (
      <div className="ui container comments">
         <CardTemplateForCommentDetail>
            <CommentDetail
               author='sam'
               timeAgo="Today at 4:30pm"
               commentPost="have a great day"
               avatar={faker.image.avatar()} />
         </CardTemplateForCommentDetail>

         <CardTemplateForCommentDetail>
            <CommentDetail
               author='david'
               timeAgo="Today at 4:07am"
               commentPost="have a great day"
               avatar={faker.image.avatar()} />

         </CardTemplateForCommentDetail>

         <CardTemplateForCommentDetail>
            <CommentDetail
               author='chris'
               timeAgo="Today at 4:01am"
               commentPost="have a great day"
               avatar={faker.image.avatar()} />

         </CardTemplateForCommentDetail >

         <CardTemplateForCommentDetail >
            <CommentDetail
               author='max'
               timeAgo="Today at 3:00"
               commentPost="have a great day"
               avatar={faker.image.avatar()} />
         </CardTemplateForCommentDetail>

         <CardTemplateForCommentDetail >
            <CommentDetail
               author='davey'
               timeAgo="Today at 2:30"
               commentPost="have a great day"
               avatar={faker.image.avatar()} />
         </CardTemplateForCommentDetail>
         <CardTemplateForCommentDetail >
            <CommentDetail
               author='rex'
               timeAgo="Today at 1:30"
               commentPost="have a great day"
               avatar={faker.image.avatar()} />
         </CardTemplateForCommentDetail>
      </div >

   );
}
ReactDOM.render(<App />, document.querySelector('#root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
