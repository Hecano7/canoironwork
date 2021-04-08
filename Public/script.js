  function mailCheck() {
    if (localStorage.getItem("mail") == "sent") {
      alert("Message Sent: Thank you for your message, we will get back to you soon.");
      localStorage.setItem("mail","");
    }
  };	

  // let photo;
  // let inpFile = document.getElementById("inpFile");
  // let previewContainer = document.getElementById("imagePreview");

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
  //       document.getElementById("inpFile").value = photo;
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
    var email = document.getElementById("phone").value;
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

let photoUpload = document.getElementById('photo-upload'),
imgUploadPreview = document.querySelector('.img-upload-preview');

photoUpload.onchange = function () {

	for (let i = 0; i < photoUpload.files.length; i++){
    // check files supported only images jpg - jpeg - gif
    if (/\.(jpe?g|png|gif)$/i.test(photoUpload.files[i].name) === false){
    	alert ("this type is not supported");
    	photoUpload.value = '';
    	break;
    }else{

    	let reader = new FileReader,
    		photoFileName = photoUpload.files[i].name,
        //  get round file size By KB
        photoFileSize = Math.round( photoUpload.files[i].size / 1024),
        photoFileType = photoUpload.files[i].type,
        // file details template
        photoFileDetailsTemplate = `
        <div class="photo-file-details">
        </div>`;

        reader.onload = function (event){
        	let previewImage  = document.createElement('img'),
        	previewImageBox = document.createElement('div'),
        	removeImage = document.createElement('i'),
        	removeIcon =  document.createTextNode('x');
        	removeImage.appendChild(removeIcon);
        	previewImage.src = reader.result;
        	previewImageBox.appendChild(previewImage);  
        	previewImageBox.classList.add('previewImage');
        	previewImageBox.appendChild(removeImage);
        	imgUploadPreview.appendChild(previewImageBox);   
        // insert file detailes template
        previewImageBox.insertAdjacentHTML('beforeend', photoFileDetailsTemplate);        
        removeImage.addEventListener('click', removeItem);
        // confirm remove item
        function removeItem (e){
        	if (confirm('Are you sure you want to remove this item?')){
        		e.target.parentElement.remove();
        		photoUpload.value='';
        	}
        }  
      }
	    // read file url 
	    reader.readAsDataURL(event.target.files[i]);      
    }
  }

}
