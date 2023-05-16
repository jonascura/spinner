const animation = ['|', '/', '-', '\\', '|'];
let delay = 100;
for (let i in animation) {
  setTimeout(() => {
    process.stdout.write(`\r${animation[i]}   `);
  }, delay);
  delay += 200;
}