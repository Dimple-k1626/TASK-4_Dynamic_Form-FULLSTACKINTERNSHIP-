const password=document.getElementById("password");
const strengthMeter=document.getElementById("strengthMeter");
const strengthText=document.getElementById("strengthText");

password.addEventListener("input",checkStrength);

function checkStrength(){

let val=password.value;

let strength=0;

if(val.length>6) strength++;
if(/[A-Z]/.test(val)) strength++;
if(/[0-9]/.test(val)) strength++;
if(/[@$!%*?&]/.test(val)) strength++;

if(strength<=1){
strengthMeter.style.width="30%";
strengthMeter.style.background="red";
strengthText.innerText="Weak";
}

else if(strength==2){
strengthMeter.style.width="60%";
strengthMeter.style.background="orange";
strengthText.innerText="Medium";
}

else{
strengthMeter.style.width="100%";
strengthMeter.style.background="green";
strengthText.innerText="Strong";
}

}

/* PROGRESS BAR */

const inputs=document.querySelectorAll("input");

inputs.forEach(input=>{
input.addEventListener("input",updateProgress);
});

function updateProgress(){

let filled=0;

inputs.forEach(i=>{
if(i.value!="") filled++;
});

let percent=(filled/inputs.length)*100;

document.getElementById("progressBar").style.width=percent+"%";

}

/* DYNAMIC PHONE FIELDS */

const phoneContainer=document.getElementById("phoneContainer");

document.getElementById("addPhone").addEventListener("click",()=>{

const div=document.createElement("div");
div.className="phone-field";

div.innerHTML=`
<input type="text" placeholder="Phone Number">
<button onclick="this.parentElement.remove()">X</button>
`;

phoneContainer.appendChild(div);

});

/* FORM SUBMIT */

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

document.getElementById("welcomeMsg").innerText="Welcome "+name+"!";

document.getElementById("registerPage").style.display="none";

document.getElementById("successPage").style.display="block";

});

/* ROUTING BACK */

function goBack(){

document.getElementById("successPage").style.display="none";

document.getElementById("registerPage").style.display="block";

document.getElementById("form").reset();

strengthMeter.style.width="0";

document.getElementById("progressBar").style.width="0";

}