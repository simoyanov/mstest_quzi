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

$("#map_mask").on(MOUSE_DOWN,function(){
    var win_w = $(window).width();
        if (win_w >= 1200) {
            $('.module__map').transition({x:0,y:0},500);
            $("#map_mask").fadeOut();
            $('#center-party-box').fadeIn();
        }else if (win_w >= 992) {
            $('.module__map').transition({x:0,y:0,scale:0.7},500);
            $("#map_mask").fadeOut();
            $('#center-party-box').fadeIn();
        }else if (win_w >= 768) {
            $('.module__map').transition({x:0,y:0,scale:0.5},500);
            $("#map_mask").fadeOut();
            $('#center-party-box').fadeIn();
        } else {
            $("#map_mask").fadeOut();
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
//            console.log('topVal');
//            console.log(topVal);
//            console.log($('.modile__infoDep').position().top);
            topVal = topVal + 45;
            $('.modile__infoDep-diline').css({'height':topVal});
        }
        $(".modile__infoDep-change").delay(100).fadeIn();
        $(".modile__infoDep-after").css({'display':'none'});
        $(".modile__infoDep-like-but-after-big").css({'display':'none'});
        $(".modile__infoDep-dislike-but-after-small").css({'display':'none'});
        $(".modile__infoDep-after").css({'display':'none'});
        $(".modile__infoDep-dislike-but-after-big").css({'display':'none'});
        $(".modile__infoDep-like-but-after-small").css({'display':'none'});
    });
}


createLi(0);
//по часовой
function changeTrianglesData(){
    $('#procent').fadeOut();
    for (i = partyArray.length -1; i >= 0; i--){
        var k = $("#party"+i).attr('data-val');
        k = parseInt(k);
//        console.log(k);
        k = k - 1;
        
//        console.log(k);
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


$('.btn_again').on(MOUSE_DOWN,function(){
    location.reload();
});

/**********************************************/

var arrHeroes = ['<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_1.gif" width="157"><img class="hero-img" src="image/catalog/gif/ageev.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_sr.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-yellow"><span>Трудовую деятельность начал в&nbsp;19&nbsp;лет. Работал юристом в&nbsp;волгоградской юридической фирме. Через три года создал и&nbsp;возглавил собственную юридическую фирму.</span><span class="heroes-gif-name">Агеев Александр Александрович</span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_2.gif" width="157"><img class="hero-img" src="image/catalog/gif/anisimov.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_ldpr.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-blue"><span>Внес патриотический законопроект &laquo;О&nbsp;мерах противодействия санкциям иностранных государств в&nbsp;области культуры и&nbsp;о&nbsp;внесении изменений в&nbsp;Кодекс Российской Федерации об&nbsp;административных правонарушениях&raquo;.</span><span class="heroes-gif-name">Анисимов Егор Игоревич </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_3.gif" width="157"><img class="hero-img" src="image/catalog/gif/dorovin.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_kprf.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-red"><span>в&nbsp;8-ом таксомоторном парке г.Москвы работал водителем.</span><span class="heroes-gif-name">Доровин Евгений Владимирович </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_4.gif" width="157"><img class="hero-img" src="image/catalog/gif/belykh.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>С&nbsp;1985 года работала в&nbsp;школе &#8470;&nbsp;235&nbsp;в должности учителя начальных классов, с&nbsp;1988 года&nbsp;&mdash; учитель математики.</span><span class="heroes-gif-name">Белых Ирина Викторовна</span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_5.gif" width="157"><img class="hero-img" src="image/catalog/gif/gonchar.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>Работал в&nbsp;должности инженера радиозавода.</span><span class="heroes-gif-name">Гончар Николай Николаевич </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_6.gif" width="157"><img class="hero-img" src="image/catalog/gif/isaev.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>&laquo;Мелкие твари&nbsp;&mdash; расслабьтесь, вы&nbsp;нам безразличны. А&nbsp;вот конкретный редактор и&nbsp;автор ответят жёстко&raquo;.</span><span class="heroes-gif-name">Исаев Андрей Константинович </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_7.gif" width="157"><img class="hero-img" src="image/catalog/gif/havanskaya.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_sr.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-yellow"><span>&laquo;Для меня СПС-овцы были слишком крутые. Я&nbsp;Чубайса как организатора очень уважаю, но&nbsp;это человек, который по&nbsp;трупам к&nbsp;светлому будущему&nbsp;&mdash; к&nbsp;рынку. Пусть там все вымрут, но&nbsp;мы&nbsp;своего добьемся. Я&nbsp;считаю, что игнорировать социальную составляющую&nbsp;&mdash; это рубить сук, на&nbsp;котором сидишь..&raquo;</span><span class="heroes-gif-name">Хованская Галина Петровна</span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_1.gif" width="157"><img class="hero-img" src="image/catalog/gif/sobolev.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_ldpr.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-blue"><span>Окончил Русский институт управления&nbsp;г. Москва (специальность&nbsp;&mdash; юриспруденция). Доход 3&nbsp;875 998,67&nbsp;руб. Супруга: 930 000,00&nbsp;руб.</span><span class="heroes-gif-name">Соболев Виктор Васильевич </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_2.gif" width="157"><img class="hero-img" src="image/catalog/gif/kumin.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_kprf.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-red"><span>Доход в&nbsp;2014&nbsp;году: 4&nbsp;783 056,60&nbsp;руб. В&nbsp;бюджет Челябинской области и&nbsp;Москвы задолжал 118&nbsp;295&nbsp;рублей. (По&nbsp;состоянию на&nbsp;Март, 2015&nbsp;года).</span><span class="heroes-gif-name">Кумин Вадим Валентинович </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_3.gif" width="157"><img class="hero-img" src="image/catalog/gif/Kozhevnikova.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>&laquo;Регионы разные, люди в&nbsp;них живут разные. Чтобы увести молодежь с&nbsp;улицы, подальше от&nbsp;криминала, от&nbsp;пьянства, наркотиков, мы&nbsp;должны им&nbsp;предложить варианты...&raquo;</span><span class="heroes-gif-name">Кожевникова Мария Александровна </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_4.gif" width="157"><img class="hero-img" src="image/catalog/gif/nikonov.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>Был заведующим кафедрой истории и&nbsp;политологии. Доход в&nbsp;2014&nbsp;году: 6&nbsp;963 040,21&nbsp;руб.</span><span class="heroes-gif-name">Никонов Вячеслав Алексеевич </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_5.gif" width="157"><img class="hero-img" src="image/catalog/gif/kuzin.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>Работал старшим пионерским вожатым и&nbsp;старшим педагогом пионерского лагеря. Доход в&nbsp;2014&nbsp;году: 4&nbsp;122 740,78&nbsp;руб.</span><span class="heroes-gif-name">Кузин Сергей Павлович</span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_6.gif" width="157"><img class="hero-img" src="image/catalog/gif/tarnavsky.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_sr.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-yellow"><span>Принимал участие в&nbsp;работе экспертных советов, занимающихся реформированием законодательства в&nbsp;сфере пенсионного и&nbsp;социального обеспечения Российской Федерации. </span><span class="heroes-gif-name">Тарнавский Александр Георгиевич </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_7.gif" width="157"><img class="hero-img" src="image/catalog/gif/svincov.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_ldpr.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-blue"><span>В&nbsp;2000 году с&nbsp;отличием окончил строительный факультет Московского государственного университета природообустройства. Более 10&nbsp;раз участвовал в&nbsp;выборах депутатов разного уровня.</span><span class="heroes-gif-name">Свинцов Андрей Николаевич </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_1.gif" width="157"><img class="hero-img" src="image/catalog/gif/smolin.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_kprf.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-red"><span>Любимые литературные образы в&nbsp;политике&nbsp;&mdash; сказка Андерсена о&nbsp;двух лягушках в&nbsp;сметане или &laquo;миф о&nbsp;Сизифе&raquo; Альбера Камю.</span><span class="heroes-gif-name">Смолин Олег Николаевич </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_2.gif" width="157"><img class="hero-img" src="image/catalog/gif/panina.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>Небоскреб будет располагаться в&nbsp;10&nbsp;метрах от&nbsp;муниципального заповедника с&nbsp;одной стороны, в&nbsp;15&nbsp;метрах от&nbsp;АЗС с&nbsp;другой стороны, под небоскребом проходит газопровод, а&nbsp;под газопроводом подземная река. Доход в&nbsp;2014&nbsp;году: 29&nbsp;324 799,91&nbsp;руб.</span><span class="heroes-gif-name">Панина Елена Владимировна </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_3.gif" width="157"><img class="hero-img" src="image/catalog/gif/resin.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>Только из&nbsp;одного кабинета в&nbsp;здании можно уйти по&nbsp;черной лестнице, избегая ненужной встречи. Как ни&nbsp;странно, это кабинет командующего &laquo;танковыми войсками&raquo; строительного комплекса Москвы. Доход в&nbsp;размере более 44,2 млн рублей.</span><span class="heroes-gif-name">Ресин Владимир Иосифович</span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_4.gif" width="157"><img class="hero-img" src="image/catalog/gif/volkov.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>Доход за&nbsp;2014&nbsp;год: 3, 9&nbsp;млн. рублей. В&nbsp;собственности: квартира 120,5 квартира (общая долевая собственность, 1/2) 165,2 машиноместо 19,5.</span><span class="heroes-gif-name">Волков Данил Владимирович </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_5.gif" width="157"><img class="hero-img" src="image/catalog/gif/potapov.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_kprf.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-red"><span>Работал на&nbsp;крупном предприятии в&nbsp;области создания ракетной техники на&nbsp;инженерных должностях.</span><span class="heroes-gif-name">Потапов Александр Владимирович </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_6.gif" width="157"><img class="hero-img" src="image/catalog/gif/rashkin.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_kprf.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-red"><span>&laquo;Пригласили на&nbsp;турнир по&nbsp;пулевой и&nbsp;стендовой стрельбе среди депутатов Думы. Согласился, в&nbsp;качестве мишени хочу Путина&raquo;.</span><span class="heroes-gif-name">Рашкин Валерий Федорович</span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_7.gif" width="157"><img class="hero-img" src="image/catalog/gif/rodin.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_kprf.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-red"><span>Если&nbsp;бы не&nbsp;я, то&nbsp;и&nbsp;Крым до&nbsp;сих пор был&nbsp;бы не&nbsp;нашим, и&nbsp;Новороссия давно&nbsp;бы сдалась полчищам укров.</span><span class="heroes-gif-name">Родин Владимир Романович </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_1.gif" width="157"><img class="hero-img" src="image/catalog/gif/vyborny.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>Работал следователем военной прокуратуры и&nbsp;старшим военным прокурором.</span><span class="heroes-gif-name">Выборный Анатолий Борисович </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_2.gif" width="157"><img class="hero-img" src="image/catalog/gif/zharkov.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>Окончил Абхазский Государственный Университет имени А.М. Горького, специальность экономист, бухгалтерский учет и&nbsp;аудит. Доход в&nbsp;2014&nbsp;году: 49&nbsp;114 904,23&nbsp;руб. Супруга: 2&nbsp;000 000,00&nbsp;руб.</span><span class="heroes-gif-name">Жарков Антон Викторович </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_3.gif" width="157"><img class="hero-img" src="image/catalog/gif/antoshkin.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>Принимал участие в&nbsp;конфликтах на&nbsp;советско-китайской границе (совершал разведывательные вылеты вдоль границы, отслеживая перемещения китайских войск).</span><span class="heroes-gif-name">Антошкин Николай Тимофеевич </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_4.gif" width="157"><img class="hero-img" src="image/catalog/gif/zheleznyk.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>Был заместителем по&nbsp;политической части командира учебной роты газотурбинистов и&nbsp;мотористов дизельных установок.</span><span class="heroes-gif-name">Железняк Сергей Владимирович </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_5.gif" width="157"><img class="hero-img" src="image/catalog/gif/Zvagelski.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>После окончания института прошел путь от&nbsp;инженера до&nbsp;заместителя начальника управления &laquo;Главмосводоканал&raquo;. Доход в&nbsp;2014&nbsp;году: 3&nbsp;882 888,09&nbsp;руб.</span><span class="heroes-gif-name">Звагельский Виктор Фридрихович </span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>',
                 '<div class="heroes-gif"><img class="boom" src="image/catalog/home/exp_1.gif" width="157"><img class="hero-img" src="image/catalog/gif/krupennikov.gif" width="157" alt=""><div class="border-img"></div><img src="image/catalog/home/plate_edros.png" alt="" class="hero_party_plate"><div class="heroes-plate heroes-white"><span>&laquo;Сейчас я&nbsp;могу дойти из&nbsp;кухни до&nbsp;комнаты за&nbsp;минуту, раньше у&nbsp;меня на&nbsp;это уходило 7-10&nbsp;минут.&raquo; Доход в&nbsp;2014&nbsp;году: 10&nbsp;805 641,52&nbsp;руб. Супруга: 617 108,55&nbsp;руб.</span><span class="heroes-gif-name">Крупенников Владимир Александрович</span></div><div class="mark_pos"></div> <div class="mark_neg"></div></div>'
                ];


function ArrayShuffle(a) {
  var d,
  c,
  b = a.length;
   while (b) {
    c = Math.floor(Math.random() * b);
    d = a[--b];
    a[b] = a[c];
    a[c] = d
   }
   return a;
}

function showHeroes(){
    ArrayShuffle(arrHeroes);
    for (i = 0; i < 27; i++){
        if(i == 24){
            $('#heroes-gif-cont').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-lg-offset-3">'+arrHeroes[i]+'</div>');
        }else{
            $('#heroes-gif-cont').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">'+arrHeroes[i]+'</div>');
        }
    }
    var afterArr = '<div class="clear"></div><div class="col-xs-12 text-center"><div id="btn-result"><img src="image/catalog/home/result.gif" alt=""><div class="border-img"></div></div></div>';
    $('#heroes-gif-cont').append(afterArr);
    
}
showHeroes();

var heroVal = 0;
var heroesGifId = 0;
var heroBtnId = true;
$(".heroes-gif").attr('mouse-down',false);
$(".heroes-gif").on(MOUSE_DOWN,function(){
    console.log('heroBtnId',heroBtnId);
    if (heroBtnId == true && $(this).attr('mouse-down') == 'false'){
        heroVal = heroVal + 1;
        if(heroVal == 1){
            $('#btn-result').fadeIn();
        }
        function goToRes(){
            setTimeout(function(){
                if(heroVal == 3){
                    var o = $('#btn-result').offset();
                      var ot = o.top;
                      var ts = ot - 40;
                      $('body,html').stop().animate({ scrollTop: ts }, 500);
                       return false;
                }
            },500);
            
        }
        heroBtnId = false;
        if($(this).attr('mouse-down') == 'false'){
            console.log(this);
            $(this).children('.hero-img').transition({scale:0,y:157}, 500);
            $(this).children('.border-img').transition({scale:0,y:157}, 500, function(){
                $(gifId).children('.border-img').css({'background-color':'rgba(0, 0, 0, 0.5)'});
            });
            $(this).children('.hero_party_plate').transition({scale:0,y:157}, 500);

            $(this).children('.boom').transition({scale:1}, 500);
            $(this).children('.boom').delay(100).fadeOut(100);

            $(this).children('.hero-img').delay(300).transition({scale:1,y:0,opacity:0}, 0);
            $(this).children('.border-img').delay(300).transition({scale:1,y:0,opacity:0}, 0);

            $(this).children('.hero-img').delay(400).transition({scale:1,y:0,opacity:1}, 500);
            $(this).children('.border-img').delay(400).transition({scale:1,y:0,opacity:1}, 500);
            
            $(this).children('.heroes-plate').delay(800).fadeIn();
            $(this).children('.mark_pos').delay(3800).fadeIn();
            $(this).children('.mark_neg').delay(3800).fadeIn();
            $(this).children('.heroes-plate').delay(4800).fadeOut(300, goToRes);
            
            var gifId = this;
            var markId = '';
            $(this).children('.mark_pos').on(MOUSE_DOWN,function(){
                showPlate();
                markId = 'pos';
                setTimeout(function(){
                    $(gifId).children('.border-img').addClass('big-pos');
                },500);
                setTimeout(function(){
//                    goToRes();
                },1000);
            });

            $(this).children('.mark_neg').on(MOUSE_DOWN,function(){
                showPlate();
                markId = 'neg';
                setTimeout(function(){
                    $(gifId).children('.border-img').addClass('big-neg');
                    
                },500);
                setTimeout(function(){
//                    goToRes();
                },1000);
            });
            function showPlate(){
                $(gifId).children('.mark_pos').fadeOut();
                $(gifId).children('.mark_neg').fadeOut();
                
                heroBtnId = true;
                $(gifId).children('.border-img').on(MOUSE_DOWN,function(){
                        $(gifId).children('.heroes-plate').fadeIn();
                        $(gifId).children('.heroes-plate').delay(3000).fadeOut();
                    });
                
                
//                $(gifId).children('.heroes-plate').fadeIn();
//                $(gifId).children('.heroes-plate').delay(3000).fadeOut(300,function(){
//                    $(gifId).children('.border-img').on(MOUSE_DOWN,function(){
//                        $(gifId).children('.heroes-plate').fadeIn();
//                        $(gifId).children('.heroes-plate').delay(3000).fadeOut();
//                    });
//                    heroBtnId = true;
//                });
            }
            heroesGifId = heroesGifId + 1;
            $(this).attr('mouse-down',true);
        }

    }
    
});
$('#btn-result').on(MOUSE_DOWN,function(){
    $('.heroes-gif-cont').fadeOut();
    $('#heroes-share').fadeIn();
});

function scrollToDiv(e){
  var o = $(e).offset();
  var ot = o.top;
  var ts = ot;
  $('body,html').stop().animate({ scrollTop: ts }, 500);
   return false;
}

$("#toBlock1").on(MOUSE_DOWN,function(){return scrollToDiv('.block1')});
$("#toBlock2").on(MOUSE_DOWN,function(){return scrollToDiv('.block2')});
$("#toBlock3").on(MOUSE_DOWN,function(){return scrollToDiv('.block3')});
$("#toBlock4").on(MOUSE_DOWN,function(){return scrollToDiv('.block4')});
$("#toBlock5").on(MOUSE_DOWN,function(){return scrollToDiv('.block5')});


//return scrollToDiv('.block5')
		