
let data=[
    {
        image:"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/b2wudzlxsazgdegzceak",
        fiding:"finding",
        home:"",
        price:"",
        date:""
    },
    {
        image:"https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/n4o1ewux6zcyq8vxzj8t",
        fiding:"finding",
        home:"",
        price:"",
        date:""
    },
    {
        image:"https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/xbe8fhfxafsvjxvw6ydo",
        fiding:"finding",
        home:"",
        price:"",
        date:""
    },
    {
        image:"https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/xbe8fhfxafsvjxvw6ydo",
        fiding:"finding",
        home:"",
        price:"",
        date:""
    }
]
append(data);

function append(data){
    let main=document.getElementById("main")
    data.forEach(element => {
        let div=document.createElement("div");
        div.setAttribute("class","product")
        let div2=document.createAttribute("div")
        div2.setAttribute("class","porduct_img")
        let div3=document.createAttribute("div")
        div3.setAttribute("class","porduct_detail")
        let img=document.createElement("img")
        img.src=element.image;
        
    });
}