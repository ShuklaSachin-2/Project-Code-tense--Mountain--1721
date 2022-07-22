var totalArr=[
    {
        image:"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/kx6enkywtmynpl0wzqy3.jpg",
        p1:"FUNDING",
        p2:  "",
        
        title:"Give Wings to the Next  Leaders in Khmer Dance",
        p:"Help us get to documenta 15",
        h1:"DANCE & THEATER",
        

        price:"$2,565 USD raised",
        percent:"51%",

        available: "",
        non:"",

        p3:"21 days left"


    
    },


    {
        image:"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/y5mvlkehabxpsw4qcaos.jpg",
        p1:"FUNDING",
        p2:  "",
        
        title:"Help Us Complete THE QUEST:A New Musical",
        p:"THE QUEST,a new musical from Murray Foster & Kieren MacMillan,needs your help!",
        h1:"DANCE & THEATER",
        

        price:"$4,105 CAD raised",
        percent:"41%",

        available: "",
        non:"",

        p3:"22 days left"
    
    },

    {
        image:"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/ovfz1rmmkxte6k0exwnu.jpg",
        box:"funding",

        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },
    {
        image:"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/y5mvlkehabxpsw4qcaos.jpg",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },

    {
        image:"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/btu2rlxrj6nilxa9wz2h.jpg",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },

    {
        image:"",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },

    {
        image:"",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },
    {
        image:"",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },

    {
        image:"",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },


    {
        image:"",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },
    {
        image:"",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },

    {
        image:"",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },

    {
        image:"",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },
    {
        image:"",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    },

    {
        image:"",
        title:"Mazdi final journey",
        p:"An acerbic,mind bending fall into the mysterious nature of a self",

        price:"$10,575",

    
    }



]
function append(totalArr){
    totalArr.forEach(function(elem){
        let cont=document.createElement("div")
        cont.setAttribute("id","nimg")

        let image=document.createElement("img");
        image.src=elem.image;
        image.setAttribute("id","nimg");

       
        let box=document.createElement("div");
         box.setAttribute("id","fund-1");

        let box1=document.createElement("div");
        box1.setAttribute("id","m-di");
        box1.innerText="FUNDING";


        let box2=document.createElement("div");
        
        box2.setAttribute("id","s2-div");
        box2.innerText=elem.p2;

        


        box.append(box1,box2);

        let h=document.createElement("hr");
        h.setAttribute("id","hr-1");



        

        

        let title=document.createElement("h3");
        title.innerText=elem.title;
        title.setAttribute=("id","my-t");

        let p1=document.createElement("p");
        p1.innerText=elem.p;
        p1.setAttribute("id","p1-s");


        let h1=document.createElement("h4");
        h1.innerText=elem.h1;
        h1.setAttribute("id",h1-1)

       
      
      
        let mybox=document.createElement("div");
       box.setAttribute("id","mybox-1");

       let mybox1=document.createElement("div");
       mybox1.setAttribute("id","mb-2");
       mybox1.innerText=elem.price;


       let mybox2=document.createElement("div");
       
       mybox2.setAttribute("id","mb-3");
       mybox2.innerText=elem.percent;

        mybox.append(mybox1,mybox2);





        let aval=document.createElement("p");
        aval.innerText=elem.available;
        aval.setAttribute("id","aval");

        let non=document.createElement("p")
        non.innerText=elem.non;
        non.setAttribute("id","non");








        let p3=document.createElement("p");
        p3.innerText=elem.p3;
        p3.setAttribute("id","p3-1")











        cont.append(image,box,h,title,p1,h1,mybox,aval,non,p3)

        document.querySelector("#mycontainer2").append(cont);

    })

}
append(totalArr);