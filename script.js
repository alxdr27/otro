//Начало игры
let start = function () {
    //случайная цифра
    let num = parseInt(Math.random() * 100);
    //счётчик попыток
    let count = 10;
    //функция получения цифры от пользователя
    let getUserNum = function () {
        //функция проверки на цифру
        let isNumber = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        };
        
        if (count > 0) {
            //переменная получения цифры от пользователя
            let userNumber = +prompt("Угадай число от 1 до 100");
            //конец игры, если нажали отмена
            if (userNumber==false) {
                alert("До свидания");
                return;
            }
            //вычитание попыток
            count--;
            //сравнение случайной цифры с цифрой пользователя
            if (userNumber > num) {
                alert("Загаданное число меньше, у вас осталось "+count+" попыток");
                return getUserNum();
            } else if (userNumber < num) {
                alert("Загаданное число больше, у вас осталось "+count+" попыток");
                return getUserNum();
            } else if (userNumber == num) {
                alert("Поздравляю, вы угадали. Хотели бы сыграть еще?")
                return start();
            } else if (userNumber = !isNumber(userNumber)) {
                alert("Введите число");
                return getUserNum();
            }
        //Если попытки закончились    
        } else {
            let playAgain = confirm("Попытки закончились, хотите сыграть еще?");
            if(playAgain==true){
                return start();
            } else {
                alert("До свидания");
                return;
            };
        }
    }
    getUserNum();




};
start();

