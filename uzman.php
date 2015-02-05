<? 
/*
#############################################################################
							#
#############################################################################
*/
$eski 		= array("Ä±", "Ã§", "ÄŸ","Ã¼","ÅŸ","Ã¶","Ä°","Äž","Ãœ","Åž","Ã–","Ã‡"," ","\r"); // bu kýsýmda flash dan gelen hatalý karakterler belirleniyor
$yeni 		= array("ý", "ç", "ð","ü","þ","ö","Ý","Ð","Ü","Þ","Ö","Ç","&nbsp;","<br>");		 // hatalý karekterlerin yerine gelecek karakterler burada belirleniyor
$comments	= str_replace($eski, $yeni, $comments); 										 // flash dan gelen $comments deðiþkeni için gerekli karakter deðiþtirme iþlemi yapýlýyor
$fname		= str_replace($eski, $yeni, $fname);   										 	 // bir üst satýrda yapýlan deðiþiklikler $fname deðiþkenni için de uygulanýyor

/*
#############################################################################
#																			#
#	eðer sizin formunuzda daha fazla alan var ise 							#
#	"$yenialan	= str_replace($eski, $yeni, $yenialan);" 					#
#	iþlemini diðer deðiþkenler içinde kullanýn 								#
#	burdan sonrasý lazoid hocanýn kodu ama biraz deðiþtirdim				#
#																			#
#############################################################################
*/

$adminaddress ="info@laspoint.biz"; 
$siteaddress ="http://www.lastpoint.biz/"; 
$sitename = "Last Point"; 
$date = date("d/m/Y H:i:s");
if ($REMOTE_ADDR == "") $ip = "no ip";
else $ip = getHostByAddr($REMOTE_ADDR);

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-9\r\n";
$headers .= "From:".$adminaddress."\r\n";

$mesaj	 =$siteaddress." [Uzmanlarýmýza Danýsýn]<br>";
$mesaj	.="isim  :".$fname."<br>";
$mesaj	.="email :".$email."<br>";
$mesaj	.="Mesaj :<br>------------------------------<br>";
$mesaj	.=$comments."<br>";
$mesaj	.="Kullanýcý bilgileri :<br>------------------------------<br>";
$mesaj	.=$HTTP_USER_AGENT."<br>";
$mesaj	.="//Hostname: ".$ip."<br>";
$mesaj	.="//IP adres: ".$REMOTE_ADDR."<br>";
$mesaj	.="Tarih/Zaman:".$date."<br>";




if ($action != ""): 
mail("$adminaddress","Uzmanlarýmýza Danýsýn",$mesaj,$headers);

//Kullanýcýya mail gönderiliyor
mail("$email","$sitename Kadýn Erkek Kuaför Güzellik & Zayýflama Merkezi", 
"Merhaba,\n
$sitename Kadýn Erkek Kuaför Güzellik & Zayýflama Merkezimize ait web sayfamýzý ziyaret ettiðiniz için teþekkürler, danýþtýðýnýz konu hakkýnda uzmanlarýmýz size en kýsa süre içersinde çözüm önerilerini ileteceklerdir...\n

Saygýlarýmýzla,
Last pOint

219 64 06 - 07
219 91 36 - 37
Halaskargazi Cad.No:369/1 
Þiþli/Ýst.

$siteaddress","FROM:$adminaddress"); 

//cevap
$sendresult = "Sorununuz uzmanlarýmýza iletilmistir...";

print("answer=".urlencode($sendresult)."&");

endif;

?>

