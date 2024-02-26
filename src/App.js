import React from "react";
import Body from "./component/Body";
import './index.css'
import { Provider} from 'react-redux';
import appStore from './appstore';

function App() {
  return (
    <Provider store={appStore}>
    
   <Body/>
   
       

   
    
    </Provider>
  );
}

export default App;
