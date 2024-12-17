function sendMail()
{
    let parm={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_329afyu","template_m5ess48",parm).then(alert("Aaraararar"))
}