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
import AddServices from './admin/screen/Services/AddServices/AddServices';
import Services from './admin/screen/Services/Services';
import AddNews from './admin/screen/News/AddNews/AddNews';
import News from './admin/screen/News/News';
import Information from './admin/screen/Information/Information';
import ContactDetails from './admin/screen/Contact/ContactDetails';
import Details from './admin/screen/Contact/Details';
import NewsDetails from './admin/screen/News/Details';

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
            <Route path='product/edit/:id' element={<AddProduct />} ></Route>
            <Route path='product/delete/:id' element={<Products />} ></Route>
            <Route path='services' element={<Services />}></Route>
            <Route path='services/create' element={<AddServices />}></Route>
            <Route path='services/edit/:id' element={<AddServices />}></Route>
            <Route path='news/create' element={<AddNews />}></Route>
            <Route path='news' element={<News />}></Route>
            <Route path='news/details/:id' element={<NewsDetails />}></Route>
            <Route path='information' element={<Information />}></Route>
            <Route path='contact-details' element={<ContactDetails />}></Route>
            <Route path='contact-details/details/:id' element={<Details />}></Route>


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
