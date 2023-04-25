let cartdata=JSON.parse(localStorage.getItem("cart"))||[];
// console.log

display(cartdata)


function display(cartdata){
    
    let container=document.getElementById("cart")
    container.innerHTML=null;
    container.setAttribute("id","cont")

   cartdata.forEach((el,index)=>{
    // console.log(el)
            let card=document.createElement("div")
            card.setAttribute("id","card")
            // card.style.border="1px solid gray"
            // card.style="width:900px;display:flex;height:600px;"
        
            let left=document.createElement("div")
            left.setAttribute("id","left")
        
            let right=document.createElement("div")
            right.setAttribute("id","right")
            // right.style="width:500px;height:600px;margin-top:-170px"
        
            let image=document.createElement("img")
            image.src=el.images[0]
        
            let categ=document.createElement("p")
            categ.innerText=el.category
            categ.style="font-size:20px"
    
            let tit=document.createElement("p")
            tit.innerText=el.title
            tit.style="font-size:20px"
            

            let price=document.createElement("p")
            price.innerText=el.original_price
            price.style="font-size:20px"
       
           let discount=document.createElement("h4")
           discount.innerText=el.discounted_price
           discount.style="font-size:30px"
    

           let rat=document.createElement("h3")
           rat.innerText=el.rating
           rat.setAttribute("id","rat")

            
        
             let addbtn=document.createElement("button")
             addbtn.setAttribute("id","del")
             addbtn.innerText="DELETE"
             addbtn.onclick=()=>{
                   del()
             }

            left.append(image)
            right.append(categ,tit,price,discount,rat,addbtn)
           
            card.append(left,right)
            container.append(card)
        
    })

    
}


function del(){
    let cartdata=JSON.parse(localStorage.getItem("cart"))||[];

    let deldata=cartdata.slice(1)

  localStorage.setItem("cart",JSON.stringify(deldata))

  display(deldata)

}

