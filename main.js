prediction_1 = "";

Webcam.set({
    width:355,
    height:355,
    image_format : 'png',
    png_quality:100
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="result_img" src="' + data_uri  + '"/>';
    });   
   }

   function identify() {
    img = document.getElementById("result_img");
    classifier.classify(img,gotResult);
}

function speak(){
    synth = window.speechSynthesis;
    speakData1 = "The first prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speakData1);
    synth.speak(utterThis);
}

function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("posture_result").innerHTML = result[0].label;
        prediction_1 = result[0].label;
        speak();
        if(prediction_1 = 'Thumbs Up'){
  document.getElementById("acuuracy_result").innerHTML = "&#128077;";
}
else
  if(prediction_1 = 'Cheeze'){
  document.getElementById("acuuracy_result").innerHTML = "&#128076;";
}
else
  if(prediction_1 = 'Good'){
  document.getElementById("acuuracy_result").innerHTML = "&#9996;";
}
    }
}

console.log('Ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Gf4gkV3TM/model.json',modelLoaded);
function modelLoaded() {
    console.log("Model is loaded");
}




