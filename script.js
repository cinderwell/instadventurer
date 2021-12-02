var debug = false;
var runs = 10;
var rollType = 0;

var currBooks = ['phb'];

var selectedBooks = 1;

var baseClasses = ['Wizard','Warlock','Cleric','Druid','Monk','Ranger','Paladin','Sorcerer','Fighter','Rogue','Bard','Barbarian'];
var tempBaseClasses = [];

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

var xgeClasses = [];
var xgeBackgrounds = [];
var xgeRaces = [];

var tceClasses = ['Bladesinger Wizard<sub>phb</sub>'];
var tceBackgrounds = [];
var tceRaces = [];

//complete
var vanClasses = [];
var vanBackgrounds = [];
var vanRaces = ['Dhampir<sub>van</sub>','Hexblood<sub>van</sub>','Reborn<sub>van</sub>'];

var fizClasses = [];
var fizBackgrounds = [];
var fizRaces = [];

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

async function getRandom(ceiling) {
	var api_url = 'https://www.random.org/integers/?num=1&min=1&max='+ceiling+'&col=1&base=10&format=plain&rnd=new'
	
	try {
        let response = await fetch(api_url);
        return response.text();//.text().body;//.json();
    } catch (error) {
        console.log(error);
    }
}

function statArray(mode) {
}

async function draftChars()
{
	for (let i = 0; i < runs; i++)
	{
		//if Metallic or Chromatic, find a color
		
		//Randomly choose a class first, then roll for archetype
		let roll = await getRandom(baseClasses.length);
		let tempClass = baseClasses[parseInt(roll)-1];
		let tempOptions = filterItems(currClasses, tempClass);
		let roll2 = await getRandom(tempOptions.length);
		let tempArchetype = tempOptions[parseInt(roll2)-1];
		console.log(tempArchetype);
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
	var currClasses = [];
	var currRaces = [];
	var currBackgrounds = [];
	
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
	
	console.log(currClasses);
};
