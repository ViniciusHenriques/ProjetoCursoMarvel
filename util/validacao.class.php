<?php
class Validacao{
  public static function validarNome($a){
    $exp = "/^[A-zÀ-ú ]{2,15}$/";
    return preg_match($exp,$a);
  }
  public static function validarTelefone($a){
    $exp = "/^[0-9()-]{8,15}$/";
    return preg_match($exp,$a);
  }
  public static function validarEndereco($a){
    $exp = "/^[A-zÀ-ú 0-9-,]{3,100}$/";
    return preg_match($exp,$a);
  }
  public static function validarCPF($a){
    $exp = "/^\d{3}\.\d{3}\.\d{3}-\d{2}$/";
    return preg_match($exp,$a);
  }
  public static function validarNum($a){
    $exp = "/^[0-9]{1,5}$/";
    return preg_match($exp,$a);
  }
  public static function validarSexo($val){
    $exp = "/^(Masculino|Feminino|masculino|feminino){1}$/";
    return preg_match($exp,$val);
  }

  public static function validarStatus($a){
    $exp = "/^(Simples Solteiro|Simples Casal|Padrão|Luxo|Cobertura)$/";
    return preg_match($exp,$a);
  }
  public static function validarValor($a){
    $exp = "/^[0-9,.]{1,10}$/";
    return preg_match($exp,$a);
  }
  public static function verificarData($data){
    if ( strlen($data) < 8){
          return false;
      }else{
          if(strpos($data, "-") !== FALSE){
              $partes = explode("-", $data);
              $dia = $partes[2];
              $mes = $partes[1];
              $ano = isset($partes[0]) ? $partes[0] : 0;

              if (strlen($ano) < 4) {
                  return false;
              } else {
                  if (checkdate($mes, $dia,$ano )) {
                       return true;
                  } else {
                       return false;
                  }//fecha else
              }//fecha else
          }else{
              return false;
          }//fecha else
      }//fecha else
  }//fecha validarData
  public static function validarSenha($a){
    $exp = "/^[0-9a-z]{3,15}$/";
    return preg_match($exp,$a);
  }
  public static function validarLogin($a){
    $exp = "/^[0-9a-z]{3,20}$/";
    return preg_match($exp,$a);
  }
  public static function validarEmail($email){
		return filter_var($email, FILTER_VALIDATE_EMAIL);
	}

}//fecha classe
