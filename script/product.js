let productdata=JSON.parse(localStorage.getItem("productlist"))||[];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

displayProduct(productdata)

function displayProduct(el){
    // console.log(el)

    let box=document.getElementById("product")
    box.innerHTML=null;

    let card=document.createElement("div")
    card.setAttribute("id","cards")
    card.style="width:900px;display:flex;height:600px"

    let left=document.createElement("div")
    left.setAttribute("id","left")

    let right=document.createElement("div")
    right.setAttribute("id","right")
    right.style="width:500px;height:600px"

    let image=document.createElement("img")
    image.src=el.images[0]
    image.style="width:400px;height:500px"
   

    let categ=document.createElement("p")
    categ.innerText=el.category
    categ.style="font-size:30px"

    let tit=document.createElement("p")
    tit.innerText=el.title
    tit.style="font-size:30px"

    let price=document.createElement("p")
    price.innerText=el.original_price
    price.style="font-size:20px"
       
    let discount=document.createElement("h4")
    discount.innerText=el.discounted_price
    discount.style="font-size:30px"
    

    let rat=document.createElement("h3")
    rat.innerText=el.rating
    

     let addcart=document.createElement("button")
     addcart.setAttribute("id","add")
     addcart.innerText="Add To Cart"


     let size=document.createElement("p")
    size.innerText=el.sizes
    size.style="font-size:30px;margin-top:20px"
    
     addcart.addEventListener("click",function(){
     
     cart.push(productdata)
     localStorage.setItem("cart",JSON.stringify(cart))
     alert("Item Added To Cart Successfully")

     })

     left.append(image)
     right.append(categ,tit,price,discount,rat,addcart,size)
   
     card.append(left,right)
     box.append(card)
}
