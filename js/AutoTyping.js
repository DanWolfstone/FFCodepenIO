var agnt=navigator.userAgent.toLowerCase()
var opera=(agnt.indexOf("opera") != -1)
var webTV=(agnt.indexOf("webtv") != -1)
var hotjava=(agnt.indexOf("hotjava") != -1)
var layersok=(document.layers&&!hotjava)
var doc_all=(document.all&&!webTV)
var itsa5=(document.getElementById&&parseInt(navigator.appVersion)>=5) ? true : false;
var Lvl=(opera?0:(doc_all?2:(itsa5?3:(layersok?1:0))));

function araVob() { }
var DisplayLine = new araVob();
DisplayLine[1] = "Welcome to the Clockwork Revolution"; 
//
DisplayLine[2] = "";
//
DisplayLine[3] = "";
//
DisplayLine[4] = "";
//
DisplayLine[5] = "";
// /Project_Darkwolf/
DisplayLine[6] = "";
//
DisplayLine[7] = "";
/*
 To change or add messages, just replace values of or add to DisplayLine[n] above.
 Set msgCnt to number of DisplayLines.
*/

var msgCnt = 7;			// number of DisplayLines
var typeSpeed = 45;		// the typing rate, higher is slower
var classfntsize="24"		// font-size for scripted text	
var classfntfam="arial,helvetica,sans-serif"	//font-family
var classfntwgt=600		// font-weight

var sTag="<DIV id='TypeItId'>"
var eTag="<\/DIV>"
var Lth=600
var delay=typeSpeed;
var msg = DisplayLine[1];
var msgNum = 1;
var outMsg = "";
var DispMsg
var i = 0;

function DisplayMsg() {
 if ((msg.length) <= i) {
  i=0;
  ChangeMsg();
  outMsg = "";
 }
 outMsg += msg.charAt(i);
 DispMsg="<p class='TypeIt'><nobr>"+outMsg+"<\/nobr><\/p>"
 if (Lvl>2){
  layur.style.fontFamily=classfntfam
  layur.style.fontSize=classfntsize
  layur.style.fontWeight=classfntwgt
  layur.firstChild.insertData(i,msg.charAt(i))
 }
 else if (Lvl==2) {
  layur.innerHTML=DispMsg
 }
 else if (Lvl==0){
  self.document.forms[0].elements[0].value=outMsg;
 }
 else if (self.innerWidth != strtWidth) {
  self.location.reload()
 }
 else {
  layur.document.write(DispMsg)
  layur.document.close()
 }
 i++;
 if (i == msg.length) {
  delay = 1500; }
 else {
  delay = typeSpeed;
 } 
 setTimeout("DisplayMsg()",delay);
}

function ChangeMsg() {
 if (Lvl>2) layur.firstChild.replaceData(0,msg.length," ")  
 msgNum++;
 if (msgCnt < msgNum) {
  msgNum = 1;
 }
 msg = DisplayLine[msgNum];
}

function NNlode(){
 if (self.innerWidth!= strtWidth) {
  window.location.reload()
 }
}

for (var x=1; x<=msgCnt; x++){
 if (DisplayLine[x].length>Lth) Lth=DisplayLine[x].length
}
if (Lvl>0) {
 if (screen.width < 700) {classfntsize="8";}
 if (screen.width > 800) {classfntsize="14";}
 if (classfntsize>10) classfntwgt=500
 var Wdth=classfntsize*Lth
 classfntsize+="pt"
 document.writeln("<STYLE ID='id4css' TYPE='text\/css'><\/style>")
 if (Lvl==1) {
  sTag="<ilayer id='TypeItId'><layer id='TypeIt' left=0 top=0 width="+Wdth+">"
  eTag="<\/layer><\/ilayer>"
  document.classes.TypeIt.all.fontFamily=classfntfam;
  document.classes.TypeIt.all.fontSize=classfntsize;
  document.classes.TypeIt.all.fontWeight=classfntwgt;
 }
 else if (Lvl==2) {
  document.styleSheets['id4css'].addRule ('body', 'overflow:scroll;')
  document.styleSheets['id4css'].addRule ('#TypeItId', 'position:absolute;')
  document.styleSheets['id4css'].addRule ('.TypeIt', 'font-family:'+classfntfam)
  document.styleSheets['id4css'].addRule ('.TypeIt', 'font-size:'+classfntsize)
  document.styleSheets['id4css'].addRule ('.TypeIt', 'font-weight:'+classfntwgt)
 }
 document.writeln(sTag+eTag)
 document.write("<span class='TypeIt' id='TypeIt'>&nbsp;<br><\/span>")
 layur =(Lvl==2?document.all.TypeItId:(Lvl==3?document.getElementById('TypeIt'):(Lvl==1?document.TypeItId.document.TypeIt:'')));
}
else{
 document.write(" <p><form name= 'msgform' action=' '>"
 +"<input class='form' type='text' name='message'"
 +" size=70 value=' Powered by JavaScript (or JScript).'"
 +" usestyle bgcolor='#fffff0' readonly><\/form><\/p><\/center>")
}

function typeit(){
 if (Lvl==1){
  strtWidth = self.innerWidth;
  self.onresize=NNlode
 }  
 i=0
 DisplayMsg()
}
// -->
