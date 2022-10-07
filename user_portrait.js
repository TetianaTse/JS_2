let age = parseInt(prompt('Какой Твой год рождения?'));
let city = prompt('В каком городе ты живешь?');
let sport = prompt('Какой твой любимый вид спорта?');

age = 2022 - age;
let messageCity;
let messageSport;
let messageAge;

messageAge = age > 0 && age < 110 ? 'Ваш возраст ' + age + '! ': 'Жаль, что Вы не захотели ввести свой возраст...'

if (city === 'Киев') {
    messageCity = 'Ты живешь в столице Украины!';
} else if (city === 'Лондон') {
    messageCity = 'Ты живешь в столице Великобритании!';
} else if (city === 'Вашингтон') {
    messageCity = 'Ты живешь в столице США!';
} else if (city === null) {
    messageCity = 'Жаль, что Вы не захотели ввести свой город...';
} else {
    messageCity = 'Ты живешь в городе ' + city + '! ';
}

if (sport === 'Баскетбол') {
    messageSport = 'Круто! Хочешь стать как Майкл Джордан?';
} else if (sport === 'Футбол') {
    messageSport = 'Круто! Хочешь стать как Криштиану Роналду?';
} else if (sport === 'Теннис') {
    messageSport = 'Круто! Хочешь стать как Рафаэль Надаль?';
} else if (sport === null) {
    messageSport = 'Жаль, что Вы не захотели ввести свой любимый вид спорта...';
} else {
    messageSport = 'Твой любимый вид спорта ' + sport + '! ';
}

alert(messageAge + ' ' + messageCity + ' ' + messageSport);