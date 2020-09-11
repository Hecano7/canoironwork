  let photo;
  let inpFile = document.getElementById("inpFile");
  let previewContainer = document.getElementById("imagePreview");

  // let previewImage = previewContainer.querySelector(".image-preview__image");
  // let previewDefaultText = previewContainer.querySelector(".image-preview__default-text");
  
  // inpFile.addEventListener("change", function(){
  //   let file = this.files[0];
  //   if(file){
  //     let reader = new FileReader();
  //     previewDefaultText.style.display = "none";
  //     previewImage.style.display = "block";

  //     reader.addEventListener("load", function(){
  //       console.log(this.result);
  //       photo = this.result;
  //       previewImage.setAttribute("src", this.result)
  //     });
  //     reader.readAsDataURL(file)
  //   }else{
  //     previewDefaultText.style.display = null;
  //     previewImage.style.display = null;
  //     previewImage.setAttribute("src","");
  //   }
  // })

  function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("tel").value;
    var message = document.getElementById("message").value;
    if(email != "" && name != "" && message != ""){
    localStorage.setItem("mail","sent");
    }
  };
  
  function imageClick(element){
    document.getElementById("enlarge").src = element.src;
    window.location.href = "#dog";
    // console.log(element.children[0].src);
  }