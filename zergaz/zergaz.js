/*
Zeratul Vs Gazlou
+x
Прибавка за уровень включая 1й
Максимальный уровень 30
1)	Свести вместе пока кто-то не победит
Каждый уровень с каждым
900 случаев



2)
zer
невидимость:
в первую секунду боя gaz не атакует и не исп способности

3)
zer
92 (+17 за лвл) DMG.
Перезарядка: 6

4)
zer
120 (+20 * level)
спустя 1 секунду после применения
перезагрузка 12

5)
gaz
турель
существует 30 сек
каждую секунду 36 урона (+6*уровень)
2 заряда ставим подряд
перезарядка 15
на поле

6)
gaz
85 (+20*уровень)
оглушения 2 сек = цель не атакует
перезарядка 12 сек

7)



Gaz 

1900 +76 HEALTH

3.95 +0.16 REGEN

500 +10 MANA

3 +0.098 REGEN

4.4 6.16 MOVE SPD

0.8 +0 ATK SPD
Кол атак в сек

37 +9 DAMAGE
Кол поврежд за  атаку


Zer

1607 +65 HEALTH

3.35 +0.13 REGEN

500 +10 MANA

3 +0.098 REGEN

4.4 6.16 MOVE SPD

0.9 +0 ATK SPD

47 +13 DAMAGE

*/
$("#show").append("<hr>Zeratul VS Gazlowe<hr>")

var zeratul = {"HEALTH":1607,"H_MOD":65,"H_REGEN":3.35,"H_REGEN_MOD":0.13,"MANA":500,"M_REGEN":3,"MOVE_SPD":4.4,"ATK_SPD":0.8,"DAMAGE":37,"DAMAGE_MOD":13}
var gazlowe = {"HEALTH":1900,"H_MOD":76,"H_REGEN":3.95,"H_REGEN_MOD":0.16,"MANA":500,"M_REGEN":3,"MOVE_SPD":4.4,"ATK_SPD":0.9,"DAMAGE":47,"DAMAGE_MOD":9}

console.log(zeratul)
console.log(gazlowe)

function getValue(obj,attr){
	value = obj[attr];
return value
}

var zerHP = getValue(zeratul,'HEALTH')
var zerHReg = getValue(zeratul,'H_REGEN')
var zerDMG = getValue(zeratul,'DAMAGE')
var zerATKSPD = getValue(zeratul,'ATK_SPD')
var zerH_MOD = getValue(zeratul,'H_MOD')
var zerH_REGEN_MOD = getValue(zeratul,'H_REGEN_MOD')
var zerH_DAMAGE_MOD = getValue(zeratul,'DAMAGE_MOD')

var gazHP = getValue(gazlowe,'HEALTH')
var gazHReg = getValue(gazlowe,'H_REGEN')
var gazDMG = getValue(gazlowe,'DAMAGE')
var gazATKSPD = getValue(gazlowe,'ATK_SPD')
var gazH_MOD = getValue(gazlowe,'H_MOD')
var gazH_REGEN_MOD = getValue(gazlowe,'H_REGEN_MOD')
var gazH_DAMAGE_MOD = getValue(gazlowe,'DAMAGE_MOD')




$("#show").append("Zeratul<br>")
$("#show").append("HEALTH: "+zerHP+"<br>")
$("#show").append("H_REGEN: "+zerHReg+"<br>")
$("#show").append("DAMAGE: "+zerDMG+"<br>")
$("#show").append("ATK_SPD: "+zerATKSPD+"<br>")
$("#show").append("<hr>")
$("#show").append("Gazlowe<br>")
$("#show").append("HEALTH: "+gazHP+"<br>")
$("#show").append("H_REGEN: "+gazHReg+"<br>")
$("#show").append("DAMAGE: "+gazDMG+"<br>")
$("#show").append("ATK_SPD: "+gazATKSPD+"<br>")
$("#show").append("<hr>")

// var zerlevel = 1
// var gazlevel = 1

// for (var HP = вычисленное значение задовроья; HP > 0 ; HP += вычисленное значение регена - вычисленное значение атаки ) {
//                 count++
// }

/*
function вычисление победтеля(показатели первого, показатели второго) {
                вычисляем здоповье первого при старте в зависимости от уровня
                вычисляем здоровье второго при старте в зависимости от уровня
                while ( здоровье обоих больше нуля  ) {
                               здоровье второго -= хреначит (первый , второго)
                               здоровье первого -= хренaчит (первого, второй )
                }
                if (здоровье больше нуля у первого) {
                               победил первый
                } 
                else {
                               победил второй
                }
}

function хреначит (первый, второй) {
                урон = (атака + рост * уровень) * скорость - регенирация * уровень
                return урон
}

*/

// function getWin (Z,G){
// 	while(){

// 	}

// 	if(){

// 	}
// }

// function beat (att,def){

// }

// function getCount(HERO,HP,DMG){

// 	if(HERO==){}

// 	var count=0
// 	for(HP;HP>0;HP+=DMG){
// 	 count++
// 	}
// 	return count
// }

var tr0 = $("<tr />")
var td0 = $("<td />",{
		text :""
	})
tr0.append(td0)
$("#results").append(tr0)

for(var zerlevel=1;zerlevel<=20;zerlevel++){
	var zerHP = getValue(zeratul,'HEALTH')
	zerHP+=zerH_MOD
	zerHReg+=zerH_REGEN_MOD
	zerDMG+=zerH_DAMAGE_MOD

	/*
	zer
	92 (+17 за лвл) DMG.
	Перезарядка: 6
	*/



	
var td0 = $("<td />",{
		text :zerlevel
	})
tr0.append(td0)


	var tr = $("<tr />")
	var td1 = $("<td />",{
			text : zerlevel
		})
	$("#results").append(tr)
	tr.append(td1)

	for(var gazlevel=1;gazlevel<=20;gazlevel++){
			var gazHP = getValue(gazlowe,'HEALTH')
			gazHP+=gazH_MOD*gazlevel
			var gazHReg = getValue(gazlowe,'H_REGEN')
			gazHReg+=gazH_REGEN_MOD*gazlevel
			var gazDMG = getValue(gazlowe,'DAMAGE')
			gazDMG+=gazH_DAMAGE_MOD*gazlevel

			var zerhitscount = getCount(gazHP,gazHReg-(zerDMG*zerATKSPD))
			var gazhitscount = getCount(zerHP,zerHReg-(gazDMG*gazATKSPD))

			var result

			if(zerhitscount < gazhitscount){
				result = "Z"
			}
			else if(zerhitscount > gazhitscount){
				result = "G"
			}
			else if(zerhitscount == gazhitscount){
				result = "D"
			}
			else{
				result = "!"
			}

			var td2 = $("<td />",{
						text : result,"class" : "td"+result
					})
				tr.append(td2)
	}
}
