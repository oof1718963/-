noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;









function setup() {
  video = createCapture(VIDEO);
  video.size(550, 550);
  

  
  canvas = createCanvas(450, 450);
  canvas.position(560, 1000);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }



}


function gotPoses(results) {
  if (results.length > 0) {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = " + noseX + "noseY = " + noseY);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
  }
} 



function draw() {
  background('#8AB4F8');
  document.getElementById(square_side).innerHTML = "Width And Height of a square will be =" + difference  + "px";
  fill('#4CFFAC')
  stroke('#4CFFAC');
  square(noseX, noseY-300 ,difference);
  
}    










