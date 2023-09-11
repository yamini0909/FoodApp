
import './App.css';
import Header from "./components/Header/Header"
import About from './components/About'
import Contact from "./components/Contact"
import Body from './components/Body/Body'
import Menupage from './components/MenuPage'
import {Routes, Route} from "react-router-dom"
import { Provider } from 'react-redux';
import 'tailwindcss/tailwind.css'

import "./index.css"
import './custom.css'
import appStore from './utilis/appStore';
import Cart from './components/Cart';
function App() {
 
  return (
    <Provider store={appStore}>
  <div className="App">
         <Header style={{textDecoration: 'none'}}/>
      <Routes>
        <Route className='link-styling' path="/" element={<Body/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route className='link-styling' path="/menu/:resId" element={<Menupage/>}></Route>
      </Routes> 
    </div>
    </Provider>
  
  );
}

export default App;
