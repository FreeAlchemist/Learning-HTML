var fieldText = ""
+ "BBBBBBBBBBBBBBB\n" 
+ "B             B\n" 
+ "B             B\n" 
+ "B   T         B\n" 
+ "B             B\n" 
+ "B BBBBBB      B\n" 
+ "B     B       B\n" 
+ "B B    BE     B\n" 
+ "B       B     B\n" 
+ "B B   B  B    B\n" 
+ "B     B       B\n" 
+ "B     B       B\n" 
+ "B     B       B\n" 
+ "B             B\n" 
+ "BBBBBBBBBBBBBBB" ;

function createmaze(fieldText, way){
	var feildArr =  fieldText.split('\n');
	var fieldH = feildArr.length * way;  
	var fieldW = feildArr[0].length * way;  
	for (var i in feildArr) {
			console.log(feildArr[i].length);
	}
	//Вешаем обработчик на нажатие клавиши
	window.addEventListener("keydown",movecube);
		//Размечаем поле
	field.style.background=fieldcolor;
	field.style.height=fieldH+edizm;
	field.style.width=fieldW+edizm;
	field.style.top=fieldtop+edizm;
	field.style.left=fieldleft+edizm;

	mazefield.style.height=fieldH+edizm;
	mazefield.style.width=fieldW+edizm;
	mazefield.style.top=fieldtop+edizm;
	mazefield.style.left=fieldleft+edizm;
	
	function wallstyle(){
		//newDiv.style.background=wallcolor;
		newDiv.className='MazeCube';
		newDiv.style.height=way+edizm;
		newDiv.style.width=way+edizm;
	}

	for (var x in feildArr) {
		var line = feildArr[x];
		for (var y in line) {
			if (line[y]==='B') {
				newDiv=document.createElement('div');
				wallstyle();
				newDiv.style.top=x*way+edizm;
				newDiv.style.left=y*way+edizm;
				mazefield.appendChild(newDiv);
			}
			else if (line[y]==='E') {
				//Размещаем выход в поле
				newDiv=document.createElement('div');
				newDiv.className='EscapeCube';
				newDiv.id='EscapeCube';
				//newDiv.style.background=cubecolor;
				newDiv.style.height=way+edizm;
				newDiv.style.width=way+edizm;
				newDiv.style.top="450px";
				newDiv.style.left="500px";
				field.appendChild(newDiv);
			}
			else if (line[y]==='T') {
				//Размещаем куб ТАНК в поле
				newDiv=document.createElement('div');
				newDiv.className='MoveCube';
				newDiv.id='MoveCube';
				//newDiv.style.background=cubecolor;
				newDiv.style.height=way+edizm;
				newDiv.style.width=way+edizm;
				newDiv.style.top="150px";
				newDiv.style.left="150px";
				field.appendChild(newDiv);
			}
		}
	}
	canmove();
}
