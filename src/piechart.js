import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';
import data from './piecartdata.json'

class Piechart extends Component {
   render() {
      let color =['#e6194b','#3cb44b','#ffe119','#0082c8','#f58231','#911eb4','#46f0f0','#f032e6','#d2f53c','#fabebe','#008080','#e6beff'];
      return (
        <div>
         <PieChart className = "piechart"

              data={[
                { value: data[0].count, key: data[0].name, color: color[0]},
                { value: data[1].count, key: data[1].name, color: color[1] },
                { value: data[2].count, key: data[2].name, color: color[2] },
                { value: data[3].count, key: data[3].name, color: color[3] },
                { value: data[4].count, key: data[4].name, color: color[4] },
                { value: data[5].count, key: data[5].name, color: color[5] },
                { value: data[6].count, key: data[6].name, color: color[6] },
                { value: data[7].count, key: data[7].name, color: color[7] },
                { value: data[8].count, key: data[8].name, color: color[8] },
                { value: data[9].count, key: data[9].name, color: color[9] },
                { value: data[10].count, key: data[10].name, color: color[10] },
                { value: data[11].count, key: data[11].name, color: color[11] }
              ]}
            />
            {color.map((e1,i1)=>{
              return(
                <div >
                <table style={{paddingLeft:"20px"}}>
                <tr > 
                  <td><div style={{backgroundColor:e1,height:'10px',width:'10px', }}></div></td>
                  <td><span className="bulletData">{data[i1]["name"]}</span> </td>
                  
                </tr>
                </table>
                </div>
              )
            })}
        </div>
      );
   }
}
export default Piechart;
