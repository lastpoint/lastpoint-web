<%
on error resume next

function donustur(text)
donustur = Server.URLEncode(text)
donustur = replace(donustur, "%C3%87", "Ç")
donustur = replace(donustur, "%C3%A7", "ç")
donustur = replace(donustur, "%C4%B0", "Ý")
donustur = replace(donustur, "%C4%B1", "ý")
donustur = replace(donustur, "%C5%9E", "Þ")
donustur = replace(donustur, "%C5%9F", "þ")
donustur = replace(donustur, "%C4%9E", "Ð")
donustur = replace(donustur, "%C4%9F", "ð")
donustur = replace(donustur, "%C3%9C", "Ü")
donustur = replace(donustur, "%C3%BC", "ü")
donustur = replace(donustur, "%C3%96", "Ö")
donustur = replace(donustur, "%C3%B6", "ö")
donustur = replace(donustur, "%0D", " ")
donustur = replace(donustur, "+", " ")
donustur = replace(donustur, "%26", "&")
donustur = replace(donustur, "%40", "@")
end function


posta = request.form("posta")
subj = "[ MAÝLLÝST ]"
subj2 = "Last Point"
icerik = "Mail Listesine ekleyiniz.<br><br>"
icerik = posta
icerik2 = "Sayýn " & isim & "E-Mail listemize katýldýðýnýz için teþekkür ederiz..."

Set objSendmail = Server.CreateObject("CDO.Message")
With objSendmail
.From = "info@lastpoint.biz"
.to = posta
.Subject = subj2
.TextBody=subj
.HTMLBody = icerik2
.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusing")=2
.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusername")="info@lastpoint.biz"
.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendpassword")="cetinsatir"
.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserver")="mail.lastpoint.biz"
.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserverport")=25
.Configuration.Fields.Update
.Send
End With
set objSendMail = NOTHING

Set objSendmail = Server.CreateObject("CDO.Message")
With objSendmail
.From = "info@lastpoint.biz"
.to = "info@lastpoint.biz"
.Subject = subj
.HTMLBody = icerik
.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusing")=2
.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusername")="info@lastpoint.biz"
.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendpassword")="cetinsatir"
.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserver")="mail.lastpoint.biz"
.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserverport")=25
.Configuration.Fields.Update
.Send
End With
set objSendMail = NOTHING
%>
<html>
<head>
<meta http-equiv="Content-Language" content="tr">
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="genel.css">
</head>

<body topmargin="0" marginwidth="0" marginheight="0" bgcolor="#FFF3E7" bottommargin="0" leftmargin="0" rightmargin="0">

<div align="center">

<table border="0" width="961" cellspacing="0" cellpadding="0" id="table1" height="595" bgcolor="#FFF3E7">
<tr>
<td width="96" background="images/leftback.jpg" height="595" rowspan="2"> </td>
<td width="779" height="96" valign="top"><p align="center">
</td>
<td width="92" background="images/rightback.jpg" height="595" rowspan="2"> </td>
</tr>

<tr>
<td width="779" height="499" valign="top" bgcolor="#fff3e7">
<div align="center">
<table border="0" cellpadding="0" style="border-collapse: collapse" bordercolor="#111111" width="750" height="361" bgcolor="#FFF3E7"><tr>
<td width="750" valign="top" bgcolor="#FFF3E7"><p align="center"> <p align="center"> <p align="center"> <p align="center">
<font face="Arial" size="2"><b><span style="background-color: #FFF3E7">&nbsp;E-Mail 
listemize katýldýðýnýz için teþekkür ederiz.</span></b><span style="background-color: #FFF3E7"><br><br>
Güzellik merkezimizin uyguladýðý kapmanya ve hediyelerden faydalanabileceksiniz.</span></font></td></tr></table>
</div>
</td>
</tr>
</table>
</div>
</body>
</html>
