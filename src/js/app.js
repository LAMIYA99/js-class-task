// ededi daxil etmeliyem
// ededi 20-e bolmeliyem
// alinan qaliga sert qoymaliyam, eger 10-dan boyukdurse boyuk, kicikdirse kicik yazson console-da



// let eded=prompt("ededi daxil et Lamiye")

// console.log(eded)

// let qaliq=eded%20

// console.log(qaliq)

// if(qaliq>10){
//     console.log("boyukdur 10-dan")
// }
// else{
// console.log("kicikdir 10-dan")
// }

// ededi daxil et 
// ededi 15 e bol
// alinan qaliga sert qos  eger 5 den boyukdurse boyuk kicikdirse kicik yazilsin consolda


// let eded=prompt("mervan agillidi")
// console.log(eded)


// let qaliq=eded%15
// if(qaliq>5) {
//     console.log("boyukdur")
// }
// else{qaliq<5}


//
// for (let index = 0; index<100; index++) {
//  if(index%15===0)
// {
//     console.log  (index) ;

// }    
// }

// for (let index = 0; index<100; index++) {
//    if(index%3 && index%5)
//    {

//     console.log(index)
//    }
// }

// for (let index = 0; index <= 70; index++) {
// if(index%2===0)
// {
//     console.log(index)
// }

// }

// let qiymet=prompt("mervan ve maksud delidi")
// let bal;
// for

// let numInp=document.getElementById("numInp")
// let numinp2=document.getElementById("numInp2")
// function hesabla(){
//     console.log(numInp)
//     console.log(+numInp.value+ +numinp2.value)
// }

// function kvadratinsahesi(b){
//   console.log(b*4)
// }
// kvadratinsahesi (4)


// let letData = [

//   {
//     name: "Efruze",
//     age: "28",
//     job: "sn//     name: "Efruze",
//     age: "28",
//     job: "sputnik",


//   }
// ];


// letData.map((data)=>{
//   console.log(data)
// })

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
// let b = [6, 7, 8, 99, 88, 44, 33]
// var newarr = []

// for (let index = 0; index < a.length; index++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a[index] === b[j]) {
//       newarr.push(a[index])
//     }

//   }

// }
// console.log(newarr)


// let a = [1, 2, 3, 4, 5]
// let b = [2, 5]
// var birlesmesi = []

// for (let index = 0; index < a.length; index++) {
//   for (let c = 0; c < b.length; c++) {
//     if (a[index] === b[c]) {
//       birlesmesi.push(b[c])
//     }

//   }

// }
// console.log(birlesmesi)



// let a = [1, 2, "&", "elcin", true, false, "mervan", "guncissn", 66]
// let b = [1, 2, 4, "@", true, false, "guncin", 777, 888]
// let netice = []

// for (let c = 0; c < a.length; c++) {


// }





// for (let i = 0; i < a.length; i++) {
//     // console.log(i)
//     // console.log(a[i])
//     if(a[i]==b[i]){
//         netice.push(a[i])
//     }
// }

// console.log(netice)





// class Person {
//     constructor(age, name) {
//         this.age = age
//         this.name = name

//     }
// }
// let person = new Person(26, "lamiya")
//  Person.prototype.BirthDateClac=function (){
//     console.log(2025-this.age)
//  }
//  person.BirthDateClac()


// class Animals {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age

//     }
// }

// let animals = new Animals("lion", "16")
// console.log (animals)



// class AnimalsCategory {
//     constructor(type) {

//     }
// }


// document .write(Helloooo);




// let a=5
// let b=20
// console.log("beraberdir",a+b);
// console.clear();


// let a=6;
// let b=18;


// alert("salaaammmm : " + (a+b))


// console.log(window);



// let isim = "samirr"
// console.log(  isim)





// let str = "lamiye"
// for (let i = 0; i< str.length; i++) {
   
//     if(i%2==0) {
//         console.log(str[i].toUpperCase())
//     }
// }



class animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    
    }

    typesir(){
    if(this.name==="lion"){
        console.log("sir hemise sir deyil")
    }
    else(
        console.log(this.name)
    )
    }
}
let animal= new animals("lion");

animal.typesir();




class CategoryOfAnimal{
    constructor(category){
        this.category=category

    }
    showAnimalCategory(){
        if(this.category==="surunenler"){
            console.log("Braziliya")
        }else if(this.category==="akulalar"){
            console.log("Okean")
        }else if(this.category==="ucanlar"){
            console.log("Afrika")

        }
    }
}


let categoryAnimal=new CategoryOfAnimal("akulalar")
console.log(categoryAnimal.showAnimalCategory())




