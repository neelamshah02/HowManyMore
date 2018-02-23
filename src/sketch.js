
export default function sketch (p) {
var shootings; //JSON data of shootings
var width;
var height;
var minYear;
var maxYear;
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
  minYear = 1966;
  maxYear = 2016;


  var canvas = p.createCanvas(width, height);
  canvas.parent("chartShootings");
  p.background('rgba(255, 255, 255,0)');


  p.noStroke();
  p.fill('rgba(255, 255, 255,1)');
  p.rect(0,0,width-2,height+2,10,10);
  p.drawAxes();

  for(var i=0;i<shootings.records.length;i++){

  //dayOfDate = forecast.list[0].dt_txt.substring(8,10);
  //console.log(shootings.records[i].recordid);
  //console.log(shootings.records[i].fields.date);
  //console.log(shootings.records[i].fields.number_of_victims_injured);
  var dayOfYear = ((p.int(shootings.records[i].fields.date.substring(5,7))-1)*30)+p.int((shootings.records[i].fields.date.substring(8,10)));
  //console.log(dayOfYear);
  incidents.push({dayOfYear: dayOfYear,
                  month:shootings.records[i].fields.date.substring(5,7),
                  year:shootings.records[i].fields.date.substring(0,4),
                  fatalities:shootings.records[i].fields.number_of_victim_fatalities,
                  injured:shootings.records[i].fields.number_of_victims_injured,
                  link:shootings.records[i].fields.data_source_1});
  }
  var button;

  //button = p.ellipse(100,100,100,100);
  //button.mouseOver(console.log(1));


}

p.mouseClicked = function() {

 if (p.mouseX >100 && p.mouseY >100)
 console.log(maxYear);
//  document.out("abcd")

}


p.website = function (){
    p.link("p5js.org");
}

p.link = function (href, target){
  if (target !== 'undef')  p.window.open(href, target);
  else                   p.window.location = href;
};


p.drawAxes = function (){

  var x;
  var y;

  p.fill(110, 10, 253, 100);
  p.textSize(10);
  //console.log(maxYear);

  for(var i=maxYear;i>minYear-1;i--){
    y = p.map(i,minYear,maxYear,height-10,20);
    p.text(i, 5, y);
    p.text(i, width-25, y);

    //console.log(i);
  }


  for(var i=0;i<12;i++){
    x = p.map(i,0,11,20,width-50);
    //console.log(p.getMonth(i))
    p.text(p.getMonth(i), x, 10);
    p.text(p.getMonth(i), x, height-10);

    //console.log(i);
  }


}




p.getMonth = function(monthNumber) {
  var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];
  var monthIndex = monthNumber;

  return monthNames[monthIndex];
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
       x = p.map(incidents[i].dayOfYear,1,365,20,width-20); //min 1966-08-01 max 2016-02-09
       y = p.map(incidents[i].year,minYear,maxYear,height-20,20);
       r = p.map(incidents[i].fatalities,0,32,10,25);  // min 0 max 32
       strokeWeight = p.map(incidents[i].injured,0,32,5,15);  // min 0 max 32
       p.stroke(strokeWeight);
       p.stroke('rgba(242, 213, 24,0.8)')
       p.ellipse(x, y, r, r);
       //p.document.out(incidents[i].fatalities.link)
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
