import './App.css';
import {Navbar} from './components';
import {Routes ,Link,Route} from 'react-router-dom';
import {Layout,Space,Typography} from 'antd';
import {HomePage,Exchanges,Cryptocurrencies,CryptoDetails} from './pages';
import { MoneyCollectOutlined , BulbOutlined , FundOutlined , MenuOutlined,HomeOutlined  } from '@ant-design/icons/lib/icons';
function App() {
  return (
    <div className="app">
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
     <div className='footer'>
       <Typography.Title level = {5} style = {{color:'white',textAlign:'center'}}>
        CryptoVerse <br />
        All rights reserved
       </Typography.Title>
       <Space>
         <Link to = '/'><HomeOutlined/></Link>
         <Link to = '/exchanges'><MoneyCollectOutlined/></Link>
         <Link to = '/news'><BulbOutlined/></Link>
         <Link to = '/cryptocurrencies'><FundOutlined/></Link>

       </Space>
       
     </div>
    </div>
    </div>

  );
}

export default App;
