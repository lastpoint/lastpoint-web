<?
$headers .= "Kimden: $HTTP_POST_VARS[isim]\n";
$email = "info@lastpoint.biz"; 
$subject = "Web Sayfan�zdan Gelen Bilgiler"; 
$message .= "Merhaba,\n";
$message .= "Web sayfan�z arac�l���yla $HTTP_POST_VARS[isim] isimli bir kullan�c� size mail g�nderdi,\n";
$message .= "G�nderenin Ad�: $HTTP_POST_VARS[isim] , \n 
e-posta adresi: $HTTP_POST_VARS[eposta] , \n 
Telefonu: $HTTP_POST_VARS[telefon] , \n 
yetkili: $HTTP_POST_VARS[yetkili] , \n
Mesaj: $HTTP_POST_VARS[mesaj] , \n";

mail($email, $subject, $message, $headers);
?>
<html>
<head>
<title>Mesaj�n�z G�nderildi</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1254">
</head>

<body>
<div align="center">
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p><strong><font size="2">Te�ekk�rler,<br>
    Mesaj�n�z G�nderildi!</font></strong></p>
</div>
</body>
</html>
