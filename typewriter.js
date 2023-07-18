const sentence = "hello there from lighthouse labs";
let i = 1000;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i);
  i += 1000;
}

setTimeout(() => {
  console.log();
}, i);