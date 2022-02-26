import './App.css';
import {Navbar} from './components';
import {Routes ,Link,Route} from 'react-router-dom';
import {Layout,Space,Typography} from 'antd';
import {HomePage,Exchanges,Cryptocurrencies,CryptoDetails} from './pages';
function App() {
  return (
    <div className="App">
      <div className='navbar'>
      <Navbar />
      </div>
     <div className='main'>
     <Layout>
         <div className='routes'>
           <Routes >
             <Route exact path = '/' element = {<HomePage />} /> 
             <Route exact path = '/exchanges' element = {<Exchanges />} /> 
             <Route exact path = '/cryptocurrencies' element = {<Cryptocurrencies />} /> 
             <Route exact path = '/crypto/:coinId' element = {<CryptoDetails />} /> 
           </Routes>
         </div>
       </Layout>
     </div>
     <div className='footer'>
       
     </div>
    </div>
  );
}

export default App;
