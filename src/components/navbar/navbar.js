import React from "react";
import { Layout, Menu } from 'antd';
const { Header} = Layout;




class Navbar extends React.Component {
  render() {
    return (
      <Layout>
        <div>
        <Header >
          <div className="logo">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="1">Inicio</Menu.Item>
            <Menu.Item key="2">Tienda</Menu.Item>
            <Menu.Item key="3">Registro</Menu.Item>
            <Menu.Item key="4">Iniciar Sesion</Menu.Item>
          </Menu>
          </div>
        </Header>
        </div>
      </Layout>



      /*
            <div className="navbar">
              <nav className="subnavbar">
                <div className="navbar__nav">
                  
                  <Link className="navbar__nav" to="/">
                    Tienda
                  </Link>
                  <Link className="navbar__nav" to="/">
                    Contacto
                  </Link>
                  <Link className="navbar__nav" to="/">
                    Inicio
                  </Link>
                  <Link className="navbar__nav" to="/">
                    Registro
                  </Link>
      
                </div>
              </nav>
            </div>
            */

    )
  }
};

export default Navbar;