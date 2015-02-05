<?
$headers .= "Kimden: $HTTP_POST_VARS[isim]\n";
$email = "info@lastpoint.biz"; 
$subject = "Web Sayfanızdan Gelen Bilgiler"; 
$message .= "Merhaba,\n";
$message .= "Web sayfanız aracılığıyla $HTTP_POST_VARS[isim] isimli bir kullanıcı size mail gönderdi,\n";
$message .= "Gönderenin Adı: $HTTP_POST_VARS[isim] , \n 
e-posta adresi: $HTTP_POST_VARS[eposta] , \n 
Telefonu: $HTTP_POST_VARS[telefon] , \n 
yetkili: $HTTP_POST_VARS[yetkili] , \n
Mesaj: $HTTP_POST_VARS[mesaj] , \n";

mail($email, $subject, $message, $headers);
?>
<html>
<head>
<title>Mesajınız Gönderildi</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1254">
</head>

<body>
<div align="center">
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p><strong><font size="2">Teşekkürler,<br>
    Mesajınız Gönderildi!</font></strong></p>
</div>
</body>
</html>
