<?php
	/*
  --Main controller comunica el framework ExtJS con el Api
  
  	--IndexAction
		Metodo GET
   		Metodo para listar los contactos
    	
  	--CreateAction
  		Metodo POST
		$params contiene un object con todos los datos del contacto
		$return Trae un Object con los datos del contacto creado o un error.
  
  	--DeleteAction
  		Metodo POST
  		Borrar contactos.
		$return y $params igual que las anteriores
		
  	--UpdateAction
  		Metodo POST
		Edita un contacto ya creado.
		$return y $params igual que la anterior
   */
	
class MainController extends Zend_Controller_Action
{
  public function init()
  {
    
  }

  public function createAction() {
	  
    $this->getHelper('Layout')->disableLayout();
    $this->getHelper('ViewRenderer')->setNoRender();

    $params = (array) json_decode($this->getRequest()->getPost('data'));
    unset($params['id']);

    $contact = new Application_Model_ModelMapper();
    $form = new Application_Model_ModelContact($params);
    $data = $contact->Read($form);

    $this->getResponse()->setHeader('Content-Type', 'application/json');
    return $this->_helper->json->sendJson($data);
  }
  public function indexAction() {
	  
    $this->getHelper('Layout')->disableLayout();
    $this->getHelper('ViewRenderer')->setNoRender();

    
    if (null != ($id = $this->_request->getQuery('id'))) {
      $contacts = new Application_Model_ModelMapper();
      $data = $contacts->Id($id);

      $this->getResponse()->setHeader('Content-Type', 'application/json');
      return $this->_helper->json->sendJson($data);
    }

    $type = $this->_request->getQuery('type') ? $this->_request->getQuery('type') : '';
    $start = intval($this->_request->getQuery('start')) ? intval($this->_request->getQuery('start')) : 0;
    $limit = intval($this->_request->getQuery('limit')) ? intval($this->_request->getQuery('limit')) : 20;
    $page = intval($this->_request->getQuery('page'));

    $contacts = new Application_Model_ModelMapper();
    $data = $contacts->Search($type, '', $start, $limit);

    $this->getResponse()->setHeader('Content-Type', 'application/json');
    return $this->_helper->json->sendJson($data);
  }
	
   public function updateAction() {
		
    $this->getHelper('Layout')->disableLayout();
    $this->getHelper('ViewRenderer')->setNoRender();

    $params = (array) json_decode($this->getRequest()->getPost('data'));

    $contact = new Application_Model_ModelMapper();
    $form = new Application_Model_ModelContact($params);
    $data = $contact->Read($form);

    $this->getResponse()->setHeader('Content-Type', 'application/json');
    return $this->_helper->json->sendJson($data);
  }

  public function deleteAction() {
		
    $this->getHelper('Layout')->disableLayout();
    $this->getHelper('ViewRenderer')->setNoRender();

    $param = json_decode($this->getRequest()->getPost('data'));

    $contact = new Application_Model_ModelMapper();
    if (count($param) > 1) {
      foreach ($param as $key => $value) {
        $data = $contact->Delete($value->id);
      }
      $this->getResponse()->setHeader('Content-Type', 'application/json');
      if (isset($data['code']) && '200' == $data['code']) {
        return $this->_helper->json->sendJson([
          'code' => 200,
          'message' => 'Los contactos fueron eliminados correctamente.',
        ]);
      }
    }
    $data = $contact->Delete($param->id);

    $this->getResponse()->setHeader('Content-Type', 'application/json');
    return $this->_helper->json->sendJson($data);
  }
  
}
