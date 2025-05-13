// Importieren des readline-Moduls, um Benutzereingaben zu lesen
const readline = require('readline');

// Erstellen eines Interfaces für Eingabe und Ausgabe
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Eine Frage an den Benutzer stellen
rl.question("Bitte gib Zahlen mit Leerzeichen ein: ", function(input) {
  // Die Eingabe wird in ein Array von Zahlen umgewandelt
  const numbers = input.split(' ').map(Number);

  console.log("Gerade Zahlen:");
  
  // Über jedes Element iterieren und prüfen, ob es gerade ist
  numbers.forEach(num => {
    if (num % 2 === 0) { // Wenn teilbar durch 2 → gerade Zahl
      console.log(num); // Ausgabe der geraden Zahl
    }
  });

  // Schließen des readline-Interfaces
  rl.close();
});
