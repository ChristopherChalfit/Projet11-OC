import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './styles/_Global.sass'
import { Provider } from 'react-redux';
import store from './redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    </Provider>
)
