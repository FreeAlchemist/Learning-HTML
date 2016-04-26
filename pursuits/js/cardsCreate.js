var arr = [];

for (var p in pursuit) {
	arr.push(p);
}

console.log(arr)
console.log(arr.length)
// console.log(arr[0])

var quantity = arr.length;

for (var i = 0; i < quantity; i++) {
	console.log('PURSUIT #'+i+': ')
	console.log(pursuit[arr[i]])
	// console.log(pursuit[i].text)
	// console.log(pursuit[i].gear)
	// console.log(pursuit[i].talent['name'])
	// console.log(pursuit[i].talent['text'])

	var cardid = arr[i];
	var cardfrontid = cardid+'-front';
	var cardbackid = cardid+'-back';
	console.log(cardid)
	$('#page').append($('<div />',{class:'card card-front',id:cardfrontid}))
	$('#'+cardfrontid).append($('<div />',{class:'front1',id:cardfrontid+'-bg1'}))
	$('#'+cardfrontid).append($('<div />',{class:'front2',id:cardfrontid+'-bg2'}))


	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'title pursuit-title',text:pursuit[cardid].name}))
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'text pursuit-text',text:pursuit[cardid].text}))

	var gearid = cardfrontid+'-bg1'+'-gear'
	$('#'+cardfrontid+'-bg1').append($('<table />',{class:'text gear step',id:gearid,cellspacing:'0',cellpadding:'2'}))
	var gearrowid = gearid+'-row'
	$('#'+gearid).append($('<tr />',{id:gearrowid}))
	$('#'+gearrowid).append($('<td />',{text:'GEAR: '}))
	$('#'+gearrowid).append($('<td />',{text:pursuit[cardid].gear}))

	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'title',text:pursuit[cardid].talent['name']}))
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'text talent-text',text:pursuit[cardid].talent['text']}))

	var stepid = cardfrontid+'-bg2'+'-step'
	$('#'+cardfrontid+'-bg2').append($('<table />',{class:'text step',id:stepid,cellspacing:'0',cellpadding:'0'}))
	$('#'+stepid).append($('<tr />',{id:stepid+'-row-0'}))
	$('#'+stepid+'-row-0').append($('<td />',{class:'step-title',text:'Step'}))
	$('#'+stepid+'-row-0').append($('<td />',{class:'step-title',text:'Talent'}))
		
	for (var s = 1; s <= 10; s++) {
		// console.log('STEP #'+s+': ')
		// console.log(pursuit[arr[i]].step[s])
		var steprowid = stepid+'-row-'+s
		$('#'+stepid).append($('<tr />',{id:steprowid}))
		$('#'+steprowid).append($('<td />',{class:'td-num',text:s}))
		$('#'+steprowid).append($('<td />',{text:pursuit[cardid].step[s]}))
	};
};

$('#page').append($('<div />',{class:'row'}))

for (var i = quantity-1; i >= 0; i--) {
	var cardid = arr[i];
	var cardbackid = cardid+'-back';
	$('#page').append($('<div />',{class:'card card-back',id:cardbackid}))
	$('#'+cardbackid).append($('<div />',{class:'back '+cardid,id:cardbackid+'-bg'}))
	$('#'+cardbackid+'-bg').append($('<div />',{class:'title-back',text:pursuit[cardid].name}))
}
