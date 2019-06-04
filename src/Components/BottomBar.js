import React, { Component } from 'react';
import {Footer, FooterLinkList} from "react-mdl";
import '../Styles/Common.css';

class BottomBar extends Component {
  render() {
    return (
      <Footer className={'bg-color2'} size="mini">
          <FooterLinkList style={{position: 'fixed', bottom: '5px', right: '15px', }}>
            <div className="social-links">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ajinkyamalhotra/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a href="https://github.com/ajinkyamalhotra" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Email */}
              <a href="mailto:ajinkyamalhotra73@gmail.com">
                <i className="fa fa-envelope-square" aria-hidden="true" />
              </a>

            </div>
          </FooterLinkList>
      </Footer>
    );
  }
}

export default BottomBar;


