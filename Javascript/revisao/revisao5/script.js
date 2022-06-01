const printMessage = (message) => {
    console.log(message);
}

for (let i=0; i<100; i++){
    i % 15 == 0 ? printMessage('Fizz Buzz') : i % 5 == 0 ? printMessage('Buzz') : i % 3 == 0 ? printMessage('Fizz') : printMessage(i);
}