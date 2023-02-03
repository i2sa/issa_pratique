const bienvenu=document.querySelector("p")
bienvenu.textContent=`bienvenu dans mon depense quotidienne`


 function ajoutlist(){
    let produit=document.getElementById("produit").value
    const list=document.getElementById("list")
    list.innerHTML +=produit + "<br>"
   
    document.getElementById("produit").value=''
    
    
}
const user=["prenom:issa","nom:sow","prenom:fatou","nom:sow"]
const list=document.getElementById("list")
for (const p of user){
    const i=p.split(':')
   if(i[1]==="issa"){
    list.innerHTML=`bonjour ${i[1]}  `
    
   }
    
 
}
const protypepropety={
    getname(){
        console.log("votre nom est :" +this.name)
    }
}
function users(name){
    this.name=name

}
Object.assign(users.prototype,protypepropety)
const user1=new users("issa")
user1.getname()
console.log(Object.hasOwn(user1,"name"),Object.hasOwn(user1,"getname"))
//var i=[,4,,6,]same =
var i=[/*empty*/,4,/*empty*/,6,]
var p=[1,056,0b0101,0X6898ea,5.78,578n]
console.log(+"1.4" + +"3.5")
console.log(i)
console.log(i.length)
console.log(p)
const formatArg = (arg) => {
    if (Array.isArray(arg)) {
      // Print a bulleted list
      return arg.map((part) => `- ${part}`).join("\n");
    }
    if (arg.toString === Object.prototype.toString) {
      // This object will be serialized to "[object Object]".
      // Let's print something nicer.
      return JSON.stringify(arg);
    }
    return arg;
  };
  
  const print = (segments, ...args) => {
    // For any well-formed template literal, there will always be N args and
    // (N+1) string segments.
    let message = segments[0];
    segments.slice(1).forEach((segment, index) => {
      message += formatArg(args[index]) + segment;
    });
    console.log(message);
  };
  
  const todos = [
    "Learn JavaScript",
    "Learn Web APIs",
    "Set up my website",
    "Profit!",
  ];
  
  const progress = { javascript: 20, html: 50, css: 10 };
  
  print`I need to do:
  ${todos}
  My current progress is: ${progress}
  `;
  
  // I need to do:
  // - Learn JavaScript
  // - Learn Web APIs
  // - Set up my website
  // - Profit!
  // My current progress is: {"javascript":20,"html":50,"css":10}
  let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops: ", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: ", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

  

 



