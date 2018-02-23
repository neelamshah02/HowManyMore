import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';

class Piechart extends Component {
   render() {
     let data = [
       {
       "name":"Mental illness",
       "path":"Mental illness",
       "count":19,
       "state":"displayed"
       },
       {
       "name":"Multiple motives",
       "path":"Multiple motives",
       "count":10,
       "state":"displayed"
       },
       {
       "name":"Unknown",
       "path":"Unknown",
       "count":8,
       "state":"displayed"
       },
       {
       "name":"Social dispute",
       "path":"Social dispute",
       "count":7,
       "state":"displayed"
       },
       {
       "name":"Failure",
       "path":"Failure",
       "count":6,
       "state":"displayed"
       },
       {
       "name":"Expulsion/Suspension",
       "path":"Expulsion/Suspension",
       "count":5,
       "state":"displayed"
       },
       {
       "name":"Harassment",
       "path":"Harassment",
       "count":5,
       "state":"displayed"
       },
       {
       "name":"Terminated/Denied/Reprimanded",
       "path":"Terminated/Denied/Reprimanded",
       "count":4,
       "state":"displayed"
       },
       {
       "name":"Rejection",
       "path":"Rejection",
       "count":3,
       "state":"displayed"
       },
       {
       "name":"Domestic dispute",
       "path":"Domestic dispute",
       "count":2,
       "state":"displayed"
       },
       {
       "name":"Legal dispute",
       "path":"Legal dispute",
       "count":1,
       "state":"displayed"
       },
       {
       "name":"Political/Religious ideals",
       "path":"Political/Religious ideals",
       "count":1,
       "state":"displayed"
       },
       {
       "name":"Race",
       "path":"Race",
       "count":1,
       "state":"displayed"
       },
       {
       "name":"Social Dispute",
       "path":"Social Dispute",
       "count":1,
       "state":"displayed"
       }
       ]

      return (
        <div>
         <PieChart className = "piechart"

              data={[
                { value: data[0].count, key: data[0].name, color: '#e6194b' },
                { value: data[1].count, key: data[1].name, color: '#3cb44b' },
                { value: data[2].count, key: data[2].name, color: '#ffe119' },
                { value: data[3].count, key: data[3].name, color: '#0082c8' },
                { value: data[4].count, key: data[4].name, color: '#f58231' },
                { value: data[5].count, key: data[5].name, color: '#911eb4' },
                { value: data[6].count, key: data[6].name, color: '#46f0f0' },
                { value: data[7].count, key: data[7].name, color: '#f032e6' },
                { value: data[8].count, key: data[8].name, color: '#d2f53c' },
                { value: data[9].count, key: data[9].name, color: '#fabebe' },
                { value: data[10].count, key: data[10].name, color: '#008080' },
                { value: data[11].count, key: data[11].name, color: '#e6beff' },

              ]}
            />
        </div>
      );
   }
}
export default Piechart;
