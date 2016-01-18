// var  $otvet = $("#otvet");
// console.log($otvet);

function http_zapros(method, url){

	$.get(url,function(data){
		
		console.log($otvet[0]);
		$otvet.html(data);
	});
}


function http_zapros_self(sel,flag){
	if (flag) return function(){
		var $otvet = $(sel);
		return function(method, url){
			$.get(url,function(data){
				$otvet.html(data);
			});
		}
	}()
	else return function(){
		var $otvet = $(sel);
		return function(method, url){
			$.get(url,function(data){
				$otvet.attr("value",data);
			});
		}
	}()
}
http_zapros = http_zapros_self("#show");
console.log(http_zapros+"")

http_zapros1 = http_zapros_self("#otvet",1);
console.log(http_zapros1+"")
