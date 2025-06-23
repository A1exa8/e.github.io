document.addEventListener('DOMContentLoaded', function() {
    // Инициализация карты
    const map = L.map('world-map').setView([20, 0], 2);
    
    // Добавляем слой с картой
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Получаем данные о городах из DOM (можно также через AJAX)
    const cityCards = document.querySelectorAll('.city-card');
    
    // Добавляем маркеры для каждого города
    cityCards.forEach(card => {
        const cityName = card.querySelector('h3').textContent;
        
        // В реальном проекте нужно получать координаты из модели города
        // Здесь просто пример для нескольких известных городов
        const cityCoordinates = getCityCoordinates(cityName);
        
        if (cityCoordinates) {
            L.marker(cityCoordinates)
                .addTo(map)
                .bindPopup(cityName);
        }
    });
});

// Вспомогательная функция (в реальном проекте координаты должны быть в модели)
function getCityCoordinates(cityName) {
    const cities = {
        'Париж, Франция': [48.8566, 2.3522],
        'Барселона, Испания': [41.3851, 2.1734],
        'Рим, Италия': [41.9028, 12.4964],
        'Нью-Йорк, США': [40.7128, -74.0060],
        'Токио, Япония': [35.6762, 139.6503]
    };
    
    return cities[cityName];
}