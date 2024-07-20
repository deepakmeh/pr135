results = 0;

function draw(){
    fill("#FF0000");
       noFill();
       stroke("#FF0000");
       rect(300, 300, 185, 168);
       percent = floor(objects[i].confidence * 100);
       
       text(objects[1].label, objects[1].confidence, objects[1].x, objects[1].y);

    objects[1].width;
    objects[1].height;
}