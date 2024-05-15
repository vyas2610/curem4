import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/scss/bootstrap.scss'
import './css/styles.scss'
import './App.css';
import Layout from './layout/Layout';
import HomeScreen from './screen/homescreen/HomeScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path='/' element={<HomeScreen></HomeScreen>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
