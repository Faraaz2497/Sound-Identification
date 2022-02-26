link="https://teachablemachine.withgoogle.com/models/9_s5Y9eB-/model.json";
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier(link,modelReady);
}
function modelReady(){
    classifier.classify(getResult);
}
function getResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML="I can hear:"+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy:"+(results[0].confidence*100).toFixed(2)+"%";

        img1=document.getElementById("image1");
        
        if(results[0].label=="Cat"){
            img1.src="Cat.gif";
        }
        else if(results[0].label=="Dog"){
            img1.src="Dog.gif";
        }
        
    }
}

