import React from 'react';
import {Grid, Cell} from "react-mdl";
import '../Styles/Common.css';
import Button from '@material-ui/core/Button';

class HomePage extends React.Component{
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="Homepage">
          <Cell col={12}>

            <div className="banner-text">
              <h1><i>Ajinkya Malhotra</i></h1>
              <h5>Former Software Engineering Intern at VSP</h5>
              <h5>Grader and Student Assistant for Advance Computer graphics</h5>
              <h5>Senior at California State University, Sacramento pursuing Bachelors in Computer Science</h5>
              <h5>Actively seeking new opportunities in the field of computer science, always willing to explore new areas in computer science</h5>
              <br/>

              <p>Java | C/C++ | CUDA | HTML | CSS | SQL | JavaScript | ReactJS</p>

              <Button size="large"
                      style={{marginTop: "5px", borderRadius: "25px"}}
                      variant="contained"
                      color="primary"
                      href="http://localhost:3000/resume.pdf"
                      rel="noopener noreferrer"
                      target="_blank">
                <h6 style={{margin: "0px"}}>Resume</h6>
              </Button>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default HomePage;