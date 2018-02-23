import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PieChart from 'react-minimal-pie-chart';
import Sketch from './sketch';
import P5Wrapper from 'react-p5-wrapper';


class Piechart extends Component {
   render() {

      return (
        <div style={{textAlign:'center',margin:'auto'}}>
          <div id="chartShootings" className="dotchartcss" style={{height: '600px',width:'80%',textAlign:'center',margin:'auto'}}></div>
         <P5Wrapper sketch={Sketch} />
        </div>
      );
   }
}
export default Piechart;
