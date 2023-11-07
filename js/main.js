const keresettJelek = ['.', ',', ':', ';', '!', '?', '-']

function counter(inputText) {
    let szamlalo = 0;

    for (const jel of inputText) {
        if(keresettJelek.includes(jel)) {
            szamlalo++;
        }
    }

    return szamlalo;
}

