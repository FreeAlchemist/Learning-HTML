// HEALTH, H_MOD, H_REGEN, H_REGEN_MOD, MANA, M_REGEN, ATK_SPD, DAMAGE, DAMAGE_MOD, MOVE_SPD
var zer = {"NAME":"Zeratul", "HEALTH":1607,"H_MOD":65,"H_REGEN":3.35,"H_REGEN_MOD":0.13,"MANA":500,"M_REGEN":3,"ATK_SPD":0.8,"DAMAGE":37,"DAMAGE_MOD":13,"MOVE_SPD":4.4}
var gaz = {"NAME":"Gazlowe", "HEALTH":1900,"H_MOD":76,"H_REGEN":3.95,"H_REGEN_MOD":0.16,"MANA":500,"M_REGEN":3,"ATK_SPD":0.9,"DAMAGE":47,"DAMAGE_MOD":9,"MOVE_SPD":4.4}

// function Hero(NAME, HEALTH, H_MOD, H_REGEN, H_REGEN_MOD, MANA, M_REGEN, ATK_SPD, DAMAGE, DAMAGE_MOD, MOVE_SPD){
// 		this.NAME = NAME
// 		this.HEALTH = HEALTH
// 		this.H_MOD = H_MOD
// 		this.H_REGEN = H_REGEN
// 		this.H_REGEN_MOD = H_REGEN_MOD
// 		this.MANA = MANA
// 		this.M_REGEN = M_REGEN
// 		this.ATK_SPD = ATK_SPD
// 		this.DAMAGE = DAMAGE
// 		this.DAMAGE_MOD = DAMAGE_MOD
// 		this.MOVE_SPD = MOVE_SPD || 4.4
// 	}

function Hero(obj){
	console.log(obj)
	this.NAME = obj.NAME
	this.HEALTH = obj.HEALTH
	this.H_MOD = obj.H_MOD
	this.H_REGEN = obj.H_REGEN
	this.H_REGEN_MOD = obj.H_REGEN_MOD
	this.MANA = obj.MANA
	this.M_REGEN = obj.M_REGEN
	this.ATK_SPD = obj.ATK_SPD
	this.DAMAGE = obj.DAMAGE
	this.DAMAGE_MOD = obj.DAMAGE_MOD
	this.MOVE_SPD = obj.MOVE_SPD || 4.4
}

Hero.prototype.beat = function(level){
		return (this.DAMAGE + this.DAMAGE_MOD * level) * this.ATK_SPD
	}

Hero.prototype.regen = function(level){
		return this.H_REGEN + this.H_REGEN_MOD * level
	}

function Zeratul(){
	Hero.call(this, arguments)
}

Zeratul.prototype = new Hero
Zeratul.prototype.constructor = Zeratul


// var gaz = {name:1}

zeratul = new Zeratul(zer)
// zeratul = new Zeratul("Zeratul", 1607, 65, 3.35, 0.13, 500, 3, 0.8, 37, 13)
// zeratul = new Hero("Zeratul", 1607, 65, 3.35, 0.13, 500, 3, 0.8, 37, 13)

gazlowe = new Hero("Gazlowe", 1900, 76, 3.95, 0.16, 500, 3, 0.9, 47, 9)
gazlowe = new Hero(gaz)

console.log(zeratul.NAME+" beat: "+zeratul.beat(1))
console.log(zeratul.NAME+" regen: "+zeratul.regen(1))
console.log(gazlowe.NAME+" beat: "+gazlowe.beat(1))
console.log(gazlowe.NAME+" regen: "+gazlowe.regen(1))
