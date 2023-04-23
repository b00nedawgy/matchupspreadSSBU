const list_of_characters = ['Mario', 'Donkey-Kong', 'Link', 'Samus', 'Dark-Samus', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Luigi', 'Ness', 'Captain-Falcon', 'Jigglypuff', 'Peach', 'Daisy', 'Bowser', 'Ice-Climbers', 'Sheik', 'Zelda', 'Dr-Mario', 'Pichu', 'Falco', 'Marth', 'Lucina', 'Young-Link', 'Ganondorf', 'Mewtwo', 'Roy', 'Chrom', 'Mr-Game-Watch', 'Meta-Knight', 'Pit', 'Dark-Pit', 'Zero-Suit-Samus', 'Wario', 'Snake', 'Ike', 'Pokemon-Trainer', 'Diddy-Kong', 'Lucas', 'Sonic', 'King-Dedede', 'Olimar', 'Lucario', 'R.O.B.', 'Toon-Link', 'Wolf', 'Villager', 'Mega-Man', 'Wii-Fit-Trainer', 'Rosalina-Luma', 'Little-Mac', 'Greninja', 'Mii-Brawler', 'Mii-Swordfighter', 'Mii-Gunner', 'Palutena', 'Pac-man', 'Robin', 'Shulk', 'Bowser-Jr', 'Duck-Hunt', 'Ryu', 'Ken', 'Cloud', 'Corrin', 'Bayonetta', 'Inkling', 'Ridley', 'Simon', 'Richter', 'King-K-Rool', 'Isabelle', 'Incineroar', 'Piranha-Plant', 'Joker', 'Hero', 'Banjo-Kazooie', 'Terry', 'Byleth', 'Min-Min', 'Steve', 'Sephiroth', 'Pyra-Mythra', 'Kazuya', 'Sora'];

var chars = [];

function printBtn() {
    //character buttons
    for (var i = 0; i < list_of_characters.length; i++) {
        let name = list_of_characters[i];
        var btn = document.createElement("button");
        var img = 'charsl/' + name + '.png';
        btn.setAttribute("id", name);
        btn.style.backgroundImage = 'url(' + img + ')';
        btn.addEventListener('click', function() {
            chars.push(name);
            console.log(name);
            console.log(chars);
        });
        document.getElementById("player_characters").appendChild(btn);
    }

    //reset button
    var rstbtn = document.getElementById("reset-button");
    rstbtn.addEventListener('click', function() {
        chars = [];
        console.log(chars);
    });
}
