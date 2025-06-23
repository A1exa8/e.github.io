// Можно добавить интерактивность позже
console.log('Сайт путеводителя загружен!');

// Пример: можно добавить обработчик для кнопок "Подробнее"
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Переход к подробной информации о городе');
    });
});