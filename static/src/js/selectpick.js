function SELECT(elm_data){
  switch (elm_data) {
    case 2:
      d3.select('#'+currentID).select('svg').selectAll('.node'+currentID)
     .attr('fill', 　function(d){return color(d.level);}) ;
      break;
    case 4:
      d3.select('#'+currentID).select('svg').selectAll('.node'+currentID)
      .attr('fill', "#b52b2b") ;
      break;
    case 5:
       d3.select('#'+currentID).select('svg').selectAll('.node'+currentID)
        .attr('r', 7);
        break;
    case 6:
     var scale = d3.scaleLinear().domain([10,2000]).range([5,10]);
     d3.select('#'+currentID).select('svg').selectAll('.node'+currentID)
      .attr('r', function(d){return scale(d.value);});
      break;
    default:
  }
}
