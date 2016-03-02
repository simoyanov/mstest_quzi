<?php
class ControllerCommonListdepartament extends Controller {
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





    $data['column_left'] = $this->load->controller('common/column_left');
    $data['column_right'] = $this->load->controller('common/column_right');
    $data['content_top'] = $this->load->controller('common/content_top');
    $data['content_bottom'] = $this->load->controller('common/content_bottom');
    $data['footer'] = $this->load->controller('common/footer');
    $data['header'] = $this->load->controller('common/header');

    if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/common/homeResult.tpl')) {
      $this->response->setOutput($this->load->view($this->config->get('config_template') . '/template/common/homeResult.tpl', $data));
    } else {
      $this->response->setOutput($this->load->view('default/template/common/home.tpl', $data));
    }
  }
}
