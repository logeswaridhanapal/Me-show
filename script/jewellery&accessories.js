async function getdata(){

    let res=await fetch(`https://meesho-backend-3037.onrender.com/products?category=Jewellery`)
    let data=await res.json()
    display(data)
}

getdata()

function display(data){
    
    let container=document.getElementById("jewelleryaccessories")
    container.innerHTML=null;
 
    data.forEach((el,index)=>{
        let card=document.createElement("div")
        card.setAttribute("id","cards")
        card.addEventListener("click",function(){

            localStorage.setItem("productlist",JSON.stringify(data[index]))
            window.location.href="product.html"
         })
    

        let image=document.createElement("img")
        image.src=el.images[0]

        let categ=document.createElement("p")
        categ.innerText=el.category

        let tit=document.createElement("p")
        tit.innerText=el.title

        let price=document.createElement("p")
        price.innerText=el.original_price
       

        let discount=document.createElement("h4")
        discount.innerText=el.discounted_price
        discount.setAttribute("id","price")

        let rat=document.createElement("h3")
        rat.innerText=el.rating
        rat.setAttribute("id","rat")

        card.append(image,categ,tit,price,discount,rat)
        container.append(card)
    });

}



async function high(){
   
    let res=await fetch(`https://meesho-backend-3037.onrender.com/products?category=Jewellery&_sort=discounted_price&_order=desc`)
     
    let soln=await res.json()

    console.log(soln)

    display(soln)
}

async function low(){

    let res=await fetch(`https://meesho-backend-3037.onrender.com/products?category=Jewellery&_sort=discounted_price&_order=asc`)
     
    let soln=await res.json()

    console.log(soln)

    display(soln)
}