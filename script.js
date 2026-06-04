let nimi = "";

while (nimi === "" || nimi === null) {
    nimi = prompt("Sisesta nimi:");
}

const url = "https://tinkr.tech/sdb/db/db";
const sein = document.getElementById("sein");
const nupp = document.getElementById("nupp");
const sisend = document.getElementById("sisend");

function laeAndmed() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            sein.innerHTML = "";
            data.forEach(item => {
                const p = document.createElement("p");
                p.innerHTML = `<strong>${item.autor}:</strong> ${item.tekst}`;
                sein.appendChild(p);
            });
        });
}

function chati() {
    if (sisend.value === "") return;

    const chat = {
        autor: nimi,
        tekst: sisend.value
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
    .then(() => {
        sisend.value = "";
        laeAndmed();
    });
}

nupp.addEventListener("click", chati);
laeAndmed();