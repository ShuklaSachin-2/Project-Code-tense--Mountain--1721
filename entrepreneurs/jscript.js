let img=document.getElementById("image")


let count = 0;
function forword(){
    count++;
    // if(count = 0){
    //     img.src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658244913/mloerh9s6w3vjaqfqddv.jpg';
        
    // }
    if(count == 1){
        img.src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658420619/w0t7dbcmmuqgwzr6fvdt.jpg';
     
    }
    else  if(count==2){
        img.src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245273/wapgqwbykrnuzamcfrzu.jpg';
     
    }
    else  if(count==3){
        img.src='https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658244747/sioknj9etk6ag8zyvlhp.jpg';
        // count = 0;
    }
    else  if(count == 4){
        count = 0;
    }
    
    console.log(count);
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

