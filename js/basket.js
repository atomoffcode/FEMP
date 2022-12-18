function GetItems() {
    let basket = JSON.parse(localStorage.getItem('bproducts'));

    if(basket.length == 0) {
        // document.getElementById('empty').classList.remove('d-none')
        // document.getElementById('btn_delete').style.display = 'none'
        // document.getElementById('ttl').style.display = 'none'
        document.getElementById('boxes').style.display = 'none'
    }
    else{
        document.getElementById('boxes').style.display = 'flex'

        // document.querySelector('.table').classList.remove('d-none')
        let html = '';
        let total = 0;
        let tcount = 0;
        basket.forEach(element => {
            html += `
            <div class="productsrow">
                            
                    <div class="drink">
                        <div class="mininavs">
                            <div class="bag">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </div>
                            <div class="heart">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div class="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                        <div class="discount"><span>-10%</span></div>
                        <div class="hot"><span>Hot</span></div>
                        <img class="sec" src="${element.HoverImage}">
                        <img class="fst" src="${element.Image}" alt="">
                    </div>
                    <div class="srt">
                    <div class="top">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>{<span>1</span> review)</p>
                        
                    </div>
                    <a class="smltxt" href="#">${element.Title}</a>
                    <div class="bottom"><p>$<span>${element.Price}</span>.00</p></div>
                    <div class="tb d-flex justify-content-between">
                        <div class="lft">
                            <span class="bin" href="#">BUY IT NOW</span>
                        <i class="fa-regular fa-heart"></i>
                        </div>
                        <span class=" d-none">${element.Id}</span>
                        <div class="counter d-flex align-items-center">
                            <p>$<span>${element.Count*element.Price}</span>.00</p>
                            <i class="fa-solid fa-minus" onclick="Minus(this)"></i>
                            <span>${element.Count}</span>
                            <i class="fa-solid fa-plus" onclick="Plus(this)"></i>
                            
                        </div>
                        </div>
                    </div>
                    <span class=" d-none">${element.Id}</span>
                    <div class="xbtn">
                        <i class="fa-solid fa-xmark" onclick="Del(this)"></i>
                    </div>
                </div>`;
            tcount += element.Count
            total += (element.Count*element.Price)
        });
        document.querySelector('.bl-bottom').innerHTML = html
        document.querySelector('.totalfirst span').innerHTML = tcount
        document.querySelector('.totalsecond span').innerHTML = total
        

    }
    

   

}

GetItems()

document.querySelector('.bl-top p').onclick = function(){
    // localStorage.removeItem('bproducts')
    localStorage.setItem('bproducts',JSON.stringify([]))
    location.reload();
    GetItems();
} 

var Del = function(x){
    let basket = JSON.parse(localStorage.getItem('bproducts'));
    console.log(x.parentElement.previousElementSibling.innerHTML)
    let min = x.parentElement.previousElementSibling.innerHTML;
    let exist_prod = basket.find(pr => pr.Id === min);
    let ubasket = basket.filter(function(obj){ 
        return obj.Id != exist_prod.Id;
    });
    localStorage.setItem('bproducts',JSON.stringify(ubasket));
    GetItems()
}

var Minus = function(x){
    let basket = JSON.parse(localStorage.getItem('bproducts'));
    console.log(x.parentElement.previousElementSibling.innerHTML)
    let min = x.parentElement.previousElementSibling.innerHTML;
        
    if(basket.length>1){
        let exist_prod = basket.find(pr => pr.Id === min);
        if(Number(exist_prod.Count)>1){
            exist_prod.Count -=1;
            localStorage.setItem('bproducts',JSON.stringify(basket));
        }else{
        let ubasket = basket.filter(function(obj){ 
            return obj.Id != exist_prod.Id; 
        });
        localStorage.setItem('bproducts',JSON.stringify(ubasket));
            
    }
    }else{
        let exist_prod = basket.find(pr => pr.Id === min);
    if(Number(exist_prod.Count)>1){
        exist_prod.Count -=1;
        localStorage.setItem('bproducts',JSON.stringify(basket));
    }else{
        localStorage.removeItem('bproducts')
        location.reload();
    }
    }
    GetItems()
}

var Plus = function(x){
    let basket = JSON.parse(localStorage.getItem('bproducts'));
    console.log(x.parentElement.previousElementSibling.innerHTML)
    let idd = x.parentElement.previousElementSibling.innerHTML
    
    let exist_prod = basket.find(pr => pr.Id === idd);
    exist_prod.Count += 1
    localStorage.setItem('bproducts',JSON.stringify(basket));
    GetItems()
}