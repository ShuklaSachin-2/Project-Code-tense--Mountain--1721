var perkArr = [
    {
        image:"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.3,f_auto,h_460/gq605gyxrgxcb7d6zhsc",
        title:"Sostenitore",
        price:"$10 EUR",
        Rs:"Rupee 817 INR",
        p1:"Estimate Shipping",
        p2:"Decemberr 2022",
        p3:"2 out of 10000 claimed",
    },
    {
        image:"https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/f634nzmvtjypetrwqrka",
        title:"Produttore",
        price:"$50 EUR",
        Rs:"Rupee 4,084 INR",
        p1:"Estimate Shipping",
        p2:"September 2022",
        p3:"3 out of 10000 claimed",
    },
    // {
    //     image:"https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/u4xvxdgje9ny5a7yc1ud",
    //     title:"i VERI PRODUTTORI",
    //     price:"$100 EUR",
    //     Rs:"Rupee 8,551 INR",
    //     p1:"Estimate Shipping",
    //     p2:"September 2022",
    //     p3:"8 out of 100000 claimed",
    // },


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


