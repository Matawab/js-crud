
let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads   = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')


// console.log( title , price , taxes , ads , discount , total , 
//     count , category , submit)

// get total
    function getTotal(){
        // في حاله أن القيمة ليست فراغ نفذلي
    if(price.value != ''){
        let result= (+price.value + +taxes.value + +ads.value) 
        - +discount.value;
        total.innerHTML = result;
        total.style.background='#040'
    }
        else{
            total.innerHTML ='';
            total.style.background='#a00d02'

        }     
    }
// create product

//array افضل مكان أحفظ فيه الداتا هو 
// بيسمحلي أللوب علي الداتا بتاعتي
// != لو هي مش فاضية

let dataPro ; 
if(localStorage.product != null){ 
    dataPro = JSON.parse(localStorage.product)
}
else{
    dataPro= [];
}

submit.onclick = function(){
    //يعني كده كل ما هضغط علي الزرار هيعملي اوبجكت
    //value  وهيجيب الخاصية بتاعتها من ال 
    let newPro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    // array علشان أحفظ كل البيانات الي هدخلها في 
    //push بنستخدم 
        dataPro.push(newPro)
        localStorage.setItem( 'product', JSON.stringify(dataPro) );    
        console.log(dataPro);
        clearData();
    
}
// clear inputs
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    total.innerHTML ='';
    count.value='';
    category.value='';
}

// read
function showData(){

    let tab= ' ';
    for( let i = 0 ; i < dataPro.length ; i++ ){
        // table = dataPro[i]
        tab += `
        <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button id="update">update</button></td>
                    <td><button onclick="deletData( ${i}) " id="delete'">delete</button></td>
                </tr>
        `
    }
    document.getElementById('tbody').innerHTML = tab;
    
}
showData();

// count
// delet
function deletData(i){
    
}

// update
// search
// clean data