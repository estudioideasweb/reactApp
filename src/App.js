import Header from './Components/Header';

import ItemListContainer from './Components/ItemListContainer';

import ItemDetailContainer from './Components/ItemDetailContainer';

import Cart from './Components/Cart';

import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/index.css";

import {Routes, Route, BrowserRouter} from 'react-router-dom';

import CustomProvider from "./Components/CustomProvider"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

    return (
            <BrowserRouter>
                <CustomProvider>
                            <Header/>
                            <Routes>
                                <Route path="/" element={<ItemListContainer/>}/>
                                <Route path="category/:id" element={<ItemListContainer/>}/>
                                <Route path="products/:id" element={<ItemDetailContainer/>}/>
                                <Route path="/cart" element={<Cart/>}/>
                            </Routes>
                            <Footer/>
                            <ToastContainer/>
                </CustomProvider>
            </BrowserRouter>
    )
}

export default App;
