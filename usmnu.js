document.write('<STYLE type="text/css">');
document.write('#menuspan4186504 { position:absolute; width:752px; }');
document.write('#menutable4186504 { border-width: 0; border-color: #808080; border-style:solid}');
document.write('td.menucell4186504 { padding-left:4; padding-right:4; background:#FFFFAE; border:0 solid #000000; }');
document.write('#submenutable4186504 { background: #000000; border-width: 1; border-color: #EAEAA1; border-style:solid}');
document.write('td.topcell4186504 {text-decoration:none; color:#000000; font-weight: 400; font-family: Verdana; font-size: 11px; font-style:normal; }');
document.write('a.topitem4186504 {text-decoration:none; color:#000000; font-weight: 400; font-family: Verdana; font-size: 11px; font-style:normal;} ');
document.write('a.topitem4186504:hover {text-decoration:none; color:#808080; }');
document.write('a.subitem4186504 {text-decoration:none; color:#050505; font-weight: 400; font-family: Verdana; font-size: 11px; font-style:normal;} ');
document.write('a.subitem4186504:hover {text-decoration:none; color:#000000; }');
document.write('P.MN4186504 {color:#000000; font-weight: 400; font-family: Verdana; font-size:11px; font-style:normal;}');
document.write('P.SMN4186504 {text-decoration:none; color:#050505; font-weight: 400; font-family: Verdana; font-size:11px; font-style:normal;}');
document.write('#submenu4186504_0 { position:absolute; left:94px; top:23px; visibility:hidden; }');
document.write('#submenu4186504_1 { position:absolute; left:188px; top:23px; visibility:hidden; }');
document.write('#submenu4186504_2 { position:absolute; left:282px; top:23px; visibility:hidden; }');
document.write('#submenu4186504_3 { position:absolute; left:376px; top:23px; visibility:hidden; }');
document.write('#submenu4186504_4 { position:absolute; left:470px; top:23px; visibility:hidden; }');
document.write('#submenu4186504_5 { position:absolute; left:658px; top:23px; visibility:hidden; }');
document.write('</style>');
var thisbrowser4186504
var hidetimer4186504 = null;
if(document.layers){ thisbrowser4186504='NN4'; }
if(document.all){ thisbrowser4186504='IE'; }
if(!document.all && document.getElementById){ thisbrowser4186504='NN6'; }
function showmenu4186504(menuname)
{
if(thisbrowser4186504=='NN4') document.layers[menuname].visibility = 'visible';
if(thisbrowser4186504=='IE') document.all[menuname].style.visibility = 'visible';
if(thisbrowser4186504=='NN6') document.getElementById(menuname).style.visibility = 'visible';
if(hidetimer4186504) clearTimeout(hidetimer4186504);}
function timermenu4186504()
{
if(hidetimer4186504) clearTimeout(hidetimer4186504);hidetimer4186504 = setTimeout("hideall4186504();",300);
}
function hidemenu4186504(menuname)
{
if(thisbrowser4186504=='NN4') document.layers[menuname].visibility = 'hidden';
if(thisbrowser4186504=='IE') document.all[menuname].style.visibility = 'hidden';
if(thisbrowser4186504=='NN6') document.getElementById(menuname).style.visibility = 'hidden';
}
function hilite4186504(menuitem) 
{
if(typeof(currentpage4186504)!='undefined' && menuitem==currentpage4186504) return;
if(thisbrowser4186504=='IE') document.all[menuitem].style.backgroundColor = '#FFE773';
if(thisbrowser4186504=='NN6') document.getElementById(menuitem).style.backgroundColor = '#FFE773';
if(hidetimer4186504) clearTimeout(hidetimer4186504);}
function unhilite4186504(menuitem) 
{
if(typeof(currentpage4186504)!='undefined' && menuitem==currentpage4186504) return;
if(thisbrowser4186504=='IE') document.all[menuitem].style.backgroundColor = '#FFFFAE';
if(thisbrowser4186504=='NN6') document.getElementById(menuitem).style. backgroundColor = '#FFFFAE';
if(hidetimer4186504) clearTimeout(hidetimer4186504);hidetimer4186504 = setTimeout("hideall4186504();",300);
}
function hideall4186504()
{
hidemenu4186504('submenu4186504_0');
hidemenu4186504('submenu4186504_1');
hidemenu4186504('submenu4186504_2');
hidemenu4186504('submenu4186504_3');
hidemenu4186504('submenu4186504_4');
hidemenu4186504('submenu4186504_5');
}
function openmenu4186504(menuname)
{
showmenu4186504(menuname);
if(menuname!='submenu4186504_0') hidemenu4186504('submenu4186504_0');
if(menuname!='submenu4186504_1') hidemenu4186504('submenu4186504_1');
if(menuname!='submenu4186504_2') hidemenu4186504('submenu4186504_2');
if(menuname!='submenu4186504_3') hidemenu4186504('submenu4186504_3');
if(menuname!='submenu4186504_4') hidemenu4186504('submenu4186504_4');
if(menuname!='submenu4186504_5') hidemenu4186504('submenu4186504_5');
}
document.write('<table width=752 height=18 cellspacing=0 border=0 cellpadding=0>');
document.write('<tr><td align=left valign=top >');
document.write('<span id="menuspan4186504">');
document.write('<table width=752 id="menutable4186504" cellspacing=0 cellpadding=1>');
document.write('<tr>');
document.write('<td align=center background="l5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a href="http://www.lastpoint.biz/index.htm" class="topitem4186504" onMouseOver="hideall4186504()">Ana Sayfa</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a href="http://www.lastpoint.biz/bayan-sac-kesimi.htm" class="topitem4186504" onMouseOver="openmenu4186504(\'submenu4186504_0\')" onMouseOut="timermenu4186504();">Kadýn Güzellik</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a href="http://www.lastpoint.biz/erkek-sac-kesimi.htm" class="topitem4186504" onMouseOver="openmenu4186504(\'submenu4186504_1\')" onMouseOut="timermenu4186504();">Erkek Güzellik</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a href="http://www.lastpoint.biz/zayiflama.htm" class="topitem4186504" onMouseOver="openmenu4186504(\'submenu4186504_2\')" onMouseOut="timermenu4186504();">Enstitü</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a href="http://www.lastpoint.biz/kadin-sac-modelleri.htm" class="topitem4186504" onMouseOver="openmenu4186504(\'submenu4186504_3\')" onMouseOut="timermenu4186504();">Saç Modelleri</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a  class="topitem4186504" onMouseOver="openmenu4186504(\'submenu4186504_4\')" onMouseOut="timermenu4186504();">Galeri</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a  class="topitem4186504" onMouseOver="hideall4186504()">Hakkýmýzda</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a href="http://www.lastpoint.biz/lastpoint-iletisim.htm" class="topitem4186504" onMouseOver="openmenu4186504(\'submenu4186504_5\')" onMouseOut="timermenu4186504();">Ýletiþim</a>');
document.write('</td>');
document.write('<td align=center background="r5.gif">&nbsp;</td>');
document.write('</tr>');
document.write('</table><p>');
document.write('<div id="submenu4186504_0">');
document.write('<table id="submenutable4186504" width=137 cellspacing=0>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_0_0" onMouseOver="hilite4186504(\'s4186504_0_0\')" onMouseOut="unhilite4186504(\'s4186504_0_0\')">');
document.write('<a href="http://www.lastpoint.biz/bayan-sac-kesimi.htm" class="subitem4186504" >Saç Kesimi</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_0_1" onMouseOver="hilite4186504(\'s4186504_0_1\')" onMouseOut="unhilite4186504(\'s4186504_0_1\')">');
document.write('<a href="http://www.lastpoint.biz/bayan-sac-bakimi.htm" class="subitem4186504" >Saç Bakýmý</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_0_2" onMouseOver="hilite4186504(\'s4186504_0_2\')" onMouseOut="unhilite4186504(\'s4186504_0_2\')">');
document.write('<a href="http://www.lastpoint.biz/bayan-makyaj.htm" class="subitem4186504" >Makyaj</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_0_3" onMouseOver="hilite4186504(\'s4186504_0_3\')" onMouseOut="unhilite4186504(\'s4186504_0_3\')">');
document.write('<a href="http://www.lastpoint.biz/bayan-manikur-pedikur.htm" class="subitem4186504" >Manikür & Pedikür</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_0_4" onMouseOver="hilite4186504(\'s4186504_0_4\')" onMouseOut="unhilite4186504(\'s4186504_0_4\')">');
document.write('<a href="http://www.lastpoint.biz/bayan-el-ayak-bakimi.htm" class="subitem4186504" >El - Ayak Bakýmý</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_0_5" onMouseOver="hilite4186504(\'s4186504_0_5\')" onMouseOut="unhilite4186504(\'s4186504_0_5\')">');
document.write('<a href="http://www.lastpoint.biz/bayan-gelin-basi.htm" class="subitem4186504" >Gelin Baþý</a>')
;document.write('</td>');
document.write('</tr>');
document.write('</table></div>');
document.write('<div id="submenu4186504_1">');
document.write('<table id="submenutable4186504" width=137 cellspacing=0>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_1_0" onMouseOver="hilite4186504(\'s4186504_1_0\')" onMouseOut="unhilite4186504(\'s4186504_1_0\')">');
document.write('<a href="http://www.lastpoint.biz/erkek-sac-kesimi.htm" class="subitem4186504" >Saç Kesimi</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_1_1" onMouseOver="hilite4186504(\'s4186504_1_1\')" onMouseOut="unhilite4186504(\'s4186504_1_1\')">');
document.write('<a href="http://www.lastpoint.biz/erkek-sakal-kesimi.htm" class="subitem4186504" >Sakal</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_1_2" onMouseOver="hilite4186504(\'s4186504_1_2\')" onMouseOut="unhilite4186504(\'s4186504_1_2\')">');
document.write('<a href="http://www.lastpoint.biz/erkek-sac-bakimi.htm" class="subitem4186504" >Saç Bakýmý</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_1_3" onMouseOver="hilite4186504(\'s4186504_1_3\')" onMouseOut="unhilite4186504(\'s4186504_1_3\')">');
document.write('<a href="http://www.lastpoint.biz/erkek-cilt-bakimi.htm" class="subitem4186504" >Cilt Bakýmý</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_1_4" onMouseOver="hilite4186504(\'s4186504_1_4\')" onMouseOut="unhilite4186504(\'s4186504_1_4\')">');
document.write('<a href="http://www.lastpoint.biz/erkek-manikur-pedikur.htm" class="subitem4186504" >Manikür & Pedikür</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_1_5" onMouseOver="hilite4186504(\'s4186504_1_5\')" onMouseOut="unhilite4186504(\'s4186504_1_5\')">');
document.write('<a href="http://www.lastpoint.biz/erkek-el-eyak-bakimi.htm" class="subitem4186504" >El - Ayak Bakýmý</a>')
;document.write('</td>');
document.write('</tr>');
document.write('</table></div>');
document.write('<div id="submenu4186504_2">');
document.write('<table id="submenutable4186504" width=137 cellspacing=0>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_2_0" onMouseOver="hilite4186504(\'s4186504_2_0\')" onMouseOut="unhilite4186504(\'s4186504_2_0\')">');
document.write('<a href="http://www.lastpoint.biz/zayiflama.htm" class="subitem4186504" >Zayýflama</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_2_1" onMouseOver="hilite4186504(\'s4186504_2_1\')" onMouseOut="unhilite4186504(\'s4186504_2_1\')">');
document.write('<a href="http://www.lastpoint.biz/epilasyon.htm" class="subitem4186504" >Epilasyon</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_2_2" onMouseOver="hilite4186504(\'s4186504_2_2\')" onMouseOut="unhilite4186504(\'s4186504_2_2\')">');
document.write('<a href="http://www.lastpoint.biz/cilt-bakimi.htm" class="subitem4186504" >Cilt Bakýmý</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_2_3" onMouseOver="hilite4186504(\'s4186504_2_3\')" onMouseOut="unhilite4186504(\'s4186504_2_3\')">');
document.write('<a href="http://www.lastpoint.biz/akupunktur.htm" class="subitem4186504" >Akupunktur</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_2_4" onMouseOver="hilite4186504(\'s4186504_2_4\')" onMouseOut="unhilite4186504(\'s4186504_2_4\')">');
document.write('<a href="http://www.lastpoint.biz/vucut-masaji.htm" class="subitem4186504" >Vücut Masajý</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_2_5" onMouseOver="hilite4186504(\'s4186504_2_5\')" onMouseOut="unhilite4186504(\'s4186504_2_5\')">');
document.write('<a href="http://www.lastpoint.biz/vucut-bakimi-agda.htm" class="subitem4186504" >Vücut Bakýmý-Aðda</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_2_6" onMouseOver="hilite4186504(\'s4186504_2_6\')" onMouseOut="unhilite4186504(\'s4186504_2_6\')">');
document.write('<a href="http://www.lastpoint.biz/vkkadin-sac-modelleri.htm" class="subitem4186504" >Kalýcý Makyaj (Kontur)</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_2_7" onMouseOver="hilite4186504(\'s4186504_2_7\')" onMouseOut="unhilite4186504(\'s4186504_2_7\')">');
document.write('<a href="http://www.lastpoint.biz/kalici-ve-gecici-dovme.htm" class="subitem4186504" >Kalýcý & Geçici Dövme</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_2_8" onMouseOver="hilite4186504(\'s4186504_2_8\')" onMouseOut="unhilite4186504(\'s4186504_2_8\')">');
document.write('<a href="http://www.lastpoint.biz/selulit-tedavisi.htm" class="subitem4186504" >Selülit Tedavi</a>')
;document.write('</td>');
document.write('</tr>');
document.write('</table></div>');
document.write('<div id="submenu4186504_3">');
document.write('<table id="submenutable4186504" width=137 cellspacing=0>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_3_0" onMouseOver="hilite4186504(\'s4186504_3_0\')" onMouseOut="unhilite4186504(\'s4186504_3_0\')">');
document.write('<a href="http://www.lastpoint.biz/kadin-sac-modelleri.htm" class="subitem4186504" >Kadýn Model</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_3_1" onMouseOver="hilite4186504(\'s4186504_3_1\')" onMouseOut="unhilite4186504(\'s4186504_3_1\')">');
document.write('<a href="http://www.lastpoint.biz/erkek-sac-modelleri.htm" class="subitem4186504" >Erkek Model</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_3_2" onMouseOver="hilite4186504(\'s4186504_3_2\')" onMouseOut="unhilite4186504(\'s4186504_3_2\')">');
document.write('<a href="http://www.lastpoint.biz/cocuk-sac-modelleri.htm" class="subitem4186504" >Çocuk Model</a>')
;document.write('</td>');
document.write('</tr>');
document.write('</table></div>');
document.write('<div id="submenu4186504_4">');
document.write('<table id="submenutable4186504" width=137 cellspacing=0>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_4_0" onMouseOver="hilite4186504(\'s4186504_4_0\')" onMouseOut="unhilite4186504(\'s4186504_4_0\')">');
document.write('<a  class="subitem4186504" >Bayan Bölümü</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_4_1" onMouseOver="hilite4186504(\'s4186504_4_1\')" onMouseOut="unhilite4186504(\'s4186504_4_1\')">');
document.write('<a  class="subitem4186504" >Erkek Bölümü</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_4_2" onMouseOver="hilite4186504(\'s4186504_4_2\')" onMouseOut="unhilite4186504(\'s4186504_4_2\')">');
document.write('<a class="subitem4186504" >Enstitü Bölümü</a>')
;document.write('</td>');
document.write('</tr>');
document.write('</table></div>');
document.write('<div id="submenu4186504_5">');
document.write('<table id="submenutable4186504" width=137 cellspacing=0>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_5_0" onMouseOver="hilite4186504(\'s4186504_5_0\')" onMouseOut="unhilite4186504(\'s4186504_5_0\')">');
document.write('<a href="http://www.lastpoint.biz/laspoint-oneri-ve-sikayet.htm" class="subitem4186504" >Öneri ve Þikayet</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_5_1" onMouseOver="hilite4186504(\'s4186504_5_1\')" onMouseOut="unhilite4186504(\'s4186504_5_1\')">');
document.write('<a href="http://www.lastpoint.biz/laspoint-rezervasyon.htm" class="subitem4186504" >Rezervasyon</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_5_2" onMouseOver="hilite4186504(\'s4186504_5_2\')" onMouseOut="unhilite4186504(\'s4186504_5_2\')">');
document.write('<a href="http://www.lastpoint.biz/lastpoint-iletisim.htm" class="subitem4186504" >Bize Ulaþýn</a>')
;document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell4186504" height=18 id="s4186504_5_3" onMouseOver="hilite4186504(\'s4186504_5_3\')" onMouseOut="unhilite4186504(\'s4186504_5_3\')">');
document.write('<a href="http://www.lastpoint.biz/laspoint-uzmanlarimiza-danisin.htm" class="subitem4186504" >Uzmanlarýmýza Danýþýn</a>')
;document.write('</td>');
document.write('</tr>');
document.write('</table></div>');
document.write('</span></td></tr></table>');


