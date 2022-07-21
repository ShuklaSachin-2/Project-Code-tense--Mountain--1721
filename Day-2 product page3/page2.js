var perkArr = [
    {
        image:"https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/v4vcxxrnnluefspruewe",
        title:"PIX NII (16GB+1TB NVMe)",
        price:"$1,942 HKD HKD",
        Rs:"Rupee 19,755 INR",
        p1:"Estimate Shipping",
        p2:"Decemberr 2022",
        p3:"2 out of 10 claimed",
    },
    {
        image:"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/ltzjhslkrvrtx7eem910",
        title:"PIX NII (8GB+512GB SATA)",
        price:"$1,240 HKD",
        Rs:"Rupee 12,241 INR",
        p1:"Estimate Shipping",
        p2:"December 2022",
        p3:"0 out of 10 claimed",
    },
    {
        image:"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/we1qtb2hfd966kznmfhj",
        title:"PIX NII (8GB+512GB SATA)x2",
        price:"$2,332 HKD",
        Rs:"Rupee 1,551 INR",
        p1:"Estimate Shipping",
        p2:"December 2022",
        p3:"0 out of 10 claimed",
    },

    {
        image:"https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/v4vcxxrnnluefspruewe",
        title:"PIX NII (16GB+1TB NVMe)",
        price:"$1,942 HKD HKD",
        Rs:"Rupee 19,755 INR",
        p1:"Estimate Shipping",
        p2:"Decemberr 2022",
        p3:"2 out of 10 claimed",
    },
    {
        image:"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/ltzjhslkrvrtx7eem910",
        title:"PIX NII (8GB+512GB SATA)",
        price:"$1,240 HKD",
        Rs:"Rupee 12,241 INR",
        p1:"Estimate Shipping",
        p2:"December 2022",
        p3:"0 out of 10 claimed",
    },
    {
        image:"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/we1qtb2hfd966kznmfhj",
        title:"PIX NII (8GB+512GB SATA)x2",
        price:"$2,332 HKD",
        Rs:"Rupee 1,551 INR",
        p1:"Estimate Shipping",
        p2:"December 2022",
        p3:"0 out of 10 claimed",
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
