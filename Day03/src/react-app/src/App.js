import './App.css';
import 'antd/dist/antd.css';
import {Input, Menu, Row, Col, Button} from 'antd';
import { UnorderedListOutlined, SearchOutlined } from '@ant-design/icons';
import {BannerLogo} from './BannerLogo'
import { MyComponent } from './MyComponent';
import {ThemeContext} from './ThemeContext'
const {SubMenu} = Menu;

function App() {
  return (
    <div className="App">
        <Row gutter="16">
          <Col>
            <h1><a href="/" id="logo"><img alt="logo" src="./logo.svg"/>Ant Design</a></h1>
          </Col>
          <Col flex="1">
            <div id="searchBox">
            <Input prefix={<SearchOutlined />} placeholder="搜索"/>
            </div>
          </Col>
          <Col>
            <Menu id="menu" key="menu" mode="horizontal">
            <Menu.Item key="design">设计</Menu.Item>
            <Menu.Item key="docs">文档</Menu.Item>
            <Menu.Item key="components">组件</Menu.Item>
            <Menu.Item key="resources">资源</Menu.Item>
            <Menu.Item key="mirror">国内镜像</Menu.Item>
            <SubMenu key="submenu" title="" icon={<UnorderedListOutlined />}>
              <Menu.Item>子菜单项</Menu.Item>
            </SubMenu>
            </Menu>
        </Col>
        </Row>
        <Row justify="center">
          <div id="banner_logo">
              <img alt="logo" src="AntDesign.svg"></img>
              <div id="dot"><BannerLogo/></div>
          </div>
        </Row>
        <Row justify="center">
          <div id="banner_btns">
            <Button type="primary" shape="round">开始使用</Button>
            <Button type="secondary" shape="round">设计语言</Button>
          </div>
        </Row>
        <Row>
        <ThemeContext.Provider value="dark">
          <MyComponent/>
          </ThemeContext.Provider>
        </Row>
    </div>
  );
}

export default App;
