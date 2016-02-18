<section class="module module--full-height" data-background="image/catalog/test_bg.jpg">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12  col-md-12  col-lg-12 module module__border module__border--white">
        <div class="row">
          <div class="col-xs-4 col-sm-1 col-md-1 col-lg-1 module__logo">
            <a href="/index.html"><img src="assets/images/logo.png" alt="Дума 2016" class="module__logo-image" ></a>
          </div>
          <div class=" col-xs-6 col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-5 col-lg-4 col-lg-offset-6">
            <span class="module__top_text open-sans-exboltit">567 340 <span>горят сердцами</span>
            </span>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-1 col-lg-1">
            <div class="module__burger" id="my-button">
              <img src="assets/images/burger_1.png" alt="">
            </div>
          </div>
        </div>

        <!-- заголовки  -->
        <div class="row">
          <div class="col-xs-12  center-block">
            <div class="module__title-test open-sans-exboltit fix-bg-text">
              какая партия тебе подходит?
            </div>
          </div>
          <div class="col-xs-12  center-block text-center ">
            <span class="module__title-testsubtext open-sans-lite "> Пришло время выбирать своих героев! <br>Ответь на вопросы и определи, с какой партией <br>ты совпадаешь по взглядам. <br></span>
          </div>
        </div>

        <div class="wizard-text ">
          <?php $i = 1; ?>
          <?php foreach ($step_questions as $step) { ?>

          <!-- Шаг викторины -->
          <div class="module-step quiz-duma-step" id="step_<?= $i; ?>">

            <div class="module-question">
              <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2   text-center ">
                  <div class="module__quest open-sans-exboltit mr-t-70 fix-quest">
                    <?php echo $step['title']; ?>
                  </div>
                </div>
              </div>
            </div>

            <div class="module-answer ">
              <div class="row custom-pd">
                <div class="center-block text-center">
                <?php $j=1; ?>
                <?php foreach ($step['ar_questions'] as $question) { ?>
                  <div class="btn module__answer-choice2 open-sans-regular wizard-btn-answer"
                    data-step="<?php echo $i; ?>"
                    data-question="<?php echo $step['qitem_id']; ?>"
                    data-answer="<?php echo $question['question_id']; ?>"
                    data-correct="<?php echo $question['correct']; ?>"
                    data-comment="<?php echo $question['answer_comment']; ?>">
                    <span><?php echo $question['answer_title']; ?></span>
                  </div>
                  <?php $j++; ?>
                <?php } ?>
                </div>
              </div>
            </div>

          </div>
          <?php $i++; ?>
          <?php } ?>
        </div>


    



        <div class="row">
          <div class="col-xs-12 col-sm-5 col-sm-offset-7 col-md-4 col-md-offset-8 col-lg-3 col-lg-offset-9 ">
            <div class="warning-duma  mt-130 ">
              <!-- /*mt-130 убрать если нет таймера*/ -->
              <div class="icon-hand ml-12"></div><span class="warning-duma__text open-sans-lite text-center">информбюро думы <br>предупреждает!</span>
            </div>
          </div>
        </div>
        <div class="menu " id="left-menu">
          <div class="menu__burger-close" id="btn_close">
            <img src="assets/images/burger_2.png" alt="">
          </div>
          <ul class="menu__nav">
            <li class="menu__nav-title open-sans-lite"><a href="/index.html">Главная</a></li>
            <li class="menu__nav-step  open-sans-regular">I Этап</li>
            <li class="menu__nav-title open-sans-lite"><a href="/test1.html">3наток думы</a></li>
            <li class="menu__nav-title open-sans-lite"><a href="/test2.html">Кресло депутата</a></li>
            <li class="menu__nav-title open-sans-lite"><a href="/test3.html">Рейтинг партий</a></li>
            <li class="menu__nav-heros open-sans-lite"><a href="/index.html#heros">Герои</a></li>
            <li class="menu__nav-step  menu__nav-stepfix open-sans-regular">II Этап</li>
            <li class="menu__nav-title menu__nav-titlefix open-sans-lite">подпишись чтобы выжить</li>
            <li class="input-group menu__nav-input">
              <input type="text" class="form-control">
              <div class="input-group-addon"><a href="#"><i class="fa fa-paper-plane-o"></i></a></div>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </div>
</section>
<form id="poll-form" role="form" action="/result_quiz_kreslo_deputata">
  <input type="hidden" name="quiz_id" value="<?php echo $quiz_id;?>">
</form>
