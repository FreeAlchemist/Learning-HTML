// HEALTH, hpMod, H_REGEN, hpRegenMod, MANA, M_REGEN, ATK_SPD, DAMAGE, DAMAGE_MOD, MOVE_SPD
var zer = {"NAME":"Zeratul", "startHP":1607,"hpMod":65,"H_REGEN":3.35,"hpRegenMod":0.13,"MANA":500,"M_REGEN":3,"ATK_SPD":0.8,"DAMAGE":37,"DAMAGE_MOD":13,"MOVE_SPD":4.4, "level":5}
var gaz = {"NAME":"Gazlowe", "startHP":1900,"hpMod":76,"H_REGEN":3.95,"hpRegenMod":0.16,"MANA":500,"M_REGEN":3,"ATK_SPD":0.9,"DAMAGE":47,"DAMAGE_MOD":9,"MOVE_SPD":4.4, "level":5}


function Hero(obj){
	console.log(obj)
	this.def = obj
	this.level = obj.level
	console.log(this)
	this.abilities = {}
	this.addAutoAtk()
	this.maxHP = this.getMaxHP()

	this.NAME = obj.NAME
	this.startHP = obj.startHP
	this.hpMod = obj.hpMod
	this.H_REGEN = obj.H_REGEN
	this.hpRegenMod = obj.hpRegenMod
	this.MANA = obj.MANA
	this.M_REGEN = obj.M_REGEN
	this.ATK_SPD = obj.ATK_SPD
	this.DAMAGE = obj.DAMAGE
	this.DAMAGE_MOD = obj.DAMAGE_MOD
	this.MOVE_SPD = obj.MOVE_SPD || 4.4
}

Hero.prototype.beat = function(){
		return (this.DAMAGE + this.DAMAGE_MOD * this.level) * this.ATK_SPD
	}

Hero.prototype.regen = function(){
		return this.H_REGEN + this.hpRegenMod * this.level
	}

Hero.prototype.getMaxHP = function(){
	return this.def.startHP + this.def.hpMod * this.level
}

Hero.prototype.addAutoAtk = function(){
	this.abilities.autoattack = {
		func : this.beat(),
		cooldown : this.getCooldown()
	}
}

Hero.prototype.getCooldown = function(){
	return 1/this.ATK_SPD
}


function Zeratul(obj){
	// Hero.call(this, obj)
	Hero.apply(this, arguments)
}

Zeratul.prototype = Object.create(Hero.prototype)
Zeratul.prototype.constructor = Zeratul






// var gaz = {name:1}

zeratul = new Zeratul(zer)

// zeratul = new Zeratul("Zeratul", 1607, 65, 3.35, 0.13, 500, 3, 0.8, 37, 13)
// zeratul = new Hero("Zeratul", 1607, 65, 3.35, 0.13, 500, 3, 0.8, 37, 13)

// gazlowe = new Hero("Gazlowe", 1900, 76, 3.95, 0.16, 500, 3, 0.9, 47, 9)
gazlowe = new Hero(gaz)

console.log(zeratul.NAME+" beat: "+zeratul.beat(1))
console.log(zeratul.NAME+" regen: "+zeratul.regen(1))
console.log(gazlowe.NAME+" beat: "+gazlowe.beat(1))
console.log(gazlowe.NAME+" regen: "+gazlowe.regen(1))
