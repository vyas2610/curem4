import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/scss/bootstrap.scss'
import './css/styles.scss'
import './App.css';
import Layout from './layout/Layout';
import HomeScreen from './screen/homescreen/HomeScreen';
import AboutScreen from './screen/aboutscreen/AboutScreen';
import ProductScreen from './screen/productscreen/ProductScreen';
import ServiceScreen from './screen/servicescreen/ServiceScreen';
import NewsScreen from './screen/newsscreen/NewsScreen';
import ContactScreen from './screen/contactscreen/ContactScreen';
import AdminLayout from './admin/AdminLayout/AdminLayout';
import DashBoard from './admin/screen/Dashboard/DashBoard';
import Products from './admin/screen/Products/Products';
import AddProduct from './admin/screen/Products/AddProducts/AddProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Admin Routes */}

          <Route path="/admin-panel" element={<AdminLayout />}>
            <Route element={<DashBoard />} ></Route>
            <Route path='product' element={<Products></Products>} />
            <Route path='product/create' element={<AddProduct />} ></Route>

          </Route>
          <Route path="/" element={<Layout></Layout>}>
            <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
            <Route path="about-us" element={<AboutScreen></AboutScreen>}></Route>
            <Route path='products' element={<ProductScreen></ProductScreen>}></Route>
            <Route path='services' element={<ServiceScreen></ServiceScreen>}></Route>
            <Route path='news' element={<NewsScreen></NewsScreen>}></Route>
            <Route path='contact-us' element={<ContactScreen></ContactScreen>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
