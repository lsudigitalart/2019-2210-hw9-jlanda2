let ship1,ship2,ship3,ship4;
let boost=0;

function preload(){
    car1=loadImage("automobile.png");
    car2=loadImage("automobile2.png");
    car3=loadImage("automobile3.png");
    car4=loadImage("automobile4.png");
    fire=loadImage("fire.png");
}
function setup(){
    createCanvas(1920,800);
    background(0);
    let randomSpeed=random(9,16);
    let randomSpeed2=int(random(9,16));
    let randomSpeed3=random(9,16);
    let randomSpeed4=random(9,16);
    let randomBoost2=int(random(0,6000));
    let randomBoost3=int(random(0,6000));
    let randomBoost4=int(random(0,6000));
    ship1= new CreateShip1(0,randomSpeed);
    ship2= new CreateShip2(0,randomSpeed2,randomBoost2);
    ship3= new CreateShip3(0,randomSpeed3,randomBoost3);
    ship4= new CreateShip4(0,randomSpeed4,randomBoost4);
}
function draw(){
    background(0);
    fill(255);
    rect(0,0,1920,200)
    fill(0);
    rect(0,200,1920,200)
    fill(255);
    rect(0,400,1920,200)
    ship1.display();
    ship1.update();
    ship2.display();
    ship2.update();
    ship3.display();
    ship3.update();
    ship4.display();
    ship4.update();
    text
}

function CreateShip1(tempx,randomSpeed){
    this.x=tempx;
    this.update=function(){
        this.x+=randomSpeed;
        if(boost==1){
            randomSpeed=random(16,24);
        }
    }
    this.display=function(){
        push();
        scale(0.25)
        image(car1,this.x,-50)
        if(boost==1){
        image(fire,this.x-800,100,1000,600)
        }
        pop();
    }
}
function CreateShip2(tempx,randomSpeed2,randomBoost2){
    this.x=tempx;
    this.update=function(){
        this.x+=randomSpeed2;
        if(this.x>=randomBoost2){
            randomSpeed2=random(16,24);
        }

    }
    this.display=function(){
        push();
        scale(0.25)
        image(car2,this.x,750)
        if(this.x>=randomBoost2){
        image(fire,this.x-800,850,1000,600)
        }
        pop();
    }
}
function CreateShip3(tempx,randomSpeed3,randomBoost3){
    this.x=tempx;
    this.update=function(){
        this.x+=randomSpeed3;
        if(this.x>=randomBoost3){
            randomSpeed3=random(16,24);
        }
    }
    this.display=function(){
        push();
        scale(0.25)
        image(car3,this.x,1550)
        if(this.x>=randomBoost3){
            image(fire,this.x-800,1650,1000,600)
            }
        pop();
    }
}
function CreateShip4(tempx,randomSpeed4,randomBoost4){
    this.x=tempx;
    this.update=function(){
        this.x+=randomSpeed4;
        if(this.x>=randomBoost4){
            randomSpeed4=random(16,24);
        }
    }
    this.display=function(){
        push();
        scale(0.25)
        image(car4,this.x,2350)
        if(this.x>=randomBoost4){
            image(fire,this.x-800,2450,1000,600)
            }
        pop();
    }
}
function mouseReleased(){
    boost=1
}
