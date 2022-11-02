require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { RecoilRoot } from 'recoil';

ReactDOM.render(<App />, document.getElementById('app'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  
  );