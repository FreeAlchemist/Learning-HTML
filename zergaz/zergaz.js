// var zeratul = {"HEALTH":1607,"H_MOD":65,"H_REGEN":3.35,"H_REGEN_MOD":0.13,"MANA":500,"M_REGEN":3,"ATK_SPD":0.8,"DAMAGE":37,"DAMAGE_MOD":13,"MOVE_SPD":4.4}
// var gazlowe = {"HEALTH":1900,"H_MOD":76,"H_REGEN":3.95,"H_REGEN_MOD":0.16,"MANA":500,"M_REGEN":3,"ATK_SPD":0.9,"DAMAGE":47,"DAMAGE_MOD":9,"MOVE_SPD":4.4}
var hero1 = zeratul
var hero2 = gazlowe
console.log(hero1)
console.log(hero2)

function showStats(hero){
	var table = $("<table />",{cellspacing:0, cellpadding:3})
	$("#show").append(table)
	var tr1 = $("<tr />")
	var tr2 = $("<tr />")
	table.append(tr1).append(tr2)
	for (stat in hero){
		var td1 = $("<td />",{
				text :stat
			})
		tr1.append(td1)
		var td2 = $("<td />",{
				text : hero[stat]
			})
		tr2.append(td2)
	}
}

$("#show").append("<hr>"+hero1.NAME+" VS "+hero2.NAME+"<hr>")
showStats(hero1)
$("#show").append("<hr>")
showStats(hero2)

function getWin (Z,G,Zlevel,Glevel){
	var Zhp = Z.HEALTH
	var Ghp = G.HEALTH
	var result
	var time = 0
	var z120 =0
	var turret = []
	var charge = 2
	while(Zhp > 0 && Ghp > 0){
		if(time != 0){
			Zhp -= beat(G,Glevel)
		}
		Ghp -= beat(Z,Zlevel)
		Ghp += regen(G,Glevel)
		Zhp += regen(Z,Zlevel)

		if(Z == zeratul){}
		if(G == gazlowe){}

		// zer 92 (+17 за лвл) DMG. Перезарядка: 6
		if(time%6 == 0){

			Ghp -= 92 + 17 * Zlevel
		}

		// zer 120 (+20 * level)спустя 1 секунду после применения перезагрузка 12
		if(z120 == 1){
			Ghp -= 120 + 20 * Zlevel
			z120 = 0
		}
		if(time%12 == 0){
			z120 = 1
		}

		// gaz турель существует 30 сек каждую секунду 36 урона (+6*уровень)
		// 2 заряда ставим подряд перезарядка 15
		if(time%15 == 0){
			if(charge < 2){
				charge++
			}
			// Ghp -= 92 + 17 * Zlevel
		}

		if(charge > 0){
			turret.push({turtime:0})
			charge--
		}

		if(turret.length > 0){
			Zhp -= (36 + 6 * Glevel) * turret.length
		}

		for (var i = turret.length - 1; i >= 0; i--) {
			turret[i].turtime++
			if(turret[i].turtime >= 30){
				turret.splice(i,1)
			}
		}

		//gaz 85 (+20*уровень) оглушения 2 сек = цель не атакует перезарядка 12 сек



		time++		
	}

	if(Zhp > Ghp){
		result = "Z"
	}
	else if(Zhp < 0 && Ghp < 0){
		result = "D"
	}
	else{
		result = "G"
	}
	return result
}

function beat (att,attlevel){
return (att.DAMAGE + att.DAMAGE_MOD * attlevel) * att.ATK_SPD
}

function regen (def,deflevel){
return def.H_REGEN + def.H_REGEN_MOD * deflevel
}


var tr0 = $("<tr />")
var td0 = $("<td />",{
		text :""
	})
tr0.append(td0)
$("#results").append(tr0)

for(var hero1level=1;hero1level<=20;hero1level++){
	
var td0 = $("<td />",{
		text :hero1level
	})
tr0.append(td0)
	var tr = $("<tr />")
	var td1 = $("<td />",{
			text : hero1level
		})
	$("#results").append(tr)
	tr.append(td1)

	for(var hero2level=1;hero2level<=20;hero2level++){
			result = getWin (hero1,hero2,hero1level,hero2level)
			var td2 = $("<td />",{
						text : result,"class" : "td"+result
					})
				tr.append(td2)
	}
}
