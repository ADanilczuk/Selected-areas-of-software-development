process.stdin.setEncoding('utf8');

console.log("Wpisz swoje imię");
process.stdin.on('readable', () => {
    const name = process.stdin.read();
    if (name !== null) {
        process.stdout.write(`Witaj ${name}`);
        process.exit();
  }
});
