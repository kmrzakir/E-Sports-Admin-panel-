const submitBtn = document.getElementById("submitBtn")

submitBtn.onclick = function(){
    const platform = document.getElementById("platform").value
    const playMode = document.getElementById("playMode").value
    const prize = document.getElementById("prize").value
    const time = document.getElementById("time").value
    const title = document.getElementById("title").value
    const imageview = document.getElementById("imageview")
    const imageInput = document.getElementById("imageInput")

    const file = imageInput.files[0];
            
    if (file) {
        // Create a FileReader object
        const reader = new FileReader();

        // Define the onload event, which runs when the file is read
        reader.onload = function(event) {
            // Set the src of the imagePreview to the result of the FileReader (Base64 image data)
            imageview.src = event.target.result;
            imageview.style.display = 'block'; // Show the image
        };

        // Read the file as a Data URL (Base64)
        reader.readAsDataURL(file);
}else{
     alert('Please select an image first.');
}
alert(`PlayMode : ${playMode} \n platform : ${platform} \n prize : ${prize} \n time : ${time} \n title : ${title}`)
}