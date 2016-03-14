

function initCarusel() {
    $('#sobit-box').slick({
        dots: false,
         infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
       
        prevArrow: "#left_control",
        nextArrow: "#right_control"
    });

}
function unInit(){
    $('#sobit-box').slick('unslick');
}




if (mobile || tablet === false) {
    console.log("caruel init");
    initCarusel();
} else {
    console.log("моб версия карусель отключена");
}



var part_ed_ros_score = $('#ed_ros_score');
var part_ldpr_score = $('#ldpr_score');
var part_kprf_score = $('#kprf_score');
var part_sp_ros_score = $('#sp_ros_score');

var excellent = $('#excellent');
var well = $('#well');
var bad = $('#bad');

var boxid = $('.slick-track');
var allsob = $('#sobit-box div ');
var connectClass = '.module-connect';
var addClass = 'module__card-inbox ';
var btnsol = $('#solution');
var sl_list = $('.slick-list ');

var conteiner_carusel_card= $('.slick-track');

var caruselcardId = $('#carusel_card_all');

var numberClickControl = 0 ;



$(function() {

    boxid.addClass('module-connect');
    sl_list.css({ "overflow": "visible" });

    boxid.sortable({
        connectWith: connectClass,

        receive: function(event, ui) {
            remClassToElInBox();
        }, 
        update: function(){
         

        }
    });

    excellent.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            addClassToElInBox(this);
            delClassFromSlider(this);

            
              

        },
        update: function (event, ui) {
            console.log("изменение 1"); 
             reCalcScore();

        }
    });
    well.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            addClassToElInBox(this);
            delClassFromSlider(this);
              
 


        },
       update: function (event, ui) {
            console.log("изменение 2");
          
            reCalcScore();
        }
    });
    bad.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            addClassToElInBox(this);
            delClassFromSlider(this);
             
 

        },
        update: function (event, ui) {
            console.log("изменение 3"); 
            console.log(ui.sortable);
             reCalcScore();
        }
    });
    
    

    console.log("boxid " + boxid.sortable("toArray"));
  





    function delClassFromSlider(idnow) {
        console.log(idnow);
        var list = $(idnow).sortable("toArray");
        for (var i = 0; i < list.length; i++) {
            var id = list[i];
            console.log(id); 
            var el = document.getElementById(id);
            if ($(el).hasClass('slick-slide') == true) {
                $(el).removeClass('slick-slide');
                $(el).removeAttr('style');
                $(el).css({ "position": "relative" });
                scoreCalc(id);
            }
        };

    }
    
   function changeLogoPart(e,addScore){
       $('#module__part__' + e +' .module__part__gif__pos').fadeOut(0);
        $('#module__part__' + e +' .module__part__gif__non').fadeOut(0);
        $('#module__part__' + e +' .module__part__gif__neg').fadeOut(0);
        if(addScore > 0){
            $('#module__part__' + e +' .module__part__logo').transition({opacity:0},100,function(){
                $('#module__part__' + e +' .module__part__gif__pos').fadeIn();
                $('#module__part__' + e +' .module__part__gif__pos').delay(500).fadeOut(300,function(){
                    $('#module__part__' + e +' .module__part__logo').transition({opacity:1},100);
                });
                
            });
       } 
       if(addScore == 0){
            $('#module__part__' + e +' .module__part__logo').transition({opacity:0},100,function(){
                $('#module__part__' + e +' .module__part__gif__non').fadeIn();
                $('#module__part__' + e +' .module__part__gif__non').delay(500).fadeOut(300,function(){
                    $('#module__part__' + e +' .module__part__logo').transition({opacity:1},100);
                });
            });
       } 
       if(addScore < 0){
            $('#module__part__' + e +' .module__part__logo').transition({opacity:0},100,function(){
                $('#module__part__' + e +' .module__part__gif__neg').fadeIn();
                $('#module__part__' + e +' .module__part__gif__neg').delay(500).fadeOut(300,function(){
                    $('#module__part__' + e +' .module__part__logo').transition({opacity:1},100);
                });
            });
        }
   }

    function addClassToElInBox(part) {
        var list = $(part).sortable("toArray");
        for (var i = 0; i < list.length; i++) {
            var id = list[i];
            var el = document.getElementById(id);
            if ($(el).hasClass(addClass) == false) {
                $(el).addClass(addClass);
            }
        };
        showbtn();
    }

    function remClassToElInBox() {
        var list = boxid.sortable("toArray");
        for (var i = 0; i < list.length; i++) {
            var id = list[i];
            var el = document.getElementById(id);
            if ($(el).hasClass(addClass) == true) {
                $(el).removeClass(addClass);
            }
        };
    }

    function showbtn() {

        var list = boxid.sortable("toArray");
        if (list.length == 0) {
            btnsol.removeClass('hidden');
            caruselcardId.addClass('hidden'); 
        }
    }
      
    function reCalcScore(){
          var excelMas       =  excellent.sortable("toArray");
          var wellMas        =  well.sortable("toArray");
          var badMas         =  bad.sortable("toArray") ;
          
          var excellentScore = 100;
          var wellScore      = 0;
          var badScore       = -100;  
          var addScore = 0;
          var nowAddCardid ;

         part_ed_ros_score.html("0");
         part_ldpr_score.html("0");
         part_kprf_score.html("0");
         part_sp_ros_score.html("0");


          for (var i = 0; i < excelMas.length; i++) {
                addScore = excellentScore; 
                addScoreFun(excelMas[i], addScore);
          }

          for (var i = 0; i < wellMas.length; i++) {
             addScore = wellScore; 
             addScoreFun(wellMas[i], addScore);
          }


          for (var i = 0; i < badMas.length; i++) {
              addScore = badScore; 
              addScoreFun (badMas[i], addScore); 
          }
             
    } 


    function addScoreFun(id, addScore){
           var  nowAddCardid = document.getElementById(id);

           if ($(nowAddCardid).attr("part") == 0 ) {
                console.log($(nowAddCardid).attr("part")+ "ed ros ");
                addScoretoPart( part_ed_ros_score, addScore  );
           }
           if ($(nowAddCardid).attr("part") == 1 ) {
                console.log($(nowAddCardid).attr("part") + " kprf ldpr ");
                addScoretoPart(  part_ldpr_score , addScore  );
                addScoretoPart(  part_kprf_score , addScore  );
           }
            if ($(nowAddCardid).attr("part") == 2 ) {
                console.log($(nowAddCardid).attr("part") + " sp ros");
                addScoretoPart( part_sp_ros_score , addScore  );
           }
           if ($(nowAddCardid).attr("part") == 4 ) {
                console.log($(nowAddCardid).attr("part") + " all");
                addScoretoPart( part_ed_ros_score, addScore  );
                addScoretoPart( part_ldpr_score , addScore  );
                addScoretoPart( part_kprf_score , addScore  );
                addScoretoPart( part_sp_ros_score, addScore  );
           }
    }

    function scoreCalc(id_sob){

       console.log(excellent.sortable("toArray"));
       console.log(well.sortable("toArray"));   
       console.log(bad.sortable("toArray"));   
         
          var excelMas       =  excellent.sortable("toArray");
          var wellMas        =  well.sortable("toArray");
          var badMas         =  bad.sortable("toArray") ;
          
          var excellentScore = 100;
          var wellScore      = 0;
          var badScore       = -100;
            
           var addScore = 0;

       
          



        var nowAddCardid = document.getElementById(id_sob);
       console.log("ishem v masive" );

         if (excelMas.indexOf(id_sob )>= 0 ) {
            addScore = excellentScore; 
         }
           if (wellMas.indexOf(id_sob )>= 0 ) {
            addScore = wellScore; 
         }
           if (badMas.indexOf(id_sob )>= 0 ) {
            addScore = badScore; 
         }
         console.log("bydet dobavleno");
         console.log(addScore);
          
         //   0 - ed ros   4 -all    1- kpff ldpr 2 -spros   !!!!!!!!!!!!!!!!!
           if ($(nowAddCardid).attr("part") == 0 ) {
                console.log($(nowAddCardid).attr("part")+ "ed ros ");
                addScoretoPart( part_ed_ros_score, addScore  );
               changeLogoPart('edros',addScore);
               console.log(addScore);
           }
           if ($(nowAddCardid).attr("part") == 1 ) {
                console.log($(nowAddCardid).attr("part") + " kprf ldpr ");
                addScoretoPart(  part_ldpr_score , addScore  );
               changeLogoPart('ldpr',addScore);
                addScoretoPart(  part_kprf_score , addScore  );
               changeLogoPart('kprf',addScore);
               console.log(addScore);
           }
            if ($(nowAddCardid).attr("part") == 2 ) {
                console.log($(nowAddCardid).attr("part") + " sp ros");
                addScoretoPart( part_sp_ros_score , addScore  );
                changeLogoPart('spros',addScore);
                console.log(addScore);
           }
           if ($(nowAddCardid).attr("part") == 4 ) {
                console.log($(nowAddCardid).attr("part") + " all");
                addScoretoPart( part_ed_ros_score, addScore  );
               changeLogoPart('edros',addScore);
                addScoretoPart( part_ldpr_score , addScore  );
               changeLogoPart('ldpr',addScore);
                addScoretoPart( part_kprf_score , addScore  );
               changeLogoPart('kprf',addScore);
                addScoretoPart( part_sp_ros_score, addScore  );
               changeLogoPart('spros',addScore);
               console.log(addScore);
           }
            


       // part_ed_ros_score 
       // part_ldpr_score 
       // part_kprf_score 
       // part_sp_ros_score 
           }


    /*получить значение id в каждой ячейке */
    // 
    //  excellent.sortable("toArray"));
    //  
    // 
});
        function addScoretoPart ( idScorepart, Score){
             
             console.log("bilo = "+ idScorepart.html()); 
             var scorenow = idScorepart.html() * 1 ;
            idScorepart.html(scorenow+Score);
        }  
  

  if (mobile || tablet === true) {
    $('#carusel_card_all').addClass('hidden');
}
   if (mobile || tablet === true) {
    $('#sobit-box-mob').removeClass(' hidden-md ');
    $('#sobit-box-mob').removeClass('hidden-lg');
}  
   

   


if (mobile || tablet === true) {
    $('#help_scr').removeClass('hidden');
}
var MOUSE_CLICK = "click";
var MOUSE_DOWN = "mousedown";
var MOUSE_UP = "mouseup";
var isTouch = false;

if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) {
    MOUSE_CLICK = "touchstart";
    MOUSE_DOWN = "touchstart";
    MOUSE_UP = "touchend";
    isTouch = true;
}


$('#btn_next').on(MOUSE_CLICK, function() {
    $('#help_scr').addClass('hover_scr_on_mob-no');
});

$('#btn_next-part').on(MOUSE_CLICK, function() {
    if (mobile || tablet === true) {
        $('#part_scr').removeClass('hover_scr_on_mob-left-on');
    }
});

/* mob-ver-js */
var bnt_excell = $('#bnt_excell');
var bnt_well = $('#btn_well');
var bnt_bad = $('#btn_bad');
var bnt_back = $('#btn_next-part');
var sobid = ['sob_1-mob', 'sob_2-mob', 'sob_3-mob', 'sob_4-mob', 'sob_5-mob', 'sob_6-mob', 'sob_7-mob', 'sob_8-mob', 'sob_9-mob', 'sob_10-mob', 'sob_11-mob', 'sob_12-mob', 'sob_13-mob'];

var nowid = 'sob_1'; // текуший id 

var part_ed_ros_score = $('#ed_ros_score');
var part_ldpr_score = $('#ldpr_score');
var part_kprf_score = $('#kprf_score');
var part_sp_ros_score = $('#sp_ros_score');

var part_ed_ros_score_mob = $('#ed_ros_score_mob');
var part_ldpr_score_mob = $('#ldpr_score_mob');
var part_kprf_score_mob = $('#kprf_score_mob');
var part_sp_ros_score_mob = $('#sp_ros_score_mob');




bnt_back.on(MOUSE_CLICK, function() {
    if (mobile || tablet === true) {
        $('#part_scr').removeClass('hover_scr_on_mob-left-on');
    }
});
$('#btn_back_solution').on(MOUSE_CLICK, function() {
    if (mobile || tablet === true) {
        $('#part_scr_solutio').removeClass('hover_scr_on_mob-left-on');
    }
});


$('#sob_1-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_1-mob');
});
$('#sob_2-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_2-mob');
});
$('#sob_3-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_3-mob');
});
$('#sob_4-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_4-mob');
});
$('#sob_5-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_5-mob');
});
$('#sob_6-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_6-mob');
});
$('#sob_7-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_7-mob');
});
$('#sob_8-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_8-mob');
});
$('#sob_9-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_9-mob');
});
$('#sob_10-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_10-mob');
});
$('#sob_11-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_11-mob');
});
$('#sob_12-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_12-mob');
});
$('#sob_13-mob').on(MOUSE_CLICK, function() {
    chosesobie('sob_13-mob');
});


bnt_excell.on(MOUSE_CLICK, function() {
    console.log('btn1');
    var name_part = 'ДАВНО БЫЛО ПОРА';
    var attr_part = "1"
    addhovertocard(nowid, name_part, attr_part);
    $('#part_scr').removeClass('hover_scr_on_mob-left-on');
     calcMobScore();
})
bnt_well.on(MOUSE_CLICK, function() {
        console.log('btn2');
    var name_part = 'ПРОШЛО МИМО МЕНЯ';
    var attr_part = "2"
    addhovertocard(nowid, name_part, attr_part);
    $('#part_scr').removeClass('hover_scr_on_mob-left-on');
     calcMobScore();
})
bnt_bad.on(MOUSE_CLICK, function() {
        console.log('btn3');
    var name_part = 'ЧТО ЭТО ЗА БРЕД?';
    var attr_part = "3"
    addhovertocard(nowid, name_part, attr_part);
    $('#part_scr').removeClass('hover_scr_on_mob-left-on');
     calcMobScore();
})





function calcMobScore(){
                   part_ed_ros_score_mob.html("0");
                   part_ldpr_score_mob.html("0");
                   part_kprf_score_mob.html("0");
                   part_sp_ros_score_mob.html("0");

                   part_ed_ros_score.html("0");
                     part_ldpr_score.html("0");
                     part_kprf_score.html("0");
                     part_sp_ros_score.html("0");

   for (var i = 0; i < sobid.length; i++) {
        var sob = document.getElementById(sobid[i]);
          console.log( sobid[i] );
          console.log(hashoveriinid(sobid[i]) );
          if (hashoveriinid(sobid[i]) == true) {
               
                  var numerSolution = $(sob).find('.choice_cart').attr("part"); 
                  console.log(numerSolution);
                   var addScore = 0; 
                  if (numerSolution == 1 ){
                        addScore =100;
                  }
                  if (numerSolution == 2 ){
                          addScore =0;
                  }
                  if (numerSolution == 3 ){
                          addScore =-100;   
                  } 
                  console.log(addScore);
                    showScoreMob(sob, addScore);

                   
                   

          }

    } 
}
     
            
function showScoreMob (nowAddCardid, addScore){

          if ($(nowAddCardid).attr("part") == 0 ) {
                console.log($(nowAddCardid).attr("part")+ "ed ros ");
                addScoretoPartMob(part_ed_ros_score_mob, addScore  );

                addScoretoPart( part_ed_ros_score, addScore  );
           }
           if ($(nowAddCardid).attr("part") == 1 ) {
                console.log($(nowAddCardid).attr("part") + " kprf ldpr ");
                addScoretoPartMob(part_ldpr_score_mob , addScore  );
                addScoretoPartMob(part_kprf_score_mob , addScore  );

                addScoretoPart(part_ldpr_score , addScore  );
                addScoretoPart(part_kprf_score , addScore  );

           }
            if ($(nowAddCardid).attr("part") == 2 ) {
                console.log($(nowAddCardid).attr("part") + " sp ros");
                addScoretoPartMob( part_sp_ros_score_mob , addScore  );
                
                 addScoretoPart( part_sp_ros_score , addScore  );
           }
           if ($(nowAddCardid).attr("part") == 4 ) {
                console.log($(nowAddCardid).attr("part") + " all");
                addScoretoPartMob(part_ed_ros_score_mob, addScore  );
                addScoretoPartMob(part_ldpr_score_mob , addScore  );
                addScoretoPartMob( part_kprf_score_mob , addScore  );
                addScoretoPartMob( part_sp_ros_score_mob, addScore  );

                addScoretoPart( part_ed_ros_score, addScore  );
                addScoretoPart( part_ldpr_score , addScore  );
                addScoretoPart( part_kprf_score , addScore  );
                addScoretoPart( part_sp_ros_score, addScore  );
           }
        

}

function addScoretoPartMob(idScorepart, addScore){
    console.log("bilo = "+ idScorepart.html()); 
             var scorenow = idScorepart.html() * 1 ;
            idScorepart.html(scorenow+addScore);


}



function addhovertocard(idcard, name_part, attr_part) {
    var sob = document.getElementById(idcard);
    $(sob).find('.module__card').append("<div class='choice_cart' part=" + attr_part + "><div class='choice_cart-name open-sans-exboltit'>" + name_part + "</div><div class='choice_cart__bnt_cansel open-sans-exboltit'>отменить</div></div>");
    if (endSolution() === true) {
        $('#part_scr_solutio').addClass('hover_scr_on_mob-left-on');

    }
}

function removehovercard(idcard) {
    var sob = document.getElementById(idcard);
    $(sob).find('.choice_cart').remove();
}

function hashoveriinid(idcard) {
    var sob = document.getElementById(idcard);
    if ($(sob).find('.choice_cart').hasClass('choice_cart') === true) {
        return true;
    } else {
        return false;
    }
}

function getattrpart(idcard) {
    var sob = document.getElementById(idcard);
    return $(sob).find('.choice_cart').attr("part");
}

function chosesobie(idcard) {


    nowid = idcard;
    // var top = $(document.getElementById(nowid)).offset().top;  
    // $('#part_scr').css({"padding-top": top*1.6+"px" });
    if (mobile || tablet === true) {
        if (hashoveriinid(nowid) === true) {
            removehovercard(nowid);
            calcMobScore();
        } else {
            $('#part_scr').addClass('hover_scr_on_mob-left-on');

        }
    }
}

function endSolution() {

    for (var i = 0; i < sobid.length; i++) {
        if (hashoveriinid(sobid[i]) === false) {
            return false;
        }
    };
    // 
    return true;
}





/* fix for ipad */
if (mobile || tablet === true) {
    console.log('mobile');
    $('#allScore').addClass('hidden');
}
/*  функция получия id в каждой партии
 отлично =1 
 хорошо =2
 плохо =3
*/
function getidInPart(nomer_part) {

    var idMas = [];
    for (var i = 0; i < sobid.length; i++) {
        if (getattrpart(sobid[i]) === nomer_part) {
            idMas.push(sobid[i]);
        };

    }
    return idMas;
}
// $('#solut_mob').on(MOUSE_CLICK, function() {
//     console.log(getidInPart('1'));
// });





var edr_ros_sc = 38560 + '<br>голосов';
var ldpr_sc = 19168 + '<br>голосов';
var kprf_sc = 10115 + '<br>голосов';
var sp_ros_sc = 8956 + '<br>голосов';

var mob_sol_bnt = $('#solut_mob');

function showResult() {
    $('#allScore').addClass('hidden');



    part_ed_ros_score_mob.fadeOut();
    part_ldpr_score_mob.fadeOut();
    part_kprf_score_mob.fadeOut();
    part_sp_ros_score_mob.fadeOut();

    part_ed_ros_score_mob.fadeIn(200);
    part_ldpr_score_mob.fadeIn(500);
    part_kprf_score_mob.fadeIn(800);
    part_sp_ros_score_mob.fadeIn(1000);

}

btnsol.on(MOUSE_CLICK, function() {
    showResult();
});

mob_sol_bnt.on(MOUSE_CLICK, function() {
    showResult();
});
