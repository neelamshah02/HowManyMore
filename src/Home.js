import React, { Component } from 'react';
var data = require('./profile.json');

class Home extends Component {
  constructor(props) {
   super(props);
   this.state = {data:[]};
   }
   componentWillMount(){
      console.log("this is the component will mount function");
      data.sort(compare);

      function compare(a,b) {
        if (a.eventname < b.eventname)
          return -1;
        if (a.eventname > b.eventname)
          return 1;
        return 0;
      }

      //console.log('data',data);
      var obj = {'profile':[{}]};
      obj['eventname'] = data[0].eventname;
      obj['eventdate'] = data[0].eventdate;
      obj['profile'][0]['imageurl'] = data[0].imageurl;
      obj['profile'][0]['name'] = data[0].name;
      this.state.data[0] = obj;
      var count=0;
      var count1=0;
      for(var i=0;i<data.length-1;i++){
        //console.log(data[i].eventname == data[i+1].eventname);
        if(data[i].eventname == data[i+1].eventname){
          var obj1 = {'imageurl':data[i+1].imageurl,'name':data[i+1].name};
          this.state.data[count]['profile'].push(obj1);
          count1++;
        }
        else{
          count++;
          count1=0;
          var obj = {profile:[]};
          obj['eventname'] = data[i+1].eventname;
          obj['eventdate'] = data[i+1].eventdate;
          var obj1 = {'imageurl':data[i+1].imageurl,'name':data[i+1].name};
          obj['profile'][count1]=obj1;
          this.state.data[count]=obj;
        }
      }
      //console.log('data in state',this.state.data);
      /*for(var j=0;j<data.length;j++){
        var flag=0;
        for(var m=0;m<this.state.data.length;m++){
          if(data[j].eventname == this.state.data[m].eventname){
            flag=1;
          }
        }
        if(flag==0){
          var temparr = data.filter(function(temp){
            //console.log(data);
            return temp.eventname=data.eventname;
          }.bind(data));
          console.log('temparr',temparr);
          var count=0;
          for(var i=0;i<temparr.length;i=i+3){
              this.state.data[count]=[data[i],data[i+1],data[i+2]];
              count++;
          }
        }
      }*/

      //console.log(this.state.data);
   }
   render() {
     //console.log(data);
     var index1=[0,1,2];
     var index2=[0,1,2];
      return (

         <div>
         {this.state.data.map(function(e1,i1){
               console.log(e1);
               return(
                   <div key={i1} style={{textAlign:'center',borderTop:'3px solid red',marginTop:'20px'}}>
                   <p style={{margin:'auto',marginTop:'-13px',padding:'5px',borderRadius:'3px',backgroundColor:'gray',border:'1px solid blue',width:'70%',textAlign:'center'}}>{e1.eventname}</p><p>{e1.eventdate}</p>
                       {e1.profile.map(function(e2, i2){
                          //console.log('e2',e2);
                           return(
                              <div key={i2}>
                                 <p>
                                     <img src={e2.imageurl}></img>
                                 </p>
                                 <p>
                                     {e2.name}
                                 </p>
                              </div>
                           )
                       })}
                   </div>
               )
           })}
         </div>
      );
   }
}
export default Home;
