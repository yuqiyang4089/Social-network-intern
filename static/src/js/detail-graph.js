
function drawDetail() {


    let input = {}
    for(var each in selData[currentID]['items']){
        // input[each]=(selData[currentID]['items'][each]['pass']);
        input[each]=[];
    }

      $.post('/detail_'+change_data+'',JSON.stringify(input),function(data,status){
        calculatedData = data;
        let node_data = calculatedData['nodes']
        let max_x;
        let max_y;
        let min_x;
        let min_y;
        let arr_x = [];
        let arr_y = [];
        node_data.forEach(function(d){
          d.cx = parseFloat(d.cx);
          d.cy = parseFloat(d.cy);
          arr_x.push(d.cx);
          arr_y.push(d.cy);
        })
        // ================calculate maxium and minium in numeric property=====
        calculate_ma_mi(node_data, data.links);
        // =====standarized=======================
        max_x = Math.max(...arr_x);
        min_x = Math.min(...arr_x);
        max_y = Math.max(...arr_y);
        min_y = Math.min(...arr_y);
        let wi = max_x+min_x;
        let he = max_y+min_y;
        let g_wi = max_x-min_x;
        let g_he = max_y-min_y;
        let preference = (Math.min(g_wi,g_he))
        radi = 0.005*preference
        radi = radi.toFixed(3)
        stro = 0.0002*preference
        stro = stro.toFixed(3)
        // console.log(radi.toFixed(3))
        $('#nz-in').attr('value',radi);
        $('#ew-in').attr('value',stro);
        if(min_x<0){
          wi = max_x-min_x;
          node_data.forEach(function(d){
          d.cx = d.cx-min_x;
        })};
        if(min_y<0){
          he = max_y-min_y;
          node_data.forEach(function(d){
          d.cy = d.cy-min_y;
        })}


        data.links.forEach(function(d){
          d.source = node_data[d.source]
          d.target = node_data[d.target]
        })
        let svg = d3.select("#" + currentID+"_c").append("svg")
            .attr("class", function(){return currentID+"d_svg"})
            .attr("id", "detailsvg" + currentID)
            .attr("width", width)
            .attr("height", height);

            svg.append("defs").append("marker")
            .attr("id", function(){return "arrow"+currentID;})
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 20)
            .attr("refY", 0)
            .attr("markerWidth", 8)
            .attr("markerHeight", 8)
            .attr("orient", "auto")
            .append("svg:path")
            .attr("d", "M0,-5L10,0L0,5");

        let k = svg.append("g").attr("class", "d_graph");
           g=k.append("g");
          detail_graph_recenter(g,width,height,g_wi,g_he,wi,he);
          detailDict[currentID]=[g,width,height,g_wi,g_he,wi,he];

           // .attr("transform", "scale("+sca+")translate("+x_p+","+y_p+")");


        //draw lines for the links
        let link = g.append("g").attr("class", function(){return currentID+"d_link"})
            .selectAll("line")
            .data(data.links)
            .enter().append("line")
            .attr('x1',function(d){
              edge_count+=1;
              return d.source.cx;
            })
            .attr('y1',function(d){
              return d.source.cy;
            })
            .attr('x2',function(d){
              return d.target.cx;
            })
            .attr('y2',function(d){
              return d.target.cy;
            })
            .style("opacity", 0.7)
            .style("stroke", "black")         // colour the line
            .style('stroke-width',stro);


            //Zoom functions
        function zoom_actions(){
            k.attr("transform", d3.event.transform);
            // g.
        }
        var zoom_handler = d3.zoom()
            .on("zoom", zoom_actions);

        zoom_handler(svg);
        //draw circles for the nodes
        let node = g.append("g").attr("class", function(){return currentID+"d_node"})
                .selectAll("circle")
                .data(node_data)
                .enter()
                .append("circle")
                .attr("r", radi)
                .attr('fill','red')
                .attr('cx',function(d){node_count+=1;
                  return d.cx})
                .attr('cy',function(d){return d.cy})
                .style('opacity', 0.7)
                .call(d3.drag().on('drag',dragged));
// give it to global node===============================================
          node_curr=d3.select("#detailsvg"+currentID).selectAll("circle");
          edge_curr=d3.select("#detailsvg"+currentID).selectAll("line");

          eventnode(node_curr);
          eventedge(edge_curr);

          $('#n_count').html(node_count);
          $('#e_count').html(edge_count);
        // label function =====================
         n_label = d3.select("#n_tooltip").style("opacity", 0);
         e_label = d3.select("#e_tooltip").style("opacity", 0);



        function dragged(d) {
          d.x = d3.event.x, d.y = d3.event.y;
          d3.select(this).attr("cx", d.x).attr("cy", d.y);
          link.filter(function(l) { return l.source === d; }).attr("x1", d.x).attr("y1", d.y);
          link.filter(function(l) { return l.target === d; }).attr("x2", d.x).attr("y2", d.y);
        }


      })



}





// ===============change layout================
function change_layout(input) {


 let real_in = input[0];

  // $("#"+currentID+"_p").removeClass("pc-active");
  $("#"+currentID+"_c").children().last().remove();
      $.post('/detail_'+change_data+'',JSON.stringify(real_in),function(data,status){
        calculatedData = data;
        let node_data = calculatedData['nodes']
        let max_x;
        let max_y;
        let min_x;
        let min_y;
        let arr_x = [];
        let arr_y = [];
        node_data.forEach(function(d){
          d.cx = parseFloat(d.cx);
          d.cy = parseFloat(d.cy);
          arr_x.push(d.cx);
          arr_y.push(d.cy);
        })
        // ================calculate maxium and minium in numeric property=====
        calculate_ma_mi(node_data, data.links);
        // =====standarized=======================
        max_x = Math.max(...arr_x);
        min_x = Math.min(...arr_x);
        max_y = Math.max(...arr_y);
        min_y = Math.min(...arr_y);
        let wi = max_x+min_x;
        let he = max_y+min_y;
        let g_wi = max_x-min_x;
        let g_he = max_y-min_y;
        let preference = (Math.min(g_wi,g_he))
        radi = 0.006*preference
        radi = radi.toFixed(3)
        stro = 0.0004*preference
        stro = stro.toFixed(3)

        $('#nz-in').attr('value',radi);
        $('#ew-in').attr('value',stro);

        if(min_x<0){
          wi = max_x-min_x;
          node_data.forEach(function(d){
          d.cx = d.cx-min_x;
        })};
        if(min_y<0){
          he = max_y-min_y;
          node_data.forEach(function(d){
          d.cy = d.cy-min_y;
        })}


        data.links.forEach(function(d){
          d.source = node_data[d.source]
          d.target = node_data[d.target]
        })
        let svg = d3.select("#" + currentID+"_c").append("svg")
            .attr("class", function(){return currentID+"d_svg"})
            .attr("id", "detailsvg" + currentID)
            .attr("width", width)
            .attr("height", height);

            svg.append("defs").append("marker")
            .attr("id", function(){return "arrow"+currentID;})
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 20)
            .attr("refY", 0)
            .attr("markerWidth", 8)
            .attr("markerHeight", 8)
            .attr("orient", "auto")
            .append("svg:path")
            .attr("d", "M0,-5L10,0L0,5");

        let k = svg.append("g").attr("class", "d_graph");
           g=k.append("g");
          detail_graph_recenter(g,width,height,g_wi,g_he,wi,he);
          detailDict[currentID]=[g,width,height,g_wi,g_he,wi,he];

           // .attr("transform", "scale("+sca+")translate("+x_p+","+y_p+")");


        //draw lines for the links
        let link = g.append("g").attr("class", function(){return currentID+"d_link"})
            .selectAll("line")
            .data(data.links)
            .enter().append("line")
            .attr('x1',function(d){
              edge_count+=1;
              return d.source.cx;
            })
            .attr('y1',function(d){
              return d.source.cy;
            })
            .attr('x2',function(d){
              return d.target.cx;
            })
            .attr('y2',function(d){
              return d.target.cy;
            })
            .style("opacity", 0.7)
            .style("stroke", "black")         // colour the line
            .style('stroke-width',stro);


            //Zoom functions
        function zoom_actions(){
            k.attr("transform", d3.event.transform);
            // g.
        }
        var zoom_handler = d3.zoom()
            .on("zoom", zoom_actions);

        zoom_handler(svg);
        //draw circles for the nodes
        let node = g.append("g").attr("class", function(){return currentID+"d_node"})
                .selectAll("circle")
                .data(node_data)
                .enter()
                .append("circle")
                .attr("r", radi)
                .attr('fill','red')
                .attr('cx',function(d){node_count+=1;
                  return d.cx})
                .attr('cy',function(d){return d.cy})
                .style('opacity', 0.7)
                .call(d3.drag().on('drag',dragged));
// give it to global node===============================================
          node_curr=d3.select("#detailsvg"+currentID).selectAll("circle");
          edge_curr=d3.select("#detailsvg"+currentID).selectAll("line");
          // console.log(edge_curr)
          eventnode(node_curr);
          eventedge(edge_curr);

          $('#n_count').html(node_count);
          $('#e_count').html(edge_count);
        // label function =====================
         n_label = d3.select("#n_tooltip").style("opacity", 0);
         e_label = d3.select("#e_tooltip").style("opacity", 0);



        function dragged(d) {
          d.x = d3.event.x, d.y = d3.event.y;
          d3.select(this).attr("cx", d.x).attr("cy", d.y);
          link.filter(function(l) { return l.source === d; }).attr("x1", d.x).attr("y1", d.y);
          link.filter(function(l) { return l.target === d; }).attr("x2", d.x).attr("y2", d.y);
        }


        if (input[1] == 1){
                let type=input[0]
                let prop = input[2]
                let arr =[];
                node_curr.each(function(d){
                  arr.push(d[type])
                })
                let dom = [Math.min.apply(Math,arr),Math.max.apply(Math,arr)]
                if(prop == 2 ){
                      eval("blues").domain(dom).interpolator(d3["interpolateBlues"]);
                      node_curr.attr('fill',function(d){
                        return eval("blues")((d[type]))
                      })
                }
                if(prop == 1){
                  radi = parseFloat(radi)
                  // console.log([parseFloat(radi), type,prop,dom,liScale])
                  let scale  = d3.scaleLinear().domain(dom).range([radi/2,radi*4])
                  node_curr.attr('r',function(d){
                    return scale(d[type])
                  })
                }
        }





      })



}
// ==========change layput of prominence=======
// function change_layout_prominence(input) {
//    $.post('/detail_'+change_data+'',JSON.stringify(input),function(data,status){
//
//    }

  // $("#"+currentID+"_p").removeClass("pc-active");
//   $("#"+currentID+"_c").children().last().remove();
//       $.post('/detail_'+change_data+'',JSON.stringify(input),function(data,status){
//         calculatedData = data;
//         let node_data = calculatedData['nodes']
//         let max_x;
//         let max_y;
//         let min_x;
//         let min_y;
//         let arr_x = [];
//         let arr_y = [];
//         node_data.forEach(function(d){
//           d.cx = parseFloat(d.cx);
//           d.cy = parseFloat(d.cy);
//           arr_x.push(d.cx);
//           arr_y.push(d.cy);
//         })
//         // ================calculate maxium and minium in numeric property=====
//         calculate_ma_mi(node_data, data.links);
//         // =====standarized=======================
//         max_x = Math.max(...arr_x);
//         min_x = Math.min(...arr_x);
//         max_y = Math.max(...arr_y);
//         min_y = Math.min(...arr_y);
//         let wi = max_x+min_x;
//         let he = max_y+min_y;
//         let g_wi = max_x-min_x;
//         let g_he = max_y-min_y;
//         radi = 0.005*(Math.min(g_wi,g_he))
//         $('#nz-in').attr('value',radi);
//         if(min_x<0){
//           wi = max_x-min_x;
//           node_data.forEach(function(d){
//           d.cx = d.cx-min_x;
//         })};
//         if(min_y<0){
//           he = max_y-min_y;
//           node_data.forEach(function(d){
//           d.cy = d.cy-min_y;
//         })}
//
//
//         data.links.forEach(function(d){
//           d.source = node_data[d.source]
//           d.target = node_data[d.target]
//         })
//         let svg = d3.select("#" + currentID+"_c").append("svg")
//             .attr("class", function(){return currentID+"d_svg"})
//             .attr("id", "detailsvg" + currentID)
//             .attr("width", width)
//             .attr("height", height);
//
//             svg.append("defs").append("marker")
//             .attr("id", function(){return "arrow"+currentID;})
//             .attr("viewBox", "0 -5 10 10")
//             .attr("refX", 20)
//             .attr("refY", 0)
//             .attr("markerWidth", 8)
//             .attr("markerHeight", 8)
//             .attr("orient", "auto")
//             .append("svg:path")
//             .attr("d", "M0,-5L10,0L0,5");
//
//         let k = svg.append("g").attr("class", "d_graph");
//            g=k.append("g");
//           detail_graph_recenter(g,width,height,g_wi,g_he,wi,he);
//           detailDict[currentID]=[g,width,height,g_wi,g_he,wi,he];
//
//            // .attr("transform", "scale("+sca+")translate("+x_p+","+y_p+")");
//
//
//         //draw lines for the links
//         let link = g.append("g").attr("class", function(){return currentID+"d_link"})
//             .selectAll("line")
//             .data(data.links)
//             .enter().append("line")
//             .attr('x1',function(d){
//               edge_count+=1;
//               return d.source.cx;
//             })
//             .attr('y1',function(d){
//               return d.source.cy;
//             })
//             .attr('x2',function(d){
//               return d.target.cx;
//             })
//             .attr('y2',function(d){
//               return d.target.cy;
//             })
//             .style("opacity", 0.7)
//             .style("stroke", "grey")         // colour the line
//             .style('stroke-width',0.009);
//
//
//             //Zoom functions
//         function zoom_actions(){
//             k.attr("transform", d3.event.transform);
//             // g.
//         }
//         var zoom_handler = d3.zoom()
//             .on("zoom", zoom_actions);
//
//         zoom_handler(svg);
//         //draw circles for the nodes
//         let node = g.append("g").attr("class", function(){return currentID+"d_node"})
//                 .selectAll("circle")
//                 .data(node_data)
//                 .enter()
//                 .append("circle")
//                 .attr("r", radi)
//                 .attr('fill','red')
//                 .attr('cx',function(d){node_count+=1;
//                   return d.cx})
//                 .attr('cy',function(d){return d.cy})
//                 .style('opacity', 0.7)
//                 .call(d3.drag().on('drag',dragged));
// // give it to global node===============================================
//           node_curr=d3.select("#detailsvg"+currentID).selectAll("circle");
//           edge_curr=d3.select("#detailsvg"+currentID).selectAll("line");
//           eventnode(node_curr);
//           eventedge(edge_curr);
//           $('#n_count').html(node_count);
//           $('#e_count').html(edge_count);
//         // label function =====================
//          n_label = d3.select("#n_tooltip").style("opacity", 0);
//          e_label = d3.select("#e_tooltip").style("opacity", 0);
//
//
//
//         function dragged(d) {
//           d.x = d3.event.x, d.y = d3.event.y;
//           d3.select(this).attr("cx", d.x).attr("cy", d.y);
//           link.filter(function(l) { return l.source === d; }).attr("x1", d.x).attr("y1", d.y);
//           link.filter(function(l) { return l.target === d; }).attr("x2", d.x).attr("y2", d.y);
//         }
//
//
//       })



// }
