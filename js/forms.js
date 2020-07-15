(function(){
    emailjs.init("user_qOzALb8QuxtW7Iy9808vc");
 })();
const vue = new Vue({
    el: '#app',
    data(){
        return {
            from_name: '',
            from_email: '',
            message: '',
            subject: '',
        }
    },
    methods: {
        enviar(){
            let data = {
                from_name: this.from_name,
                from_email: this.from_email,
                message: this.message,
                subject: this.subject,
            };
            
            emailjs.send("gmail","form-contacto", data)
            .then(function(response) {
                if(response.text === 'OK'){
                    alert('El correo se ha enviado de forma exitosa');
                    clearForm(this.el);
                }
               console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                alert('Ocurrió un problema al enviar el correo');
               console.log("FAILED. error=", err);
            });
        }
    }
});



function clearForm(oForm) {

    var elements = oForm.elements;
  
    oForm.reset();
  
    for(i=0; i<elements.length; i++) {
  
      field_type = elements[i].type.toLowerCase();
  
      switch(field_type) {
        case "from_name":
        case "from_email":
        case "message":
        case "subject":
            console.log(elements[i].value);
          elements[i].value = "";
          break;
  
        default:
          break;
      }
    }
  }