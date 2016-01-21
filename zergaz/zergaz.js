/*
Zeratul Vs Gazlou
+x
Прибавка за уровень включая 1й
Максимальный уровень 30
1)	Свести вместе пока кто-то не победит
Каждый уровень с каждым
900 случаев

2) с 10 уровня
 zer реген 50% от урона с каждой атаки
gaz увел урон на 150%
какой реген должен быть у zer для 50% побед

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
$("#show").append("Zeratul VS Gazlowe<br>")

var zeratul = {"HEALTH":"1607","H_REGEN":"3.35","MANA":"500","M_REGEN":"3","MOVE_SPD":"4.4","ATK_SPD":"0.9","DAMAGE":"47"}
var gazlowe = {"HEALTH":"1607","H_REGEN":"3.35","MANA":"500","M_REGEN":"3","MOVE_SPD":"4.4","ATK_SPD":"0.9","DAMAGE":"47"}


function getValue(obj,attr){
	console.log(obj)
	value = obj[attr];
return value
}

var zerHP = getValue(zeratul,'HEALTH')
var zerDMG = getValue(zeratul,'DAMAGE')
var zerATKSPD = getValue(zeratul,'ATK_SPD')

var gazHP = getValue(gazlowe,'HEALTH')
var gazDMG = getValue(gazlowe,'DAMAGE')
var gazATKSPD = getValue(gazlowe,'ATK_SPD')

console.log(zerHP)
console.log(gazHP)
console.log(zerDMG)
console.log(gazDMG)
console.log(zerATKSPD)
console.log(gazATKSPD)
// $("#show").append(r)
$("#show").append("Zeratul")
