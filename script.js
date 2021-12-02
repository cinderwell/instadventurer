var debug = false;
var runs = 10;
var rollType = 0;

var currBooks = ['phb'];

var selectedBooks = 1;

var baseClasses = ['Wizard','Warlock','Cleric','Druid','Monk','Ranger','Paladin','Sorcerer','Fighter','Rogue','Bard','Barbarian'];
var tempBaseClasses = [];

var pointBuys = ['(15, 15, 15, 8, 8, 8)','(15, 15, 14, 10, 8, 8)','(15, 15, 14, 9, 9, 8)','(15, 15, 13, 12, 8, 8)','(15, 15, 13, 11, 9, 8)','(15, 15, 13, 10, 10, 8)','(15, 15, 13, 10, 9, 9)',
'(15, 15, 12, 12, 9, 8)','(15, 15, 12, 11, 10, 8)','(15, 15, 12, 11, 9, 9)','(15, 15, 12, 10, 10, 9)','(15, 15, 11, 11, 11, 8)','(15, 15, 11, 11, 10, 9)','(15, 15, 11, 10, 10, 10)','(15, 14, 14, 12, 8, 8)','(15, 14, 14, 11, 9, 8)','(15, 14, 14, 10, 10, 8)','(15, 14, 14, 10, 9, 9)','(15, 14, 13, 13, 9, 8)','(15, 14, 13, 12, 10, 8)','(15, 14, 13, 12, 9, 9)','(15, 14, 13, 11, 11, 8)','(15, 14, 13, 11, 10, 9)','(15, 14, 13, 10, 10, 10)','(15, 14, 12, 12, 11, 8)','(15, 14, 12, 12, 10, 9)','(15, 14, 12, 11, 11, 9)','(15, 14, 12, 11, 10, 10)','(15, 14, 11, 11, 11, 10)','(15, 13, 13, 13, 11, 8)','(15, 13, 13, 13, 10, 9)','(15, 13, 13, 12, 12, 8)','(15, 13, 13, 12, 11, 9)','(15, 13, 13, 12, 10, 10)','(15, 13, 13, 11, 11, 10)','(15, 13, 12, 12, 12, 9)','(15, 13, 12, 12, 11, 10)','(15, 13, 12, 11, 11, 11)','(15, 12, 12, 12, 12, 10)','(15, 12, 12, 12, 11, 11)','(14, 14, 14, 13, 9, 8)','(14, 14, 14, 12, 10, 8)','(14, 14, 14, 12, 9, 9)','(14, 14, 14, 11, 11, 8)','(14, 14, 14, 11, 10, 9)','(14, 14, 14, 10, 10, 10)','(14, 14, 13, 13, 11, 8)','(14, 14, 13, 13, 10, 9)','(14, 14, 13, 12, 12, 8)','(14, 14, 13, 12, 11, 9)','(14, 14, 13, 12, 10, 10)','(14, 14, 13, 11, 11, 10)','(14, 14, 12, 12, 12, 9)','(14, 14, 12, 12, 11, 10)','(14, 14, 12, 11, 11, 11)','(14, 13, 13, 13, 13, 8)','(14, 13, 13, 13, 12, 9)','(14, 13, 13, 13, 11, 10)','(14, 13, 13, 12, 12, 10)','(14, 13, 13, 12, 11, 11)','(14, 13, 12, 12, 12, 11)','(14, 12, 12, 12, 12, 12)','(13, 13, 13, 13, 13, 10)','(13, 13, 13, 13, 12, 11)','(13, 13, 13, 12, 12, 12)'];

//complete
var phbClasses = ['Transmutation Wizard<sub>phb</sub>','Necromancy Wizard<sub>phb</sub>','Illusion Wizard<sub>phb</sub>','Evocation Wizard<sub>phb</sub>','Enchantment Wizard<sub>phb</sub>','Divination Wizard<sub>phb</sub>','Conjuration Wizard<sub>phb</sub>','Abjuration Wizard<sub>phb</sub>','Great Old One Warlock<sub>phb</sub>','Fiend Warlock<sub>phb</sub>','Archfey Warlock<sub>phb</sub>','Wild Magic Sorcerer<sub>phb</sub>','Draconic Sorcerer<sub>phb</sub>','Arcane Trickster Rogue<sub>phb</sub>','Assassin Rogue<sub>phb</sub>','Thief Rogue<sub>phb</sub>','Beast Master Ranger<sub>phb</sub>','Hunter Ranger<sub>phb</sub>','Vengeance Paladin<sub>phb</sub>','Ancients Paladin<sub>phb</sub>','Devotion Paladin<sub>phb</sub>','Four Elements Monk<sub>phb</sub>','Shadow Monk<sub>phb</sub>','Open Hand Monk<sub>phb</sub>','Champion Fighter<sub>phb</sub>','Battlemaster Fighter<sub>phb</sub>','Eldritch Knight Fighter<sub>phb</sub>','Land Druid<sub>phb</sub>','Moon Druid<sub>phb</sub>','War Cleric<sub>phb</sub>','Trickery Cleric<sub>phb</sub>','Tempest Cleric<sub>phb</sub>','Nature Cleric<sub>phb</sub>','Life Cleric<sub>phb</sub>','Knowledge Cleric<sub>phb</sub>','Light Cleric<sub>phb</sub>','Totem Barbarian<sub>phb</sub>','Berserker Barbarian<sub>phb</sub>','Lore Bard<sub>phb</sub>','Valor Bard<sub>phb</sub>'];
var phbBackgrounds = ['Acolyte<sub>phb</sub>','Entertainer<sub>phb</sub>','Charlatan<sub>phb</sub>','Criminal<sub>phb</sub>','Folk Hero<sub>phb</sub>','Guild Artisan<sub>phb</sub>','Hermit<sub>phb</sub>','Noble<sub>phb</sub>','Outlander<sub>phb</sub>','Sage<sub>phb</sub>','Sailor<sub>phb</sub>','Soldier<sub>phb</sub>','Urchin<sub>phb</sub>'];
var phbRaces = ['Hill Dwarf<sub>phb</sub>','Mountain Dwarf<sub>phb</sub>','Human<sub>phb</sub>','Variant Human<sub>phb</sub>','Stout Halfling<sub>phb</sub>','Lightfoot Halfling<sub>phb</sub>','High Elf<sub>phb</sub>','Wood Elf<sub>phb</sub>','Half-Elf<sub>phb</sub>','Half-Orc<sub>phb</sub>','Rock Gnome<sub>phb</sub>','Forest Gnome<sub>phb</sub>','Tiefling<sub>phb</sub>','Chromatic Dragonborn<sub>phb</sub>','Metallic Dragonborn<sub>phb</sub>'];

//complete
var dmgClasses = ['Oathbreaker Paladin<sub>dmg</sub>','Death Cleric<sub>dmg</sub>'];
var dmgBackgrounds = [];
var dmgRaces = [];

//complete
var eeClasses = [];
var eeBackgrounds = [];
var eeRaces = ['Arakocra<sub>ee</sub>','Air Genasi<sub>ee</sub>','Earth Genasi<sub>ee</sub>','Fire Genasi<sub>ee</sub>','Water Genasi<sub>ee</sub>'];

//complete
var scagClasses = ['Arcana Cleric<sub>phb</sub>','Battlerager Barbarian<sub>scag</sub>','Longdeath Monk<sub>scag</sub>','Purple Dragonknight Fighter<sub>scag</sub>'];
var scagBackgrounds = ['City Watch<sub>scag</sub>','Clan Crafter<sub>scag</sub>','Cloistered Scholar<sub>scag</sub>','Courtier<sub>scag</sub>','Faction Agent<sub>scag</sub>','Far Traveler<sub>scag</sub>','Inheritor<sub>scag</sub>','Mercenary Veteran<sub>scag</sub>','Urban Bounty Hunter<sub>scag</sub>'];
var scagRaces = ['Deep Gnome(Svirfneblin)<sub>scag</sub>','Gray Dwarf(Duergar)<sub>scag</sub>','Ghostwise Halfling<sub>scag</sub>','Wood Half-Elf<sub>scag</sub>','Aquatic Half-Elf<sub>scag</sub>','High Half-Elf<sub>scag</sub>','Half-Drow<sub>scag</sub>'];

//complete
var voloClasses = [];
var voloBackgrounds = [];
var voloRaces = ['Goblin<sub>volo</sub>','Orc<sub>volo</sub>','Scourge Aasimar<sub>volo</sub>','Fallen Aasimar<sub>volo</sub>','Protector Aasimar<sub>volo</sub>','Bugbear<sub>volo</sub>','Hobgoblin<sub>volo</sub>','Yuan-Ti Pureblood<sub>volo</sub>','Tabaxi<sub>volo</sub>','Tortle<sub>volo</sub>','Triton<sub>volo</sub>','Kenku<sub>volo</sub>','Kobold<sub>volo</sub>','Lizardfolk<sub>volo</sub>','Firbolg<sub>volo</sub>'];

//complete
var mordClasses = [];
var mordBackgrounds = [];
var mordRaces = ['Baalzebul Tiefling<sub>mord</sub>','Dispater Tiefling<sub>mord</sub>','Fierna Tiefling<sub>mord</sub>','Glasya Tiefling<sub>mord</sub>','Levistus Tiefling<sub>mord</sub>','Mammon Tiefling<sub>mord</sub>','Mephistopheles Tiefling<sub>mord</sub>','Zariel Tiefling<sub>mord</sub>','Sea Elf<sub>mord</sub>','Shadar-Kai<sub>mord</sub>','Summer Eladrin<sub>mord</sub>','Spring Eladrin<sub>mord</sub>','Winter Eladrin<sub>mord</sub>','Autumn Eladrin<sub>mord</sub>','Githyanki<sub>mord</sub>','Githzerai<sub>mord</sub>'];

//complete
var xgeClasses = ['Ancestral Guardian Barbarian<sub>xge</sub>','Storm Herald Barbarian<sub>xge</sub>','Zealot Barbarian<sub>xge</sub>','Glamour Bard<sub>xge</sub>','Swords Bard<sub>xge</sub>','Whispers Bard<sub>xge</sub>','Forge Cleric<sub>xge</sub>','Grave Cleric<sub>xge</sub>','Arcane Archer Fighter<sub>xge</sub>','Cavalier Fighter<sub>xge</sub>','Samurai Fighter<sub>xge</sub>','Drunken Master Monk<sub>xge</sub>','Kensei Monk<sub>xge</sub>','Sun Soul Monk<sub>xge</sub>','Conquest Paladin<sub>xge</sub>','Redemption Paladin<sub>xge</sub>','Gloom Stalker Ranger<sub>xge</sub>','Horizon Walker Ranger<sub>xge</sub>','Monster Slayer Ranger<sub>xge</sub>','Inquisitive Rogue<sub>xge</sub>','Mastermind Rogue<sub>xge</sub>','Scout Rogue<sub>xge</sub>','Swashbuckler Rogue<sub>xge</sub>','Shadow Sorcerer<sub>xge</sub>','Storm Sorcerer<sub>xge</sub>','Celestial Warlock<sub>xge</sub>','Hexblade Warlock<sub>xge</sub>','War Wizard<sub>xge</sub>'];
var xgeBackgrounds = [];
var xgeRaces = [];

//complete
var tceClasses = ['Bladesinger Wizard<sub>tce</sub>','Artillerist Artificer<sub>tce</sub>','Battlesmith Artificer<sub>tce</sub>','Armorer Artificer<sub>tce</sub>','Beast Barbarian<sub>tce</sub>','Wild Magic Barbarian<sub>tce</sub>','Creation Bard<sub>tce</sub>','Eloquence Bard<sub>tce</sub>','Order Cleric<sub>tce</sub>','Peace Cleric<sub>tce</sub>','Twilight Cleric<sub>tce</sub>','Spore Druid<sub>tce</sub>','Star Druid<sub>tce</sub>','Wildfire Druid<sub>tce</sub>','Psi Warrior Fighter<sub>tce</sub>','Rune Knight Fighter<sub>tce</sub>','Mercy Monk<sub>tce</sub>','Astral Self Monk<sub>tce</sub>','Glory Paladin<sub>tce</sub>','Watcher Paladin<sub>tce</sub>','Fey Wanderer Ranger<sub>tce</sub>','Swarmkeeper Ranger<sub>tce</sub>','Phantom Rogue<sub>tce</sub>','Soulknife Rogue<sub>tce</sub>','Abberant Mind Sorcerer<sub>tce</sub>','Clockwork Soul Sorcerer<sub>tce</sub>','Genie Warlock<sub>tce</sub>','Fathomless Warlock<sub>tce</sub>'];
var tceBackgrounds = [];
var tceRaces = [];

//complete
var vanClasses = ['Undead Warlock<sub>van</sub>','Spirits Bard<sub>van</sub>'];
var vanBackgrounds = ['Inheritor<sub>van</sub>','Mist Wanderer<sub>van</sub>','Spirit Medium<sub>van</sub>','Trauma Survivor<sub>van</sub>','Traveler<sub>van</sub>'];
var vanRaces = ['Dhampir<sub>van</sub>','Hexblood<sub>van</sub>','Reborn<sub>van</sub>'];

//complete
var fizClasses = ['Drakewarden Ranger<sub>fiz</sub>','Ascendant Dragon Monk<sub>fiz</sub>'];
var fizBackgrounds = [];
var fizRaces = ['Gem Dragonborn<sub>fiz</sub>'];

//complete
var ravClasses = [];
var ravBackgrounds = [];
var ravRaces = ['Symic Hybrid<sub>rav</sub>','Loxodon<sub>rav</sub>','Vedalken<sub>rav</sub>'];

//complete
var therosClasses = [];
var therosBackgrounds = ['Athlete<sub>theros</sub>'];
var therosRaces = ['Minotaur<sub>theros</sub>','Centaur<sub>theros</sub>','Satyr<sub>theros</sub>','Leonin<sub>theros</sub>'];

var gemTypes = ['Amethyst ','Crystal ','Emerald ','Sapphire ','Topaz '];
var chromaticTypes = ['Black ','Blue ','Green ','Red ','White '];
var metallicTypes = ['Brass ','Bronze ','Copper ','Gold ','Silver '];

var currClasses = [];
currClasses.push(...phbClasses);

var currRaces = [];
currRaces.push(...phbRaces);

var currBackgrounds = [];
currBackgrounds.push(...phbBackgrounds);


function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

function getRandom(ceiling) {
	/*
	var api_url = 'https://www.random.org/integers/?num=1&min=1&max='+ceiling+'&col=1&base=10&format=plain&rnd=new'
	
	try {
        let response = await fetch(api_url);
        return response.text();//.text().body;//.json();
    } catch (error) {
        console.log(error);
    }
	*/
}

function statArray() {

	if(rollType == 2)
	{
		let roll = chance.integer({min: 1, max: pointBuys.length});
		return pointBuys[roll-1];
	}
	else if(rollType == 1)
	{
		let tempArray = '(';
		for(let i = 0; i < 6; i++)
		{
			let tempStat = chance.integer({min: 1, max: 6})+chance.integer({min: 1, max: 6})+chance.integer({min: 1, max: 6});
			tempArray+=tempStat;
			if(i != 5)
			{
				tempArray+=', ';
			}
		}
		tempArray+=')';
		return tempArray;

	}
	else
	{
		let tempArray = '(';
		for(let i = 0; i < 6; i++)
		{
			let tempRolls = [];
			tempRolls.push(chance.integer({min: 1, max: 6}));
			tempRolls.push(chance.integer({min: 1, max: 6}));
			tempRolls.push(chance.integer({min: 1, max: 6}));
			tempRolls.push(chance.integer({min: 1, max: 6}));
			//console.log(tempRolls);
			tempRolls.splice(tempRolls.indexOf(Math.min(...tempRolls)),1);
			//console.log(tempRolls);
			let tempStat = tempRolls[0]+tempRolls[1]+tempRolls[2];
			tempArray+=tempStat;
			if(i != 5)
			{
				tempArray+=', ';
			}
		}
		tempArray+=')';
		return tempArray;

	}
}

function draftChars()
{
	let results = '';
	for (let i = 0; i < runs; i++)
	{
		
		
		let roll = chance.integer({min: 1, max: currRaces.length});
		let tempRace = currRaces[roll-1];

		//if Metallic, Gem, or Chromatic, find a color
		if(tempRace.includes('Dragonborn'))
		{
			roll = chance.integer({min: 1, max: 5});
			if(tempRace.includes('Gem'))
			{
				results+=gemTypes[roll-1];
			}
			else if(tempRace.includes('Metallic'))
			{
				results+=metallicTypes[roll-1];
			}
			else
			{
				results+=chromaticTypes[roll-1];
			}
		}

		results+=tempRace;
		results+=' ';
		
		//Randomly choose a class first, then roll for archetype
		//let roll = await getRandom(baseClasses.length);
		roll = chance.integer({min: 1, max: baseClasses.length});
		let tempClass = baseClasses[roll-1];
		console.log(currClasses);
		let tempOptions = filterItems(currClasses, tempClass);
		console.log(tempOptions);
		//let roll2 = await getRandom(tempOptions.length);
		roll = chance.integer({min: 1, max: tempOptions.length});
		let tempArchetype = tempOptions[roll-1];
		//console.log(tempArchetype);
		results+=tempArchetype;
		results+=' ';
		results+=statArray();
		results+=' ';
		roll = chance.integer({min: 1, max: currBackgrounds.length});
		let tempBackground = currBackgrounds[roll-1];
		results+=tempBackground;
		results+='<br>';

		document.getElementById("results").innerHTML = results;
	}
	
};

function rollTypeChange(type)
{
	rollType = type;
	console.log(rollType);
}

function runsChange()
{
	runs = document.getElementById("runs").value;
	console.log(runs);
}

function bookChange(target) {
	if (document.getElementById(target).checked) 
	  {
		  console.log(target+" is checked");
		  if(currBooks.indexOf(target) < 0)
		  {
			  currBooks.push(target);
			  selectedBooks++;
		  }
	  } else {
		console.log(target+" is unchecked");
		if(currBooks.indexOf(target) > -1)
		{
			currBooks.splice(currBooks.indexOf(target),1);
			selectedBooks--;
		}
	  }
    console.log(currBooks);
	
	//refresh pool arrays
	currClasses = [];
	currRaces = [];
	currBackgrounds = [];
	
	if(currBooks.includes('phb'))
	{
		currClasses.push(...phbClasses);
		currRaces.push(...phbRaces);
		currBackgrounds.push(...phbBackgrounds);
	}
	
	if(currBooks.includes('dmg'))
	{
		currClasses.push(...dmgClasses);
		currRaces.push(...dmgRaces);
		currBackgrounds.push(...dmgBackgrounds);
	}
	
	if(currBooks.includes('ee'))
	{
		currClasses.push(...eeClasses);
		currRaces.push(...eeRaces);
		currBackgrounds.push(...eeBackgrounds);
	}
	
	if(currBooks.includes('scag'))
	{
		currClasses.push(...scagClasses);
		currRaces.push(...scagRaces);
		currBackgrounds.push(...scagBackgrounds);
	}
	
	if(currBooks.includes('volo'))
	{
		currClasses.push(...voloClasses);
		currRaces.push(...voloRaces);
		currBackgrounds.push(...voloBackgrounds);
	}
	
	if(currBooks.includes('mord'))
	{
		currClasses.push(...mordClasses);
		currRaces.push(...mordRaces);
		currBackgrounds.push(...mordBackgrounds);
	}
	
	if(currBooks.includes('xge'))
	{
		currClasses.push(...xgeClasses);
		currRaces.push(...xgeRaces);
		currBackgrounds.push(...xgeBackgrounds);
	}
	
	if(currBooks.includes('tce'))
	{
		currClasses.push(...tceClasses);
		currRaces.push(...tceRaces);
		currBackgrounds.push(...tceBackgrounds);
		//Include Arti if using Tasha's
		baseClasses.push('Artificer');
		//console.log(baseClasses);
	}
	else
	{
		//Remove Arti
		baseClasses.splice(baseClasses.indexOf('Artificer'),1);
		//console.log(baseClasses);
	}
	
	
	if(currBooks.includes('van'))
	{
		currClasses.push(...vanClasses);
		currRaces.push(...vanRaces);
		currBackgrounds.push(...vanBackgrounds);
	}
	
	if(currBooks.includes('fiz'))
	{
		currClasses.push(...fizClasses);
		currRaces.push(...fizRaces);
		currBackgrounds.push(...fizBackgrounds);
	}

	if(currBooks.includes('rav'))
	{
		currClasses.push(...ravClasses);
		currRaces.push(...ravRaces);
		currBackgrounds.push(...ravBackgrounds);
	}

	if(currBooks.includes('theros'))
	{
		currClasses.push(...therosClasses);
		currRaces.push(...therosRaces);
		currBackgrounds.push(...therosBackgrounds);
	}
	
	console.log(currClasses);
};
