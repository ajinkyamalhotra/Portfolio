import React, { Component } from 'react';
import {Layout, Header, Navigation, Content} from "react-mdl";
import {Link} from "react-router-dom";
import Router from './Router';
import BottomBar from './BottomBar';
import '../Styles/Common.css';

class NavBar extends Component {

  render() {
    return (
        <Layout fixedHeader style={{backgroundColor: 'black', width: '100%'}}>
          <Header className={'bg-color2'} transparent title={<span><span>
            <Navigation >
              <Link to={'./'}>
                <h4 style={{margin: '0px'}}>Ajinkya Malhotra</h4>
              </Link>
            </Navigation>
          </span></span>}>
            <Navigation>
              <Link to={"/"}><h5 style={{marginTop: '16px'}}>Home</h5></Link>
              <Link to="/projects"><h5 style={{marginTop: '16px'}}>Projects</h5></Link>
              <a href="http://localhost:3000/resume.pdf" rel="noopener noreferrer" target="_blank"><h5 style={{marginTop: '16px'}}>Resume</h5></a>
              <Link to="/aboutme"><h5 style={{marginTop: '16px'}}>About Me</h5></Link>
              <Link to="/contact"><h5 style={{marginTop: '16px'}}>Contact Me</h5></Link>
            </Navigation>
          </Header>
          <Content style={{padding: '10px'}}>
            <Router  />
          </Content>
          <BottomBar/>
        </Layout>
    );
  }
}

export default NavBar;
