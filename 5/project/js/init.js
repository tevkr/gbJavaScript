let products = [
    new Product('Точилка Wild круглая', 4.99, 'Для заточки карандашей'), 
    new Product('Набор ластиков Space фигурных', 9.99, 'Для удаления карандашных надписей с бумаги'), 
    new Product('Линейка Wild 15см', 4.99, 'Для письма, черчения'), 
    new Product('Точилка Princess круглая', 4.99, 'Для заточки карандашей'),
    new Product('Точилка Wild прямоугольная', 9.99, 'Для заточки карандашей'),
    new Product('Набор СПЕЙС чертежный малый', 19.99, 'Для письма, черчения'),
];
var basket = new Basket([]);
document.getElementById('header-basket').innerText = 'Корзина пуста';
document.getElementById('prompt').style.display = 'none';
document.getElementById('basket-form').style.display = 'none';