Webcam.set({
    height: 350,
    width: 350,
    img_format: "png",
    png_quality: 90
});

webcam = document.getElementById("webcam_div"); 

Webcam.attach(webcam);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("picture_div").innerHTML = '<img id="picture" src="'+data_uri+'">';  
    })
}

console.log("ml5 Version: ", ml5.version);   

model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!"); 
}

prediction_1 = "";
prediction_2 = "";

function talk() {
    var synth = window.speechSynthesis; 
    speech_1 = "The first prediction is: "+prediction_1;
    speech_2 = "The second prediction is: "+prediction_2; 
    var utterThis = new speechSynthesisUtterance(speech_1+speech_2); 
    synth.speak(utterThis);
}


