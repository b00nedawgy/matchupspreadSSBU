function printImgs() {
    //characters
    for (var i = 0; i < list_of_characters.length; i++) {
        let name = list_of_characters[i];
        var btn = document.createElement("img");
        var img = 'charsl/' + name + '.png';
        btn.setAttribute("id", "mmu-" + name);
        btn.src = img;
        document.getElementById("mmu_characters").appendChild(btn);
    }
}
