export const columns = [
    { name: 'id', title: 'ID' },
    { name: 'firstname', title: 'Firstname' },
    { name: 'middlename', title: 'Middlename' },
    { name: 'lastname', title: 'Lastname' },
    { name: 'weight', title: 'Weight' },
    { name: 'city', title: 'City' },
    { name: 'secondCity', title: 'City 2' },
    { name: 'thirdCity', title: 'City 3' },
    { name: 'fourthCity', title: 'City 4' },
    { name: 'street', title: 'Street' },
    { name: 'secondStreet', title: 'Street 2' },
    { name: 'thirdStreet', title: 'Street 3' },
    { name: 'fourthStreet', title: 'Street 4' },
    { name: 'confirmed', title: 'Confirmed' },
];

const firstNames = ["Poppy", "Bella", "Terry", "Lola", "Catherine", "Michelle", "Meghan", "Liberty", "Daniella", "Sharon", "Carmen", "Tabitha", "Kyla", "Felicity", "Holly", "Anisa", "Josephine", "Elsa", "Savannah", "Emmie", "Florence", "Summer", "Leyla", "Kimberly", "Katelyn", "Olive", "Amira", "Kye", "Cassie", "Antonia", "Jodie", "Maisie", "Claudia", "Halima", "Edith", "Bethany", "Shania", "Natasha", "Lana", "Ellen", "Rebekah", "Diana", "Nadia", "Angela", "Haleema", "Velma", "Harley", "Nicole", "Minnie", "Sofia", "Joyce", "Jasmine", "Kira", "Ashley", "Sadie", "Pearl", "Layla", "Olivia", "Joanna", "Vanessa", "Anya", "Aiden", "Stacey", "Ciara", "Gabriella", "Veronica", "Heidi", "Natalie", "Tamara", "Pippa", "Faith", "Millie", "Ray", "Stella", "Lucie", "Annabelle", "Leila", "Zoe", "Kiera", "Saskia", "May", "Barbara", "Francis", "Spencer", "Penelope", "Sara", "Kaitlyn", "Morgan", "Madeline", "Amy", "Lee", "Emelia", "Madeleine", "Felix", "Aleena", "Esme", "Elle", "Hafsah", "Rosemary", "Jacqueline", "Herman", "Ashley", "Ahmad", "Callum", "Bradley", "Antonio", "Ahmed", "Violet", "Sebastian", "William", "Willard", "Osian", "Isaiah", "Patrick", "Kane", "Joe", "Alex", "Howard", "Richard", "Erik", "Yusuf", "Dewey", "Melvin", "Kieron", "Anas", "Jim", "Sana", "Euan", "Keaton", "Julia", "Floyd", "Andrew", "Lucas", "Farhan", "Mason", "Nathan", "Alan", "Miles", "James", "Kian", "Keith", "Eliza", "Faith", "Nadia", "Kyran", "Kira", "Sonny", "Fred", "Terry", "Jake", "Ryan", "Wilfred", "Anita", "Bilal", "Marcus", "Kristian", "Usman", "Zack", "Tia", "Aoife", "Allen", "Erica", "Bailey", "Zak", "Leroy", "Hugo", "Mathew", "Taylor", "Jesse", "Matteo", "Scott", "Tony", "Thomas", "Junior", "Tomos", "Carmen", "Archie", "Dean", "Abraham", "Darren", "Matthew", "Robin", "Muhammed", "Albert", "Josh", "Jacob", "Alfred", "Adrian", "Gary", "Zakaria", "Kyle", "Angus", "Hector", "Aidan", "Bruce", "Georgie", "Charlie", "Michael", "Nora", "Mark"]
const lastNames = ["Hill", "Morton", "Hutchinson", "Brooks", "Montgomery", "Jensen", "Rogers", "Mccarthy", "O'Quinn", "Gardner", "Booth", "Pham", "Austin", "Jackson", "Day", "Ayala", "Page", "Vazquez", "Wang", "Rice", "Wolf", "Abbott", "Mcguire", "Aguilar", "Mckinney", "Henry", "Baker", "Ross", "Lowe", "Cole", "Arnold", "Pratt", "Rowe", "Cummings", "Frank", "Clark", "Clayton", "Wilson", "Hammond", "Byrne", "Sweeney", "Porter", "Aguirre", "Robles", "Beck", "Harvey", "Alvarez", "Medina", "Benson", "Franklin", "Bass", "Lloyd", "Allen", "Hughes", "Lyons", "Howell", "Flores", "Harris", "Brady", "Dominguez", "Young", "Tate", "Rivera", "Luna", "Rios", "Bird", "Becker", "Grant", "Jennings", "Bell", "Miller", "Stevens", "Mccoy", "English", "Williamson", "Lynch", "Gough", "Waters", "Newman", "Ingram", "Vaughn", "Williams", "Estrada", "Edwards", "Scott", "Griffiths", "Mack", "Solis", "Price", "Lambert", "Roberts", "Munoz", "Graham", "Garza", "Poole", "Dunn"]
const cities = ["Prince Apwson", "East Kalbtyne", "La Heath", "Cape Stonmil-In-Vernles", "Ngeles", "Princecayhill", "Stonebrayfra", "Satannwemland", "Great Ridgetuck Upon Bideck", "Royal Orgatstian", "Yorkshkosh", "Bellbath Lake", "Moose Headsmidper", "Luistor", "Grand Stairsan Aux Laieni", "Prince Nayork", "Whawellchi", "La Priceldezmyard", "Santa Plainsdo", "Sterdu Lake", "Nortel", "Las Gran", "Plainesmi Under Stalbergh", "Red Zouchst", "Red Elwestmsworth", "Moose Gafnu", "Moose Don", "Red Dgarcloud", "Townkuuj", "Rismac", "Mattwichhill", "Saint Xmundpe", "Brook", "Saint Sett", "St Tastan", "Fort Oaki", "Fort Thtonber Aux Boushore", "East Rellkurtil", "Saint Wellsru", "                                         Prince Winner-In-Hambu", "Park Chrimeonsed", "                                            St Seaa", "Park Saintsmallin", "San Magver With Sopward", "New Meadcliffe", "La Kyafhambar", "Grand Bridgelittster", "Bridteoli", "La Weugan", "Dulmas", "Chismi", "                                      Red Oil", "Ntwichbert Upon Springswoods", "Clunbar With Gonmos", "West Hullnau", "Arbigton", "Fripothens", "Grand Lipedgware", "West Nish", "Clirnahen", "Cliffelyneley", "North Wilchil-In-Stacherntwood", "Whitbu Hills", "Prince Shitow", "Watclahead", "Cape Thesred", "Fort Wimstockchope", "Fort Vootown", "Saint Greatmy", "Royal Keslin", "North Pidcke", "Mount Nachamking", "Ningty", "Saint Warhel", "Suknob", "Hatedge", "Smetjames City", "North Niexas", "West Salboat", "Leifern", "Mount Spoutrines", "Ting", "West Qui", "                                        Fort Focra", "Lodo", "Truthwkingeleigh", "Bluffslein", "Port Lompbridge", "Wleworth", "                                    St Rockthbu", "Port Charlnet-In-Louisechulm", "                                                                 Bertckylandwick", "                                               Wegranwler", "Mount Vithag Du Glenshing", "Safgrea", "North Buglosba", "West Rstonencolngus", "West Chlade", "Thamesko", "Twhistross Aux Kmulrdon"]
const streets = ["Sandown Meadows", "Villiers Quadrant", "Parliament Ground", "David Square", "Saxon Hey", "Lion Causeway", "Daffodil Court", "Sandhurst Valley", "Jasmine Park", "Beacon Nook", "Wiltshire Paddock", "Cuckoo Mews", "Connaught Walk", "Devon Oval", "Palmerston Road", "Buckingham Grove", "Waters Oval", "Larch Dell", "Crane Acres", "Braeside Hollow", "Oriel Village", "Hanover Court", "Star Glade", "Upper Covert", "Bedale Market", "St Helens Courtyard", "Damson Market", "Inkerman Elms", "Copse Croft", "Alpine Bank", "New Courtyard", "Green Rowans", "Middleton Brambles", "Arundel Glebe", "Fair Birches", "Sheldon Brambles", "Mendip Corner", "Maidstone Moor", "Harvest Lanes", "Ashbourne Nook", "Napier Path", "Lion Fairway", "Beeston Ride", "Dryden Quay", "Carnoustie Ride", "King's Acres", "Hall Hollies", "Belvedere Broadway", "Severn Pastures", "Glover Fields", "Gas Down", "Osprey Moor", "Pipers Firs", "Ascot Common", "Lynmouth Square", "Rodney Dale", "Lime Tree Yard", "Cavendish Mews", "Ward Firs", "Barclay Cedars", "Moorfield Garth", "Beech East", "Beck Gardens", "Longlands Hall", "Hoylake Strand", "Regents Orchards", "Harvest Trees", "Deacon Isaf", "Colne Lawns", "Cobham Moor", "Sydney Fairway", "Chaucer Drive", "Meadows Way", "King Mill", "New Green", "Mortimer Oval", "Leicester Pleasant", "St Andrews Garth", "Brickfield Link", "Stockton Manor", "Heathcote Lodge", "Shepherd Acres", "Kirkton Brae", "Cherwell Birches", "Eagle Field", "Carnoustie Newydd", "Quebec Passage", "Morris Farm", "Ribble Approach", "Trent Rowans", "Woodcock Warren", "Limes Road", "Cherrywood Crest", "Keble Lawns", "Whitefield Banks", "Swallow Mount", "Park Garth", "Lynmouth Promenade", "Marston Court", "Old School Loan"]

function pickRandom(elements: any[]): any {
    return elements[Math.floor(Math.random() * elements.length)];
}

function row(id: string, amountChildren: number) {
    return {
        id,
        firstname: pickRandom(firstNames),
        middlename: pickRandom(firstNames),
        lastname: pickRandom(lastNames),
        weight: Math.floor(Math.random() * 100),
        city: pickRandom(cities),
        secondCity: pickRandom(cities),
        thirdCity: pickRandom(cities),
        fourthCity: pickRandom(cities),
        street: pickRandom(streets),
        secondStreet: pickRandom(streets),
        thirdStreet: pickRandom(streets),
        fourthStreet: pickRandom(streets),
        confirmed: Math.random() > 0.5 ? 'Yes' : 'No',
        children: generateRows(id, amountChildren, 0)
    }
}

function generateRows(idPrefix: string, amount: number, amountChildren: number): any {
    if (amount === 0) {
        return null
    }
    const rows = []
    for (let i = 0 ; i<amount ; i++) {
        rows.push(row(idPrefix + "_" + i.toString(), amountChildren))
    }
    return rows
}

export const rows = generateRows("", 30, 10)