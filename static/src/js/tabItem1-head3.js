function draw_tab1_head3(){
  $('#c_tab1_d3').append(
          "<div id ='c_tab1_head3'>"+
            '<div id = "cat_v_alltabItem1" >'+
            '</div>'+
            '<div id = "con_v_alltabItem1" width="100%">'+
            '</div>'+
          '</div>')
          // console.log(1)

      // ==============categorical_filter==========
        for (let i in fil_v["cat"]){
          // console.log(1)
          let upper = i.substring(0,1).toUpperCase()+i.substring(1);
          $('#cat_v_alltabItem1').append(
            '<h6 style="padding:5px; margin-bottom:0px">'+upper+'</h6>'+
            '<div class="gap-line"></div>'+
            '<div class="ui multiple dropdown all">'+
              '<input type="hidden" id =fil_cat_'+i+' name = '+i+' class="n_filters">'+
              '<i class="filter icon fil-post"></i>'+
              '<span class="text">Filter Posts</span>'+
               '<div class="menu ">'+
                '<div id = n_cat'+i+' class="scrolling menu fil">'+
                '</div>'+
               '</div>'
                      )
                      for(let j in fil_v['cat'][i]){
                        let each = fil_v["cat"][i][j];
                        $('#n_cat'+i).append(
                          '<div class="item fil-font" selected = "true" data-value="'+each+'">'+
                            each+
                        '</div>'
                        )
                         }
              }

   // ========slider filter=============
   for (let j in fil_v["con"]){
     let upper = j.substring(0,1).toUpperCase()+j.substring(1);
       max=Math.max.apply(null,fil_v["con"][j]);
       min=Math.min.apply(null,fil_v["con"][j]);
       $('#con_v_alltabItem1').append(
         '<div style="height:70px;" calss="n_fil_con">'+
         '<h6 style="padding:5px; margin-bottom:0px">'+upper+'</h6>'+
         '<div class="gap-line"></div>'+
             '<div style=" margin-left:40px;float:left;" class="slider" id="slider'+j+'">'+
             '</div>'+
             '<div class ="filter_font">'+
               '<p class="con_each_v" style="font-size:10px;" id ="value-range'+j+'">'+
               '</p>'+
             '</div>'+
         '</div>');

       slider_n[j]=d3
         .sliderBottom()
         .min(min)
         .max(max)
         .width(120)
         .default([min, max])
         .fill('#2196f3')
         .on('onchange', (val) => {
           if(node_curr!=null){
             d3.select('p#value-range'+j).text(val.map(d3.format('d')).join('-'));
             getfil_v();
           }

         });

       gRange_n[j]=d3
       .select('div#slider'+j)
       .append('svg')
       .attr('width', 150)
       .attr('height', 30)
       .attr('class',j)
       .append('g')
       .attr('transform', 'translate(10,10)');

       gRange_n[j].call(slider_n[j]);
         d3.select('p#value-range'+j).attr('weight',50).text(
         slider_n[j]
           .value()
           .map(d3.format('d'))
           .join('-')
         );
     }

// ========extra event ==========
       $("#c_tab1_head3").attr("style","display:none;");
         default_full_filter_n();
         $("#cat_v_alltabItem1 input[class='n_filters']").change(function(){
           if(node_curr!=null){
             getfil_v();
           }

           });


// ====== implement for node========




}
