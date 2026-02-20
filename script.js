emailjs.init("ZKnL9DpqtmM3fRHuY");

document.getElementById("contactForm").addEventListener("submit", async function(e){
 e.preventDefault();

 let data = {
   name: name.value,
   email: email.value,
   phone: phone.value,
   service: service.value,
   concern: concern.value,
   budget: budget.value,
   deadline: deadline.value
 }

 await submitToFirebase(data);

 // ADMIN MAIL
 emailjs.send("service_n4r2uws","template_plmwu26",data);

 // CLIENT AUTO REPLY
 emailjs.send("service_n4r2uws","template_svabrvp",data);

 alert("Submitted Successfully");
});