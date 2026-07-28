//Not clean code ,,,you can fork this repo and make improvements on the js side
//I chose to use DOM instead of css ,it was easy though messy
  
const St=document.querySelector("#star");
St.style.color="green";

const myForm=document.querySelector("#details");
const Name=document.querySelector("#nan");
const Email=document.querySelector("#em");
const Comment=document.querySelector("#lab")
const Clear=document.querySelector("#clear-text");
const Text=document.querySelector("#com");
const ask=document.querySelector("#sub");
const Leg=document.querySelector("#leg");
const inName=document.querySelector("#nam");
const inMal=document.querySelector("#mal");


Name.style.color="#8b949e";
Email.style.color="#8b949e";
Comment.style.color="#8b949e";
Leg.style.color="#00C853";
ask.style.cursor="pointer";
ask.style.borderRadius="9999px";
myForm.style.backgroundColor="#111827";
inName.style.color="purple";
inMal.style.color="purple";
Clear.style.cursor="pointer";
Clear.style.borderRadius="9999px";
Text.style.color="purple";

/**Name.addEventListener("click",()=>{
alert(nn);
});
**/

Clear.addEventListener("click",()=>{
myForm.reset();
});


/**Add.addEventListener("click",(e)=>{
e.preventDefault();
Text.value="Paul Njoroge";
});
**/

/**ask.addEventListener("click",()=>{
alert("Are you sure you want to submit");
});
**/
