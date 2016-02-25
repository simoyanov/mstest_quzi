$("#left-btn").on(MOUSE_DOWN,function(){
    $('#wrap').transition({x:'-50%'}, 500);
    $("#heros-bg").fadeIn();
    
    
});
$("#right-btn").on(MOUSE_DOWN,function(){
    $('#wrap').transition({x:'0'}, 500);
    $("#heros-bg").fadeOut();
});

$(".modile__infoDep-like-but").on(MOUSE_DOWN,function(){
    $(".modile__infoDep-change").fadeOut();
    $(".modile__infoDep-after").delay(500).fadeIn();
    $(".modile__infoDep-like-but-after-big").delay(500).fadeIn();
    $(".modile__infoDep-dislike-but-after-small").delay(500).fadeIn();
    
});

$(".modile__infoDep-dislike-but").on(MOUSE_DOWN,function(){
    $(".modile__infoDep-change").fadeOut();
    $(".modile__infoDep-after").delay(500).fadeIn();
    $(".modile__infoDep-dislike-but-after-big").delay(500).fadeIn();
    $(".modile__infoDep-like-but-after-small").delay(500).fadeIn();
});

$(".module__tringl_edros").on(MOUSE_DOWN,function(){
    if ($(window).width() <= '768'){
        $('#wrap-map').transition({x:'-33.3333%'}, 500);
        $('#center-party-box').fadeIn();
        $('.wrap-map-bg').fadeIn();
    } else {
        $('#center-party-box').fadeIn();
    }
  
    
});

function showList(){
    if ($(window).width() <= '768'){
        $('#wrap-map').transition({x:'-33.3333%'}, 500);
        $('#center-party-box').fadeIn();
        $('.wrap-map-bg').fadeIn();
    } else {
        $('#center-party-box').fadeIn();
    }
}

$("#center-party-box .btn-close").on(MOUSE_DOWN,function(){
    $('#wrap-map').transition({x:'0'}, 500);
    $('.wrap-map-bg').fadeOut();
});

$("#right-chang-box .btn-back").on(MOUSE_DOWN,function(){
    $('#wrap-map').transition({x:'-33.3333%'}, 500);
});


function closeAll(){
    $('#right-chang-box').fadeOut();
    $('.like-after').fadeOut();
}


var obj = {};

obj.peoples = [];
obj.peoples[0] = {party:"Единая россия",
                  name:"Сергей Железняк",
                  quote:"ОЧЕНЬ ВАЖНО, ЧТОБЫ ЦЕННОСТНЫЕ ОРИЕНТИРЫ, ЛЮБОВЬ К РОДИНЕ, ПАТРИОТИЗМ ФОРМИРОВАЛИСЬ С ДЕТСТВА И БЫЛИ НЕОТЪЕМЛЕМОЙ ЧАСТЬЮ ПРОЦЕССА ВОСПИТАНИЯ И СТАНОВЛЕНИЯ ГРАЖДАНИНА",
                  birthday:"30 ИЮЛЯ 1970 Г. (45 ЛЕТ)",
                  rating:"39",
                  skils:"СМИ ДЕРЖИТ В НАПРЯЖЕНИИ",
                  bg:"assets/images/geleznyak.jpg",
                  photo:"assets/images/face_zeleznyk.jpg",
                  likes:"55000",
                  dislikes:"66000",
                  info:"",
                  profit:[{year:"2011",money:"3434259",area:"392,4",transport:["car","bike"]},
                          {year:"2014",money:"5557259",area:"392,4",transport:["bike"]}]};

obj.peoples[1] = {party:"Единая россия",
                  name:"Кожевникова Мария",
                  quote:"ОЧЕНЬ ВАЖНО, ЧТОБЫ ЦЕННОСТНЫЕ ОРИЕНТИРЫ, ЛЮБОВЬ К РОДИНЕ, ПАТРИОТИЗМ ФОРМИРОВАЛИСЬ С ДЕТСТВА И БЫЛИ НЕОТЪЕМЛЕМОЙ ЧАСТЬЮ ПРОЦЕССА ВОСПИТАНИЯ И СТАНОВЛЕНИЯ ГРАЖДАНИНА",
                  birthday:"30 ИЮНЯ 1980 Г. (35 ЛЕТ)",
                  rating:"25",
                  skils:"актриса",
                  bg:"assets/images/kozevnikova.jpg",
                  photo:"assets/images/face_kozevnikova.jpg",
                  likes:"55000",
                  dislikes:"66000",
                  info:"",
                  profit:[{year:"2011",money:"3434259",area:"392,4",transport:["car",""]},
                          {year:"2014",money:"5557259",area:"392,4",transport:["car","bike"]}]};

function changeHero(i){
    var party = obj.peoples[i].party;
    var name = obj.peoples[i].name;
    var quote = obj.peoples[i].quote;
    var birthday = obj.peoples[i].birthday;
    var rating = obj.peoples[i].rating;
    var skils = obj.peoples[i].skils;
    var bg = obj.peoples[i].bg;
    var profit = obj.peoples[i].profit;
    
    $("#party-left").delay(100).fadeOut(
        100,
        function () {
            $("#party-left").text(party).fadeIn(100)
        }
    );
    
    $("#quote").delay(1000).fadeOut(
        1000,
        function () {
            $("#quote").text('«'+quote+'»').fadeIn(1000)
        }
    );
    
    $("#left-name").delay(1000).fadeOut(
        1000,
        function () {
            $("#left-name").text(name).fadeIn(1000)
        }
    );
    
    $("#party-right").text(party);
    $("#right-name").text(name);
    $("#birthday").text(birthday);
    $("#rating").text(rating);
    $("#skils").text(skils);
    
    
    
    $("#heros-bg").css("background-image","url("+bg+")");
    var htmlPro = "";
    var htmlCap = "";
    for(i = 0; i < profit.length; i++){
        if(i !== profit.length - 1){
            htmlPro += '<li><span class="year">' + profit[i].year + '</span> <span class="money">' + profit[i].money + '</span> </li>';
            var cars = "";
            for (j =0; j < profit[i].transport.length; j++){
                if (profit[i].transport[j] == "car"){
                    cars += '<div class="icon-two-car"> </div>';
                } else if (profit[i].transport[j] == "bike"){
                    cars += '<div class="icon-two-bike"></div>';
                }
            }
            htmlCap += '<li><span>' + profit[i].area + '<span><sup>2</sup></span></span>' + cars + '</li>';
        } else {
            htmlPro += '<li class="fix-li"><span class="year">' + profit[i].year + '</span> <span class="money">' + profit[i].money + '</span> </li>';
            var cars = "";
            for (j =0; j < profit[i].transport.length; j++){
                if (profit[i].transport[j] == "car"){
                    cars += '<div class="icon-two-car"> </div>';
                } else if (profit[i].transport[j] == "bike"){
                    cars += '<div class="icon-two-bike"></div>';
                }
            }
            htmlCap += '<li class="fix-li"><span>' + profit[i].area + '<span><sup>2</sup></span></span>' + cars + '</li>';
        }
    }
    $("#list-profit").html(htmlPro);
    $("#list-capital").html(htmlCap);
}


changeHero(1);


var partyArray = [{party:'единая россия',procent:'46,6',list:[
                       {name:'Антошкин Николай Тимофеевич',face:'image/pics_faces/ed/face_antoshkin.jpg'},
                       {name:'Белых Ирина Викторовна',face:'image/pics_faces/ed/face_belykh.jpg'},
                       {name:'Волков Данил Владимирович',face:'image/pics_faces/ed/face_volkov.jpg'},
                       {name:'Выборный Анатолий Борисович',face:'image/pics_faces/ed/face_vyborny.jpg'},
                       {name:'Гончар Николай Николаевич',face:'image/pics_faces/ed/face_gonchar.jpg'},
                       {name:'Жарков Антон Викторович',face:'image/pics_faces/ed/face_zharkov.jpg'},
                       {name:'Железняк Сергей Владимирович',face:'image/pics_faces/ed/face_zeleznyk.jpg'},
                       {name:'Звагельский Виктор Фридрихович',face:'image/pics_faces/ed/face_zvagelski.jpg'},
                       {name:'Исаев Андрей Константинович',face:'image/pics_faces/ed/face_isaev.jpg'},
                       {name:'Кожевникова Мария Александровна',face:'image/pics_faces/ed/face_kozevnikova.jpg'},
                       {name:'Крупенников Владимир Александрович',face:'image/pics_faces/ed/face_krupennikov.jpg'},
                       {name:'Кузин Сергей Павлович',face:'image/pics_faces/ed/face_kuzin.jpg'},
                       {name:'Никонов Вячеслав Алексеевич',face:'image/pics_faces/ed/face_nikonov.jpg'},
                       {name:'Панина Елена Владимировна',face:'image/pics_faces/ed/face_panina.jpg'},
                       {name:'Ресин Владимир Иосифович',face:'image/pics_faces/ed/face_resin.jpg'}
]},
                  {party:'справедливая россия',procent:'12,1',list:[
                      {name:'Агеев Александр Александрович',face:'image/pics_faces/sr/ageev.jpg'},
                      {name:'Хованская Галина Петровна',face:'image/pics_faces/sr/havanskaya.jpg'},
                      {name:'Тарнавский Александр Георгиевич',face:'image/pics_faces/sr/tarvavsky.jpg'}
                  ]},
                  {party:'кпрф',procent:'19,4',list:[
                      {name:'Доровин Евгений Владимирович',face:'image/pics_faces/kprf/dorovin.jpg'},
                      {name:'Кумин Вадим Валентинович',face:'image/pics_faces/kprf/kumin.jpg'},
                      {name:'Потапов Александр Владимирович',face:'image/pics_faces/kprf/potapov.jpg'},
                      {name:'Рашкин Валерий Фёдорович',face:'image/pics_faces/kprf/rashkin.jpg'},
                      {name:'Родин Владимир Романович',face:'image/pics_faces/kprf/rodin.jpg'},
                      {name:'Смолин Олег Николаевич',face:'image/pics_faces/kprf/smolin.jpg'}
                  ]},
                  {party:'лдпр',procent:'9,4',list:[
                      {name:'Анисимов Егор Игоревич',face:'image/pics_faces/ldpr/anisimov.jpg'},
                      {name:'Соболев Виктор Васильевич',face:'image/pics_faces/ldpr/sobolev.jpg'},
                      {name:'Свинцов Андрей Николаевич',face:'image/pics_faces/ldpr/svinsov.jpg'}
                  ]}];

for (i = 0; i < partyArray.length; i++){
    $("#party"+i).text(partyArray[i].party);
    $("#party"+i).attr('data-val',i);
}

$('#procent').text(partyArray[0].procent);

function createLi(e){
    $('#btn-party').text(partyArray[e].party);
    var htmlLi = '';
    for (n = 0; n < partyArray[e].list.length;n++){
        htmlLi += '<li data-id="'+ n +'" face-src="' + partyArray[e].list[n].face + '">' + partyArray[e].list[n].name + '</li>';
    }
    $('#party_list').html(htmlLi);
    $("#party_list li").on(MOUSE_DOWN,function(){
        $('#people-photo').attr('src',$(this).attr('face-src'));
        var topVal = $(this).position().top - 240;
        var text = $(this).text();
        if ($(window).width() <= '768'){
            $('#wrap-map').transition({x:'-66.6666%'}, 500);
            $('#right-chang-box').fadeIn();
            $('#select-name').text(text);
            $('.modile__infoDep-diline').css({'height':'172px'});
        } else {
            $('#right-chang-box').fadeIn();
            console.log('topVal');
            console.log(topVal);
            console.log($('.modile__infoDep').position().top);
            topVal = topVal + 45;
            $('.modile__infoDep-diline').css({'height':topVal});
        }
    });
}

$("#map_mask").on(MOUSE_DOWN,function(){
    var win_w = $(window).width();
        if (win_w >= 1200) {
            $('.module__map').transition({x:0,y:0},500);
            $("#map_mask").fadeOut();
        }else if (win_w >= 992) {
            $('.module__map').transition({x:0,y:0,scale:0.7},500);
            $("#map_mask").fadeOut();
        }else if (win_w >= 768) {
            $('.module__map').transition({x:0,y:0,scale:0.5},500);
            $("#map_mask").fadeOut();
        } else {
            $("#map_mask").fadeOut();
        }
    
});
createLi(0);
//по часовой
function changeTrianglesData(){
    $('#procent').fadeOut();
    for (i = partyArray.length -1; i >= 0; i--){
        var k = $("#party"+i).attr('data-val');
        k = parseInt(k);
        console.log(k);
        k = k - 1;
        
        console.log(k);
        if ( k < 0 ){
            k = k + 4;
            $("#party"+i).text(partyArray[k].party);
            $("#party"+i).attr('data-val',k);
        } else {
            $("#party"+i).text(partyArray[k].party);
            $("#party"+i).attr('data-val',k);
        }
        
    }
    var valProc = $("#party0").attr('data-val');
    valProc = parseInt(valProc);
    setTimeout(function(){
        console.log('work');
        $('#procent').text(partyArray[valProc].procent);
        $('#procent').fadeIn();
    },500);
    
    createLi(valProc);
    
}
/**************************************************************/
$('#my-button').click(function() {
        var win_w = $(window).width();
        if (win_w < 768) {
            $('#left-menu').removeClass('menu');
            $('#left-menu').addClass('menu_smal');
            $('#left-menu').addClass('menu-open-smal');
        } else {
            $('#left-menu').removeClass('menu_smal');
            $('#left-menu').addClass('menu');
            $('#left-menu').addClass('menu-open');
        }

    });

    $('#btn_close').click(function() {
        var win_w = $(window).width();
        if (win_w < 768) {


            $('#left-menu').removeClass('menu-open-smal');
        } else {

            $('#left-menu').removeClass('menu-open');
        }
    });
    $(window).resize(function() {
        $('#left-menu').removeClass('menu');
        $('#left-menu').removeClass('menu_smal');
        $('#left-menu').addClass('menu');
        $('#left-menu').removeClass('menu-open-smal');
        $('#left-menu').removeClass('menu-open');
    });


    $('#test1').hover(function() {
        $('#test1_on').addClass('display-none');
        $('#test1_hov').removeClass('display-none');
    }, function() {
        $('#test1_on').removeClass('display-none');
        $('#test1_hov').addClass('display-none');

    });
    $('#test2').hover(function() {
        $('#test2_on').addClass('display-none');
        $('#test2_hov').removeClass('display-none');
    }, function() {
        $('#test2_on').removeClass('display-none');
        $('#test2_hov').addClass('display-none');

    });







			
		