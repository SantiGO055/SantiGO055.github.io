
var form  = new Array();

form.push('<div id="app" style="padding-top: 6rem;" >');
form.push('<div class="container align-items-center">');
form.push('<div class="row">');
form.push('<div class="col-sm-6 col-sm-offset-3 form-group">');
form.push('<label>Nombre:</label>');
form.push('<input class="form-control" type="text" v-model="from_name">');
form.push('</div>');
form.push('<div class="col-sm-6 col-sm-offset-3 form-group">');
form.push('<label>Asunto:</label>');
form.push('<input class="form-control" type="text" v-model="subject">');
form.push('</div>');
form.push('<div class="col-sm-6 col-sm-offset-3 form-group" id="formGroupExampleInput" placeholder="email@gmail.com">');
form.push('<label>Correo:</label>');
form.push('<input class="form-control" type="email" v-model="from_email">');
form.push('</div>');
form.push('<div class="col-sm-6 col-sm-offset-3 form-group">');
form.push('<label>Mensaje:</label>');
form.push('<textarea class="form-control" v-model="message">');
form.push('</textarea>');
form.push('</div>');
form.push('<script src="https://www.google.com/recaptcha/api.js"></script>');
form.push('<div class="col-sm-6 col-sm-offset-3 form-group g-recaptcha" data-sitekey="6LeCMq8ZAAAAALUPdJ67KgfvsCk6_Kg2S_ZT_rGT"></div>');
form.push('<div class="col-sm-6 col-sm-offset-3 text-center">');
form.push('<button @click="enviar" class="btn btn-success">Enviar</button>');
form.push('</div>');
form.push('</div>');
form.push('</div>');
form.push('</div>');
form.push('<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.min.js"></script>');
form.push('<script src="https://cdn.emailjs.com/dist/email.min.js" type="text/javascript"></script>');
form.push('<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>');
form.push('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>');
function show(frm)
{
    for (var x in frm)
     {
      document.write(frm[x]+'\n');
     }
}

show(form);

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
                    $('#apps').val("");
                    alert('El correo se ha enviado de forma exitosa');
                }
               console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                alert('Ocurrió un problema al enviar el correo');
               console.log("FAILED. error=", err);
            });
        }
    }
});



        

function cleanForm(frm){
    var inputs = document.frm.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++){
    inputs[i].value = "";
    }
}


/*
function clearForm(oForm) {

    var elements = oForm.elements;
    console.log("llegue hasta aca");
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
  */