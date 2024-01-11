const prompt = require("prompt-sync")();

//suorittaa laskelmat
function laske() {
  let valinta = "";
  let num1, num2;

  //toistaa, kunnes käyttäjä päättää lopettaa
  while (valinta !== "l") {
    console.log("Valitse");
    console.log("y) yhteenlasku");
    console.log("v) vähennyslasku");
    console.log("k) kertolasku");
    console.log("j) jakolasku");
    console.log("p) potenssi");
    console.log("yk) ympyrän kehä");
    console.log("l) lopeta");
    valinta = prompt();

    //tarkistaa käyttäjän valinnan
    if (valinta === "l") {
      break;
    }
    if (valinta !== "yk") {
      num1 = parseFloat(prompt("Anna luku1: "));
      num2 = parseFloat(prompt("Anna luku2: "));

      if (valinta === "y") {
        console.log(num1 + num2);
      } else if (valinta === "v") {
        console.log(num1 - num2);
      } else if (valinta === "k") {
        console.log(num1 * num2);
      } else if (valinta === "p") {
        console.log(potenssi(num1, num2));
      } else if (valinta === "j") {
        if (num2 !== 0) {
          console.log(num1 / num2);
        } else {
          if (num1 === 0) {
            console.log("Nolla jaettuna nollalla ei määritelty.");
          } else {
            console.log("Ei voi jakaa nollalla.");
          }
        }
      }
    } else if (valinta === "yk") {
      const sade = parseFloat(prompt("Anna säde: "));
      console.log(2 * 3.14 * sade);
    }
  }
}

//laskee luvun potenssin
function potenssi(kanta, eksponentti) {
  let vastaus = 1;
  for (let i = 0; i < eksponentti; i++) {
    vastaus *= kanta;
  }
  return vastaus;
}

laske();
