idea_1="";
idea_10="";

function preload()
{
    idea_1=loadSound("Idea_1.mp3");
    idea_10=loadSound("Idea_10.mp3");
}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,500);
}