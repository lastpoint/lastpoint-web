<? 
/*
#############################################################################
							#
#############################################################################
*/
$eski 		= array("ı", "ç", "ğ","ü","ş","ö","İ","Ğ","Ü","Ş","Ö","Ç"," ","\r"); // bu k�s�mda flash dan gelen hatal� karakterler belirleniyor
$yeni 		= array("�", "�", "�","�","�","�","�","�","�","�","�","�","&nbsp;","<br>");		 // hatal� karekterlerin yerine gelecek karakterler burada belirleniyor
$comments	= str_replace($eski, $yeni, $comments); 										 // flash dan gelen $comments de�i�keni i�in gerekli karakter de�i�tirme i�lemi yap�l�yor
$fname		= str_replace($eski, $yeni, $fname);   										 	 // bir �st sat�rda yap�lan de�i�iklikler $fname de�i�kenni i�in de uygulan�yor

/*
#############################################################################
#																			#
#	e�er sizin formunuzda daha fazla alan var ise 							#
#	"$yenialan	= str_replace($eski, $yeni, $yenialan);" 					#
#	i�lemini di�er de�i�kenler i�inde kullan�n 								#
#	burdan sonras� lazoid hocan�n kodu ama biraz de�i�tirdim				#
#																			#
#############################################################################
*/

$adminaddress ="info@lastpoint.biz"; 
$siteaddress ="http://www.lastpoint.biz/"; 
$sitename = "Last Point"; 
$date = date("d/m/Y H:i:s");
if ($REMOTE_ADDR == "") $ip = "no ip";
else $ip = getHostByAddr($REMOTE_ADDR);

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=windows-1254\r\n";
$headers .= "From:".$adminaddress."\r\n";

$mesaj	 =$siteaddress." [rezervasyon]<br>";
$mesaj	.="isim  :".$fname."<br>";
$mesaj	.="email :".$email."<br>";
$mesaj	.="Mesaj :<br>------------------------------<br>";
$mesaj	.=$comments."<br>";
$mesaj	.="Kullan�c� bilgileri :<br>------------------------------<br>";
$mesaj	.=$HTTP_USER_AGENT."<br>";
$mesaj	.="//Hostname: ".$ip."<br>";
$mesaj	.="//IP adres: ".$REMOTE_ADDR."<br>";
$mesaj	.="Tarih/Zaman:".$date."<br>";




if ($action != ""): 
mail("$adminaddress","Randevu",$mesaj,$headers);

//Kullan�c�ya mail g�nderiliyor
mail("$email","$sitename Kad�n Erkek Kuaf�r G�zellik & Zay�flama Merkezi", 
"Merhaba,\n
$sitename Kad�n Erkek Kuaf�r G�zellik & Zay�flama Merkezimize ait web sayfam�z� ziyaret etti�iniz i�in te�ekk�rler, randevu talebinize en k�sa s�re i�inde cevap verilecektir...\n

Sayg�lar�m�zla,
Last pOint

219 64 06 - 07
219 91 36 - 37
Halaskargazi Cad.No:369/1 
�i�li/�st.

$siteaddress","FROM:$adminaddress"); 

//cevap
$sendresult = "randevu talebiniz iletildi..";

print("answer=".urlencode($sendresult)."&");

endif;

?>

