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
if(hidetimer4186504) clearTimeout(hidetimer4186504);hidetimer4186504 = setTimeout("hideall4186504();",1000);
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
if(hidetimer4186504) clearTimeout(hidetimer4186504);hidetimer4186504 = setTimeout("hideall4186504();",1000);
}
function hideall4186504()
{
}
function openmenu4186504(menuname)
{
showmenu4186504(menuname);
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
document.write('<a href="http://www.lastpoint.biz/bayan-sac-kesimi.htm" class="topitem4186504" onMouseOver="hideall4186504()">Kadýn Güzellik</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a href="http://www.lastpoint.biz/erkek-sac-kesimi.htm" class="topitem4186504" onMouseOver="hideall4186504()">Erkek Güzellik</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a href="http://www.lastpoint.biz/zayiflama.htm" class="topitem4186504" onMouseOver="hideall4186504()">Enstitü</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a href="http://www.lastpoint.biz/kadin-sac-modelleri.htm" class="topitem4186504" onMouseOver="hideall4186504()">Saç Modelleri</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a class="topitem4186504" onMouseOver="hideall4186504()">Galeri</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a  class="topitem4186504" onMouseOver="hideall4186504()">Hakkýmýzda</a>');
document.write('</td>');
document.write('<td align=center background="s5.gif">&nbsp;</td>');
document.write('<td class="topcell4186504" align=CENTER width=94 background="b5.gif">')
document.write('<a href="http://www.lastpoint.biz/laspoint-oneri-ve-sikayet.htm" class="topitem4186504" onMouseOver="hideall4186504()">Ýletiþim</a>');
document.write('</td>');
document.write('<td align=center background="r5.gif">&nbsp;</td>');
document.write('</tr>');
document.write('</table><p>');
document.write('</span></td></tr></table>');


