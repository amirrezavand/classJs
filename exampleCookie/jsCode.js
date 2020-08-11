var form1=document.getElementById("form1");
var span=document.getElementById("userNameSpan");
var welcomeDiv=document.getElementById("welcomeDiv");

span.innerHTML=getCookie("username");
if(getCookie("username")=="") welcomeDiv.style.display="none";
else form1.style.display="none";
function formGetData(){
	document.cookie = "username="+form1[0].value+"; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
	document.cookie = "password="+form1[1].value+"; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
	location.reload();
	
}
function clearCookie(){
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	location.reload();
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}