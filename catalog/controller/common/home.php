<?php
class ControllerCommonHome extends Controller {
  public function index() {
    //загрузим язык
    $this->load->model('catalog/achievement');
    $this->load->model('tool/image');
    $this->load->model('catalog/raiting');
    $this->load->language('information/raiting');
    $this->load->model('catalog/quiz');
    $this->load->language('information/quiz');


    $data['heading_title'] = $this->language->get('heading_title');
    //seo
    $this->document->setTitle($data['heading_title']);
    $this->document->setDescription($this->language->get('heading_description'));
    $this->document->setKeywords($this->language->get('heading_keywords'));

    if (isset($this->request->get['route'])) {
      $this->document->addLink(HTTP_SERVER, 'canonical');
    }

    //подтянем опросы
    $quizs = $this->model_catalog_quiz->getQuizs();
    $data['quizs'] = array();
    foreach ($quizs as $quiz) {
      $data['quizs'][] = array(
        'quiz_id'      => $quiz['quiz_id'],
        'quiz_title'     => $quiz['title'],
        'quiz_href'      => $this->url->link('information/quiz/view', 'quiz_id=' . $quiz['quiz_id'])
      );
    }


    //подтянем ачивки
    $filter_data = array(
      'filter_status'    => 1
    );

    $achievements = $this->model_catalog_achievement->getAchievements($filter_data);
    $data['achievements'] = array();
    foreach ($achievements as $achievement) {
      if (!empty($achievement['image'])) {
        $image = $this->model_tool_image->resize($achievement['image'], 243,213,'h');
      }else{
        $image = $this->model_tool_image->resize('placeholder.png', 243,213,'h');
      }
      $data['achievements'][$achievement['achievement_id']] = array(
        'achievement_id'      => $achievement['achievement_id'],
        'achievement_title'     => $achievement['title'],
        'achievement_image'     => $image,
        'score_id'          => $achievement['score_id']
      );
    }


    //подтянем список рейингов
    //получим обшее количесвто реальных проголосовавших человек
    $raitings_stat = $this->model_catalog_raiting->getCountForRaiting();
    $data['stats'] = array();
    foreach ($raitings_stat as $value) {
      $data['stats'][$value['raiting_id']] = array(
        'voice' => ($value['total'])
      );
    };

    //получим список активных рейтингов
    $filter_data = array(
      'filter_status'    => 1,
      'filter_visibility'    => 1,
      'filter_season_id'     => 2
    );
    $raitings = $this->model_catalog_raiting->getRaitings($filter_data);
    $data['raitings'] = array();
    $detect = new Mobile_Detect();
    foreach ($raitings as $raiting) {

      if (!empty($raiting['image'])) {
        if( !$detect->isMobile() && !$detect->isTablet() ){
          $image = $this->model_tool_image->resize($raiting['image'], 1920,1080,'w');
        }else{
          $image = $this->model_tool_image->resize($raiting['image'], 1024,768,'w');
        }
      }else{
        $image    = $this->model_tool_image->resize('placeholder.png', 1024,768,'w');
      }


      //получим количестов нулевых значений
      $voices = 0 ;
      if(!empty($data['stats'][$raiting['raiting_id']])){
         $voices = $data['stats'][$raiting['raiting_id']]['voice'];
      }

      if (!$this->request->server['HTTPS']) {
        $share_btn_ya = str_replace(HTTP_SERVER, "", $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']));
      } else {
        $share_btn_ya = str_replace(HTTPS_SERVER, "", $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']));
      }


      $data['raitings'][] = array(
        'raiting_id'      => $raiting['raiting_id'],
        'raiting_title'     => $raiting['title'],
        'raiting_voice'     => sprintf($this->language->get('text_raiting_voice'), $voices, getNumEnding( $voices,array('человек', 'человека', 'человек'))),
        'raiting_image'     => $image,
        'raiting_href'      => $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']),
        'share_btn_ya'        => 'btn_'.$share_btn_ya
      );
    }
    shuffle($data['raitings']);







    $data['column_left'] = $this->load->controller('common/column_left');
    $data['column_right'] = $this->load->controller('common/column_right');
    $data['content_top'] = $this->load->controller('common/content_top');
    $data['content_bottom'] = $this->load->controller('common/content_bottom');
    $data['footer'] = $this->load->controller('common/footer');
    $data['header'] = $this->load->controller('common/header');

    if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/common/home.tpl')) {
      $this->response->setOutput($this->load->view($this->config->get('config_template') . '/template/common/home.tpl', $data));
    } else {
      $this->response->setOutput($this->load->view('default/template/common/home.tpl', $data));
    }
  }
}
