


// ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 

// answer:
// let a= 3;
// a = 5;
// console.log(a);


// কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean);

// answer:
// var, const, let,

// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 

// let, var, or const diye.
// kono number varriable nam hisebe deya jabena.
// like: const 45 = abc;




// ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
//  a= b;
// const hello = a-b;
// const js = a*b;
// const divide = a / b;
// const module = a % b;



// শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 

// answer:
//  x+=x+y;
//  x-= x-y;
//  x*= x*y;
//  x/= x/y;


//  ++ এবং -- এর কাজ কি ? এইটা কি জানো। 

// answer:
// ++ (inreament)
// -- (decreament)


// ১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 

// answer:
// parseInt means integer a convert, 
// parseFloat means number a conver,
// toFixed means permanently Fixed..


//  Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 

// answer:
// Arry is a list/argument/, arry [] er moddhe declar korte hoy.



// ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 

// answer:
// arry.length

// ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 

// answer:
// arry index start from 0, and its index increament by 1 for every Element.



// ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় 
// index 1 means its false or it invalid
// answer:


// ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 

// answer:
// arry[5] like this, it will find elemnt 4 in arry;


// কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
// answer:
// arry = [0,1,0,17,20]
// arry[3] = 5;
// console.log(arry);


// একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?

// answer:
// arry = [1,54,256,358,14,23];
// const index = arry.indexOf(23);
// const index2 = arry.indexOf(358);
// console.log(index, index2);


// ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

// answer:
// const arry = [10,34,41,36,64];
//  arry.push(50,57);
//  arry.pop(50);
// console.log(arry)

// ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

// answer:
// const arry = [54,256,358,14,23];
// arry.shift();
// arry.unshift(500)
// console.log(arry)



// ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 

// answer:
// a = 5;
// b = 3;
// a > b;
// b < a;
// a != b;
// a && b not equal
// a || b  true;
// a === b;
// a !== b;
// a >= b;
// b  <= a;



// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 


// answer:
// let Tk = 61000;

// if(Tk > 80000){
//     console.log('Mac')
// }else if(Tk > 60000){
//     console.log("Gaming pc")
// }else if(Tk > 40000){
//     console.log("Lenovo")
// }
// else if(Tk > 20000){
//     console.log("old laptop")
// }
// else{
//     console.log('Only mobile..!')
// }




// আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

// answer:
// const hello = "Ajk amr mon Valo ney";

// for(let i = 0; i <= 100; i++){
//     console.log( i,hello)
// }


//  একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 

// for (let i = 58; i <= 98 ; i++) {
//   console.log(i);
    
// }


// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

// for (let i = 412; i <= 456; i++) {
//    console.log(i)
// }


// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
// for (let i = 581; i <= 623; i++) {
//    console.log(i)
// }


// ৩২.while আর for loop এর মধ্যে পার্থক্য কি 

// for loop work for special something, this is loop for this condition untill fullfill;

// while loop work for a something special one condition.. like, when anyone type any kye then while loop will stop.



// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

// const learned = ['varriable', 'object', 'html', 'css', 'bootstrap', 'tailwind', 'reactjs', 'arry', 'loop'];

// for (let i = 0; i < learned.length; i++) {
//     const element = learned[i];
//     console.log(element)
// }



// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 


// for (let i = 30; i <= 86; i++) {
//   if (i = 44) {
//     console.log(i)
//     break;
//   };
  
// }



//  loop break

// for (let i = 12; i < 50; i++) {
//    if (i === 25) {
//    break;
//    }
//    console.log(i)
// }