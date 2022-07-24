var perkArr = [
    {
        image:"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/ojug82on8x6oko15aspa",
        title:"First Level Wizard",
        price:"$10 CAD",
        Rs:"Rupee 620 INR",
        p1:"Estimate Shipping",
        p2:"September 2022",
        p3:"0 claimed",
    },
    {
        image:"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/gqjyu53xaoz8c1n17vce",
        title:"Sacred Scroll",
        price:"$20 CAD",
        Rs:"Rupee 1,241 INR",
        p1:"Estimate Shipping",
        p2:"October 2022",
        p3:"4 claimed",
    },
    {
        image:"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/fodw8wgt6ugrym9qr5em",
        title:"Magic Mirror",
        price:"$25 CAD",
        Rs:"Rupee 1,551 INR",
        p1:"Estimate Shipping",
        p2:"October 2022",
        p3:"2 claimed",
    },
    {
        image:"https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/wqc5iq9bcai4lymanlo6",
        title:"Everyone Loves a Frog",
        price:"$30 CAD",
        Rs:"Rupee 1,861 INR",
        p1:"Estimate Shipping",
        p2:"October 2022",
        p3:"2 claimed",
    },
    {
        image:"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/tgc1yeglnob8uieqw6r4",
        title:"Roles Master Emma",
        price:"$600 CAD",
        Rs:"Rupee 37,861 INR",
        p1:"Estimate Shipping",
        p2:"September 2022",
        p3:"1 claimed",
    },
    {
        image:"https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/rip2tzyleib66ghiwb3i",
        title:"The Great Scepter",
        price:"$1,000 CAD",
        Rs:"Rupee 62,861 INR",
        p1:"Estimate Shipping",
        p2:"September 2022",
        p3:"3 claimed",
    },
]


function append(perkArr){
    perkArr.forEach(function(elem){
    
        let cont = document.createElement("div") 
        // console.log(elem.title)
        cont.setAttribute("id","ndiv")
        
    
        let image = document.createElement("img")
        image.src = elem.image;
        image.setAttribute("id","nimg")
    
        let title = document.createElement("p")
        title.innerText = elem.title;
        title.setAttribute("id", "title-N")
 
        let price = document.createElement("p");
        price.innerText = elem.price;
        price.setAttribute("id","price-N")

        let rs = document.createElement("p");
        rs.innerText = elem.Rs;
        rs.setAttribute("id","rs-N")

        let p1 = document.createElement("p");
        p1.innerText = elem.p1;
        p1.setAttribute("id","p1-N")

        let p2 = document.createElement("p");
        p2.innerText = elem.p2;
        p2.setAttribute("id","p2-N")

        let p3 = document.createElement("p");
        p3.innerText = elem.p3;
        p3.setAttribute("id","p3-N")
    
        let btn = document.createElement("button");
        btn.innerText = "GET THIS PERK"
        btn.setAttribute("id","bot-N")
      cont.append(image, title, price, rs, p1, p2, p3, btn)
      document.querySelector(".B-N").append(cont)
 
 
 
    //    cont.addEventListener("click",function(){
    //       showNews(elem)

    //    })
 
   })
 
 }
  append(perkArr); 



  
// popup OPTION part***/
function toggle(){
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup")
    popup.classList.toggle("active")
}
toggle()