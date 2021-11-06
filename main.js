difference = 0;
rightWristX = 0;
leftWristY = 0;


function setup()
    {
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,450);
canvas.position(600,100);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
    }

    function gotPoses(results)
    {
if(results.length > 0)
{
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);
}
    }

    function modelLoaded()
    {
        console.log('poseNet is initialized!');
    }

    function draw()
    {
        background('#98989c');

        document.getElementById("font_size").innerHTML = "Width And Height of the Text Will be = " + difference +"px";
        text('Coding',50,400);
        fill('#03b1fc');
        textSize(difference);
        stroke('#03b1fc');
       
    }
