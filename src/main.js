// const btn = document.querySelector('#btn');

// function btnclick(){
//     alert()
// }

//niche je btnclick function ta jodi niche jodi amra first bracket diye use kori tahole click korar agei function call hoye jabe

// btn.addEventListener('click', function(event){
     // console.log(event.target);
     // console.log(this);
// });




// const btn = document.querySelectorAll(".actions button");

// btn[0].addEventListener('click', function(){
//     btn[0].style.backgroundColor = 'red';
//     btn[0].style.color = 'white'
//     btn[0].style.border = 'none'
// })


// const btn = document.querySelectorAll(".actions button");

// btn.forEach((item, index) =>{
//     item.addEventListener("click", function(){
//         if(index == 0){
//             item.style.backgroundColor = 'red';
//         }else if(index == 1){
//             item.style.backgroundColor = 'blue';
//         }else if(index == 2){
//             item.style.backgroundColor = 'green';
//         }else if(index == 3){
//             item.style.backgroundColor = 'pink';
//         }
      
     
//     });
// });



// btn.forEach((item, index) =>{
//     item.addEventListener("click", function(){
//             item.style.backgroundColor = 'red';
//     });

//     item.addEventListener("dblclick", function(){
//         item.style.backgroundColor = 'pink';
// });

// });


// p.forEach((item, index) =>{


//     item.addEventListener("click", function(){
//         item.style.backgroundColor = 'red';
//         item.style.color = 'white';

//         item.innerHTML = `${item.innerText} <i class="fa fa-check"></i> `

//     });
// });


// const btn = document.querySelector(".actions button");


//btn.addEventListener("click", function(e){
    // console.log(event.target);
    // console.log(this);
    // e.target.style.backgroundColor = 'red';
    // this.style.backgroundColor = 'red';

//})

// btn.onclick = () =>{

//     //arrow function a this kaj korena 
//     btn.style.backgroundColor = 'red';
// }


/**
 * Keypress
 * keydown
 * keyup
 */

//const input = document.querySelector(".actions input");

//const h1 = document.querySelector(".actions h1")

// input.addEventListener("keypress", function(){
//     console.log('done');
// })

// input.addEventListener("keydown", function(){
//     console.log('done');
// })

//input.addEventListener("keyup", function(e){
    // console.log('done');
    // console.log(e.key);
  //  const value = e.target.value;
   //h1.innerHTML = value;


//});
  


// const input = document.querySelector(".actions input");


// input.onfocus = () =>{
//     console.log('fucussssss');
// }


// input.onblur = () =>{
//     console.log('blurrrrr');
// }

// input.addEventListener('change', function(){
//     console.log('changeeeeeeeeee');
// })


// const input = document.querySelector('.actions input.fs');

// const color = document.querySelector('.actions input.color');

// const span = document.querySelector(".actions span");

// const h1 = document.querySelector(".actions h1");

// // input.oninput = (e) =>{
// //     const val = e.target.value;
// //     h1.innerHTML = val;
// // }

// input.oninput = (e) =>{
//     const val = e.target.value;
//     span.innerHTML = val; 
//     h1.style.fontSize =`${val}px`
// };

// color.oninput = (e) =>{
//     const val = e.target.value;
//     h1.style.color =`${val}`
// };


const heading = document.querySelector('#heading');
const h1 = document.querySelector('h1');
const align = document.querySelectorAll('.Align');
const font_size = document.querySelector('#font-size');
const color = document.querySelector('.color');
const font_family = document.querySelector("#font-family");
const font_weight = document.querySelectorAll(".font-weight");



heading.onkeyup = () =>{
    h1.innerHTML = heading.value;
    
}

align.forEach(item =>{
    item.onchange = () =>{
        h1.style.textAlign = item.value;
        // p.style.textAlign = item.value;

    }
});


font_size.oninput = () =>{
    h1.style.fontSize = font_size.value + 'px';

}


color.oninput = () =>{
    h1.style.color = color.value;
};

font_family.onchange = () => {
    h1.style.fontFamily = font_family.value
};



font_weight.forEach((item) =>{
    item.onchange = () =>{
        h1.style.fontFamily = item.value;
    };
    
});





//dedcription

const p = document.querySelector("p");

const description = document.querySelector("#description");

const alignp = document.querySelectorAll('.Alignp');

const font_sizep = document.querySelector('#font-sizep');
const colorp = document.querySelector('.colorp');

const font_familyp = document.querySelector("#font-familyp");

const font_weightp = document.querySelectorAll(".font-weightp");

description.onkeyup = () =>{
    p.innerHTML = description.value;
    p.style.fontSize = '20px';
}

alignp.forEach(item =>{
    item.onchange = () =>{
        p.style.textAlign = item.value;

    }
});


font_sizep.oninput = () =>{
    p.style.fontSize = font_sizep.value + 'px';

}

colorp.oninput = () =>{
    p.style.color = colorp.value;
};



font_familyp.onchange = () => {
    p.style.fontFamily = font_familyp.value
};


font_weightp.forEach((item) =>{
    item.onchange = () =>{
        p.style.fontFamily = item.value;
    };
    
})

