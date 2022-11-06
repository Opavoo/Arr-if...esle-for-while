let day = prompt('Какой сегодня день недели по счету?','');
let hour = prompt('Который час без минут?', '');
let minute = prompt('Cколько минут сейчас?', '');

 if (day % 2 === 0 && day !== 7 && hour < 19) {
    alert('Да, сегодня планируется занятие.');
 } else if (day === 2 ||day === 4 || day === 7){
    alert('Завтра будет занятие.');
 } else if (day === 1 ||day === 3 || day === 5 && hour >= 21 && minute >= 30){
    alert('Сегодняшнее занятие прошло.');
 } else if (day === 1 ||day === 3 || day === 5 && hour >= 19 || hour <= 21){
    alert('Занятие идет прямо сейчас.');
 }else {
    alert('Отдыхайте.');
 }
