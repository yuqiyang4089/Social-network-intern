// =======colormap===
var accent = d3.scaleOrdinal(d3.schemeAccent);
var category10 = d3.scaleOrdinal(d3.schemeCategory10);
var dark2 = d3.scaleOrdinal(d3.schemeDark2);
var paired = d3.scaleOrdinal(d3.schemePaired);
var pastel1 = d3.scaleOrdinal(d3.schemePastel1);
var set3 = d3.scaleOrdinal(d3.schemeSet3);
var tableau10 = d3.scaleOrdinal(d3.schemeTableau10);
var blues = d3.scaleSequential(d3.interpolateBlues);
var greens = d3.scaleSequential(d3.interpolateGreens);
var greys = d3.scaleSequential(d3.interpolateGrays);
var purples = d3.scaleSequential(d3.interpolatePurples);
var oranges = d3.scaleSequential(d3.interpolateOranges);
var reds = d3.scaleSequential(d3.interpolateReds);

//===========================
var select_label_n = [];
var select_label_e=[];
var n_label; //label events
var e_label;

var node_count=0;
var edge_count=0;


var sinebow = d3.scaleSequential(d3.interpolateSinebow);
var spectral = d3.scaleSequential(d3.interpolatepectral);

// var blues = d3.scaleSequential(d3.interpolateBlues(14*t+1980));

var color = d3.scaleOrdinal().range(["#b52b2b", "#63a375","#87bcde","#d57a66"])
// ============scale setting==============
var powScale = d3.scalePow().exponent(10);
var logScale = d3.scaleLog();
var liScale = d3.scaleLinear();
var radi = 2;
var stro =0.01;
var composeCount = 0;
var currentID = 'tab1';
var width, height;

// ====change data from back-end===
var change_data;
var controlWidth = 320;
var historyWidth = 140;
var svgWidth, svgHeight;
var forceDict={};
var detailDict = {};
var hisBut = 0, controlBut = 1;
var selData = [];
var infoDict = {};
var detailData = {};
// =====get detail data from back-end when clicking nodes in overview
var calculatedData;

var slider_n={};
var slider_e={};
var slider_layout = {};

var slider_exc={};//for default domain slider.
var gRange_n={};
var gRange_e={};
var gRange_exc={};
var gRange_layout={};

var node_curr; //point to current node
var edge_curr; //point to current edge
// var svg_curr;

var record={};
var fil_v;
var fil_user_o={}
var fil_e;
var fil_user_e={}
var track_status= {}

var numeric_prop_v = {};
var numeric_prop_e = {};

track_status[currentID]={'tabItem1':{"head1":new Object(),'head2':new Object(),'head3':new Object(),'head2':new Object()},'tabItem2':{"head1":new Object(),'head2':new Object(),'head3':new Object(),'head2':new Object()},'tabItem3':{'Net':false},'tabItem4':{'index':false,'fd':false}};



// ======get filter datastream and select datastream from back-end
function get_data(){
  $.get('/init_'+change_data+'',function(data,status){
    for(let j in data['v']['con']){
      data['v']['con'][j]=data['v']['con'][j].map(Number);
      numeric_prop_v[j]={};
    }
    fil_v={'con':data['v']['con'],'cat':data['v']['cat']}
    fil_user_o = data['v']['fil']

    for(let j in data['e']['con']){
      data['e']['con'][j]=data['e']['con'][j].map(Number);
      numeric_prop_e[j]={};
    }
    fil_e={'con':data['e']['con'],'cat':data['e']['cat']}
    fil_user_e = data['e']['fil']
    draw_tab1_head2();
    draw_tab2_head2();
    draw_tab1_head4();
    draw_tab2_head4();

    draw_tab1_head3();
    draw_tab2_head3();

    $(document).ready( function() {
      $('.ui.dropdown')
        .dropdown({
          allowAdditions: true
        });
      $('.ui.dropdown.all')
        .dropdown({
        });

        $('.menu.fil').children().each(function(){
         $(this).click()})
      });

  })
  $.get('/infor_'+change_data+'',function(data,status){
    infoDict = data;
  })


}
draw_tab1_head1();
draw_tab2_head1();

$('#content-his').append(
    '<ul class="nav nav-tabs" id="multi-tabs">'+
        '<li class="nav-item multi-item" id="litab1">'+
            '<a class="nav-link multi-link active" data-toggle="tab" id="atab1" href="#tab1">'+
                '<button class="close" value=1>×</button>Tab 1'+
            '</a>'+
        '</li>'+
        '<button class="btn btn-light btn-sm" id="new-tab"> + </button>'+
    '</ul>'+
    '<div class="tab-content" id="multi-tabs-content">'+
        '<div class="tab-pane multi-pane active" id="tab1">'+
        '</div>'+
    '</div>'
)

$('#history').append('<h3 style="text-align:center; opacity:0.5; padding-top:25px""> No History</h3>')
width =
$('#'+currentID).width();
height = $('#'+currentID).height()+historyWidth;
svgWidth = {1: width, 0: width+controlWidth};
svgHeight = {1: height-historyWidth, 0: height};


function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

// function recordevent(e,currentID){
//   if(!(currentID in Object.keys(record))){
//     record[currentID]=[]
//   }
//   var s_ope=[]
//   s_ope={
//     target:e.target.attributes,
//     type: e.type
//   }
//   record[currentID].push(s_ope
//   )
//
// }

function multi_reshow(currentID){
  reshowfil_box(currentID);
  reshow_dire(currentID);
}

// ============dedault status===========
// ====check node======
function default_full_filter_n(){
  // =============filter===========
    for(let i in slider_n){
      slider_n[i].value(slider_n[i].default());
    };

    let fil_user_ree ={};
    check_all_n(fil_user_ree);
  }

  // =========check edge
function default_full_filter_e(){
      for(let i in slider_e){
        slider_e[i].value(slider_e[i].default());
      };
      let fil_user_ree ={};
      check_all_e(fil_user_ree);
    }


function check_all_n(fil_user){
              // ==============check for filter============
            fil_user['e']=$.extend(true,{}, fil_user_e);
            fil_user['v']=$.extend(true,{}, fil_user_o);
    // =======node categorical_filter===========
            $("#cat_v_alltabItem1 input[class='n_filters']").each(function(){
                   fil_user['v']['cat'][$(this).attr('name')]=$(this).val().split(",");
            })

            $(".con_each_v").each(function(){
                let temp=($(this).text().split("-")).map(Number);
                fil_user['v']['con'][$(this).attr("id").replace("value-range","")]=temp
            })
  // ===============node
            $("#cat_e_alltabItem2 input[class='e_filters']").each(function(){
                   fil_user['e']['cat'][$(this).attr('name')]=$(this).val().split(",");
            })

            $(".con_each_e").each(function(){
                let temp=($(this).text().split("-")).map(Number)
                fil_user['e']['con'][$(this).attr("id").replace("value-range","")]=temp
            })

            // track_status[currentID]['tabItem1']['filter']=fil_user['v']
            // track_status[currentID]['tabItem2']['filter']=fil_user['e']
            // ==========check for head1========
            // let status = {"sc":new Object(),"sl":new Object()};
// =================check selectors=======
//               $(".h1_sc").each(function(index){
//                 let te = $(this).val()
//                 status['sc'][index] = te;
//               })
//               // ====check size of head1====
//                 $(".sz_scale_v_do").each(function(){
//                   let t = ($(this).text().split("-")).map(Number);
//                   let s =$(this).attr("id").replace("value-range","");
//                   status['sl'][s] = new Object;
//                   status['sl'][s]['d']=t;
//                   status['sl'][s]['r']=slider_exc["s_no"].value();
//                 })
//                 // ====check trs of head1====
//                 $(".trs_scale_v_do").each(function(){
//                   let t = ($(this).text().split("-")).map(Number);
//                   let s = $(this).attr("id").replace("value-range","");
//                   status['sl'][s] = new Object;
//                   status['sl'][s]['d']=t;
//                   status['sl'][s]['r']=slider_exc["tras_no"].value();
//                 })
//                 // ====check bor of head1====
//                 $(".bor_scale_v_do").each(function(){
//                   let t = ($(this).text().split("-")).map(Number);
//                   let s = $(this).attr("id").replace("value-range","");
//                   status['sl'][s] = new Object;
//                   status['sl'][s]['d']=t;
//                   status['sl'][s]['r']=slider_exc["bor_no"].value();
//                 })
//
//                 // =====record in history=====
//                 track_status[currentID]['tabItem1']['head1']=status;
}




function check_all_e(fil_user){
              // ==============check for filter============
            fil_user['e']=$.extend(true,{}, fil_user_e);
            fil_user['v']=$.extend(true,{}, fil_user_o);
            // =======edge categorical_filter===========
            $("#cat_e_alltabItem2 input[class='e_filters'").each(function(){
                   fil_user['e']['cat'][$(this).attr('name')]=$(this).val().split(",")
            })

            $(".con_each_e").each(function(){
                let temp=($(this).text().split("-")).map(Number)
                fil_user['e']['con'][$(this).attr("id").replace("value-range","")]=temp
            })

            // ===========node====
            $("#cat_v_alltabItem1 input[class='n_filters']").each(function(){
                   fil_user['v']['cat'][$(this).attr('name')]=$(this).val().split(",");
            })

            $(".con_each_v").each(function(){
                let temp=($(this).text().split("-")).map(Number);
                fil_user['v']['con'][$(this).attr("id").replace("value-range","")]=temp
            })
}



function hide_d_tab(){
  $("#c_tab1_head3").attr("style","display:none;");
  $("#c_tab2_head3").attr("style","display:none;");
  $(".form-check").attr("style","display:none;");
  $("#c_tab1_head1").attr("style","display:none;");
  $("#c_tab2_head1").attr("style","display:none;");
  $("#c_tab1_head2").attr("style","display:none;");
  $("#c_tab2_head2").attr("style","display:none;");
  $("#tab3-content").attr("style","display:none;");
  $('#c_tab2_head4').attr("style","display:none;");
  $('#c_tab1_head4').attr("style","display:none;");
  $('#tab4-content').attr('style','display:none;');
}

function display_d_tab(){
  $("#c_tab1_head3").attr("style","display:block;");
  $("#c_tab2_head3").attr("style","display:block;");
  $(".form-check").attr("style","display:block;")
  $("#c_tab1_head1").attr("style","display:block;");
  $("#c_tab2_head1").attr("style","display:block;");
  $("#c_tab1_head2").attr("style","display:block;");
  $("#c_tab2_head2").attr("style","display:block;");
  $("#tab3-content").attr("style","display:block;");
  $('#c_tab2_head4').attr("style","display:block;");
  $('#c_tab1_head4').attr("style","display:block;");
  $('#tab4-content').attr('style','display:block;');

}

function reshowfil_box(currentID){
        // ==========reshow filter===========
            $(".fil_e input[type=checkbox]").prop("checked",true)
            $(".fil_v input[type=checkbox]").prop("checked",true)
            let v_ck=track_status[currentID]['tabItem1']['filter']['cat'];
            let e_ck=track_status[currentID]['tabItem2']['filter']['cat'];
            let v_sli=track_status[currentID]['tabItem1']['filter']['con'];
            let e_sli=track_status[currentID]['tabItem2']['filter']['con'];
            $(".fil_e input[type='checkbox']").each(function(){
              if(e_ck[$(this).attr('name')].indexOf($(this).attr('value'))<0){
                $(this).click()
              }
            })
            $(".fil_v input[type='checkbox']").each(function(){
              if(v_ck[$(this).attr('name')].indexOf($(this).attr('value'))<0){
                $(this).click()
              }
            })
            for(let i in v_sli){
              slider_v[i].value(v_sli[i])
            };
            for (let j in e_sli){
              slider_e[j].value(e_sli[j])
            };

      // // =======================reshow head1===========
      //       $(".h1_sc").each(function(i,e){
      //         let temp = track_status[currentID]['tabItem1']['head1']['sc'][i];
      //           $(this).find("option[value="+temp+"]").prop("selected",true);
      //       })
      //       // ========domian slides======
      //       var size = track_status[currentID]['tabItem1']['head1']['sl'];
      //
      //       for (let p in size){
      //         slider_exc[p].value(size[p]['d']);
      //       }
      //       // ==========range slides======
      //       let t_si = $("#sz_sc").val();
      //             $("#sl_d_si").children().removeClass("g_active");
      //             if(t_si != "default"){
      //               $("#sz_"+t_si).addClass('g_active');
      //               slider_exc['s_no'].value(size["sz_"+t_si]['r']);
      //             }else{
      //               slider_exc['s_no'].value(slider_exc['s_no'].default());
      //             }
      //
      //       let t_trs = $("#trs_sc").val();
      //             $("#sl_d_trs").children().removeClass("g_active");
      //             if(t_trs !="default"){
      //               $("#trs_"+t_trs).addClass('g_active');
      //               slider_exc['tras_no'].value(size["trs_"+t_trs]['r']);
      //             }else{
      //               slider_exc['tras_no'].value(slider_exc['tras_no'].default());
      //             }
      //
      //       let t_bor = $("#bor_sc").val();
      //             // ====  when to show domain
      //             $("#sl_d_bor").children().removeClass("g_active");
      //             if(t_bor !="default"){
      //               $("#bor_"+t_bor).addClass('g_active');
      //               slider_exc['bor_no'].value(size["bor_"+t_bor]['r']);
      //             }else{
      //               slider_exc['bor_no'].value(slider_exc['bor_no'].default());
      //             }
}


//    point to current graph ==========================================
function tar_curr(currentID){
  node_curr=d3.select("#detailsvg"+currentID).selectAll("circle");
  edge_curr=d3.select("#detailsvg"+currentID).selectAll("line");
  // svg_curr = d3.select("#detailsvg"+currentID).selectAll("line");
}
// ===============graph recenter=========
function detail_graph_recenter(g,width,height,g_wi,g_he,wi,he){
  let sca = Math.min((width-20)/g_wi,(height-20)/g_he);
  let center_svg_x = width/2;
  let center_svg_y =height/2;
  let center_g_x = wi*sca/2;
  let center_g_y =he*sca/2;
  let x_p = (center_svg_x-center_g_x)/sca;
  let y_p = (center_svg_y-center_g_y)/sca;
  g.attr("transform", "scale("+sca+")translate("+x_p+","+y_p+")");
}
// ===============calculate maxium and minium data=====
function calculate_ma_mi(node,link){

  for(let k in numeric_prop_v){
    let arr = new Set();
    node.forEach(function(d){
      arr.add(d[k]);
    })
    arr = [...arr]
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    numeric_prop_v[k]=[min,max]
    track_status[currentID]['mix']['v_nu'][k] = [min,max]
  }
  for(let k in numeric_prop_e){
    let arr = new Set();
    link.forEach(function(d){
      arr.add(d[k]);
    })
    arr = [...arr]
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    numeric_prop_e[k] =[min,max]
    track_status[currentID]['mix']['e_nu'][k] = [min,max]
  }
  // setting_scale_default(numeric_prop_v,currentID);
}

// ============== setting scale ========
function setting_scale_default(numeric_prop_v,currentID){
  for (let k in numeric_prop_v){
    let va = numeric_prop_v[k]
    slider_exc['sz_'+k].value(va);
    track_status[currentID]['tabItem1']['head1']['sl']["sz_"+k]['d'] = va;
    slider_exc['trs_'+k].value(va);
    track_status[currentID]['tabItem1']['head1']['sl']["trs_"+k]['d'] = va;
    slider_exc['bor_'+k].value(va);
    track_status[currentID]['tabItem1']['head1']['sl']["bor_"+k]['d'] = va;

  }

}

function eventnode(node_curr){
  node_curr
     .on("click",function(d){
       if(select_label_n.length !=0 ){
               let node_label_final = "";
               for (let k=0,len = select_label_n.length; k<len;k++){
                 let temp = select_label_n[k]
                 node_label_final = node_label_final+"<tr>"+"<td>"+temp+":</td><td>"+d[temp]+"</td></tr>"
               }
               $("#n_label_display").html(node_label_final)
       }
       $('#n_name').html(d.name);
       $('#n_in').html(d["in-degree"]);
       $('#n_out').html(d["out-degree"]);
  })
     .on("mouseover", function(d){
        if(select_label_n.length !=0){
                n_label.transition()
                    .duration(100)
                    .style("opacity", .9)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px")
                n_label.html(function(){
                  let node_label_final = "";
                 for (let k=0,len = select_label_n.length; k<len;k++){
                   let temp = select_label_n[k]
                   node_label_final = node_label_final+temp+":\t"+d[temp]+"<br/>"
                   // console.log(node_label_final);
                 }
                 return node_label_final;
               });
        }
  })
     .on("mouseout", function(d) {
            n_label.transition()
                .duration(100)
                .style("opacity", 0);
         });

}

function eventedge(edge_curr){
  edge_curr
     .on("click",function(d){
       if(select_label_e.length !=0){
         let edge_label_final = "";
         for (let k=0,len = select_label_e.length; k<len;k++){
           let temp = select_label_e[k]
           edge_label_final = edge_label_final+"<tr>"+"<td>"+temp+":</td><td>"+d[temp]+"</td></tr>"
         }
         $("#e_label_display").html(edge_label_final)
       }
       $('#e_name').html(d["source"]["name"]+"--"+d["target"]["name"]);
       $('#e_weight').html(d["weight"]);
       // $('#e_weight').html();


  })
     .on("mouseover", function(d){
       if(select_label_e.length !=0){
         e_label.transition()
             .duration(100)
             .style("opacity", .9)
             .style("left", (d3.event.pageX) + "px")
             .style("top", (d3.event.pageY - 28) + "px")
         e_label.html(function(){
           let edge_label_final = "";
          for (let k=0,len = select_label_e.length; k<len;k++){
            let temp = select_label_e[k]
            edge_label_final = edge_label_final+temp+":\t"+d[temp]+"<br/>"
          }
          return edge_label_final;
        });
       }
  })
     .on("mouseout", function(d) {
            e_label.transition()
                .duration(100)
                .style("opacity", 0);
         });
}



//=================tab3========

function getfil_v(){
        let fil_user ={}
        check_all_n(fil_user);
        node_curr.each(function(d){
        let judge=1;
        for( let i in fil_user['v']['cat']){
            if(fil_user['v']['cat'][i].indexOf(d[i])<0){
                judge=judge*0
            }
        }
        for (let j in fil_user['v']['con']){
          if(d[j]<fil_user['v']['con'][j][0] || d[j]>fil_user['v']['con'][j][1]){
            judge=judge*0
                        }
                }
          if(judge){
            $(this).attr("class","fil_select");
          }else{$(this).attr("class","none");}
        })

        edge_curr.each(function(d){
        let judge =1;
        for (let i in fil_user['v']['cat']){
          if(fil_user['v']['cat'][i].indexOf(d['target'][i])<0 ||fil_user['v']['cat'][i].indexOf(d['source'][i])<0){
            judge=judge*0
          }
        }
        for (let j in fil_user['v']['con']){
          if(d['target'][j]<fil_user['v']['con'][j][0]||d['target'][j]>fil_user['v']['con'][j][1]||d['source'][j]<fil_user['v']['con'][j][0]||d['source'][j]>fil_user['v']['con'][j][1]){
            judge=judge*0
          }
        }
        for (let j in fil_user['e']['con']){
          if(d[j]<fil_user['e']['con'][j][0]||d[j]>fil_user['e']['con'][j][1]){
            judge=judge*0
          }
        }
        for (let i in fil_user['e']['cat']){
          if(fil_user['e']['cat'][i].indexOf(d[i])<0 ||fil_user['e']['cat'][i].indexOf(d[i])<0){
            judge=judge*0
          }
        }

        if(judge){
          $(this).attr("class","fil_select");
        }else{$(this).attr("class","none");}
        })

        d3.select("#detailsvg"+currentID).selectAll(".none").style("opacity", 0)
        d3.select("#detailsvg"+currentID).selectAll(".fil_select").style("opacity", 0.7)


}


function getfil_e(edge_curr){
        let fil_user ={}
        check_all_e(fil_user);
        edge_curr.each(function(d){
          let judge =1;
          for (let i in fil_user['e']['cat']){
            if(fil_user['e']['cat'][i].indexOf(d[i])<0){
              judge=judge*0
            }
          }
          for (let i in fil_user['v']['cat']){
            if(fil_user['v']['cat'][i].indexOf(d['target'][i])<0 ||fil_user['v']['cat'][i].indexOf(d['source'][i])<0){
              judge=judge*0
            }
          }
          for (let j in fil_user['e']['con']){
            if(d[j]<fil_user['e']['con'][j][0]||d[j]>fil_user['e']['con'][j][1]){
              judge=judge*0
            }
          }
          for (let j in fil_user['v']['con']){
            if(d['target'][j]<fil_user['v']['con'][j][0]||d['target'][j]>fil_user['v']['con'][j][1]||d['source'][j]<fil_user['v']['con'][j][0]||d['source'][j]>fil_user['v']['con'][j][1]){
              judge=judge*0
            }
          }
          if(judge){
            $(this).attr("class","fil_select");
          }else{$(this).attr("class","none");}

        for (let j in fil_user['e']['con']){
          if(d[j]<fil_user['e']['con'][j][0]||d[j]>fil_user['e']['con'][j][1]){
            judge=judge*0
          }
        }
        for (let i in fil_user['e']['cat']){
          if(fil_user['e']['cat'][i].indexOf(d[i])<0 ||fil_user['e']['cat'][i].indexOf(d[i])<0){
            judge=judge*0
          }
        }
      });

        d3.select("#detailsvg"+currentID).selectAll(".none").style("opacity", 0)
        d3.select("#detailsvg"+currentID).selectAll(".fil_select").style("opacity", 0.7)


}

// function switchto(){
//   // let val = ;
//   // $('#nc_colormap').src(val);
//   console.log($(this));
//   console.log(1111)
// }

// function reimplement(){
//   record[currentID].forEach(function(elem){
//     var t = elem.target
//     var w_op=elem.type
//     $("#overnoderegion3").click()
//   })
//
// }
