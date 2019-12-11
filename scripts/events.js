//console.log("Works!!");
var eventsList = [
    {
        eventName:"Board Game Night",
        eventDate:"December 12th",
        eventTime:"7pm Ship Time",
        eventLocation:"Main Dining Hall",
        eventDescription:"Come out to enjoy our famous dinner and stay for the games! The SS L'océan provides family friendly fun but don't blame us for the ensuing family disagreements on board game rules! "
    },
    {
        eventName:"Taco Tuesday",
        eventDate:"December 17th",
        eventTime:"6pm Ship Time",
        eventLocation:"Main Dining Hall",
        eventDescription:"ITS TACO TUEEEESSSSDAYYY!!🌮🌮"
    },
    {
        eventName:"Raptor's Christmas Game Day",
        eventDate:"December 25th",
        eventTime:"12pm EST",
        eventLocation:"Bar",
        eventDescription:"The Toronto Raptors take on eastern conference rivals Boston Celtics in an action packed match! Enjoy fine cuisine and what might be quit possibly better than courtside seats!🏀🍽️"
    },
    {
        eventName:"Eat What You Catch",
        eventDate:"December 26th",
        eventTime:"ALL DAY!",
        eventLocation:"Front Deck",
        eventDescription:"Take on the pirates and defend your catch! Chefs are stationed on deck to provide fresh cooked meals caught by yourself!🏴‍☠️"
    },
    {
        eventName:"All You Can Eat Oysters",
        eventDate:"December 29th",
        eventTime:"8pm Ship Time",
        eventLocation:"Main Dining Hall ",
        eventDescription:"The SS L'océan best kept secrect! Unlimited Oysters! Practically less than a buck a shuck!🦪"
    }
]
//console.log(eventsList[0].eventDate);
var list = document.getElementsByName("eventCard"); console.log("wdiowjho");
for (var i = 0; i < list.length; i++) {
    console.log(eventsList[i].eventDate);
    list[i].children[0].innerHTML=eventsList[i].eventDate;
    list[i].children[1].innerHTML=eventsList[i].eventName;    
    list[i].children[2].innerHTML=eventsList[i].eventTime;
    list[i].children[3].innerHTML=eventsList[i].eventLocation;
    list[i].children[4].innerHTML=eventsList[i].eventDescription;

}

jQuery(document).ready(function(){
    jQuery(".eventDiscription").hide();

    jQuery(".eventCard").click(function(){
        $(".eventDiscription").not($(this).find(".eventDiscription")).slideUp(1000);
        $(this).find(".eventDiscription").slideToggle(1000);
    });
});
   
    