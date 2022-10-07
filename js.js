fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card">
           <h4 class="title">${values.title}</h4>
           <img src=${values.image} alt="img" class="images">
           <p class="subtitle"
           >${values.description}</p>
           <p class="subtitle">${values.category}</p>
           <p class="subtitle">${values.price}</p> 
       </div> `   
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
}) ;
