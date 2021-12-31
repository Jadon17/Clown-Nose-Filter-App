nose_x = 0;
nose_y = 0;

function preload(){
    clown_nose =loadImage( "https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function take_snap(){
    save("myfilteredselfie.png");
    }

function setup(){
    canvas = createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide()

    posenet = ml5.poseNet(video,modelloaded);

    posenet.on('pose', gotPoses)


}   

function modelloaded(){
    console.log("Posenet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose yy " + results[0].pose.nose.y);
        nose_x =  results[0].pose.nose.x-17;
        nose_y = results[0].pose.nose.y-17;
        
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nose_x,nose_y,40,40)
}