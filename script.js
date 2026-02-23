// Initialize EmailJS
emailjs.init("ZKnL9DpqtmM3fRHuY");

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            service: document.getElementById("service").value,
            concern: document.getElementById("concern").value.trim(),
            budget: document.getElementById("budget").value,
            deadline: document.getElementById("deadline").value,
            timestamp: new Date()
        };

        try {

            // 1️⃣ Save to Firebase
            await window.submitToFirebase(data);

            // 2️⃣ Send Admin Email
            await emailjs.send("service_sw2i1on", "template_6iys0ig", data);

            // 3️⃣ Send Client Auto Reply
            await emailjs.send("service_sw2i1on", "template_fn57jut", data);

            // 4️⃣ Success Alert
            alert("✅ Data submitted successfully!");

            // 5️⃣ Clear Form
            form.reset();

        } catch (error) {
            console.error("Submission Error:", error);
            alert("❌ Something went wrong. Please try again.");
        }
    });

});