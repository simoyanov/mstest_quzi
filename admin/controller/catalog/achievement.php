<?php
class ControllerCatalogAchievement extends Controller {
	private $error = array();

	public function index() {
		$this->load->language('catalog/achievement');

		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('catalog/achievement');

		$this->getList();
	}

	public function add() {
		$this->load->language('catalog/achievement');

		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('catalog/achievement');

		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
			$this->model_catalog_achievement->addAchievement($this->request->post);

			$this->session->data['success'] = $this->language->get('text_success');

			$url = '';

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}

			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			$this->response->redirect($this->url->link('catalog/achievement', 'token=' . $this->session->data['token'] . $url, 'SSL'));
		}

		$this->getForm();
	}

	public function edit() {
		$this->load->language('catalog/achievement');

		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('catalog/achievement');

		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
			$this->model_catalog_achievement->editAchievement($this->request->get['achievement_id'], $this->request->post);

			$this->session->data['success'] = $this->language->get('text_success');

			$url = '';

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}

			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			$this->response->redirect($this->url->link('catalog/achievement', 'token=' . $this->session->data['token'] . $url, 'SSL'));
		}

		$this->getForm();
	}

	public function delete() {
		$this->load->language('catalog/achievement');

		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('catalog/achievement');

		if (isset($this->request->post['selected']) && $this->validateDelete()) {
			foreach ($this->request->post['selected'] as $achievement_id) {
				$this->model_catalog_achievement->deleteAchievement($achievement_id);
			}

			$this->session->data['success'] = $this->language->get('text_success');

			$url = '';

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}

			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			$this->response->redirect($this->url->link('catalog/achievement', 'token=' . $this->session->data['token'] . $url, 'SSL'));
		}

		$this->getList();
	}

	protected function getList() {
		if (isset($this->request->get['sort'])) {
			$sort = $this->request->get['sort'];
		} else {
			$sort = 'dd.title';
		}

		if (isset($this->request->get['order'])) {
			$order = $this->request->get['order'];
		} else {
			$order = 'ASC';
		}

		if (isset($this->request->get['page'])) {
			$page = $this->request->get['page'];
		} else {
			$page = 1;
		}

		$url = '';

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}

		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}

		if (isset($this->request->get['page'])) {
			$url .= '&page=' . $this->request->get['page'];
		}

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/dashboard', 'token=' . $this->session->data['token'], 'SSL')
		);

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('heading_title'),
			'href' => $this->url->link('catalog/achievement', 'token=' . $this->session->data['token'] . $url, 'SSL')
		);

		$data['add'] = $this->url->link('catalog/achievement/add', 'token=' . $this->session->data['token'] . $url, 'SSL');
		$data['delete'] = $this->url->link('catalog/achievement/delete', 'token=' . $this->session->data['token'] . $url, 'SSL');

		$data['achievements'] = array();

		$filter_data = array(
			'sort'  => $sort,
			'order' => $order,
			'start' => ($page - 1) * $this->config->get('config_limit_admin'),
			'limit' => $this->config->get('config_limit_admin')
		);

		$achievement_total = $this->model_catalog_achievement->getTotalAchievements();

		$results = $this->model_catalog_achievement->getAchievements($filter_data);

		foreach ($results as $result) {
			$data['achievements'][] = array(
				'achievement_id' => $result['achievement_id'],
				'title'        => $result['title'],
				'date_added'  => date($this->language->get('date_format_short'), strtotime($result['date_added'])),
				'edit'        => $this->url->link('catalog/achievement/edit', 'token=' . $this->session->data['token'] . '&achievement_id=' . $result['achievement_id'] . $url, 'SSL')
			);
		}

		$data['heading_title'] = $this->language->get('heading_title');

		$data['text_list'] = $this->language->get('text_list');
		$data['text_no_results'] = $this->language->get('text_no_results');
		$data['text_confirm'] = $this->language->get('text_confirm');

		
		$data['column_achievement_date_begin'] = $this->language->get('column_achievement_date_begin');
		$data['column_achievement_date_end'] = $this->language->get('column_achievement_date_end');
		$data['column_title'] = $this->language->get('column_title');

		$data['column_date_added'] = $this->language->get('column_date_added');
		$data['column_action'] = $this->language->get('column_action');

		$data['button_add'] = $this->language->get('button_add');
		$data['button_edit'] = $this->language->get('button_edit');
		$data['button_delete'] = $this->language->get('button_delete');

		if (isset($this->error['warning'])) {
			$data['error_warning'] = $this->error['warning'];
		} else {
			$data['error_warning'] = '';
		}

		if (isset($this->session->data['success'])) {
			$data['success'] = $this->session->data['success'];

			unset($this->session->data['success']);
		} else {
			$data['success'] = '';
		}

		if (isset($this->request->post['selected'])) {
			$data['selected'] = (array)$this->request->post['selected'];
		} else {
			$data['selected'] = array();
		}

		$url = '';

		if ($order == 'ASC') {
			$url .= '&order=DESC';
		} else {
			$url .= '&order=ASC';
		}

		if (isset($this->request->get['page'])) {
			$url .= '&page=' . $this->request->get['page'];
		}

		$data['sort_title'] = $this->url->link('catalog/achievement', 'token=' . $this->session->data['token'] . '&sort=dd.title' . $url, 'SSL');
		$data['sort_date_added'] = $this->url->link('catalog/achievement', 'token=' . $this->session->data['token'] . '&sort=d.date_added' . $url, 'SSL');

		$url = '';

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}

		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}

		$pagination = new Pagination();
		$pagination->total = $achievement_total;
		$pagination->page = $page;
		$pagination->limit = $this->config->get('config_limit_admin');
		$pagination->url = $this->url->link('catalog/achievement', 'token=' . $this->session->data['token'] . $url . '&page={page}', 'SSL');

		$data['pagination'] = $pagination->render();

		$data['results'] = sprintf($this->language->get('text_pagination'), ($achievement_total) ? (($page - 1) * $this->config->get('config_limit_admin')) + 1 : 0, ((($page - 1) * $this->config->get('config_limit_admin')) > ($achievement_total - $this->config->get('config_limit_admin'))) ? $achievement_total : ((($page - 1) * $this->config->get('config_limit_admin')) + $this->config->get('config_limit_admin')), $achievement_total, ceil($achievement_total / $this->config->get('config_limit_admin')));

		$data['sort'] = $sort;
		$data['order'] = $order;

		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');

		$this->response->setOutput($this->load->view('catalog/achievement/achievement_list.tpl', $data));
	}

	protected function getForm() {
		$data['heading_title'] = $this->language->get('heading_title');

		$data['text_form'] = !isset($this->request->get['achievement_id']) ? $this->language->get('text_add') : $this->language->get('text_edit');
		
		$data['text_default'] = $this->language->get('text_default');
		$data['text_enabled'] = $this->language->get('text_enabled');
		$data['text_disabled'] = $this->language->get('text_disabled');

		$data['text_image_manager'] = $this->language->get('text_image_manager');
 		$data['text_browse'] = $this->language->get('text_browse');
		$data['text_clear'] = $this->language->get('text_clear');	

		$data['text_image'] = $this->language->get('text_image');
		$data['text_browse'] = $this->language->get('text_browse');
		$data['text_clear'] = $this->language->get('text_clear');
		$data['text_image_manager'] = $this->language->get('text_image_manager');


		$data['text_archive'] = $this->language->get('text_archive');
		$data['text_active'] = $this->language->get('text_active');
		$data['text_draft'] = $this->language->get('text_draft');
		$data['text_none'] = $this->language->get('text_none');

		$data['entry_title'] = $this->language->get('entry_title');
		$data['entry_address'] = $this->language->get('entry_address');
		$data['entry_description'] = $this->language->get('entry_description');
		$data['entry_meta_title'] = $this->language->get('entry_meta_title');
		$data['entry_meta_description'] = $this->language->get('entry_meta_description');
		$data['entry_meta_keyword'] = $this->language->get('entry_meta_keyword');
		$data['entry_keyword'] = $this->language->get('entry_keyword');
		$data['entry_achievement_date_begin'] = $this->language->get('entry_achievement_date_begin');
		$data['entry_achievement_date_end'] = $this->language->get('entry_achievement_date_end');
		$data['entry_status'] = $this->language->get('entry_status');
		$data['entry_visibility'] = $this->language->get('entry_visibility');
		$data['entry_metro'] = $this->language->get('entry_metro');
		$data['entry_latitude_longitude'] = $this->language->get('entry_latitude_longitude');
		
		$data['entry_image_title'] = $this->language->get('entry_image_title');
		$data['entry_link'] = $this->language->get('entry_link');
		$data['entry_image'] = $this->language->get('entry_image');
		$data['entry_sort_order'] = $this->language->get('entry_sort_order');
		$data['entry_raiting'] = $this->language->get('entry_raiting');


		$data['button_save'] = $this->language->get('button_save');
		$data['button_cancel'] = $this->language->get('button_cancel');
		$data['button_image_add'] = $this->language->get('button_image_add');
		$data['button_remove'] = $this->language->get('button_remove');

		$data['tab_general'] = $this->language->get('tab_general');
		$data['tab_data'] = $this->language->get('tab_data');
		$data['tab_image'] = $this->language->get('tab_image');
		if (isset($this->error['warning'])) {
			$data['error_warning'] = $this->error['warning'];
		} else {
			$data['error_warning'] = '';
		}

		if (isset($this->error['title'])) {
			$data['error_title'] = $this->error['title'];
		} else {
			$data['error_title'] = array();
		}

		if (isset($this->error['description'])) {
			$data['error_description'] = $this->error['description'];
		} else {
			$data['error_description'] = array();
		}

		if (isset($this->error['meta_title'])) {
			$data['error_meta_title'] = $this->error['meta_title'];
		} else {
			$data['error_meta_title'] = array();
		}

		if (isset($this->error['keyword'])) {
			$data['error_keyword'] = $this->error['keyword'];
		} else {
			$data['error_keyword'] = '';
		}

		if (isset($this->error['achievement_image'])) {
			$data['error_achievement_image'] = $this->error['achievement_image'];
		} else {
			$data['error_achievement_image'] = array();
		}
		
		$url = '';

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}

		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}

		if (isset($this->request->get['page'])) {
			$url .= '&page=' . $this->request->get['page'];
		}

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/dashboard', 'token=' . $this->session->data['token'], 'SSL')
		);

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('heading_title'),
			'href' => $this->url->link('catalog/achievement', 'token=' . $this->session->data['token'] . $url, 'SSL')
		);

		if (!isset($this->request->get['achievement_id'])) {
			$data['action'] = $this->url->link('catalog/achievement/add', 'token=' . $this->session->data['token'] . $url, 'SSL');
		} else {
			$data['action'] = $this->url->link('catalog/achievement/edit', 'token=' . $this->session->data['token'] . '&achievement_id=' . $this->request->get['achievement_id'] . $url, 'SSL');
		}

		$data['cancel'] = $this->url->link('catalog/achievement', 'token=' . $this->session->data['token'] . $url, 'SSL');

		$this->load->model('localisation/language');

		$data['languages'] = $this->model_localisation_language->getLanguages();

		if (isset($this->request->get['achievement_id']) && ($this->request->server['REQUEST_METHOD'] != 'POST')) {
			$achievement_info = $this->model_catalog_achievement->getAchievement($this->request->get['achievement_id']);
		}

		$data['token'] = $this->session->data['token'];

		if (isset($this->request->get['achievement_id'])) {
			$data['achievement_id'] = $this->request->get['achievement_id'];
		} else {
			$data['achievement_id'] = 0;
		}

		if (isset($this->request->post['achievement_description'])) {
			$data['achievement_description'] = $this->request->post['achievement_description'];
		} elseif (isset($this->request->get['achievement_id'])) {
			$data['achievement_description'] = $this->model_catalog_achievement->getAchievementDescriptions($this->request->get['achievement_id']);
		} else {
			$data['achievement_description'] = array();
		}

		if (isset($this->request->post['keyword'])) {
			$data['keyword'] = $this->request->post['keyword'];
		} elseif (!empty($achievement_info)) {
			$data['keyword'] = $achievement_info['keyword'];
		} else {
			$data['keyword'] = '';
		}
		
		if (isset($this->request->post['score_id'])) {
			$data['score_id'] = $this->request->post['score_id'];
		} elseif (!empty($achievement_info)) {
			$data['score_id'] = $achievement_info['score_id'];
		} else {
			$data['score_id'] = 0;
		}
		

		//подтянем список рейтингов
		$this->load->model('catalog/raiting');
		$raiting_results = $this->model_catalog_raiting->getRaitings();
		$data['raiting_results'] = array();
		foreach ($raiting_results as $raiting_result) {
			$data['raiting_results'][] = array(
				'raiting_id' 	=> $raiting_result['raiting_id'],
				'raiting_title' => $raiting_result['title']
			);
		}
	

		if (isset($this->request->post['raiting_id'])) {
			$data['raiting_id'] = $this->request->post['raiting_id'];
		} elseif (!empty($achievement_info)) {
			$data['raiting_id'] = $achievement_info['raiting_id'];
		} else {
			$data['raiting_id'] = '';
		}
		
		//дописать подтяжку со статусами
//******************************************************************/
		$data['ar_status'] = array();
		$data['ar_status'][] = array(
			'status_id' => 0,
			'title'		=> $this->language->get('text_archive')
		);
		$data['ar_status'][] = array(
			'status_id' => 1,
			'title'		=> $this->language->get('text_active')
		);
		$data['ar_status'][] = array(
			'status_id' => 2,
			'title'		=> $this->language->get('text_draft')
		);
//******************************************************************/
		if (isset($this->request->post['status'])) {
			$data['status'] = $this->request->post['status'];
		} elseif (!empty($achievement_info)) {
			$data['status'] = $achievement_info['status'];
		} else {
			$data['status'] = 1;
		}

		if (isset($this->request->post['visibility'])) {
			$data['visibility'] = $this->request->post['visibility'];
		} elseif (!empty($achievement_info)) {
			$data['visibility'] = $achievement_info['visibility'];
		} else {
			$data['visibility'] = 1;
		}

		$this->load->model('tool/image');

		if (isset($this->request->post['image'])) {
			$data['image'] = $this->request->post['image'];
		} elseif (!empty($achievement_info['image'])) {
			$data['image'] = $achievement_info['image'];
		} else {
			$data['image'] = '';
		}
		
		$this->load->model('tool/image');
		
		if (isset($this->request->post['image']) && is_file(DIR_IMAGE . $this->request->post['image'])) {
			$data['thumb'] = $this->model_tool_image->resize($this->request->post['image'], 100, 100,'h');
		} elseif (!empty($achievement_info['image'])) {
			$data['thumb'] = $this->model_tool_image->resize($achievement_info['image'], 100, 100,'h');
		} else {
			$data['thumb'] = $this->model_tool_image->resize('no_image.png', 100, 100,'h');
		}
		
		$data['no_image'] = $this->model_tool_image->resize('no_image.png', 100, 100,'h');
//********************* list-view-achievement **********************/	

		if (isset($this->request->post['achievement_image'])) {
			$achievement_images = $this->request->post['achievement_image'];
		} elseif (isset($this->request->get['achievement_id'])) {
			$achievement_images = $this->model_catalog_achievement->getAchievementImages($this->request->get['achievement_id']);
		} else {
			$achievement_images = array();
		}

		$data['achievement_images'] = array();

		foreach ($achievement_images as $achievement_image) {
			if (is_file(DIR_IMAGE . $achievement_image['image'])) {
				$image = $achievement_image['image'];
				$thumb = $achievement_image['image'];
			} else {
				$image = '';
				$thumb = 'no_image.png';
			}

			$data['achievement_images'][] = array(
				'achievement_image_description' => $achievement_image['achievement_image_description'],
				'link'                     => $achievement_image['link'],
				'image'                    => $image,
				'thumb'                    => $this->model_tool_image->resize($thumb, 100, 100,'h'),
				'sort_order'               => $achievement_image['sort_order']
			);
		}


		$data['achievementholder'] = $this->model_tool_image->resize('no_image.png', 100, 100,'h');
//********************* /.list-view-achievement **********************/	
		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');

		$this->response->setOutput($this->load->view('catalog/achievement/achievement_form.tpl', $data));
	}

	protected function validateForm() {

		if (!$this->user->hasPermission('modify', 'catalog/achievement')) {
			$this->error['warning'] = $this->language->get('error_permission');
		}

		foreach ($this->request->post['achievement_description'] as $language_id => $value) {
			if ((utf8_strlen($value['title']) < 3) || (utf8_strlen($value['title']) > 255)) {
				$this->error['title'][$language_id] = $this->language->get('error_title');
			}

			if (utf8_strlen($value['description']) < 3) {
				//$this->error['description'][$language_id] = $this->language->get('error_description');
			}

			if ((utf8_strlen($value['meta_title']) < 3) || (utf8_strlen($value['meta_title']) > 255)) {
				//$this->error['meta_title'][$language_id] = $this->language->get('error_meta_title');
			}
		}
		/*
		if (utf8_strlen($this->request->post['keyword']) > 0) {
			$this->load->model('catalog/url_alias');

			$url_alias_info = $this->model_catalog_url_alias->getUrlAlias($this->request->post['keyword']);

			if ($url_alias_info && isset($this->request->get['achievement_id']) && $url_alias_info['query'] != 'achievement_id=' . $this->request->get['achievement_id']) {
				$this->error['keyword'] = sprintf($this->language->get('error_keyword'));
			}

			if ($url_alias_info && !isset($this->request->get['achievement_id'])) {
				$this->error['keyword'] = sprintf($this->language->get('error_keyword'));
			}
		}
		*/
		if (isset($this->request->post['achievement_image'])) {
			foreach ($this->request->post['achievement_image'] as $achievement_image_id => $achievement_image) {
				foreach ($achievement_image['achievement_image_description'] as $language_id => $achievement_image_description) {
					if ((utf8_strlen($achievement_image_description['title']) < 2) || (utf8_strlen($achievement_image_description['title']) >255)) {
						$this->error['achievement_image'][$achievement_image_id][$language_id] = $this->language->get('error_image_title'); 
					}					
				}
			}	
		}

		
		return !$this->error;
	}

	protected function validateDelete() {
		if (!$this->user->hasPermission('modify', 'catalog/achievement')) {
			$this->error['warning'] = $this->language->get('error_permission');
		}

		

		return !$this->error;
	}

	
}