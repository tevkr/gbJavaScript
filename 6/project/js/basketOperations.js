function addPurchase(productId) {
    var purchase = new Purchase(products[productId], 1);
    basket.addPurchase(purchase);
    changeHeaderBasket();
}
function delPurchase(purchaseId) {
    basket.removePurchase(purchaseId);
    changeHeaderBasket();
    updateBasket();
}
var headerBasket = document.getElementById('header-basket');
var prompt = document.getElementById('prompt');
var basketForm = document.getElementById('basket-form');
var exitButton = document.getElementById('basket-exit-button');
headerBasket.addEventListener("click", () => {
	showBasket();
});
exitButton.addEventListener("click", () => {
	closeBasket();
});
function changeHeaderBasket() {
    if (basket.getCountOfProducts() != 0)
    {
        headerBasket.innerText = 'В корзине: ' + basket.getCountOfProducts() + ' товаров на сумму ' + basket.calculatePrice() + ' рублей.';
    }
    else
    {
        headerBasket.innerText = 'Корзина пуста';
    }
}

function showBasket() {
    prompt.style.display = 'flex';
    basketForm.style.display = 'block';
    updateBasket();
}

function updateBasket() {
    if (basket.getCountOfPurchases() != 0) {
        document.getElementById('basket-next-button-1').style.display = 'block';
        var table = document.getElementById('basket-purchases');
        document.getElementById('basket-title-1').innerText = 'В корзине: ' + basket.getCountOfProducts() + ' товаров на сумму ' + basket.calculatePrice() + ' рублей.';
        table.innerHTML = '';
        var tbody = document.createElement('tbody');
        var row = document.createElement('tr');
        var th1 = document.createElement('th');
        th1.innerText = '#';
        var th2 = document.createElement('th');
        th2.innerText = 'Название';
        var th3 = document.createElement('th');
        th3.innerText = 'Количество';
        var th4 = document.createElement('th');
        th4.innerText = 'Цена';
        var th5 = document.createElement('th');
        th5.innerText = 'Удалить';
        row.append(th1);
        row.append(th2);
        row.append(th3);
        row.append(th4);
        row.append(th5);
        tbody.append(row);
        for (let index = 0; index < basket.getCountOfPurchases(); index++) {
            var row = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.innerText = index + 1;
            var td2 = document.createElement('td');
            td2.innerText = basket.getPurchases()[index].getProduct().getName();
            var td3 = document.createElement('td');
            td3.innerText = basket.getPurchases()[index].getCount();
            var td4 = document.createElement('td');
            td4.innerText = basket.getPurchases()[index].getProduct().getPrice() * basket.getPurchases()[index].getCount();
            var td5 = document.createElement('td');
            var td5button = document.createElement('button');
            td5button.innerText = 'Удалить';
            td5button.onclick = function(event) { delPurchase(basket.getPurchases()[index].getId()); };
            td5.append(td5button);
            row.append(td1);
            row.append(td2);
            row.append(td3);
            row.append(td4);
            row.append(td5);
            tbody.append(row);
        }
        table.append(tbody);
        var totalPrice = document.getElementById('prompt-total-price');
        totalPrice.style.display = 'block';
        totalPrice.innerText = 'Итоговая стоимость: ' + basket.calculatePrice() + '₽';
    }
    else {
        document.getElementById('basket-next-button-1').style.display = 'none';
        var table = document.getElementById('basket-purchases');
        table.innerHTML = '';
        document.getElementById('prompt-total-price').style.display = 'none';
        document.getElementById('basket-title-1').innerText = 'Корзина пуста';
    }
}

function closeBasket() {
    prompt.style.display = 'none';
    basketForm.style.display = 'none';
}