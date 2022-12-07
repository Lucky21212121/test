import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store/index'


const App=()=>{
return(
  <Provider store={store}>
       <TodoList/>
  </Provider>

)

}


const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)




