import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {Layout, Navigation, Content} from "react-mdl";
import Router from './Router';
import '../Styles/Common.css';
import BottomBar from './BottomBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(7),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();

    return (
      <Layout fixedHeader style={{backgroundColor: 'black', width: '100%'}}>
        <AppBar className={'bg-color2'} position="static" >
          <Toolbar style={{marginRight: "5%", marginLeft: "5%"}}>
            <Typography variant="Button" className={classes.title}>
              <Navigation>
                <Link to={"/"}>
                  <h4 style={{margin: '0px', color: "white"}}>Ajinkya Malhotra</h4>
                </Link>
              </Navigation>
            </Typography>
            <Navigation>
              <Link to={"/"}>
                <Button color="inherit">
                  <h6 style={{color: "white", margin: "0px"}}>Home</h6>
                </Button>
              </Link>
              <Link to="/projects">
                <Button color="inherit">
                  <h6 style={{color: "white", margin: "0px"}}>Projects</h6>
                </Button>
              </Link>
              <a href="http://localhost:3000/resume.pdf"
                 rel="noopener noreferrer" target="_blank">
                <Button color="inherit">
                  <h6 style={{color: "white", margin: "0px"}}>Resume</h6>
                </Button>
              </a>
              <Link to="/aboutme">
                <Button color="inherit">
                  <h6 style={{color: "white", margin: "0px"}}>About Me</h6>
                </Button>
              </Link>
              <Link to="/contact">
                <Button color="inherit">
                  <h6 style={{color: "white", margin: "0px"}}>Contact Me</h6>
                </Button>
              </Link>
            </Navigation>
          </Toolbar>
        </AppBar>
        <Content style={{padding: '10px'}}>
          <Router/>
        </Content>
        <BottomBar/>
      </Layout>
    );
}