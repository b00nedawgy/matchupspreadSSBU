function getWinningMmu(charlst) {
    let res = [];
    for (var i = 0; i < charlst.length; i++) {
        console.log(ssbuCharacters);
        console.log(charlst);
        //grab matchups into list
        if (charlst[i] in ssbuCharacters) {
            let chrMU = ssbuCharacters[charlst[i]];
            if (document.getElementById("include-even").checked) {
                for (var i = 0; i < chrMU['even'].length; i++) {
                    res.push(chrMU['even'][i]);
                }
            }
            if (document.getElementById("winning").checked) {
                for (var i = 0; i < chrMU['minusOne'].length; i++) {
                    res.push(chrMU['minusOne'][i]);
                }
                for (var i = 0; i < chrMU['minusTwo'].length; i++) {
                    res.push(chrMU['minusTwo'][i]);
                }
            } else {
                for (var i = 0; i < chrMU['plusOne'].length; i++) {
                    res.push(chrMU['plusOne'][i]);
                }
                for (var i = 0; i < chrMU['plusTwo'].length; i++) {
                    res.push(chrMU['plusTwo'][i]);
                }
            }
        } else {
            console.log('SMASH CHARACTER NOT FOUND.');
        }
    }
    console.log(res);
    return res;
}

var chars = [];

function printBtn() {
    //character buttons
    for (var i = 0; i < list_of_characters.length; i++) {
        let name = list_of_characters[i];
        var btn = document.createElement("button");
        var img = 'charsl/' + name + '.png';
        btn.setAttribute("id", name);
        btn.style.backgroundImage = 'url(' + img + ')';
        btn.addEventListener('click', () => {
            chars.push(name);
            console.log(name);
            console.log(chars);
            let b = document.getElementById(name);
            b.style.filter = `brightness(${50}%)`;
            b.disabled = true;
        });
        document.getElementById("player_characters").appendChild(btn);
    }

    //reset button
    var rstbtn = document.getElementById("reset-button");
    rstbtn.addEventListener('click', () => {
        for (var i = 0; i < list_of_characters.length; i++) {
            let name = list_of_characters[i];
            let b = document.getElementById(name);
            b.disabled = false;
            b.style.filter  = `brightness(${100}%)`;
            document.getElementById("mmu-" + name).style.filter = `brightness(${100}%)`;
        }
        chars = [];
        console.log(chars);
    });

    //confirm button
    var cfmbtn = document.getElementById("confirm-button");
    cfmbtn.addEventListener('click', () => {
        let winLst = getWinningMmu(chars);
        for (var i = 0; i < list_of_characters.length; i++) {
            let name = list_of_characters[i];
            let b = document.getElementById(name);
            if (!winLst.includes(name)) {
                document.getElementById("mmu-" + name).style.filter = `brightness(${50}%)`;
            }
            if (chars.includes(name)) {
                b.style.filter = `brightness(${100}%)`;
            } else {
                b.style.filter = `brightness(${50}%)`;
            }
        }
    });
}
