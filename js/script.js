
function Timer()
{

    this.daysHTMLElement=document.querySelector("#days .number");
    this.hoursHTMLElement=document.querySelector("#hours .number");
    this.minutesHTMLElement=document.querySelector("#minutes .number");
    this.secondsHTMLElement=document.querySelector("#seconds .number");

    this.launchBegin=false;

    
    this.launchingDate=new Date(2025,9,28);
    this.timeLeft=new Date();
    
    

    this.isTimerOver=function(){

        
       
        if(Date.now()<=this.launchingDate.getTime())
        {
            
            this.lauchBegin=false;
            this.timeLeft.setTime(this.launchingDate.getTime()-Date.now());
            this.setSeconds();

        }


    }

this.intervalId=setInterval(function(){launchTimer.isTimerOver();},1000);


    this.setSeconds=function(){
        var timeStamp=parseInt(this.timeLeft.getTime()/1000);
        var seconds=timeStamp%60;

        
        if( seconds<10)
        {
            this.secondsHTMLElement.innerHTML="0"+seconds;
        }
        else
        {
            this.secondsHTMLElement.innerHTML=seconds;
        }

        this.setMinutes((timeStamp-seconds)/60);


    };

    this.setMinutes=function(totalMinutes){

        var minutes=totalMinutes%60;

        if(minutes<10)
        {
            this.minutesHTMLElement.innerHTML="0"+minutes;
        }
        else
        {
            this.minutesHTMLElement.innerHTML=minutes;
        }
        
        this.setHours((totalMinutes-minutes)/60);


    };

    this.setHours=function(totalHours){

        var hours=totalHours%24;

        if( hours<10)
        {
            this.hoursHTMLElement.innerHTML="0"+hours;
        }
        else
        {
            this.hoursHTMLElement.innerHTML=hours;
        }
        this.setDays((totalHours-hours)/24);




    };

    this.setDays=function(totalDays){

        if( totalDays<10)
        {
            this.daysHTMLElement.innerHTML="0"+totalDays;
        }
        else
        {
            this.daysHTMLElement.innerHTML=totalDays;
        }


    };
    


}

var launchTimer=new Timer();