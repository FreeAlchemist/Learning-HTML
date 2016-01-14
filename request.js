var xmlHttp = createXmlHttpRequestObject();
function createXmlHttpRequestObject(){
	var xmlHttp;
	try{
		xmlHttp=new XMLHttpRequest();
	}
	catch(e){
		try{
			xmlHttp=new ActiveObject("Msxml12.XMLHTTP");
		}
		catch(e){
			try{
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				alert("Your browser can't use AJAX!");
				return false;
			}
		}
	}
	return xmlHttp;
}

function http_zapros(){
	if(xmlHttp){
		try{
			xmlHttp.open("GET","request.txt",true);
			xmlHttp.onreadystatechange = obrabotka;
			xmlHttp.send(null);
		}
		catch(e){
			alert("Server connection failed");
		}
	}
}

function obrabotka(){
	if(xmlHttp.readyState == 4){
		if(xmlHttp.status == 200){
			try{
				response = xmlHttp.responseText;
				myDiv = document.getElementById("otvet");
				myDiv.innerHTML += response;
			}
			catch(e){
				alert("Request reading error");
			}
		}
		else{
			alert("Server request error:\n"+xmlHttp.statusText);
		}
	}
}
