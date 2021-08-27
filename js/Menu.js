class Menu  {

    constructor(){
        this.input = createInput("");
        this.joinButton = createButton("Join");
        this.titleImg = createImg("images/title.png");
        this.greeting = createElement("h2");
        this.team1btn = createImg("images/RedButtonTran.png");
        this.team2btn = createImg("images/BlueButtonTran.png"); 
        this.teamrbtn = createImg("images/GrayButtonTran.png");
        this.select = 0;
    }

    setElementsPosition(){
        this.titleImg.position(120,80);
        this.input.position(120,120);
        this.team1btn.position(100,140);
        this.team2btn.position(130,140);
        this.teamrbtn.position(160,140);
        this.joinButton.position(width/2-100,height/2);
        this.greeting.position(width/2-200,height/2-100);
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.team1btn.hide();
        this.team2btn.hide();
        this.teamrbtn.hide();
        this.joinButton.hide();
    }

    display(){
        this.setElementsPosition();
        this.team1MousePressed();
        this.team2MousePressed();
        this.teamrMousePressed();
        this.joinMousePressed();
    }

    team1MousePressed(){
        this.team1btn.mousePressed(()=>{
            this.select = 1;
        });
    }

    team2MousePressed(){
        this.team2btn.mousePressed(()=>{
            this.select = 2;
        });
    }

    teamrMousePressed(){
        this.teamrbtn.mousePressed(()=>{
            this.select = Math.round(random(1,2));
        });
    }

    joinMousePressed(){
        this.joinButton.mousePressed(()=>{
            hide();
            var message = ` Hello ${this.input.value()} </br>
            Waiting...`;
            this.greeting.html(message);

                if(this.select === 1){
                    team1Count++;
                }

                else if(this.select === 2){
                    team2Count++;
                }

            player.name = this.input.value();
                
        });
    }
}