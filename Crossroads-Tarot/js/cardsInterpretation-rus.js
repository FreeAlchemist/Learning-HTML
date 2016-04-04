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
				fate:'Вновь ты повернешь колесо и сдвинешь камень',
				text:'-3/0/+1/+2'},
			north : {
				fate:'ради мрака откажется знать тебя.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'ты будешь отважен в самый нужный момент',
				text:'-3/0/+1/+2'},
			south : {
				fate:'Если ты проигнорируешь веревку среди деревьев',
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
				fate:'Следовательно иссушенные земли оросит кровь грешников',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'но бойся тени отбрасываемой никем.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'твое странствие никогда не начнется',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'Когда седьмые дары отчаятся',
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
				fate:'Тогда вороны благословят твоих детей',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'и угрюмые звезды выстроятся для тебя.',
				text:'3,2,2,1,1'},
			east : {
				fate:'ты будешь ждать нужного момента',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'После того как тишина тысячи ночей достигнет твоих ушей',
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
				fate:'В конце-концов ты принесешь ее в жертву на алтарях отчаяния',
				text:'-2/0/0/+2'},
			north : {
				fate:'но прими песнь застывшей зимы.',
				text:'3,2,2,1,1'},
			east : {
				fate:'задумка тебя подведет',
				text:'-2/0/0/+2'},
			south : {
				fate:'Когда за спиной ты несешь ярчайшую звезду в тени',
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
				fate:'Ты будешь держать миф о сотворении жизни в руках',
				text:'-2/0/0/+2'},
			north : {
				fate:'когда собрание насмехается над твоим даром.',
				text:'3,2,2,1,1'},
			east : {
				fate:'ты будешь незваным',
				text:'-2/0/0/+2'},
			south : {
				fate:'Однажды ты восстанешь из праха',
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
				fate:'Он подтягивает струны и дергает заклепки',
				text:'-2/0/+1/+1'},
			north : {
				fate:'для хладейшего двора склонившегося пред своим королем.',
				text:'3,2,2,2'},
			east : {
				fate:'ты найдешь ответ, который не сможешь озвучить',
				text:'-2/0/+1/+1'},
			south : {
				fate:'Когда твоя тень упадет на стену',
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
				fate:'Иное место манит голосом забвения',
				text:'-1/-1/0/+2'},
			north : {
				fate:'и остерегайся красного послания.',
				text:'3,2,2,2'},
			east : {
				fate:'твой позор будет избит как копыта',
				text:'-1/-1/0/+2'},
			south : {
				fate:'Если ты опасаешься руки забвения',
				text:'3,2,2,2'},
		},
		'10' : {
			name : '♥ 10',
			station : {
				skill:'Кулачный бой (Pugilism)',
				fate:'и он мечтает о тебе.',
				birth:'Вышибала (Enforcer)',
				text:'Служа в качестве констебля в городе либо поселке или в качестве законника для правительственых нужд, вышибалы удостоверяются, что толпа подчиняется правилам. Это часто приводит к строгому методу воспитания.'},
			west : {
				fate:'Наблюдай как один за одним они падут к земле',
				text:'-1/-1/0/+2'},
			north : {
				fate:'но завтрашний страх утонет во вчерашней скорби.',
				text:'3,3,1,1'},
			east : {
				fate:'котлорожденный будет пресмыкаться пред твоим рождением',
				text:'-1/-1/0/+2'},
			south : {
				fate:'Когда ты побежишь хотя должен идти',
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
				fate:'Осколки по которым ты проходишь оставляют кровавый след',
				text:'-2/-1/0/+3'},
			north : {
				fate:'и ничего кроме привкуса праха на языке.',
				text:'3,3,1,1'},
			east : {
				fate:'ты будешь ягодой испортившей вино',
				text:'-2/-1/0/+3'},
			south : {
				fate:'Когда ты идешь назад через нож',
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
				fate:'Время это иллюзия угасающего света и трапеза учитывается дважды',
				text:'-2/-1/0/+3'},
			north : {
				fate:'чтобы узнать, что долгая жизнь это сотня проклятий.',
				text:'3,3,1,1'},
			east : {
				fate:'ты вернешься с бальзамом от всех болезней',
				text:'-2/-1/0/+3'},
			south : {
				fate:'Если ты решишь не видеть зла в звоне часа',
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
				fate:'Круг свяжет также как могила',
				text:'-1/-1/-1/+3'},
			north : {
				fate:'и она знает.',
				text:'3,3,2'},
			east : {
				fate:'ты пригласишь его войти',
				text:'-1/-1/-1/+3'},
			south : {
				fate:'Когда ты проглотишь свою гордость и будешь танцевать с трупами',
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
				fate:'Могильный дух взовет к тебе на весенней песне',
				text:'-3/0/0/+3'},
			north : {
				fate:'но твое несчастье не будет твоим собственным.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'час удивления поселится в твоем сердце',
				text:'-3/0/0/+3'},
			south : {
				fate:'Когда завращаются шестерни истории, которую лучше забыть',
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
				fate:'Конец настигнет его в саду',
				text:'-3/0/+1/+2'},
			north : {
				fate:'как глупый человек страшится ребенка.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'она будет сидеть одна среди твоей убогости',
				text:'-3/0/+1/+2'},
			south : {
				fate:'Как только твоя серебрянная нить растратится как золотые обещания',
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
				fate:'Бледный столкнувшийся с невинным утонет в желчи',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'для охотника следует лечь спать на лилиях.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'ты отвергнешь зов',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'Если ты отклонишь зов героя',
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
				fate:'и ты ветер в листьях.',
				birth:'Убийца (Assassin)',
				text:'Один из ваших родителей часто подолгу был в отъезде, присылая деньги на содержание семьи. Однажды вы узнали почему.'},
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
				fate:'и ты позволишь своей крови застыть.',
				birth:'Художник (Artist)',
				text:'Вы провели юность помогая смешивать краски, натягивать холст или готовя камень к рубке. В вашей семье был как минимум один практикующий художник и вы научились если не ценить, то понимать мир искусства.'},
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
				skill:'Доктор (Doctor)',
				fate:'и ты ищешь звук своего последнего вздоха.',
				birth:'Медик (Medical)',
				text:'Один из ваших родителей был профессиональным медиков, который заботился о нуждах больных и покалеченных. Вашу семью уважали в обществе.'},
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
				skill:'Снаряжение Камня Души (Harness Soulstone)',
				fate:'и ты задержался на грани жизни и смерти.',
				birth:'Воскрешатели (Resurrectionists)',
				text:'Ваш родитель либо опекун был Воскрешателем, одним из немногих некромантов сумевшим вести дела на Земле. Ваше детство прошло в прятках среди сточных туннелей и бегстве от казни.'},
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
				skill:'Фальсификация (Forgery)',
				fate:'и уничтожающее касание будет нежным.',
				birth:'Фальшивомонетчик (Hustler)',
				text:'Так или иначе мошенники найдут как использовать целую семью опытных фальшифомонетчиков. Нередко семьи уверенных в себе обманщиков совершают свои сделки как в пути так и в больших городах.'},
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
				skill:'Приворожить (Bewitch)',
				fate:'и твои оковы возжелают истекать кровью.',
				birth:'Блудница (Harlot)',
				text:'Говорят, что старейшие профессии это проституция и воспитание детей. Технически они не уникальны и некоторые матери или отцы обращаются к проституции чтобы прокормить детей.'},
			west : {
				fate:'Она пьет только кровь',
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
				skill:'Музыка (Music)',
				fate:'и что твое, то твое.',
				birth:'Уличный музыкант (Busker)',
				text:'Близкие родственники привычных затейников, уличные музыканты часто работают группами (включая вашу семью), развлекая людей на переполненных улицах за подачку.'},
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
				skill:'Дикая местность (Wilderness)',
				fate:'и ты расщепишь белую дверь.',
				birth:'Поселенец (Settler)',
				text:'Ваша семья переехала в глушь и возвела для себя усадьбу. Прямолинейные и зачастую суровые, ваши родители тем не менее были независимыми и гордыми людьми, стремившимися привить эти качества вам.'},
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
				skill:'Карманник (Pick Pocket)',
				fate:'И ты падешь.',
				birth:'Вор (Thief)',
				text:'Ни разу не попавшийся хороший вор это редкость, но одному из ваших родителей подобное удалось. Возможно кражу было трудно отследить (например банковские документы) или он просто не оставлял следов.'},
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
				skill:'Азартные игры (Gambling)',
				fate:'и испытание будет твоим собственным.',
				birth:'Моряк (Sailor)',
				text:'Вы путешествовали по морям, перевозили товары и пассажиров вместе со своими родителями через океаны. Владели ли они собственным судном или были уважаемыми членами команды, родители обеспечили вам волнующее детство с множеством манящих портов.'},
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
				skill:'Оценка (Appraise)',
				fate:'и ты освободишь узника.',
				birth:'Лоточник (Hawker)',
				text:'Пока универсальные магазины предлагают товары ежедневного пользования, лоточник предоставляет мгновенно доступные и недорогие (если подозрительные) товары. Эти странствующие торговцы могут быть предельно честными, но многие работают с уличными сорванцами, чтобы извлечь еще большую выгоду.'},
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
				skill:'Гибкость (Flexible)',
				fate:'и своевольный получит должное.',
				birth:'Извозчик (Coachman)',
				text:'Квалифицированный извозчик - неотъемлемая часть персонала полноценной светской семьи. Вы провели детство обучаясь управлению лошадьми и обслуживанию повозки.'},
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
				skill:'Взлом (Lockpicking)',
				fate:'and you will deal with the devil.',
				birth:'Взломщик (Burglar)',
				text:'Целые семьи специализирующиеся на ограблении подчистую и последующем исчезновении нередки в городской среде. Вы начали жизнь как часть подобной группы.'},
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
				skill:'Обман (Deceive)',
				fate:'и ты убьешь достойного.',
				birth:'Лазутчик (Infiltrator)',
				text:'Семья шпионов может посеять смуту на промышленном предприятии или в правительстве. Десять Громов превосходно пользуются лазутчиками, а семья в начавшемся хаосе будет подозреваться в последнюю очередь.'},
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
				skill:'Убеждение (Convince)',
				fate:'и его поддержка в стороне от стража.',
				birth:'Шулер (Sharp)',
				text:'В пути либо как завсегдатай единственного салуна, один из ваших родителей зарабатывал на жизнь будучи крупье или игроком.'},
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
				skill:'Лидерство (Leadership)',
				fate:'и глаза во тьме изменят тебя.',
				birth:'Политик (Politician)',
				text:'Один из ваших родителей был влиятельной политической фигурой такой как сенатор, промышленник или даже королевская особа.'},
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
				skill:'Боевые Искусства (Martial Arts)',
				fate:'и Императрица узнает предателя.',
				birth:'Десять Громов (Ten Thunders)',
				text:'Воспитанная как часть тайного клана лазутчиков, ваша семья практиковала боевые искусства Трех Царств наряду с другими обычаями.'},
			west : {
				fate:'The sisters will show the way',
				text:'-1/-1/-1/+3'},
			north : {
				fate:'и ты спасешься подо льдом.',
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
