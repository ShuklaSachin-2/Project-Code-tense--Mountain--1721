
// let data=[
//     {
//         image:"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/b2wudzlxsazgdegzceak",
//         fiding:"finding",
//         home:"",
//         price:"",
//         date:""
//     },
//     {
//         image:"https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/n4o1ewux6zcyq8vxzj8t",
//         fiding:"finding",
//         home:"",
//         price:"",
//         date:""
//     },
//     {
//         image:"https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/xbe8fhfxafsvjxvw6ydo",
//         fiding:"finding",
//         home:"",
//         price:"",
//         date:""
//     },
//     {
//         image:"https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/xbe8fhfxafsvjxvw6ydo",
//         fiding:"finding",
//         home:"",
//         price:"",
//         date:""
//     }
// ]
// append(data);

// function append(data){
//     let main=document.getElementById("main")
//     data.forEach(element => {
//         let div=document.createElement("div");
//         div.setAttribute("class","product")
//         let div2=document.createAttribute("div")
//         div2.setAttribute("class","porduct_img")
//         let div3=document.createAttribute("div")
//         div3.setAttribute("class","porduct_detail")
//         let img=document.createElement("img")
//         img.src=element.image;
        
//     });
// }


let count = 0;
let details = () => {
    count++
    if (count % 2 == 1) {
        document.getElementById('second_div').style.display = "block";
    }
    else {
        document.getElementById('second_div').style.display = "none";

    }
    console.log(count);
}

// sliding

let img=document.getElementById("image")

let count1 = 0;
function forword(){
    count1++;
    // if(count = 0){
    //     img.src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658244913/mloerh9s6w3vjaqfqddv.jpg';
    // }
    
    if(count1 == 1){
        img.src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658420619/w0t7dbcmmuqgwzr6fvdt.jpg';
     
    }
    else  if(count1 == 2){
        img.src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245273/wapgqwbykrnuzamcfrzu.jpg';
     
    }
    else  if(count1 == 3){
        img.src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658244747/sioknj9etk6ag8zyvlhp.jpg';
        // count = 0;
    }
    else  if(count1 == 4){
        count1 = 0;
    }
    console.log(count1);
    // if(count==4){
    //     count=0;
    // }
    
    // if(count = 0){
    //     let image = document.createElement('img');
    //     image.src = 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658244913/mloerh9s6w3vjaqfqddv.jpg';
    //     container.append(image);

    // }
    // else if(count = 1){
    //     let image = document.createElement('img');
    //     image.src = 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658420619/w0t7dbcmmuqgwzr6fvdt.jpg';
    //     container.append(image);
    //     count = 0;
    // }
    // count++;
}


let img2=document.getElementById("image")

let count2 = 0;
function backword(){
    count2++;
    
    if(count2 == 1){
        img.src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658420619/w0t7dbcmmuqgwzr6fvdt.jpg';
     
    }
    else  if(count2 == 2){
        img.src='https://c1.ggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245273/wapgqwbykrnuzamcfrzu.jpg';
     
    }
    else  if(count2 == 3){
        img.src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245109/zik1g3knpsgwvmoquwyu.jpg';
        // count = 0;
    }
    else  if(count2 == 4){
        count2 = 0;
    }
    console.log(count2);
    
}

