// ==UserScript==
// @name     extra buttons showdown script
// @include https://play.pokemonshowdown.com/*
// @version  1
// @grant    GM_addStyle
// ==/UserScript==

addEventListener("load", setTimeout(main, 1000))

function main() {
    var menu1element = document.getElementsByClassName("menugroup")[1];
  	var menu2element = document.getElementsByClassName("menugroup")[2];
  
  	var friendslistelement = document.createElement("p"); // comment this out to remove the friends list button
  	friendslistelement.innerHTML = '<button class="button mainmenu4" name="send" value="/friends list">'
                + 'Friends list</button>'
                ;
  	menu2element.appendChild(friendslistelement);
  
  		var onlineteamselement = document.createElement("p"); // comment this out to remove the online teams button
  	onlineteamselement.innerHTML = '<button class="button mainmenu4" name="send" value="/teams">'
                + 'Online teams</button>'
                ;
  	menu1element.appendChild(onlineteamselement);
  
  
    	var sampleteamselement = document.createElement("p"); // comment this out to remove the sample teams button
  	sampleteamselement.innerHTML = '<button class="button mainmenu4" name="send" value="/sampleteams">'
                + 'Some sample teams</button>'
                ;
  	menu1element.appendChild(sampleteamselement);
  	
}

