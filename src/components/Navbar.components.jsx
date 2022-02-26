import React from 'react'
import {Menu,Button,Typography,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import { MoneyCollectOutlined , BulbOutlined , FundOutlined , MenuOutlined,HomeOutlined  } from '@ant-design/icons/lib/icons';

import icon from '../image/cryptocurrency.png'
const Navbar = () => {
  return (
      <div>
          <div className="nav-container">
              <div className="logo-container">
                  <Avatar src = {icon} size = 'large' />
                  <Typography.Title level={2} className = 'logo'>
                        <Link to = '/'>Cryptoverse </Link>
                  </Typography.Title>
              </div>
              <Menu theme='dark'>
                  <Menu.Item icon = {<HomeOutlined />}>
                      <Link to ="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item icon = {<MoneyCollectOutlined />}>
                      <Link to ="/exchnages">Exchanges</Link>
                  </Menu.Item>
                  <Menu.Item icon = {<BulbOutlined/>}>
                      <Link to ="/news">News</Link>
                  </Menu.Item>
                  <Menu.Item icon = {<FundOutlined/>}>
                      <Link to ="/cryptocurrencies">Cryptocurrencies</Link>
                  </Menu.Item>
                  {/* <Menu.Item icon = {<MenuOutlined/>}>
                      <Link to =""></Link>
                  </Menu.Item> */}
              </Menu>
          </div>
 
      </div>
  )
}

export default Navbar;