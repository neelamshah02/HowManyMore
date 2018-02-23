
export default function sketch (p) {
var shootings; //JSON data of shootings
var width;
var height;
var isPreLoadDone;
var incidents = [];
var trans;

p.getShootingData = function (){

  //get current weather data

  var url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=mass-shootings-in-america&rows=80&refine.school_related=Yes&sort=date';

  //get mass shooting data for schools
  shootings = p.loadJSON(url);

}

p.preload = function (){
  p.getShootingData();
  isPreLoadDone = true;
}


p.setup = function (){

  width = document.getElementById('chartShootings').offsetWidth-20;
  height = document.getElementById('chartShootings').offsetHeight-20;
  trans = 10;

  var canvas = p.createCanvas(width, height);
  canvas.parent("chartShootings");
  p.background('rgba(255, 255, 255,0)');


  p.noStroke();
  p.fill('rgba(255, 255, 255,1)');
  p.rect(0,0,width-2,height+2,10,10);

  for(var i=0;i<shootings.records.length;i++){

  //dayOfDate = forecast.list[0].dt_txt.substring(8,10);
  //console.log(shootings.records[i].recordid);
  //console.log(shootings.records[i].fields.date);
  //console.log(shootings.records[i].fields.number_of_victims_injured);
  var dayOfYear = ((p.int(shootings.records[i].fields.date.substring(5,7))-1)*30)+p.int((shootings.records[i].fields.date.substring(8,10)));
  console.log(dayOfYear);
  incidents.push({dayOfYear: dayOfYear,
                  month:shootings.records[i].fields.date.substring(5,7),
                  year:shootings.records[i].fields.date.substring(0,4),
                  fatalities:shootings.records[i].fields.number_of_victim_fatalities,
                  injured:shootings.records[i].fields.number_of_victims_injured});
  }

}



p.draw = function (){
    //total_number_of_fatalities - size of the bubble
    //date - month as x axis and year as y axis
    //data_source_1 is the link to the aritcle

      var x;
      var y;
      var r;
      var strokeWeight;



      p.fill('rgba(166, 6, 6, ' + 10/trans +')');
      trans = trans%100;
      trans++;
      p.noStroke();

    for(var i=0;i<incidents.length;i++){
       x = p.map(incidents[i].dayOfYear,1,365,20,width-20); //min 1966-08-01 max2016-02-09
       y = p.map(incidents[i].year,1966,2016,height-20,20);
       r = p.map(incidents[i].fatalities,0,32,10,25);  // min 0 max 32
       strokeWeight = p.map(incidents[i].injured,0,32,2,10);  // min 0 max 32
       p.stroke(strokeWeight  );
       p.stroke('rgba(0 ,255,255,0.8)')
       p.ellipse(x, y, r, r);
       //console.log("x = "+x);
       //console.log("y = "+y);

    }


    //   setTimeout(function(){
    //     for(var i=0;i<shootings.records.length;i++){
    //
    //       //dayOfDate = forecast.list[0].dt_txt.substring(8,10);
    //
    //
    //     //console.log(shootings.records[i].recordid);
    //   }
    // }, 0);


}
}
