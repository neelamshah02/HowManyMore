import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PieChart from 'react-minimal-pie-chart';
import Sketch from './sketch';
import P5Wrapper from 'react-p5-wrapper';


class Piechart extends Component {
   render() {

      return (
        <div style={{align:'center'}}>
          <div id="chartShootings"  style={{height: '600px', width:'100%'}}></div>
         <P5Wrapper sketch={Sketch} />
        </div>
      );
   }
}
export default Piechart;
