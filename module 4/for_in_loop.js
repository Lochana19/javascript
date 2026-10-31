// for_in loop allow loop you to loop through 
// the  properties of an objects

var colours={
    primary_colour:"red",
    secondary_colour:'blue',
    tertiary_colour:'white'
}

for(colour in colours){
    console.log(colour +"="+ colours[colour])
}