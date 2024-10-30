// 1.----> 
// İstifadəçidən dairənin sahəsini hesablamaq üçün lazım olan dəyərləri alın.
// və bir function içində onun hesablanmasın yazın. (dairənin sahəsi S = πr^2)

// function dairəninSahəsi(radius) {
//     const pi = Math.PI;
//     const sahə = pi * Math.pow(radius, 2); 
//     return sahə;
// }
// const radius = parseFloat(prompt("Dairənin radiusunu daxil edin:"));

// const nəticə = dairəninSahəsi(radius);
// alert(`Dairənin sahəsi: ${nəticə}`);



// 2.----> 
// İstifadəçi iki ədəd daxil etsin. Həmin ədədlərin toplanmasını və vurulmasını həyata keçirən bir function yazın.


// let num1 = +(prompt("Zehmet olmasa birinci reqemi daxil edin"))
// let num2 = +(prompt("Zehmet olmasa ikinci reqemi daxil edin"))
// console.log("netice", num1 + num2);
// console.log("netice", num1 * num2);


// 3.----> 
// Dörd rəqəmli bir ədəd daxil edin. Həmin ədəddə 1-ci və 4-cü yerdə duran rəqəmlər  və eyni zamanda 2-ci və 3-cü yerdə duran rəqəmlər bir birinə bərabərdirsə bizə console log da "YES" əks halda "NO" yazdırsın. 




// 4.----> 
// İstifadəçidən bir username alın. username daxil edildikdən sonra həmin istifadəçini salamlayan bir bildiriş pəncərəsi açılsın. Bunun üçün bir function-dan istifadə edin.


// const username = () =>{
//     let username = prompt("Adinizi daxil edin")
//     alert("Salam "+username+" xos geldiniz")
// }

// username()


// 5.---->
// Istifadəçidən bir ədəd daxil edin və həmin ədədin 100-dən böyük və ya kiçik olmasını eyni zamanda müsbət və mənfi olmasını və cüt və tək olmasını yoxlayan bir funksiya yazın. Sonda bizə bilidiriş şəklində ədəd haqqında məlumat göstərilisin Məsələn aşağıdakı kimi. (Console log istifadə etməyin)
// const number = () =>{
//     let number =  +prompt("Reqem daxil edin")
//     if( number===0 || number===100){
//         alert("100 və 0 ədələrini daxil edə bilməzsiz")
//     }else{
//         if(number<100){
//             var a = " 100-den kicikdir"
//         }else{
//             var a = " 100-den boyukdur"
//         }

//         if(number>0){
//             var b = " Musbet"
//         }else{
//             var b = " Menfi"
//         }

//         if(number%2==0){
//             var c = " Cut"
//         }else{
//             var c = " Tek"
//         }
//         alert("1) "+number+a+" 2) "+number+b+" 3) "+number+c)
//     }    
    
// }

// number()