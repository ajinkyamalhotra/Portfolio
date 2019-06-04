import React from 'react';
import {Card, CardActions, Chip, CardText, Cell, Grid, CardTitle, Button} from "react-mdl";

function CardTitleStyle(url, title) {
  const styles = {
    height: '176px',
    background: url,
    backgroundSize: '100%',
    border: 'none',
    color: (title==='2D Convolution' || title==='Histogram' || title==='Firearm Classification') ? 'black' : 'white',
  };
  return styles;
}

const ChipStyle = {
  margin:"2px",
  backgroundColor: 'rgb(63,81,181)',
  color:'white'
};

const ProjectsData = [
  {          Title: "Chess Master",
    CardTitleImage: 'url(https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg) no-repeat',
        GitHubLink: "https://github.com/ajinkyamalhotra/Chess-Master",
       Description: "• Designed a human vs CPU chess-like game and created a computer player, using Minimax algorithm.",
             Chips: ["Java", "Minimax", "DLS", "IDS", "AI"]},

  {          Title: "2D Convolution",
    CardTitleImage: 'url(http://colah.github.io/posts/2014-07-Understanding-Convolutions/img/RiverTrain-ImageConvDiagram.png) no-repeat',
        GitHubLink: "https://github.com/ajinkyamalhotra/GpuProgrammingCuda/blob/master/ConvolutionKernel.cu",
       Description: "• Implemented a tiled image convolution CUDA kernel which utilizes shared memory and constant memory.",
             Chips: ["CUDA", "C/C++", "GPU Programming"]},

  {          Title: "Histogram",
    CardTitleImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Histogram_of_arrivals_per_minute.svg/1200px-Histogram_of_arrivals_per_minute.svg.png) 15% no-repeat #46B6AC',
        GitHubLink: "https://github.com/ajinkyamalhotra/GpuProgrammingCuda/blob/master/HistogramKernel.cu",
       Description: "• Implemented an efficient Histogram algorithm using privatization technique for an input array of Integers.",
             Chips: ["CUDA", "C/C++", "GPU Programming"]},

  {          Title: "Firearm Classification",
    CardTitleImage: 'url(https://developers.google.com/machine-learning/crash-course/images/SoftmaxLayer.svg) no-repeat',
        GitHubLink: "https://github.com/ajinkyamalhotra/Firearm-Classification",
       Description: "• Designed a Neural Network (NN) using TFLearn to classify different types of firearms.",
             Chips: ["Python", "CNN", "TensorFlow"]},

  {          Title: "Porfolio",
    CardTitleImage: 'url(http://www.sclance.com/pngs/react-logo-png/react_logo_png_1141052.png) center',
        GitHubLink: "https://github.com/ajinkyamalhotra/Portfolio",
       Description: "• Created a porfolio website using React.",
             Chips: ["React", "JavaScript", "Material UI"]}
];

class Projects extends React.Component{
  render(){
    let chips = []; let projectCards = [];

    for (let i = 0; i < ProjectsData.length; i++) {
      chips = [];
      for(let j = 0; j<ProjectsData[i].Chips.length; ++j){
        chips.push(
          <Chip key={ProjectsData[i].Title+"Chip"+j} style={ChipStyle}>
            {ProjectsData[i].Chips[j]}
          </Chip>
        )
      }

      projectCards.push(
        <Cell key={ProjectsData[i].Title} style={{width: 'initial'}}>
          <Card>
            <CardTitle expand
                       style={CardTitleStyle(ProjectsData[i].CardTitleImage, ProjectsData[i].Title)}/>
            <CardTitle style={{paddingBottom: '0px'}}>{ProjectsData[i].Title}</CardTitle>
            <CardText>
              {ProjectsData[i].Description}
              <br/><br/>
              {chips}
            </CardText>
            <CardActions border>
              <Button style={{marginLeft: '33%'}} raised ripple primary
                      href={ProjectsData[i].GitHubLink}>GitHub</Button>
            </CardActions>
          </Card>
        </Cell>
      )
    }

    return (
      <div style={{margin: "auto", justifyContent: "center"}}>
        <Grid style={{margin: "auto", justifyContent: "center"}}>
          {projectCards}
        </Grid>
      </div>
    )
  }
}

export default Projects;