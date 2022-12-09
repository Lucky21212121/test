import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import  AllStyle from './styled'
import './statics/iconfont/iconfont.css'







const RootApp=()=>{
  return (<>
  <AllStyle></AllStyle>
  <App></App>
  </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);


