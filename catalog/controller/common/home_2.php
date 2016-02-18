<?php
class ControllerCommonHome extends Controller {
  public function index() {
    //загрузим язык
    $this->language->load('information/raiting');
    $this->load->model('tool/image');
    $this->load->model('catalog/raiting');
    $this->load->model('catalog/achievement');


    $data['heading_title'] = $this->language->get('heading_title');
    //seo
    $this->document->setTitle($data['heading_title']);
    $this->document->setDescription($this->language->get('heading_description'));
    $this->document->setKeywords($this->language->get('heading_keywords'));

    if (isset($this->request->get['route'])) {
      $this->document->addLink(HTTP_SERVER, 'canonical');
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

   //получим список аветивных рейтингов
    $filter_data = array(
      'filter_status'    => 1,
      'filter_visibility'    => 1
    );
    $raitings = $this->model_catalog_raiting->getRaitings($filter_data);
    $data['raitings'] = array();
    foreach ($raitings as $raiting) {
      //подтянем статистику
      $filter_data = array();
      $top_raitng = array();
      $raiting_stat =  $this->model_catalog_raiting->getStatsForRaiting($raiting['raiting_id'],$filter_data);
      $final_achievements = array();
      foreach ($raiting_stat as $rs) {
        //раскрываем список
        $unserial_data = unserialize($rs['value']);

        foreach ($unserial_data as $ud) {

          if($ud == 0){
            print_r($rs);

            die();
          }
          if (!empty($final_achievements[$ud])) {
            $final_achievements[$ud] = array(
              'voice'       => $final_achievements[$ud]['voice']+1,
              'description'   => $data['achievements'][$ud]
            );
          }else{
            $final_achievements[$ud] = array(
              'voice'     => 1,
              'description' => $data['achievements'][$ud]
            );

          }

        }

      }

      usort($final_achievements, 'sortByVoice');

      $data['top_5'] = array();
      $main_score = 0;
      $i =0;
      foreach ($final_achievements  as $fa) {
        $i++;
        $data['top_5'][] = array(
          'achievement_id'  => $fa['description']['achievement_id'],
          'voice'       => $fa['voice'],
          'text_voice'    => sprintf($this->language->get('text_raiting_voice_home'),$fa['voice'], getNumEnding( $fa['voice'],array('москвич', 'москвича', 'москвичей'))),
          'image'       => $fa['description']['achievement_image']
        );
        if($i ==1){break;}
      }

      if (!$this->request->server['HTTPS']) {
        $share_btn_ya = str_replace(HTTP_SERVER, "", $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']), $count);
      } else {
        $share_btn_ya = str_replace(HTTPS_SERVER, "", $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']), $count);
      }

      $data['raitings'][] = array(
        'raiting_id'      => $raiting['raiting_id'],
        'raiting_title'     => $raiting['title'],
      //  'raiting_voice'     => sprintf($this->language->get('text_raiting_voice'), $random_csore, getNumEnding($random_csore,array('человек', 'человека', 'человек'))),
        'raiting_href'      => $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']),
        'top_5'         => $data['top_5'],
        'share_btn_ya'      => 'btn_'.$share_btn_ya
      );

    }







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
