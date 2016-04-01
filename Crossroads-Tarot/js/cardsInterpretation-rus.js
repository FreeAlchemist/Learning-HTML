var interpretation = {
	hearts : {
		'1' : {
			name : '♥ 1',
			station : {
				skill:'Дробовик (Shotgun)',
				fate:'и ты услышишь шепоты вдали.',
				birth:'Осужденный (Convict)',
				text:'Покуда многие отбыв свой срок находят более традиционную работу, некоторые осужденные приговорены к трудовым лагерям. В подобном случае их дети часто отправляются вместе с ними в их новую жизнь.'},
			west : {
				fate:'В конце концов ты уступишь себя кострам',
				text:'-3/0/0/+3'},
			north : {
				fate:'но люди в окнах встретят тебя с ужасом.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'ты обратишь бараньи рога в пыль',
				text:'-3/0/0/+3'},
			south : {
				fate:'Когда учет минует тебя',
				text:'3,2,1,1,1,1'},
		},
		'2' : {
			name : '♥ 2',
			station : {
				skill:'Пневматика (Pneumatic)',
				fate:'и ты забудешь себя.',
				birth:'Подневольный служитель (Indentured Servant)',
				text:'Несчастен родитель, которому приходится выбирать между долговой тюрьмой и подневольным служением. Однако отработка большого долга держит его ближе к семье и подальше от оков.'},
			west : {
				fate:'Again, you turn the wheel and move the stone',
				text:'-3/0/+1/+2'},
			north : {
				fate:'for the gloom will deny that it knows you.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'you will be bold when it is needed most',
				text:'-3/0/+1/+2'},
			south : {
				fate:'If you ignore the rope in the trees',
				text:'3,2,1,1,1,1'},
		},
		'3' : {
			name : '♥ 3',
			station : {
				skill:'Труд (Labor)',
				fate:'и ты поцелуешь корону.',
				birth:'Разнорабочий (Laborer)',
				text:'Обычно рабочие трудятся много часов и зачастую непосредственно в сопровождении семьи. Это тяжелая жизнь наполненная рутиной и ноющими мышцами. И многие семьи находят достоинство в труде... но не все.'},
			west : {
				fate:'Hence, the dried lands are watered with the blood of sinners',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'but fear the shadow cast by no man.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'your journey will never begin',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'When the seventh gifts despair',
				text:'3,2,1,1,1,1'},
		},
		'4' : {
			name : '♥ 4',
			station : {
				skill:'Скрытность (Stealth)',
				fate:'и ты тщетно расколешь небо.',
				birth:'Слуга (Servant)',
				text:'Ваша семья служила более зажиточной семье в качестве горничных и полевых рабочих. Ваше детство прошло в работе, играх с детьми других слуг и вероятно притеснениями со стороны детей господина ваших родителей.'},
			west : {
				fate:'Then, the ravens bless your children',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'and the sullen stars align for you.',
				text:'3,2,2,1,1'},
			east : {
				fate:'you will wait when you should act',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'After the quiet of a thousand nights falls upon your ears',
				text:'3,2,2,1,1'},
		},
		'5' : {
			name : '♥ 5',
			station : {
				skill:'Торговля (Barter)',
				fate:'и ты оставишь ветвь чтобы удержать песок.',
				birth:'Владелец магазина (Shopkeep)',
				text:'Владение магазином (любого типа) обеспечивало вашу семью. Ваших родителей похоже уважали в местном сообществе и вы благоустроены.'},
			west : {
				fate:'At last, you will sacrifice her on the altars of desperation',
				text:'-2/0/0/+2'},
			north : {
				fate:'but welcome the song of frozen winter.',
				text:'3,2,2,1,1'},
			east : {
				fate:'an idea will betray you',
				text:'-2/0/0/+2'},
			south : {
				fate:'As upon your back you carry the brightest star into the shadows',
				text:'3,2,2,1,1'},
		},
		'6' : {
			name : '♥ 6',
			station : {
				skill:'Ремесло: Кузнечное дело (Crafting: Blacksmithing)',
				fate:'и она отвернется от тебя навеки.',
				birth:'Кузнец (Blacksmith)',
				text:'Работа с железом прибыльная но изнуряюща. Ваше детство прошло в помощи родителю на кузнице, либо в большоа городе, поселке, либо даже на большом ранчо.'},
			west : {
				fate:'You will hold the myth of life in your hands',
				text:'-2/0/0/+2'},
			north : {
				fate:'as the gathering mocks your gift.',
				text:'3,2,2,1,1'},
			east : {
				fate:'you will be the uninvited',
				text:'-2/0/0/+2'},
			south : {
				fate:'Once you rise from the ashes',
				text:'3,2,2,1,1'},
		},
		'7' : {
			name : '♥ 7',
			station : {
				skill:'Учение: Грамота(Academic: Literacy)',
				fate:'и арки рухнут.',
				birth:'Журналист (Reporter)',
				text:'Один (или оба) из ваших родителей  был журналистом изучающим влиятельных лиц либо странные события. Время от времени это причиняло им (и вашей семье) ущерб.'},
			west : {
				fate:'He tightens the strings and tugs at the rivets',
				text:'-2/0/+1/+1'},
			north : {
				fate:'for the coldest court will bow to their king.',
				text:'3,2,2,2'},
			east : {
				fate:'you will find the answer you cannot speak',
				text:'-2/0/+1/+1'},
			south : {
				fate:'When your shadow is cast upon the wall',
				text:'3,2,2,2'},
		},
		'8' : {
			name : '♥ 8',
			station : {
				skill:'Слежение (Track)',
				fate:'и он получит свою оплату.',
				birth:'Зверолов (Trapper)',
				text:'Ваши родители выслеживали животных ради шкур и устанавливали ловушки в глуши. Такой суровый образ жизни дал вам много знаний о дикой местности.'},
			west : {
				fate:'The games you play are more deadly than she wishes',
				text:'-2/0/+1/+1'},
			north : {
				fate:'and the moon shines upon the forest but not your path.',
				text:'3,2,2,2'},
			east : {
				fate:'the melody will be lost within the gutters',
				text:'-2/0/+1/+1'},
			south : {
				fate:'After the echoes of your laughter die',
				text:'3,2,2,2'},
		},
		'9' : {
			name : '♥ 9',
			station : {
				skill:'Учение: Бюрократия (Academic: Bureaucracy)',
				fate:'и ты предпримешь последний шаг.',
				birth:'Адвокат (Barrister)',
				text:'Законы - краеугольный камень цивилизации и адвокаты те, кто закон трактует. В зале суда ли, в зале совета ли, один из ваших родителей работал с законом.'},
			west : {
				fate:'The other place beckons with the voice of oblivion',
				text:'-1/-1/0/+2'},
			north : {
				fate:'and beware the red letter.',
				text:'3,2,2,2'},
			east : {
				fate:'your shame will be as beaten as the hooves',
				text:'-1/-1/0/+2'},
			south : {
				fate:'If you beware oblivion’s hand',
				text:'3,2,2,2'},
		},
		'10' : {
			name : '♥ 10',
			station : {
				skill:'Кулачный бой (Pugilism)',
				fate:'and it dreams of you.',
				birth:'Вышибала (Enforcer)',
				text:'Служа в качестве констебля в городе либо поселке или в качестве законника для правительственых нужд, вышибалы удостоверяются, что толпа подчиняется правилам. Это часто приводит к строгому методу воспитания.'},
			west : {
				fate:'Watch them as they fall one by one to the ground',
				text:'-1/-1/0/+2'},
			north : {
				fate:'but the fear of tomorrow will be drowned in the sorrow of yesterday.',
				text:'3,3,1,1'},
			east : {
				fate:'the cauldron-spawn will crawl to your birth',
				text:'-1/-1/0/+2'},
			south : {
				fate:'When you run when you should walk',
				text:'3,3,1,1'},
		},
		'11' : {
			name : '♥ J 11',
			station : {
				skill:'Лидерство (Leadership)',
				fate:'и она частью кровь и частью родня.',
				birth:'Управляющий (Administrator)',
				text:'Один или оба из ваших родителей работали в интересах богатых и влиятельных, кому требовалась твердая рука для надзора за операциями проводимыми на объектах удаленных от их сфер влияния.'},
			west : {
				fate:'The shards you pass through leave a bloody trail',
				text:'-2/-1/0/+3'},
			north : {
				fate:'and not but ashes upon your tongue.',
				text:'3,3,1,1'},
			east : {
				fate:'you will be the grape that sours the wine',
				text:'-2/-1/0/+3'},
			south : {
				fate:'As you walk backwards through the knife',
				text:'3,3,1,1'},
		},
		'12' : {
			name : '♥ Q 12',
			station : {
				skill:'Преподавание (Teach)',
				fate:'и движение сбивается и вздрагивает.',
				birth:'Учение (Academic)',
				text:'Ваши родители были частью мыслящей элиты. Это может включать университетских профессоров, исследователей либо прославленных ученых в определенной сфере.'},
			west : {
				fate:'Time is an illusion of the fading light and the feast counts twice',
				text:'-2/-1/0/+3'},
			north : {
				fate:'for you will know that a long life is a hundred curses.',
				text:'3,3,1,1'},
			east : {
				fate:'you will return with the balm for all ills',
				text:'-2/-1/0/+3'},
			south : {
				fate:'If you choose to see no evil in the chiming of the hour',
				text:'3,3,1,1'},
		},
		'13' : {
			name : '♥ K 13',
			station : {
				skill:'Пистолеты (Pistols)',
				fate:'и он будет наблюдать как ты пьешь яд.',
				birth:'Ортега (Ortega)',
				text:'Вы принадлежите обширной семье охотников на Нерожденных известной как Ортега. Вы провели детство учась подмечать следы их влияния и как тесно взаимодействовать со своей семьей во время охоты.'},
			west : {
				fate:'The circle will bind as well as the grave',
				text:'-1/-1/-1/+3'},
			north : {
				fate:'and she knows.',
				text:'3,3,2'},
			east : {
				fate:'you will invite him in',
				text:'-1/-1/-1/+3'},
			south : {
				fate:'When you sup upon your pride and dance with cadavers',
				text:'3,3,2'},
		}
	},
	clubs : {
		'1' : {
			name : '♣ 1',
			station : {
				skill:'Взрывчатка (Explosives)',
				fate:'и ты не можешь убрать красное.',
				birth:'Шахтер (Miner)',
				text:'Влиятельные шахтерские компании любят нанимать семьи, поскольку дети могут пробраться в лазы, которых взрослым работникам не достичь. Если вы везучи, то пережили детство всего с парой шрамов.'},
			west : {
				fate:'The grave spirit will call to you on a spring song',
				text:'-3/0/0/+3'},
			north : {
				fate:'но твое несчастье не будет твоим собственным.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'the wondering hour will settle on your hearth',
				text:'-3/0/0/+3'},
			south : {
				fate:'When the gears turn upon the story best forgotten',
				text:'3,2,1,1,1,1'},
		},
		'2' : {
			name : '♣ 2',
			station : {
				skill:'Ремесло: Усадебные работы (Crafting: Homesteading)',
				fate:'и это провозгласит зловещее восстание.',
				birth:'Плотник (Carpenter)',
				text:'Подобно кузнецу, талантливый плотник крайне важен в работах любой цивилизации. Лучшие мебель и здания зачастую созданы увлеченным профессионалом (и его преемником).'},
			west : {
				fate:'The end will find him in the garden',
				text:'-3/0/+1/+2'},
			north : {
				fate:'as the witless man fears the child.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'she will sit alone amongst your misery',
				text:'-3/0/+1/+2'},
			south : {
				fate:'Once your silver thread spends like golden promises',
				text:'3,2,1,1,1,1'},
		},
		'3' : {
			name : '♣ 3',
			station : {
				skill:'Зачарование (Enchanting)',
				fate:'и она будет оплакивать тебя до конца своих дней.',
				birth:'Мастеровой маг (Magewright)',
				text:'Не каждый магически одаренный удерживает силы вселенной на кончиках пальцев. Напротив, один из ваших родителей обладал незначительным магическим даром работая на Гильдийской фабрике зачарования изготавливающей безделушки.'},
			west : {
				fate:'Pale faced the innocent will drown in bile',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'for the hunter shall lay down to sleep upon the lilies.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'you will refuse the call',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'If you refuse the hero’s call',
				text:'3,2,1,1,1,1'},
		},
		'4' : {
			name : '♣ 4',
			station : {
				skill:'Учение: Математика (Academic: Mathematics)',
				fate:'и факел зашипит во тьме.',
				birth:'Счетовод (Accountant)',
				text:'Ваша семья зарабатывала на жизнь в финансовой сфере, либо работая на банк, либо служа аналитиком состоятельному покровителю.'},
			west : {
				fate:'It is, and it grows',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'and the forgotten shall be recalled.',
				text:'3,2,2,1,1'},
			east : {
				fate:'an exception will corrupt the rule',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'After the branch snaps beneath your sorrow',
				text:'3,2,2,1,1'},
		},
		'5' : {
			name : '♣ 5',
			station : {
				skill:'Ремесло: Печатное дело (Crafting: Printing)',
				fate:'и он призовет Тюрьму к прорыву.',
				birth:'Переплетчик (Bookbinder)',
				text:'Чаще всего находящегося в городском центре, переплетчика обычно можно увидеть с измазанными краской пальцами и усталым взглядом. Хотя семья которую кормит его работа часто живет благоустроенно.'},
			west : {
				fate:'Step through the looking glass and into the fable',
				text:'-2/0/0/+2'},
			north : {
				fate:'but his smile shall never fade.',
				text:'3,2,2,1,1'},
			east : {
				fate:'your dance will draw the sleeping eye',
				text:'-2/0/0/+2'},
			south : {
				fate:'When you wake from the dream of ancestors',
				text:'3,2,2,1,1'},
		},
		'6' : {
			name : '♣ 6',
			station : {
				skill:'Ближний бой (Melee)',
				fate:'и ты троекратно проклянешь его.',
				birth:'Качок (Muscle)',
				text:'Влиятельные предприятия наряду с криминальными структурами нуждаются в брутальных людях для насаждения своей воли. Предпочтительно чтобы, домашняя жизнь этих свирепых людей осталась недокументированной.'},
			west : {
				fate:'The dogs in the vineyard bellow for you to hunt',
				text:'-2/0/0/+2'},
			north : {
				fate:'as the jester dances where he will.',
				text:'3,2,2,1,1'},
			east : {
				fate:'the mud flows like a river into the sky',
				text:'-2/0/0/+2'},
			south : {
				fate:'As your hands of flesh touch feet of steel',
				text:'3,2,2,1,1'},
		},
		'7' : {
			name : '♣ 7',
			station : {
				skill:'Наблюдение (Notice)',
				fate:'и оно закудахчет из медальона.',
				birth:'Смотритель (Caretaker)',
				text:'Ваше детство было спокойным, проведенное в садах и домах состоятельных людей вместе с одним из ваших родителей, который мог быть садовником или дворецким.'},
			west : {
				fate:'And it is only the penitent who shall tread the path',
				text:'-2/0/+1/+1'},
			north : {
				fate:'for your secrets are not yours alone.',
				text:'3,2,2,2'},
			east : {
				fate:'he will know you not by your rage, but by your temperance',
				text:'-2/0/+1/+1'},
			south : {
				fate:'When you’ve traded away your beloved',
				text:'3,2,2,2'},
		},
		'8' : {
			name : '♣ 8',
			station : {
				skill:'Ремесло: Алхимия (Crafting: Alchemistry)',
				fate:'и она несет плод твоего прощения.',
				birth:'Алхимик (Alchemist)',
				text:'В то время как многие травяные препараты не требуют особых навыков для приготовления, в вашей семье был как минимум один одаренный алхимик обеспечивавший высокий уровень жизни создавая более сложные лекарства.'},
			west : {
				fate:'The empty mind will know the lie from the judgment',
				text:'-2/0/+1/+1'},
			north : {
				fate:'and the page turned is empty of promises.',
				text:'3,2,2,2'},
			east : {
				fate:'she must lurk within your joyless paradise',
				text:'-2/0/+1/+1'},
			south : {
				fate:'Once your strangers travel in three',
				text:'3,2,2,2'},
		},
		'9' : {
			name : '♣ 9',
			station : {
				skill:'Акробатика (Acrobatics)',
				fate:'и лист будет тонуть как плывущий камень.',
				birth:'Исполнитель (Performer)',
				text:'Либо на сцене крупного городского поселения, либо на дороге с труппой, ваша семья зарабатывала на жизнь песнями, танцами, игрой и исполнением развлекательных номеров.'},
			west : {
				fate:'The reflection in the water shows the truth',
				text:'-1/-1/0/+2'},
			north : {
				fate:'but heed the cripple who speaks for the coin.',
				text:'3,2,2,2'},
			east : {
				fate:'the gloom will know you as a brother',
				text:'-1/-1/0/+2'},
			south : {
				fate:'When you open the dead man’s eyes',
				text:'3,2,2,2'},
		},
		'10' : {
			name : '♣ 10',
			station : {
				skill:'Запугивание (Intimidate)',
				fate:'и он для тебя как отшельник для леса.',
				birth:'Госпожа (Madame)',
				text:'Каждый городской центр является приютом для борделя или двух. Ваш опекун управлял одним из таких домов и вы провели юность окруженные богачами и их наложницами.'},
			west : {
				fate:'The end’s a miracle that you dare to dream',
				text:'-1/-1/0/+2'},
			north : {
				fate:'as the dead rise by your fist.',
				text:'3,3,1,1'},
			east : {
				fate:'your eyes will be open unto the Abyss',
				text:'-1/-1/0/+2'},
			south : {
				fate:'After you have seen the forever',
				text:'3,3,1,1'},
		},
		'11' : {
			name : '♣ J 11',
			station : {
				skill:'Учение: Инженерное дело (Academic: Engineering)',
				fate:'и ты будешь править колесницей зимы.',
				birth:'Инженер (Engineer)',
				text:'Общество нуждается в тех кто может конструировать массивные рабочие дома наряду с часовыми механизмами. Инженер зачастую обеспечен и может себе позволить дать детям образование.'},
			west : {
				fate:'Search for the lion of the valley',
				text:'-2/-1/0/+3'},
			north : {
				fate:'for you will be reborn in soot and flame.',
				text:'3,3,1,1'},
			east : {
				fate:'you will fall from grace',
				text:'-2/-1/0/+3'},
			south : {
				fate:'Once you cross the bloody threshold',
				text:'3,3,1,1'},
		},
		'12' : {
			name : '♣ Q 12',
			station : {
				skill:'Ремесло: Создание артефактов (Crafting: Artefacting)',
				fate:'и дар будет принесен Императором.',
				birth:'Безумный ученый (Mad Scientist)',
				text:'Сказать что один из ваших родителей был эксцентричным будет преуменьшением граничащим с преступной халатностью. Вы провели детство наблюдая странные механизмы и слушая эзотерические тирады по ряду “образовательных тем”.'},
			west : {
				fate:'Lunatics fear where you will stalk',
				text:'-2/-1/0/+3'},
			north : {
				fate:'but you know this has all happened before.',
				text:'3,3,1,1'},
			east : {
				fate:'he will trust your falsehoods',
				text:'-2/-1/0/+3'},
			south : {
				fate:'If justice finds you guilty of the only crime',
				text:'3,3,1,1'},
		},
		'13' : {
			name : '♣ K 13',
			station : {
				skill:'Волшебство (Sorcery)',
				fate:'и она поцелует губы висельника.',
				birth:'Арканист (Arcanist)',
				text:'Те кто имеет способности к магическим навыкам часто должны держать свои возможности в секрете, если только их семья не обладает достаточным влиянием чобы практиковать способности только в "правовой секретности"'},
			west : {
				fate:'Worlds of marble turn flesh again',
				text:'-1/-1/-1/+3'},
			north : {
				fate:'and the lost will drag you into the depths.',
				text:'3,3,2'},
			east : {
				fate:'she strikes with daggers battered from your shield',
				text:'-1/-1/-1/+3'},
			south : {
				fate:'As you walk the lonely road',
				text:'3,3,2'},
		}
	},
	spades : {
		'1' : {
			name : '♠ 1',
			station : {
				skill:'Стойкость (Toughness)',
				fate:'иты призовешь ворона.',
				birth:'Немертвый (Undead)',
				text:'То что ваши родители были мертвы еще не значит, что они вас не любили. Ваше детство было мягко говоря странным пока вы старались сохранить семейную тайну.'},
			west : {
				fate:'Denying the battle will win the war',
				text:'-3/0/0/+3'},
			north : {
				fate:'for you must dredge the waters till the just give up the dead.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'ты не будешь обманут призраками башни',
				text:'-3/0/0/+3'},
			south : {
				fate:'Once the first has been the last and the last has been the first',
				text:'3,2,1,1,1,1'},
		},
		'2' : {
			name : '♠ 2',
			station : {
				skill:'Уклонение (Evade)',
				fate:'и конец настигнет всех.',
				birth:'Сирота (Orphan)',
				text:'Без семьи вы провели юность в детских трудовых домах крупного города либо уворачиваясь от прогулифающихся чиновников на улицах.'},
			west : {
				fate:'The mask donned for peace will blind you to bloodshed',
				text:'-3/0/+1/+2'},
			north : {
				fate:'and the wolf will howl at the door.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'the sleeper dreams not of tomorrow, but of you',
				text:'-3/0/+1/+2'},
			south : {
				fate:'When you accept your fates on the river',
				text:'3,2,1,1,1,1'},
		},
		'3' : {
			name : '♠ 3',
			station : {
				skill:'Ловкость рук (Prestidigitation)',
				fate:'и ты будешь искалечен.',
				birth:'Любитель (Dabbler)',
				text:'Ваша семья тайно баловалась магическими искусствамиторгуя пыльными томами с опасными людьми. Поиск тайных знаний зачастую был наградой сам по себе.'},
			west : {
				fate:'The song will end beyond the thrice knocked wall',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'but your loss will be what you would discard.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'you will be reborn of flesh and redemption',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'If you open the gates of wonder in the wall of lies',
				text:'3,2,1,1,1,1'},
		},
		'4' : {
			name : '♠ 4',
			station : {
				skill:'Фермерство (Farm)',
				fate:'и колено мага согнется перед твоей рекой.',
				birth:'Фермер (Farmer)',
				text:'Маленькая ферма была декорацией вашего детства. Вы жили по сезонам и работали на земле вместе со своей семьей.'},
			west : {
				fate:'The chime of your blunder will ring through the village',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'as you begin, so shall you end.',
				text:'3,2,2,1,1'},
			east : {
				fate:'you will refuse to open the tome',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'As you are unmourned by the father',
				text:'3,2,2,1,1'},
		},
		'5' : {
			name : '♠ 5',
			station : {
				skill:'Некромантия (Necromancy)',
				fate:'и аркан щелкнет подобно грому.',
				birth:'Гробокопатель (Graverobber)',
				text:'Поразительно сколько сокровищ богачи просто хоронят. Ограбление мертвых - легкий способ заработка и возможность содержать семью сытой и одетой.'},
			west : {
				fate:'Only in death will the pilgrim be free',
				text:'-2/0/0/+2'},
			north : {
				fate:'for your borrowing is also your lending.',
				text:'3,2,2,1,1'},
			east : {
				fate:'you will not heed the mentor',
				text:'-2/0/0/+2'},
			south : {
				fate:'After what is dead has died',
				text:'3,2,2,1,1'},
		},
		'6' : {
			name : '♠ 6',
			station : {
				skill:'Шитье (Stitching)',
				fate:'и с шепотом ты разделишь стены.',
				birth:'Работник морга (Mortuary Staff)',
				text:'Управление моргом зачастую семейное дело. Дети воспитываются чтобы перенять семейный бизнес, жуткая, но необходимая сделка для любого города или поселения.'},
			west : {
				fate:'The sands of waters will make you clean',
				text:'-2/0/0/+2'},
			north : {
				fate:'and time waits for no man but you.',
				text:'3,2,2,1,1'},
			east : {
				fate:'an open door will let him into the red chapel',
				text:'-2/0/0/+2'},
			south : {
				fate:'Once your stains have been bound within',
				text:'3,2,2,1,1'},
		},
		'7' : {
			name : '♠ 7',
			station : {
				skill:'Тяжелый ближний бой (Heavy Melee)',
				fate:'и уплаченный пенни заработан троекратно.',
				birth:'Преступник (Outlaw)',
				text:'Бродя в глуши между городами ваша семья жила грабя путешественников и уклоняясь от закона.'},
			west : {
				fate:'Poison will be the cure',
				text:'-2/0/+1/+1'},
			north : {
				fate:'but love was left behind.',
				text:'3,2,2,2'},
			east : {
				fate:'your relic will rust and gleam',
				text:'-2/0/+1/+1'},
			south : {
				fate:'If you open the box best left closed',
				text:'3,2,2,2'},
		},
		'8' : {
			name : '♠ 8',
			station : {
				skill:'Винтовки (Long Arms)',
				fate:'и ты спалишь старейшую страницу.',
				birth:'Наемник (Mercenary)',
				text:'Один (или оба) из ваших родителей были наемниками, обеспечивая военные услуги тем, кто может себе это позволить. Вы могли проводить время с семьей пока они не на деле или путешествовать с ними.'},
			west : {
				fate:'The blind woman must lead the seeker',
				text:'-2/0/+1/+1'},
			north : {
				fate:'as the cloud drifts upon your rest.',
				text:'3,2,2,2'},
			east : {
				fate:'the sting of a single wasp will light the agony',
				text:'-2/0/+1/+1'},
			south : {
				fate:'When at last you look upon your beating heart',
				text:'3,2,2,2'},
		},
		'9' : {
			name : '♠ 9',
			station : {
				skill:'Животноводство (Husbandry)',
				fate:'и преступление, что ты скрываешь уничтожит тебя.',
				birth:'Ветеринар (Veterinary)',
				text:'Талантливый ветеринар обеспечивает хорошую жизнь своей семье наряду с образованием. Вы могли провести много лет помогая с рождением телят или успокаивая травмированных “пациентов”.'},
			west : {
				fate:'The blood stained cheeks will weave the grasses',
				text:'-1/-1/0/+2'},
			north : {
				fate:'for not all treasures glimmer in the light.',
				text:'3,2,2,2'},
			east : {
				fate:'she will sicken to the blessed touch',
				text:'-1/-1/0/+2'},
			south : {
				fate:'As the hunter watches you swallow the maggots',
				text:'3,2,2,2'},
		},
		'10' : {
			name : '♠ 10',
			station : {
				skill:'Центровка (Centering)',
				fate:'and you are a breeze unto the leaves.',
				birth:'Убийца (Assassin)',
				text:'A parent was often gone for long periods of time, sending money home to support the family. One day, you learned why.'},
			west : {
				fate:'Frozen hearths crawl along the stone',
				text:'-1/-1/0/+2'},
			north : {
				fate:'and the reaper walks the path alongside you.',
				text:'3,3,1,1'},
			east : {
				fate:'an anvil of the horde will ring with war',
				text:'-1/-1/0/+2'},
			south : {
				fate:'If you allow the hands to pull you down',
				text:'3,3,1,1'},
		},
		'11' : {
			name : '♠ J 11',
			station : {
				skill:'Учение: Искусство (Academic: Art)',
				fate:'and you will let your blood run cold.',
				birth:'Artist',
				text:'You likely spent your youth helping to mix paint, tighten canvas, or prepare stone for chiseling. Your family contained at least one practicing artist and you learned to appreciate, or at least understand, the world of an artist.'},
			west : {
				fate:'The leaves will whisper your name and shout your exodus',
				text:'-2/-1/0/+3'},
			north : {
				fate:'but as destiny grows weary of your follies.',
				text:'3,3,1,1'},
			east : {
				fate:'your chime of warning will be drowned in voices',
				text:'-2/-1/0/+3'},
			south : {
				fate:'After you bleed the coal from the bones',
				text:'3,3,1,1'},
		},
		'12' : {
			name : '♠ Q 12',
			station : {
				skill:'Doctor',
				fate:'and you seek the sound of your last breath.',
				birth:'Medical',
				text:'One of your parents was a medical professional who tended to the needs of the sick and injured. Your family was likely well respected in your community.'},
			west : {
				fate:'All of the screams will lead you home',
				text:'-2/-1/0/+3'},
			north : {
				fate:'as wonders surround your waking echoes.',
				text:'3,3,1,1'},
			east : {
				fate:'the August will leave melancholy in everything after',
				text:'-2/-1/0/+3'},
			south : {
				fate:'As you strain to see through the high noon veil',
				text:'3,3,1,1'},
		},
		'13' : {
			name : '♠ K 13',
			station : {
				skill:'Harness Soulstone',
				fate:'and you stumble upon the line of life and death.',
				birth:'Resurrectionists',
				text:'Your parent or guardian was a Resurrectionist, one of the few necromancers able to ply their trade Earthside. Your childhood was spent hiding in sewers and fleeing summary execution.'},
			west : {
				fate:'The mute man must cry out for the wolf',
				text:'-1/-1/-1/+3'},
			north : {
				fate:'for the stars illuminate your path.',
				text:'3,3,2'},
			east : {
				fate:'you will shatter the stone',
				text:'-1/-1/-1/+3'},
			south : {
				fate:'When your death rattles at the door',
				text:'3,3,2'},
		}
	},
	diamonds : {
		'1' : {
			name : '♦ 1',
			station : {
				skill:'Forgery',
				fate:'and obliteration’s touch will be gentle.',
				birth:'Hustler',
				text:'A short, or long, grift can easily make use of an entire family of trained hustlers. It is not uncommon for families of confident tricksters to play their trades both on the road and in large cities.'},
			west : {
				fate:'Spirits run sour in your veins',
				text:'-3/0/0/+3'},
			north : {
				fate:'and you will be repaid thrice for the sins you have sold.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'you will lead the children through the valley',
				text:'-3/0/0/+3'},
			south : {
				fate:'Когда багрянец свернётся на животе падшего',
				text:'3,2,1,1,1,1'},
		},
		'2' : {
			name : '♦ 2',
			station : {
				skill:'Bewitch',
				fate:'and your iron wishes to bleed.',
				birth:'Harlot',
				text:'The world’s oldest professions are said to be whore and parenthood. Technically, the two aren’t mutually exclusive, and some mothers or fathers turn to prostitution to keep their children fed.'},
			west : {
				fate:'She drinks only blood',
				text:'-3/0/+1/+2'},
			north : {
				fate:'but there are dragons here.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'he will shade your tired eyes, and wet your thirsty lips',
				text:'-3/0/+1/+2'},
			south : {
				fate:'If the autumn bridge shakes in your bellows',
				text:'3,2,1,1,1,1'},
		},
		'3' : {
			name : '♦ 3',
			station : {
				skill:'Music',
				fate:'and yours is only yours.',
				birth:'Busker',
				text:'A close cousin to more traditional entertainers, buskers often work in groups (which included your family), entertaining people on crowded streets for tips.'},
			west : {
				fate:'Love knows not the heart but the bosom',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'as the living wither from your grasp.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'she is unknown to your divine',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'When your power begets your heresy',
				text:'3,2,1,1,1,1'},
		},
		'4' : {
			name : '♦ 4',
			station : {
				skill:'Wilderness',
				fate:'and you will splinter the white door.',
				birth:'Settler',
				text:'Your family migrated out into the wilderness and forged a homestead for themselves. Direct and often stern, your parents were nevertheless independent and proud people who worked hard to instill those traits in you.'},
			west : {
				fate:'Escape is impossible, freedom is inevitable',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'for new enemies are made from old allies.',
				text:'3,2,2,1,1'},
			east : {
				fate:'the dusk of a new sun will light your steps into the cave',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'Once the nemesis has become the mother',
				text:'3,2,2,1,1'},
		},
		'5' : {
			name : '♦ 5',
			station : {
				skill:'Pick Pocket',
				fate:'and you will fall.',
				birth:'Thief',
				text:'It is an uncommonly good thief who is never caught, but one of your parents managed just that. Perhaps the theft was untraceable (such as banking paperwork) or maybe they just left no trace.'},
			west : {
				fate:'The red woman will light the path',
				text:'-2/0/0/+2'},
			north : {
				fate:'and you will pan the gutter’s glitter.',
				text:'3,2,2,1,1'},
			east : {
				fate:'the peer of a thousand faces will weep',
				text:'-2/0/0/+2'},
			south : {
				fate:'As the watcher awaits your cry of vengeance',
				text:'3,2,2,1,1'},
		},
		'6' : {
			name : '♦ 6',
			station : {
				skill:'Gambling',
				fate:'and the ordeal will be your own.',
				birth:'Sailor',
				text:'You travelled the seas, ferrying goods and passengers across the oceans with your parents. Whether they captained their own vessel, or were a respected member of the crew, your parents provided an exciting childhood with many new ports of call.'},
			west : {
				fate:'The reflection in the water shows the truth',
				text:'-2/0/0/+2'},
			north : {
				fate:'but the balance will teeter but not tumble.',
				text:'3,2,2,1,1'},
			east : {
				fate:'you will be asked three times, and deny each',
				text:'-2/0/0/+2'},
			south : {
				fate:'When you are a stranger to yourself',
				text:'3,2,2,1,1'},
		},
		'7' : {
			name : '♦ 7',
			station : {
				skill:'Appraise',
				fate:'and you will unshackle the prisoner.',
				birth:'Hawker',
				text:'While general stores carry merchandise tailored to everyday life, a hawker provides immediate convenience and inexpensive (if shady) goods. These traveling peddlers might be perfectly fair merchants, but many work with street urchins to turn an even greater profit.'},
			west : {
				fate:'An abyss opens beneath your cradle',
				text:'-2/0/+1/+1'},
			north : {
				fate:'as your steed takes you into the jousts of war.',
				text:'3,2,2,2'},
			east : {
				fate:'you will take up the sword of your father',
				text:'-2/0/+1/+1'},
			south : {
				fate:'After the reaper has come for innocence',
				text:'3,2,2,2'},
		},
		'8' : {
			name : '♦ 8',
			station : {
				skill:'Flexible',
				fate:'and the willful earns his due.',
				birth:'Coachman',
				text:'A skilled coachman is part of the house staff of any proper society family. You spent your childhood learning to drive a team of horses, as well as maintain a carriage.'},
			west : {
				fate:'They sing for laughter, tears, and tomorrow',
				text:'-2/0/+1/+1'},
			north : {
				fate:'for the silence brings inspiration at the door.',
				text:'3,2,2,2'},
			east : {
				fate:'you will refuse deserved love',
				text:'-2/0/+1/+1'},
			south : {
				fate:'Once your vendetta is nigh upon the mountains',
				text:'3,2,2,2'},
		},
		'9' : {
			name : '♦ 9',
			station : {
				skill:'Lockpicking',
				fate:'and you will deal with the devil.',
				birth:'Burglar',
				text:'Entire families that specialize in robbing a place blind and then disappearing are not uncommon in urban environments. You began life as part of one such group.'},
			west : {
				fate:'The deaf man must hear the owl’s warning',
				text:'-1/-1/0/+2'},
			north : {
				fate:'and you will find the other lands on the day she dies.',
				text:'3,2,2,2'},
			east : {
				fate:'he chooses not you, but the downfall',
				text:'-1/-1/0/+2'},
			south : {
				fate:'When you choose between the quill or the blade',
				text:'3,2,2,2'},
		},
		'10' : {
			name : '♦ 10',
			station : {
				skill:'Deceive',
				fate:'and you will murder the deserving.',
				birth:'Infiltrator',
				text:'A family of spies can wreak havoc on an industrial concern or a government. The Ten Thunders makes great use of infiltrators, and a family group is often the last to be suspected when the mayhem starts.'},
			west : {
				fate:'The water falls like envy, the river runs like rage',
				text:'-1/-1/0/+2'},
			north : {
				fate:'but leave your mark in many woes.',
				text:'3,3,1,1'},
			east : {
				fate:'an empty grave will fill with melody',
				text:'-1/-1/0/+2'},
			south : {
				fate:'After you don the crimson silks',
				text:'3,3,1,1'},
		},
		'11' : {
			name : '♦ J 11',
			station : {
				skill:'Convince',
				fate:'and it shoulders aside the guardian.',
				birth:'Sharp',
				text:'Whether on the road, or as a denizen of a single saloon, one of your parents made their living at the card tables, either as a dealer or as a player.'},
			west : {
				fate:'The grave did not hold her',
				text:'-2/-1/0/+3'},
			north : {
				fate:'but leave your mark in many woes.',
				text:'3,3,1,1'},
			east : {
				fate:'your ruination will hound your desperate exodus',
				text:'-2/-1/0/+3'},
			south : {
				fate:'If you know the dimming of the lanterns',
				text:'3,3,1,1'},
		},
		'12' : {
			name : '♦ Q 12',
			station : {
				skill:'Leadership',
				fate:'and the eyes in the darkness change you.',
				birth:'Politician',
				text:'One of your parents was a powerful political figure, such as a senator, industrialist, or even proper royalty.'},
			west : {
				fate:'The halo slips around your throat like the noose',
				text:'-2/-1/0/+3'},
			north : {
				fate:'but leave your mark in many woes.',
				text:'3,3,1,1'},
			east : {
				fate:'the last man will speak the lies of your glory',
				text:'-2/-1/0/+3'},
			south : {
				fate:'As the bell tolls for judgment',
				text:'3,3,1,1'},
		},
		'13' : {
			name : '♦ K 13',
			station : {
				skill:'Martial Arts',
				fate:'and the Empress will know the traitor.',
				birth:'Ten Thunders',
				text:'Raised as part of a secretive clan of infiltrators, your family practiced martial techniques from the Three Kingdoms, as well as a variety of other traditions.'},
			west : {
				fate:'The sisters will show the way',
				text:'-1/-1/-1/+3'},
			north : {
				fate:'but you are safe beneath the ice.',
				text:'3,3,2'},
			east : {
				fate:'she will fear your iron, but not your thread',
				text:'-1/-1/-1/+3'},
			south : {
				fate:'When hope drowns in but three tears',
				text:'3,3,2'},
		}
	},
	jockers : {
		'14' : {
			name : 'jockers R 14',
			station : {
				skill:'Антимагия (Counter-Spelling)',
				fate:'и ты умрешь.',
				birth:'Похищенный Нерожденными (Neverborn Stolen)',
				text:'Непохоже, что вы считали странным свое детство проведенное с Тэдди в прогулках сквозь кошмары других детей, пока однажды не узнали свое предназначение и не были направлены в город Малифо служа темным намерениям.'},
			west : {
				fate:'Then, in the middle of none, there was one',
				text:'-1/0/0/+1'},
			north : {
				fate:'and upon wings of fear you will approach the tower.',
				text:'4,2,1'},
			east : {
				fate:'your deeds will be undone before the thirteenth step',
				text:'-1/0/0/+1'},
			south : {
				fate:'Once you witness your golden sunset',
				text:'4,2,1'},
		},
		'0' : {
			name : 'jockers B 0',
			station : {
				skill:'Carouse',
				fate:'and you will be unmade.',
				birth:'Bayou Born',
				text:'You weren’t necessarily born on the Bayou, so much as stolen as a baby and raised by Gremlins. Maybe you escaped to civilization, or left when you came of age, but now you come to Malifaux not through the Breach, but from the swamp.'},
			west : {
				fate:'You will carry the seed of a thousand-fold damnations',
				text:'-3/+1/+1/+1'},
			north : {
				fate:'and your blood will run black.',
				text:'2,2,2,2,2,2'},
			east : {
				fate:'your every breath will be as your last',
				text:'-3/+1/+1/+1'},
			south : {
				fate:'Once your soul has been stained by silence',
				text:'2,2,2,2,2,2'},
		},
	}
}
