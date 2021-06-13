catalog = document.getElementById('catalog');
catalog.className = 'catalog items-parent';
for (let index = 0; index < products.length; index++) {
    adaptiveDiv = document.createElement('div');
    adaptiveDiv.className = 'item-ch item-3-xl item-4-l item-6-t item-6-m2 item-12-m1 mb-20';

    productDiv = document.createElement('div');
    productDiv.className = 'product';

    productTitleDiv = document.createElement('div');
    productTitleDiv.className = 'product-title';
    productTitleDiv.innerText = products[index].getName();

    productImgDiv = document.createElement('div');
    productImgDiv.className = 'product-img';
    
    productImg = document.createElement('img');
    productImg.src = 'img/' + products[index].getId() + '.png';
    productImg.alt = 'product-img';

    productDescriptionDiv = document.createElement('div');
    productDescriptionDiv.className = 'product-description';
    productDescriptionDiv.innerText = products[index].getDescription();
    
    productPriceDiv = document.createElement('div');
    productPriceDiv.className = 'product-price';
    productPriceDiv.innerText = products[index].getPrice() + '₽';

    productButton = document.createElement('button');
    productButton.onclick = function(event) { addPurchase(index); };
    productButton.innerText = 'В корзину';

    productImgDiv.append(productImg);

    productDiv.append(productTitleDiv);
    productDiv.append(productImgDiv);
    productDiv.append(productDescriptionDiv);
    productDiv.append(productPriceDiv);
    productDiv.append(productButton);

    adaptiveDiv.append(productDiv);

    catalog.append(adaptiveDiv);
}

