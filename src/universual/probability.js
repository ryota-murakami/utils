function rand() {
  return Math.random() * 100
}

for (let i = 0; i < 10000; i++) {
  console.log(rand())
}
