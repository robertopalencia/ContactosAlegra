<?php
/*
   $_uri URI de API ALEGRA
   $_baseUri String de la API ALEGRA
   $_email usuario de alegra
   $_token de alegra
   $_client comunicacion
  
  */

class Application_Model_ModelMapper {
  
  private $_baseUri;

  
  private $_uri;

  
  private $_email;

  
  private $_token;

  
  private $_client;

  public function __construct() {
    
    $dataBootstrap = Zend_Controller_Front::getInstance()->getParam('bootstrap');
    
    $dataAlegra = $dataBootstrap->getOption('configAlegra');
    
    $this->_baseUri = $dataAlegra['uri'];
    
    $this->_uri = $this->_baseUri . 'contacts';
    
    $this->_email = $dataAlegra['email'];
    
    $this->_token = $dataAlegra['token'];
    
    $this->_client = new Zend_Http_Client();
   
    $this->_client->setUri($this->_uri);
   
    $this->_client->setConfig(array('timeout' => 30));
    
    $this->_client->setAuth($this->_email, $this->_token, Zend_Http_Client::AUTH_BASIC);
  }

  
  public function Read(Application_Model_ModelContact $contact)
  {
  
    $type = array();
    if ($contact->getIsClient()) {
      $type[] = 'client';
    }
    if ($contact->getIsProvider()) {
      $type[] = 'provider';
    }
    
    $address = (object) [
      'address' => $contact->getAddress(),
      'city' => $contact->getCity(),
    ];

    $params = array(
      'id' => $contact->getId(),
      'name' => $contact->getName(),
      'identification' => $contact->getIdentification(),
      'phonePrimary' => $contact->getPhoneprimary(),
      'phoneSecondary' => $contact->getPhonesecondary(),
      'fax' => $contact->getFax(),
      'mobile' => $contact->getMobile(),
      'observations' => $contact->getObservations(),
      'email' => $contact->getEmail(),
      'priceList' => empty($contact->getPriceList()) ? null : $contact->getPriceList(),
      'seller' => empty($contact->getSeller()) ? null : $contact->getSeller(),
      'term' => empty($contact->getTerm()) ? null : $contact->getTerm(),
      'address' => $address,
      'type' => $type,
      'internalContacts' => $contact->getInternalContacts(),
    );

    if (null === ($id = $contact->getId())) {
      $this->_client->setUri($this->_uri);
      $response = $this->_client->setRawData(json_encode($params))->request('POST');
      $data = $response->getBody();
      $data = json_decode($data, true);
    } else {
      $this->_client->setUri($this->_uri . "/$id");
      $response = $this->_client->setRawData(json_encode($params))->request('PUT');
      $data = $response->getBody();
      $data = json_decode($data, true);
    }
    return $data;
  }
    private function _Data($data = []) {
    $i = 0;
    foreach ($data as $key => $value) {
      $data[$i]['isClient'] = false;
      $data[$i]['isProvider'] = false;
      if (isset($value['priceList']['id'])) {
        $data[$i]['priceList'] = [$value['priceList']['name']];
      }
      if (isset($value['seller']['id'])) {
        $data[$i]['seller'] = [$value['seller']['name']];
      }
      if (isset($value['term']['id'])) {
        $data[$i]['term'] = [$value['term']['name']];
      }
      if ((isset($value['type'][0]) && 'client' === $value['type'][0]) || (isset($value['type'][1]) && 'client' === $value['type'][1])) {
        $data[$i]['isClient'] = true;
      }
      if ((isset($value['type'][0]) && 'provider' === $value['type'][0]) || (isset($value['type'][1]) && 'provider' === $value['type'][1])) {
        $data[$i]['isProvider'] = true;
      }
      $i++;
    }
    return $data;
  }

  
  public function Search($type = '', $query = '', $start = 0, $limit = 20)
  {
    $params = "?start=$start&limit=$limit&metadata=true";
    if (!empty($type) && in_array($type, array('client', 'provider'))) {
      $params.= "&type=$type";
    }
    if (!empty($query)) {
      $params.= "&query=$query";
    }

    $this->_client->setUri($this->_uri . $params);
    $response = $this->_client->request('GET');
    $data = $response->getBody();
    $data = json_decode($data, true);

    if (isset($data['code']) && $data['code'] !== 200) {
      return $data;
    }

    $results = self::_Data($data['data']);
    $contacts = array();

    foreach ($results as $row) {
      $contact = new Application_Model_ModelContact($row);
      $contacts[] = $contact;
    }

    return [
      'total' => $data['metadata']['total'],
      'data' => $contacts,
    ];
  }

  public function Id($id)
  {
    $this->_client->setUri($this->_uri . "/$id");
    $response = $this->_client->request('GET');

    $data = $response->getBody();
    $data = json_decode($data, true);

    if (isset($data['code']) && $data['code'] !== 200) {
      return $data;
    }

    $result = self::_Data([$data]);
    $contact = new Application_Model_ModelContact($result[0]);

    return [
      'data' => $contact,
    ];
  }

  public function Delete($id)
  {
    $this->_client->setUri($this->_uri . "/$id");
    $response = $this->_client->request('DELETE');
    $data = $response->getBody();
    $data = json_decode($data, true);

    if (isset($data['code']) && $data['code'] !== 200) {
      return $data;
    }

    return $data;
  }
    }
