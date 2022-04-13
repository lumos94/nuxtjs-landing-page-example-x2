<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');    // cache for 1 day
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Requested-With');

class Ip
{
  /**
   * first attempt is to get the direct IP address of client’s machine,
   * if not available then try for forwarded for IP address using HTTP_X_FORWARDED_FOR.
   * And if this is also not available, then finally get the IP address using REMOTE_ADDR.
   *
   * @return string
   */
  private function _get_ip_address()
  {
    if (isset($_SERVER['REAL_REMOTE_ADDR']) && !empty($_SERVER['REAL_REMOTE_ADDR']) && $this->_validate_ip($_SERVER['REAL_REMOTE_ADDR'])) {
      return $_SERVER['REAL_REMOTE_ADDR'];
    }

    // check for shared internet/ISP IP
    if (isset($_SERVER['HTTP_CLIENT_IP']) && !empty($_SERVER['HTTP_CLIENT_IP']) && $this->_validate_ip($_SERVER['HTTP_CLIENT_IP'])) {
      return $_SERVER['HTTP_CLIENT_IP'];
    }

    // check for IPs passing through proxies
    if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && !empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
      // check if multiple ips exist in var
      if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',') !== false) {
        $iplist = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        foreach ($iplist as $ip) {
          if ($this->_validate_ip($ip))
            return $ip;
        }
      } else {
        if ($this->_validate_ip($_SERVER['HTTP_X_FORWARDED_FOR']))
          return $_SERVER['HTTP_X_FORWARDED_FOR'];
      }
    }
    if (isset($_SERVER['HTTP_X_FORWARDED']) && !empty($_SERVER['HTTP_X_FORWARDED']) && $this->_validate_ip($_SERVER['HTTP_X_FORWARDED']))
      return $_SERVER['HTTP_X_FORWARDED'];
    if (isset($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']) && !empty($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']) && $this->_validate_ip($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']))
      return $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
    if (isset($_SERVER['HTTP_FORWARDED_FOR']) && !empty($_SERVER['HTTP_FORWARDED_FOR']) && $this->_validate_ip($_SERVER['HTTP_FORWARDED_FOR']))
      return $_SERVER['HTTP_FORWARDED_FOR'];
    if (isset($_SERVER['HTTP_FORWARDED']) && !empty($_SERVER['HTTP_FORWARDED']) && $this->_validate_ip($_SERVER['HTTP_FORWARDED']))
      return $_SERVER['HTTP_FORWARDED'];

    // return unreliable ip since all else failed
    if (isset($_SERVER['REMOTE_ADDR']) && !empty($_SERVER['REMOTE_ADDR']) && $this->_validate_ip($_SERVER['REMOTE_ADDR']))
      return $_SERVER['REMOTE_ADDR'];

    return 'unknown';
  }

  private function _validate_ip($ip)
  {
    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 /*| FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE*/) === false) {
      return false;
    }
    return true;
  }

  /**
   * Get IP Address
   *
   * @return string|null $ip
   */
  public function get()
  {
    $ip = $this->_get_ip_address();

    // REMOTE_ADDR may return 'unknown'
    if (strtolower($ip) === 'unknown')
      return null;

    return $ip;
  }

}

$ip = new Ip();
echo $ip->get();
