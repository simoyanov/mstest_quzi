<?php echo $header; ?>
<section class="module" data-background="image/catalog/duma_bg.jpg">
  <div class="container">
    <div class="row">
     <div class="wrap-map-bg"></div>
      <div class="col-xs-12 col-sm-12  col-md-12  col-lg-12 module module__border module__border--white">
        <div class="row">
            <div class="col-xs-4 col-sm-1 col-md-1 col-lg-1 module__logo">
              <a href="/"><img src="image/catalog/home/logo.png" alt="Дума 2016" class="module__logo-image" ></a>
            </div>
            <div class="col-xs-6 col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-5 col-lg-4 col-lg-offset-6">
                <span class="module__top_text open-sans-exboltit">567 350 <span>горят сердцами</span>
                </span>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-1 col-lg-1">
                <div class="module__burger" id="my-button">
                    <a  ><img src="image/catalog/home/burger_1.png" alt=""></a>
                </div>
            </div>
        </div>

        
    <div class="row">
        <div class="center-block text-center col-xs-12">
            <h1 class="module__title open-sans-exboltit ">дамы и господа!</h1>
            <span class="module__subtitle open-sans-lite">скоро начнутся голодные игры в думу 2016</span>
            <span class="module__subtitle-subtext open-sans-lite">Оцени самоотдачу и эффективность партий. <br> Что было сделано для народа, а что предстоит изменить?</span>
            <a class="bnt btn_rate open-sans-exbolt" href="/quiz_oceni_zakon" >оценить</a>
        </div>
        </div>
        <div id="panema"></div>
        <div class="wrap-map-bg"></div>
        <div class="row" id="map-box">
                       <div id="wrap-map">
<!--                       <div id="wrap-map-bg"></div>-->
                       <div id="left-map-box" class="col-xs-4 module__map_rel">
                           
                       
                       

                            <div class="module__map">
                                
                                <div class="module__tringl_kprf"><span class="open-sans-exboltit" id="party2"></span></div>
                                <div class="module__tringl_ldpr"><span class="open-sans-exboltit" id="party3"></span></div>
                                <div class="module__tringl_sprross"><span class="open-sans-exboltit" id="party1"></span></div>
                                <div class="module__tringl_edros"><span class="open-sans-exboltit" id="party0"></span><span id="procent" class="text-right open-sans-regular"></span></div>
                               <canvas id="canvas" width="362" height="434" ></canvas>
                               <div id="message"></div>
                                <div id="map_mask"></div>
                            </div>
                            
                        
                        
                        </div>
                        <div id="center-party-box" class="col-xs-4  col-md-3 col-lg-4">
                        
<!--                            <h4 class="module__title-party open-sans-exboltit">Единая россия</h4>-->
                            <ul class="module__list_party open-sans-lite" id="party_list">
                                <li>Антошкин Николай Тимофеевич</li>
                                <li>Белых Ирина Викторовна</li>
                                <li>Волков Данил Владимирович</li>
                                <li>Выборный Анатолий Борисович</li>
                                <li>Гончар Николай Николаевич</li>
                                <li>Жарков Антон Викторович</li>
                                <li>Железняк Сергей Владимирович</li>
                                <li>Звагельский Виктор Фридрихович</li>
                                <li>Исаев Андрей Константинович</li>
                                <li>Кожевникова Мария Александровна</li>
                                <li>Крупенников Владимир Александрович</li>
                                <li>Кузин Сергей Павлович</li>
                                <li>Никонов Вячеслав Алексеевич</li>
                                <li>Панина Елена Владимировна</li>
                                <li>Ресин Владимир Иосифович</li>
                            </ul>
                            <div class="btn-close"></div>
                            <div id="btn-party" class="open-sans-exboltit">единая россия</div>
                        </div>
                        <div id="right-chang-box" class="col-xs-4 modile__rel">
<!--                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 modile__rel hidden-xs hidden-sm">-->
                           <div class="modile__infoDep-partyname open-sans-lite" id="select-name"></div>
                            <div class="modile__infoDep">
<!--                                <div class="module__infoDep-place"><span class="open-sans-lite">25</span></div>-->
<!--                                <div class="module__infoDep-text"> - место в Рейтинге (из 450 депутатов)</div>-->
                                    
                                <img class="modile__infoDep-photo" id="people-photo" src="assets/images/face_kozevnikova.jpg" alt=""> 
                                <div class="modile__infoDep-diline"><img src="image/catalog/home/diline.png" alt=""></div>
                                
                                <div class="modile__infoDep-change">
                                   <img class="modile__infoDep-photo" src="" alt="">    
                                    <div class="modile__infoDep-line"></div>
                                    <div class="modile__infoDep-yes open-sans-regular">да!</div>
                                    <div class="modile__infoDep-like-but"></div>
                                    <div class="modile__infoDep-no open-sans-lite">нет</div>
                                    <div class="modile__infoDep-dislike-but"></div>
                                </div>
                                
                                <div class="modile__infoDep-after">
                                  <img class="modile__infoDep-photo" src="" alt="">   
                                   <div class="module__infoDep-place-after"><span class="open-sans-lite">25</span></div>
                                    <div class="modile__infoDep-line-after"></div>
                                    <div class="modile__infoDep-bigline-after">66 000</div>
                                    <div class="modile__infoDep-smline-after">55 000</div>
                                    <div class="like-after modile__infoDep-like-but-after-big"></div>
                                    <div class="like-after modile__infoDep-dislike-but-after-big"></div>
                                    <div class="like-after modile__infoDep-like-but-after-small"></div>
                                    <div class="like-after modile__infoDep-dislike-but-after-small"></div>
                                    
                                </div>
                            </div>
                            <div class="btn-back"></div>
<!--                        </div>-->
                        </div>
                        
                        </div>
                    </div>
                    <div class="menu " id="left-menu">
          <div class="menu__burger-close" id="btn_close">
            <img src="image/catalog/home/burger_2.png" alt="">
          </div>
            <ul class="menu__nav">
              <li class="menu__nav-title open-sans-lite"><a href="/">Главная</a></li>
              <li class="menu__nav-step  open-sans-regular">I Этап</li>
              <li class="menu__nav-title open-sans-lite"><a href="/quiz_znatok_duma">3наток думы</a></li>
              <li class="menu__nav-title open-sans-lite"><a href="/quiz_kreslo_deputata">Кресло депутата</a></li>
              <li class="menu__nav-title open-sans-lite"><a href="/quiz_oceni_zakon">Рейтинг партий</a></li>
              <li class="menu__nav-heros open-sans-lite"><a href="#heros">Герои</a></li>
              <li class="menu__nav-step  menu__nav-stepfix open-sans-regular">II Этап</li>
              <li class="menu__nav-title menu__nav-titlefix open-sans-lite">подпишись чтобы выжить</li>
              <li class="input-group menu__nav-input">
                  <input type="text" class="form-control">
                  <div class="input-group-addon"><a href="#"><i class="fa fa-paper-plane-o"></i></a></div>
              </li>
            </ul>
          </div>
    </div>

                  
                    
                    
                </div><!-- /.module__border -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>



    <section class="module ">
        <div class="container-fluid ">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                    <div class="module__test ">
                        <img class="module__test-img" src="image/catalog/home/know_test_no.jpg" alt="" id="test1_on">
                        <img class="module__test-img display-none" src="image/catalog/home/know_test_hover.jpg" alt="" id="test1_hov">
                        <a class="module__test__btn bnt_test1 open-sans-lite" id="test1" href="/quiz_znatok_duma">Проверить себя</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                    <div class="module__test "><img class="module__test-img" src="image/catalog/home/test_2.jpg" alt="" id="test2_on">
                        <img class="module__test-img display-none" src="image/catalog/home/test_2-hover.jpg" alt="" id="test2_hov">
                        <div class="module__test__text open-sans-exboltit">не жестко ли кресло
                            <br> <span class="open-sans-lite">депутата?</span></div>
                        <a class="module__test__btn bnt_test2 open-sans-lite" href="/quiz_kreslo_deputata" id="test2">Присесть</a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="module" data-background="image/catalog/home/heros.jpg" id="heros">
       <div class="container-fluid" id="heros-box">
         <div id="heros-bg"></div>
          <div class="center-block text-center gerb"><img src="image/catalog/home/logo.png" alt="Дума 2016"></div>
          <div class="row">
                        <div class="col-xs-12  center-block module__title-infoperson open-sans-norm-it">
                            <span class="module__title-line "></span>партия<span class="module__title-line"></span>
                            </div>
           </div>
           <div id="wrap">
               <div class="col-xs-6" id="left-box">
<!--                 <div class="center-block text-center"><img src="image/catalog/home/logo.png" alt="Дума 2016"></div>-->
                  <div class="row">
<!--
                        <div class="col-xs-12  center-block module__title-infoperson open-sans-norm-it">
                            <span class="module__title-line "></span>партия<span class="module__title-line"></span>
                            </div>
-->
                        <div class="col-xs-12  center-block">
                            <div class="module-title-big open-sans-exbolt text-center">Герои</div>
                        </div>
                         <div class="col-xs-12  center-block module__title-infoperson open-sans-norm-it">
                            <span class="module__title-line"></span><span id="party-left"></span><span class="module__title-line"></span>
                         </div>

                         <div class="col-xs-12  center-block text-center">
                            <div class="module__citata open-sans-norm-it col-md-4 col-md-offset-4" id="quote">
                                «Очень важно, чтобы ценностные ориентиры, любовь к Родине, патриотизм формировались с детства и были неотъемлемой частью процесса воспитания и становления гражданина»
                            </div>
                        </div>
                             <div class="col-xs-12  center-block text-center">
                                <div class="module__citata-name open-sans-lite" id="left-name">Сергей Железняк</div>
                                      </div>

                     <div class="center-block text-center">
                        <div class="icon-op fix-bnt-heros" id="left-btn"></div>
                    </div>

                    </div>
               </div>
               
               
               
               
               <div class="col-xs-6 module" id="right-box" data-background="">
<!--                  <div class="center-block text-center"><img src="image/catalog/home/logo.png" alt="Дума 2016"></div>-->
                  <div class="row">
                
                <!-- <div class="col-xs-12  center-block module__title-infoperson open-sans-norm-it" id="party-right"> -->
<!--                   <span class="module__title-line "></span>партия<span class="module__title-line"></span><br>-->
                    <!-- единая россия</div> -->
                   <div class="col-xs-12  center-block module__title-infoperson open-sans-norm-it">
                            <span class="module__title-line "></span><span id="party-right">единая россия</span><span class="module__title-line"></span>
                            </div>




                <div class="col-xs-12 center-block">
                    <div class="module__title-name open-sans-exbolt" id="right-name">Сергей Железняк</div>
                </div>


                
                <div class="col-xs-12  center-block module__title-infoperson open-sans-lite"><span class="module__title-line "></span><span id="birthday"> 30 июля 1970 г. (45 лет)</span> <span class="module__title-line"></span></div>

                <div class="col-xs-6  col-sm-6 col-md-5 col-md-offset-1 col-lg-3 col-lg-offset-3">
                    <div class="module__infoDep-place fix-place"><span class="open-sans-lite" id="rating">39</span>
                    </div>
                    <span class="module__place-text open-sans-exbolt"> место в рейтинге <br>
                             <span class="open-sans-regular">(из 450 депутатов)</span>
                    </span>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-5 col-lg-3 ">
                    <div class="icon-lightning module__icon-skil"></div>
                    <span class="module__place-text open-sans-exbolt"> особые навыки:<br>
                             <span class="open-sans-regular" id="skils">сми держит в напряжении</span>
                    </span>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12  col-lg-12  ">
                    <div class="module__border-money">
                        <div class="row">
                            <div class="col-xs-6  col-sm-6 col-md-6  col-lg-6 border-money-left">
                                <h5 class="module__title-infodep-money open-sans-norm-it text-right income"><li>доход</li></h5>
                                <ul class="module__list-money open-sans-norm-it income-list text-right" id="list-profit">
                                    <li><span class="year">2011</span> <span class="money">3 434 259 руб</span> </li>
                                    <li class="fix-li"><span>2014</span> <span class="money">5 557 218 руб</span></li>
                                </ul>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 border-money-right">
                                <h5 class="module__title-infodep-money open-sans-norm-it text-left property"><li>собственость</li></h5>
                                <ul class="module__list-money open-sans-norm-it property-list" id="list-capital">
                                    <li><span>392,4 м<span><sup>2</sup></span></span>
                                        <div class="icon-two-car"> </div>
                                        <div class="icon-two-bike"></div>
                                    </li>
                                    <li class="fix-li"><span>392,4 м<span><sup>2</sup></span></span>
                                        <div class="icon-two-bike"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center-block text-center">
                <div class="icon-cl fix-bnt-heros" id="right-btn"></div>
            </div>
                   
               </div>
           </div>
           <div class="row">
                        <div class="center-block text-center">
                            <ul class="soc-link">
                                <li><a href="#" class="fix-fs"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#" class="fix-tw" ><i  class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#" class="fix-vk"><i class="fa fa-vk"></i></a></li>
                                <li><a href="#" class="fix-fs"><i class="fa fa-odnoklassniki"></i></a></li>
                            </ul>
                        </div>
                    </div>
           
           
       </div>
    </section>

<?php echo $content_bottom; ?>

<?php echo $footer; ?>
