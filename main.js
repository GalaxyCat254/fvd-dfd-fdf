function startClassification()
{navigator.mediaDevices.getUserMedia({audio:true});classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nQoWbJTJs/', modelReady);}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);

    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        img=document.getElementById("animal1");
        img1=document.getElementById("animal2");
        img2=document.getElementById("animal3");
        img3=document.getElementById("animal4");
        if(results[0].label=="Bark") {
            img.src="hai-chi-dog-barking.gif";
            img1.src="cat.webp";
            img2.src="download.jpeg";
            img3.src="download (1).jpeg";
        } else if(results[0].label=="Meow"){
            img.src="a2d924_1c810876cf114e8392bac18872ac092a_mv2.webp";
            img1.src="5c0i";
            img2.src="download.jpeg";
            img3.src="download (1).jpeg";
        }
        else if(results[0].label=="Roar"){
            img.src="a2d924_1c810876cf114e8392bac18872ac092a_mv2.webp";
            img1.src="cat.webp";
            img2.src="200w.gif";
            img3.src="download (1).jpeg";
        }
        else{
            img.src="a2d924_1c810876cf114e8392bac18872ac092a_mv2.webp";
            img1.src="cat.webp";
            img2.src="download.jpeg";
            img3.src="BothSleepyBarnacle-size_restricted.gif";
        }



    }
}