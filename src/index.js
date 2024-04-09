import React from 'react';
import ReactDOM from 'react-dom/client';
//  先导入 antd 样式文件 再导入全局样式文件，防止样式覆盖！
import 'antd/dist/antd.min.css'
import './index.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
