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
              <Link to={"/"}><h6 style={{marginTop: '16px'}}>Home</h6></Link>
              <Link to="/projects"><h6 style={{marginTop: '16px'}}>Projects</h6></Link>
              <a href="http://localhost:3000/resume.pdf" rel="noopener noreferrer" target="_blank"><h6 style={{marginTop: '16px'}}>Resume</h6></a>
              <Link to="/aboutme"><h6 style={{marginTop: '16px'}}>About Me</h6></Link>
              <Link to="/contact"><h6 style={{marginTop: '16px'}}>Contact Me</h6></Link>
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
