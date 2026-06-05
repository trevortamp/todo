let nimi = prompt("Sisesta nimi:");

while (nimi == "" || nimi == null) {
    nimi = prompt("Sisesta nimi:");
}

let url = "https://tinkr.tech/sdb/db/db";

let sein = document.getElementById("sein");
let nupp = document.getElementById("nupp");
let sisend = document.getElementById("sisend");

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {

        for (let sonum of data) {
            let p = document.createElement("p");
            p.textContent = sonum.autor + ": " + sonum.tekst;
            sein.appendChild(p);
        }

    });

nupp.onclick = function() {

    if (sisend.value == "") {
        return;
    }

    let uusSonum = {
        autor: nimi,
        tekst: sisend.value
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(uusSonum)
    });

    let p = document.createElement("p");
    p.textContent = nimi + ": " + sisend.value;
    sein.appendChild(p);

    sisend.value = "";
};
