

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