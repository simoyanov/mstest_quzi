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
			'filter_visibility'    => 0
		);
		$raitings_top = $this->model_catalog_raiting->getRaitings($filter_data);
		$data['raitings_top'] = array();

		$detect = new Mobile_Detect();
		
		foreach ($raitings_top as $raiting) {

			if (!empty($raiting['image'])) {
				// Если не планшет и не мобильное устройство
				if( !$detect->isMobile() && !$detect->isTablet() ){
					$image = $this->model_tool_image->resize($raiting['image'], 1920,1080,'h');
				}else{
					$image = $this->model_tool_image->resize($raiting['image'], 1024,768,'h');
				}
			}else{
				$image 		= $this->model_tool_image->resize('placeholder.png', 1024,768,'h');
			}
			

			//получим количестов нулевых значений из таблицы achiev

			$voices = $data['stats'][$raiting['raiting_id']]['voice'];
			
			if (!$this->request->server['HTTPS']) {
				$share_btn_ya = str_replace(HTTP_SERVER, "", $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']), $count);
			} else {
				$share_btn_ya = str_replace(HTTPS_SERVER, "", $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']), $count);
			}
			//сначала принудельно вверх
			$data['raitings_top'][] = array(
				'raiting_id' 			=> $raiting['raiting_id'],
				'raiting_title' 		=> $raiting['title'],
				'raiting_voice' 		=> sprintf($this->language->get('text_raiting_voice'), $voices, getNumEnding( $voices,array('человек', 'человека', 'человек'))),
				'raiting_image' 		=> $image,
				'raiting_href' 	 		=> $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']),
				'share_btn_ya'				=> 'btn_'.$share_btn_ya
			);
		}



		//получим список активных рейтингов
		$filter_data = array(
			'filter_status'    => 1,
			'filter_visibility'    => 1
		);
		$raitings = $this->model_catalog_raiting->getRaitings($filter_data);
		$data['raitings'] = array();
		foreach ($raitings as $raiting) {

			if (!empty($raiting['image'])) {
				if( !$detect->isMobile() && !$detect->isTablet() ){
					$image = $this->model_tool_image->resize($raiting['image'], 1920,1080,'h');
				}else{
					$image = $this->model_tool_image->resize($raiting['image'], 1024,768,'h');
				}
			}else{
				$image 		= $this->model_tool_image->resize('placeholder.png', 1024,768,'h');
			}
			

			//получим количестов нулевых значений 
			$voices = $data['stats'][$raiting['raiting_id']]['voice'];

			if (!$this->request->server['HTTPS']) {
				$share_btn_ya = str_replace(HTTP_SERVER, "", $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']));
			} else {
				$share_btn_ya = str_replace(HTTPS_SERVER, "", $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']));
			}


			$data['raitings'][] = array(
				'raiting_id' 			=> $raiting['raiting_id'],
				'raiting_title' 		=> $raiting['title'],
				'raiting_voice' 		=> sprintf($this->language->get('text_raiting_voice'), $voices, getNumEnding( $voices,array('человек', 'человека', 'человек'))),
				'raiting_image' 		=> $image,
				'raiting_href' 	 		=> $this->url->link('information/raiting/view', 'raiting_id=' . $raiting['raiting_id']),
				'share_btn_ya'				=> 'btn_'.$share_btn_ya
			);
		}
		shuffle($data['raitings']);
		
		$rating_id = 8;
		$temp_array = $data['raitings'];

		$data['raitings'] = array();
		foreach ($temp_array as $vrating) {
			if( $vrating['raiting_id'] != $rating_id ){
				$data['raitings'][] = array(
					'raiting_id' 				=> $vrating['raiting_id'],
					'raiting_title' 		=> $vrating['raiting_title'],
					'raiting_voice' 		=> $vrating['raiting_voice'],
					'raiting_image' 		=> $vrating['raiting_image'],
					'raiting_href' 	 		=> $vrating['raiting_href'],
					'share_btn_ya'			=> $vrating['share_btn_ya']
				);
			}
		}
		//опускаем вниз
		foreach ($temp_array as $vrating) {
			if( $vrating['raiting_id'] == $rating_id ){
				$data['raitings'][] = array(
					'raiting_id' 				=> $vrating['raiting_id'],
					'raiting_title' 		=> $vrating['raiting_title'],
					'raiting_voice' 		=> $vrating['raiting_voice'],
					'raiting_image' 		=> $vrating['raiting_image'],
					'raiting_href' 	 		=> $vrating['raiting_href'],
					'share_btn_ya'			=> $vrating['share_btn_ya']
				);
			}
		}


		//получим рейтинги котрые в архиве
		$filter_data = array(
			'filter_status'    => 0,
			'filter_visibility'    => 0
		);
		$raitings_off = $this->model_catalog_raiting->getRaitings($filter_data);
		foreach ($raitings_off as $r_off) {
			if (!empty($raiting['image'])) {
				if( !$detect->isMobile() && !$detect->isTablet() ){
					$image = $this->model_tool_image->resize($r_off['image'], 1920,1080,'h');
				}else{
					$image = $this->model_tool_image->resize($r_off['image'], 1024,768,'h');
				}
			}else{
				$image 		= $this->model_tool_image->resize('placeholder.png', 1024,768,'h');
			}
			$roff_voices = $data['stats'][$r_off['raiting_id']]['voice'];
			if (!$this->request->server['HTTPS']) {
				$share_btn_ya = str_replace(HTTP_SERVER, "", $this->url->link('information/raiting/view', 'raiting_id=' . $r_off['raiting_id']));
			} else {
				$share_btn_ya = str_replace(HTTPS_SERVER, "", $this->url->link('information/raiting/view', 'raiting_id=' . $r_off['raiting_id']));
			}


			$data['raitings_off'][] = array(
				'raiting_id' 			=> $r_off['raiting_id'],
				'raiting_title' 		=> $r_off['title'],
				'raiting_voice' 		=> sprintf($this->language->get('text_raiting_voice'), $roff_voices, getNumEnding( $roff_voices,array('человек', 'человека', 'человек'))),
				'raiting_image' 		=> $image,
				'raiting_href' 	 		=> $this->url->link('information/raiting/view', 'raiting_id=' . $r_off['raiting_id']),
				'share_btn_ya'			=> 'btn_'.$share_btn_ya
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