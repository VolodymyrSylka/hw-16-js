function exploreMaze(mazeSize) {
    let currentPosition = 1;

    
    while (currentPosition < mazeSize) {
       
        if (currentPosition % 3 === 0) {
            console.log(`Обхід перешкоди на позиції ${currentPosition}, рух вперед`);
        } else {
            console.log(`Рух вперед до позиції ${currentPosition}`);
        }
        currentPosition++;
    }

   
    console.log("Досягнуто кінця лабіринту, повернення назад");

    do {
        currentPosition--;
        
        console.log(`Рух назад до позиції ${currentPosition}`);
    } while (currentPosition > 1);
}


exploreMaze(10);