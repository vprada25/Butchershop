import React from 'react';
import Navbar from '../../components/navbar/navbar';
import EndPage from '../../components/footer/footer';
import Carousel from '../../components/carousel/carousel';
import { Layout } from 'antd';
import { Button } from 'antd';



const { Header, Content, Footer } = Layout;




class Home extends React.Component {
    render() {
        return (

            <Layout>
                <div className="App">
                    <Header className='Header' >
                        <Navbar></Navbar>
                    </Header>
                    <Content className='content'>
                        <div >
                            <div className="title">
                                <h1 >Bienvenido a Fama Cebu</h1>
                            </div>

                            <div>
                                <Carousel className='content--carousel'></Carousel>
                            </div>
                            <div className='content--button'>
                                <Button  ghost shape='round' block>
                                    Conozcanos
                                </Button>
                            </div>
                        </div>
                    </Content>
                    <Footer className='Footer'>
                        <EndPage></EndPage>
                    </Footer>


                </div>

            </Layout>



        )
    }





}


export default Home;