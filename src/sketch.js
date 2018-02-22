
var shootings; //JSON data of shootings


function getShootingData(){

  //get current weather data

  var url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=mass-shootings-in-america&sort=date&facet=city&facet=state&facet=shooter_sex&facet=shooter_race&facet=type_of_gun_general&facet=fate_of_shooter_at_the_scene&facet=shooter_s_cause_of_death&facet=school_related&facet=place_type&facet=relationship_to_incident_location&facet=targeted_victim_s_general&facet=possible_motive_general&facet=history_of_mental_illness_general&facet=military_experience&refine.school_related=Yes';

  //get mass shooting data for schools
  shootings = loadJSON(url);

}


function setup() {

  getShootingData();
  var canvas = createCanvas(100, 100);
  canvas.parent("chartShootings");
  background('rgba(0 ,255,255,1)');


}


function draw(){


}
