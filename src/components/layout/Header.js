import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'

const Header = () => (
  <Menu selectedKeys={[global.location.pathname]} mode="horizontal">
    <Menu.Item key="/">
      <Link to="/">
        <Icon type="home" />Home
      </Link>
    </Menu.Item>
    <Menu.Item key="/dashboard">
      <Link to="/dashboard">
        <Icon type="laptop" />Dashboard
      </Link>
    </Menu.Item>
    <Menu.Item key="/about">
      <Link to="/about">
        <Icon type="appstore-o" />About
      </Link>
    </Menu.Item>
    <Menu.Item key="github">
      <a
        href="https://github.com/Raincal/smms"
        target="_blank"
        rel="noopener noreferrer">
        <Icon type="code-o" />
        Source Code
      </a>
    </Menu.Item>
  </Menu>
)

export default Header
