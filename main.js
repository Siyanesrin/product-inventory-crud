let products=[]
const pid=document.getElementById('pid')
const pname=document.getElementById('pname')
const price=document.getElementById('pprice')
const quantity=document.getElementById('pquantity')

if(localStorage.getItem('products')){
    products=JSON.parse(localStorage.getItem('products'))
    displayproducts()
}

productform.addEventListener('submit',(event)=>{
    event.preventDefault()
    const inputid=pid.value
    const inputname=pname.value
    const inputprice=price.value
    const inputquantity=quantity.value
    const index=editstatus.value

    if(inputid && inputname && inputprice && inputquantity){
        if(index===''){
            products.push({id:inputid,name:inputname,price:inputprice,quantity:inputquantity})
        }
        else{
            products[index]={id:inputid,name:inputname,price:inputprice,quantity:inputquantity}
        }
        localStorage.setItem('products',JSON.stringify(products))
        displayproducts()
    }
    else{
        alert('please complete all details')
    }

    productform.reset()
    


})

function displayproducts(){
    tablebody.innerHTML=''
    products.forEach((product,index) => {
        tablebody.innerHTML+=`
        <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.quantity}</td>
                    <td>
                        <button onclick='editDetails(${index})' class="btn btn-warning">Edit</button>
                        <button onclick='deleteDetails(${index})' class="btn btn-danger">Delete</button>
                    </td>
                </tr>
        `
    });
}

function deleteDetails(index){
    products.splice(index,1)
    localStorage.setItem('products',JSON.stringify(products))
    displayproducts()
}

function editDetails(index){
    const details=products[index]
    pid.value=details.id
    pname.value=details.name
    price.value=details.price
    quantity.value=details.quantity

    editstatus.value=index

}
