function draw_tab2_head2(){
  var categorical_color = ['tableau10','set3','accent','category10','dark2','paired','pastel1'];
  $('#c_tab2_d2').append(
    '<div id ="c_tab2_head2" style="padding-left:10px">'+
         '<h6 style="padding:5px; margin-bottom:0px">Edge Width:</h6>'+
         '<div class="gap-line"></div>'+
          '<div>'+
               '<label class = "h1-l" style="margin:3px;margin-left:7px">Edge Property:</label>'+
               '<select class="custom-select h2-sc e_con_property" id = "ch_ew_sc">'+
               '<option value="default" selected>Select</option>'+
               '</select>'+
          '</div>'+
         // ===========done with width=========
         '<h6 style="padding:5px;margin-bottom:0px">Edge Color:</h6>'+
         '<div class="gap-line"></div>'+

          '<div>'+
               '<label class = "h1-l" style="margin:3px;margin-left:7px">Edge Property:</label>'+
               '<select class="custom-select h2-sc" id = "ch_ec_sc">'+
                  '<option class = "opt-g-font" value="default" selected>Select</option>'+
                  '<optgroup class ="e_con_property opt-g-font" label="Numerical Property">'+
                  '</optgroup>'+
                  '<optgroup class ="e_cat_property opt-g-font" label="Categorical Property">'+
                  '</optgroup>'+
               '</select>'+
          '</div>'+
          '<div>'+
             '<label class = "h1-l" style="margin:3px;margin-left:7px">Color Map:</label>'+
// ========color map ============
             '<div  style="margin-left:50px;width:139px" class="h2-sc btn-group">'+
               '<button type="button" class="btn btn-secondary dpdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                '<img style = "height:12px;vertical-align:top;" class ="colormap" id = "ec_colormap" />'+
               '</button>'+
                 '<div class="dropdown-menu ec_menu">'+
                     '<label class="opt-g-font dropdown-header">Categorical</label>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Tableau10.png" alt = "tableau10"><label class= "m_color_font">Tableau10</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Set3.png" alt = "set3"><label class= "m_color_font">Set3</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Pastel1.png" alt = "pastel1"><label class= "m_color_font">Pastel1</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Paired.png" alt = "paired"><label class= "m_color_font">Paired</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Dark2.png" alt = "dark2"><label class= "m_color_font">Dark2</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Category10.png" alt = "category10"><label class= "m_color_font">Category10</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Accent.png" alt = "accent"><label class= "m_color_font">Accent</label></li>'+
                     '<label  class="opt-g-font dropdown-header">Sequential (Single Hue)</label>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Blues[k].png" alt = "blues"><label class= "m_color_font">Blues</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Greys[k].png" alt = "greys"><label class= "m_color_font">Greys</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Greens[k].png" alt = "greens"><label class= "m_color_font">Greens</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Oranges[k].png" alt = "oranges"><label class= "m_color_font">Oranges</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Purples[k].png" alt = "purples"><label class= "m_color_font">Purples</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Reds[k].png" alt = "reds"><label class= "m_color_font">Reds</label></li>'+
                     '<label class="opt-g-font dropdown-header">Sequential (Multi-Hue)</label>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Sinebow(t).png" alt = "sinebow"><label class= "m_color_font">Sinebow</label></li>'+
                       '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Spectral[k].png" alt = "spectral"><label class= "m_color_font">Spectral</label></li>'+
                '</div>'+
             '</div>'+
        '</div>'+
                // ===========opacity=========
         '<h6 style="padding:5px;margin-bottom:0px">Edge Opacity:</h6>'+
         '<div class="gap-line"></div>'+
          '<div>'+
             '<label class = "h1-l" style="margin:3px;margin-left:7px">Edge Property:</label>'+
             '<select class="custom-select h2-sc e_con_property" id = "ch_eopa_sc">'+
             '<option value="default" selected>Select</option>'+
             '</select>'+
          '</div>'+
   // // =============================node border-width
   //       '<h6 style="padding:5px;margin-bottom:0px">Node Border-width:</h6>'+
   //       '<div class="gap-line"></div>'+
   //        '<div>'+
   //           '<label class = "h1-l" style="margin:3px;margin-left:7px">Edge Property:</label>'+
   //           '<select class="custom-select h2-sc e_con_property" id = "ch_nbw_sc">'+
   //           '<option value="default" selected>Select</option>'+
   //           '</select>'+
   //        '</div>'+
          // // ============node- borde-color
          // '<h6 style="padding:5px;margin-bottom:0px">Node Border-Color:</h6>'+
          // '<div class="gap-line"></div>'+
          //  '<div>'+
          //     '<label class = "h1-l" style="margin:3px;margin-left:7px">Edge Property:</label>'+
          //     '<select class="custom-select h2-sc" id = "ch_nbc_sc">'+
          //       '<option class = "opt-g-font" value="default" selected>Select</option>'+
          //       '<optgroup class ="e_con_property opt-g-font" label="Numerical Property">'+
          //       '</optgroup>'+
          //       '<optgroup class ="e_cat_property opt-g-font" label="Categorical Property">'+
          //       '</optgroup>'+
          //     '</select>'+
          //  '</div>'+
           // ========color map ============
          //  '<div>'+
          //     '<label class = "h1-l" style="margin:3px;margin-left:7px">Color Map:</label>'+
              // '<div  style="margin-left:50px;width:139px" class="h2-sc btn-group">'+
              //   '<button type="button" class="btn btn-secondary dpdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
              //    '<img  style = "height:12px;vertical-align:top;" class ="colormap" id = "nbc_colormap" />'+
              //   '</button>'+
              //     '<div class="dropdown-menu nbc_menu">'+
              //       '<label class="opt-g-font dropdown-header">Categorical</label>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Tableau10.png" alt = "tableau10"><label class= "m_color_font">Tableau10</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Set3.png" alt = "set3"><label class= "m_color_font">Set3</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Pastel1.png" alt = "pastel1"><label class= "m_color_font">Pastel1</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Paired.png" alt = "paired"><label class= "m_color_font">Paired</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Dark2.png" alt = "dark2"><label class= "m_color_font">Dark2</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Category10.png" alt = "category10"><label class= "m_color_font">Category10</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Accent.png" alt = "accent"><label class= "m_color_font">Accent</label></li>'+
              //       '<label  class="opt-g-font dropdown-header">Sequential (Single Hue)</label>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Blues[k].png" alt = "blues"><label class= "m_color_font">Blues</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Greys[k].png" alt = "greys"><label class= "m_color_font">Greys</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Greens[k].png" alt = "greens"><label class= "m_color_font">Greens</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Oranges[k].png" alt = "oranges"><label class= "m_color_font">Oranges</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Purples[k].png" alt = "purples"><label class= "m_color_font">Purples</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Reds[k].png" alt = "reds"><label class= "m_color_font">Reds</label></li>'+
              //       '<label class="opt-g-font dropdown-header">Sequential (Multi-Hue)</label>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Sinebow(t).png" alt = "sinebow"><label class= "m_color_font">Sinebow</label></li>'+
              //         '<li class = "dropdown-item"><img class = "colormap" src="/static/src/rcs/Spectral[k].png" alt = "spectral"><label class= "m_color_font">Spectral</label></li>'+
              //    '</div>'+
              // '</div>'+
         // '</div>'+
    '<div>'
  )
// =========edge color==============
              // ======property========
              $("#ch_ec_sc").change(function(){
                  // let value = $(this).val();
                  let selected = $(':selected', this);
                  let parent = selected.parent().attr('label');
              if(parent == "Numerical Property"){
                  $(".ec_menu").children()[9].click()
              }else if(parent == "Categorical Property"){
                 $(".ec_menu").children()[1].click()
              }

              })

            // ======= color map
              $(".ec_menu li").click(function(){
                let thii = $(this).children().first();
                let selSrc = thii.attr('src');
                $('#ec_colormap').attr('src', selSrc);
                let prop = $('#ch_ec_sc').val();
                let color =  thii.attr('alt');
                if( categorical_color.indexOf(color)>=0){
                  edge_curr.style('stroke',function(d){
                    return eval(color)(d[prop])
                  })
                }else{
                  let color_m = $(this).children().last().html();
                  let dom = track_status[currentID]['mix']['e_nu'][prop]
                  eval(color).domain(dom)
                  .interpolator(d3["interpolate" + color_m]);
                  edge_curr.style('stroke',function(d){
                    return eval(color)(d[prop])
                  })
                }

              });

// =====================node width======
          $('#ch_ew_sc').change(function(){
              let prop = $(this).val();
              let dom = track_status[currentID]['mix']['e_nu'][prop];
              let scale = liScale.domain(dom).range([0.1,2])
              edge_curr.style("stroke-width",function(d){
                return scale(d[prop])});
          })

  // =====================edge opacity======
            $('#ch_eopa_sc').change(function(){
                let prop = $(this).val();
                let dom = track_status[currentID]['mix']['e_nu'][prop];
                let scale = liScale.domain(dom).range([0.1,1])
                edge_curr.style("opacity",function(d){
                  return scale(d[prop])});
            })
  // // =====================node stroke-width======
  //           $('#ch_nbw_sc').change(function(){
  //               let prop = $(this).val();
  //               let dom = track_status[currentID]['mix']['v_nu'][prop];
  //               let scale = liScale.domain(dom).range([0,3])
  //               // if()
  //               node_curr.attr('stroke','black').attr("stroke-width",function(d){
  //                 return scale(d[prop])});
  //           })
  // =======border color ==========================
          // // ======property========
          //         $("#ch_nbc_sc").change(function(){
          //           let value = $(this).val();
          //           let selected = $(':selected', this);
          //           let parent = selected.parent().attr('label');
          //           if(parent == "Numerical Property"){
          //             $(".nbc_menu").children()[9].click()
          //           }else if(parent == "Categorical Property"){
          //             $(".nbc_menu").children()[1].click()
          //           }
          //
          //         })

                    // ========color map====
                  //   $(".nbc_menu li").click(function(){
                  //     let thii = $(this).children().first();
                  //     let selSrc = thii.attr('src');
                  //     $('#nbc_colormap').attr('src', selSrc);
                  //     let prop = $('#ch_nbc_sc').val();
                  //     let color =  thii.attr('alt');
                  //     if( categorical_color.indexOf(color)>=0){
                  //       node_curr.attr('stroke',function(d){
                  //         return eval(color)(d[prop])
                  //       })
                  //     }else{
                  //       let color_m = color.substring(0,1).toUpperCase()+color.substring(1);
                  //       let dom = track_status[currentID]['mix']['v_nu'][prop]
                  //       eval(color).domain(dom)
                  //       .interpolator(d3["interpolate" + color_m]);
                  //       node_curr.attr('stroke',function(d){
                  //         return eval(color)(d[prop])
                  //       })
                  //     }
                  // });

// =======dynamic option=====
      // ========
        let htm;
        for(let j in fil_e['con']){
          htm+='<option value='+j+'>'+j+'</option>'
        }
        $('.e_con_property').append(htm);
        // ==========
        let htm_cat;
        for(let j in fil_e['cat']){
          htm_cat+='<option value='+j+'>'+j+'</option>'
        }
        $('.e_cat_property').append(htm_cat);
// ============extra
        $("#c_tab2_head2").attr("style","display:none;");



}
