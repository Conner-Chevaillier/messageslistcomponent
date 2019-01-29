import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import * as serviceWorker from './serviceWorker';


const App = () => {
   return (
      <div className="ui container comments">
         <CommentDetail />
         <CommentDetail />
         <CommentDetail />
         <CommentDetail />
         <CommentDetail />
         <CommentDetail />
      </div>

   );
}
ReactDOM.render(<App />, document.querySelector('#root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
