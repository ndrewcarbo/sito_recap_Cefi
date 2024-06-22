
/*=====================================================================================
    CAROSELLO CON JS PURO
    ======================================================================================= */

// let galleria = document.getElementById('gallery');

//         let urlimmagini = ["assets/img/gallery/uno.jpg","assets/img/gallery/due.jpg","assets/img/gallery/tre.jpg"]


//         let chiavefoto = 0
//         //galleria.innerHTML = `<img src=${urlimmagini[chiavefoto]}>`;
//         let carosello

//         const Slide = ()=>{
//             carosello = setInterval(()=>{
//                 chiavefoto++
//                 if(chiavefoto>urlimmagini.length-1)
//                 chiavefoto=0;
//                 galleria.innerHTML = `<img src=${urlimmagini[chiavefoto]}>`


//             },2000)
//         }

//         Slide()

    /*=====================================================================================
    CAROSELLO CON JQUERY
    ======================================================================================= */

    let galleria = $("#gallery");

    let urlimmagini = ["assets/img/gallery/uno.jpg","assets/img/gallery/due.jpg","assets/img/gallery/tre.jpg"]

    let chiavefoto = 0;
    galleria.html(`<img src=${urlimmagini[chiavefoto]}>`);
    let carosello;

    const SlideImg = ()=> {
        carosello = setInterval(()=>{
            chiavefoto++
            if(chiavefoto>urlimmagini.length-1)
                chiavefoto=0;
            galleria.html(`<img src=${urlimmagini[chiavefoto]}>`)
        },2000)
    }

    SlideImg();

    

    