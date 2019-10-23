$("#controlBut").click(function() {
    event.preventDefault();
    controlBut = 1 - controlBut;
    width = svgWidth[controlBut];
    if(controlBut == 1) {
        $('#svg'+currentID).width(width)
        $('#detailsvg'+currentID).width(width)
        forceDict[currentID].force("center", d3.forceCenter(width / 2, height / 2))
        forceDict[currentID].alpha(1).restart();
        let g = detailDict[currentID][0],g_wi=detailDict[currentID][3],g_he=detailDict[currentID][4],wi=detailDict[currentID][5],he=detailDict[currentID][6];
        detail_graph_recenter(g,width,height,g_wi,g_he,wi,he);



    } else {
        setTimeout(function(){
          $('#detailsvg'+currentID).width(width);
          $('#svg'+currentID).width(width);
            // d3.select(".d_graph").transition().attr("transform","translate(250,0)");
          forceDict[currentID].force("center", d3.forceCenter(width / 2, height / 2))
          forceDict[currentID].alpha(1).restart();
          let g = detailDict[currentID][0],g_wi=detailDict[currentID][3],g_he=detailDict[currentID][4],wi=detailDict[currentID][5],he=detailDict[currentID][6];
          detail_graph_recenter(g,width,height,g_wi,g_he,wi,he);
        },300);
    }
})
$("#hisBut").click(function() {
    hisBut = 1 - hisBut;
    height = svgHeight[hisBut]
    if(hisBut == 1) {
        $('#svg'+currentID).height(height)
        $('#detailsvg'+currentID).height(height)
        forceDict[currentID].force("center", d3.forceCenter(width / 2, height / 2))
        forceDict[currentID].alpha(1).restart();
        let g = detailDict[currentID][0],g_wi=detailDict[currentID][3],g_he=detailDict[currentID][4],wi=detailDict[currentID][5],he=detailDict[currentID][6];
        detail_graph_recenter(g,width,height,g_wi,g_he,wi,he);
        // $('.d_graph').css("transform", "translate(0px, 100px)");
    } else {
        setTimeout(function(){
            $('#svg'+currentID).height(height)
            $('#detailsvg'+currentID).height(height)
          forceDict[currentID].force("center", d3.forceCenter(width / 2, height / 2))
          forceDict[currentID].alpha(1).restart();
          let g = detailDict[currentID][0],g_wi=detailDict[currentID][3],g_he=detailDict[currentID][4],wi=detailDict[currentID][5],he=detailDict[currentID][6];
          detail_graph_recenter(g,width,height,g_wi,g_he,wi,he);
        },300);
    }
})

function drawOverview() {
    let radius=7;
    let force = d3.forceSimulation()
       .velocityDecay(0.1)
       // .force("x", d3.forceX(width / 2).strength(.05))
       // .force("y", d3.forceY(height / 2).strength(.05))
       .force("charge", d3.forceManyBody().strength(-18))
       .force("link", d3.forceLink().id(function(d) { return d.ind }))
       .force("center", d3.forceCenter(width / 2, height / 2));

    forceDict[currentID] = force;

    let svg = d3.select("#" + currentID+"_p").append("svg")
        .attr("class", "svg")
        .attr("id", "svg" + currentID)
        .attr("width", width)
        .attr("height", height)
        .append("g");

    $.get("/overview_"+change_data+"",function(data,status){
        overview_data=data;
        force
            .nodes(overview_data.nodes)
            .force("link").links(overview_data.links)
        let link = svg.append("g").attr("class", "o_link")
            .selectAll("line")
            .data(overview_data.links)
            .enter()
            .append("line");

        let node = svg.append("g").attr("class","o_node")
            .selectAll("circle")
            .data(overview_data.nodes)
            .enter().append("circle")
            .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

        node.attr('class', function (d) { return 'node' + currentID + " " + currentID + "-" + d.name; })
            .attr('id',function(d){return 'overnode'+d.name})
            .attr('r', radius - .75)
            .attr('fill', function (d) { return color(d.level); });

        // =========== events =============
        node.on('mouseover', function(d){
            // if(d.level != 0){
                if(selData[currentID]['close'] == true) {
                    $("#sel" + currentID).position({
                        my: "left top",
                        at: "left top",
                        of: "#selbut" + currentID,
                        within: "#" + currentID
                    });
                    $("#selbut"+currentID).css("visibility", "hidden");
                    $("#sel"+currentID).css("visibility", "visible");
                    selData[currentID]["close"] = false;
                }
                if(!(d.name in selData[currentID]['items'])) {
                    updateNodes();
                    $('#selbody' + currentID).prepend( '<div class="selectedBox" id="sb-' + d.name +
                        '" style="background-color: ' + hexToRGB(color(infoDict[d.name]['level']), 0.4) + '">' +
                            '<button type="button" class="btn btn-light btn-xs sbclose" id="sbclose-' + d.name + '"> X </button>' +
                            '<div class="sbinfo">' +
                                '<h6> name: ' + d.show_name + ' </h6>' +
                                '<h6> users: ' + infoDict[d.name]['value'] + ' </h6>' +
                                '<h6> level: ' + infoDict[d.name]['level'] + ' </h6>' +
                            '</div>' +
                        '</div>'
                    );
                }
                d3.selectAll("." + currentID + '-' + d.name)
                .attr("r", 12);
            // }
        }).on('mouseout', function(d){
            // if(d.level != 0){
                if(!(d.name in selData[currentID]['items'])) {
                    removeItem(d.name, false);
                }
                else {
                    d3.selectAll("." + currentID + '-' + d.name)
                    .attr("r", radius - .75);
                }
            // }
        }).on('click', function(d){
            // if(d.level != 0){
                addItem(d.name, false);
            // }


        });

        force.on("tick", function () {
          node.attr("cx", function(d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
              .attr("cy", function(d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); });

          link.attr("x1", function(d) { return d.source.x; })
              .attr("y1", function(d) { return d.source.y; })
              .attr("x2", function(d) { return d.target.x; })
              .attr("y2", function(d) { return d.target.y; });
            // node.attr("transform", function (d) {
            //   console.log(d.x)
            //     return "translate(" + d.x + "," + d.y + ")";
            // });
        });
    // });
      drawSelected();
});
    function dragstarted(d) {
        if (!d3.event.active) force.alphaTarget(0.5).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
    function dragended(d) {
        if (!d3.event.active) force.alphaTarget(0.5);
        d.fx = null;
        d.fy = null;
    }
}
function drawOnetab() {
    // drawall();
    if ($("#Dataselect").val()!='0'){
      drawOverview();
    }
}
drawOnetab()
