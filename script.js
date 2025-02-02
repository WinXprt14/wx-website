<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=0.570">
<title>WinXprt Page</title>
<style>
body {
background: linear-gradient(90deg, rgb(0, 15, 80), rgb(0, 55, 100));
color: whitesmoke;
font-family: Verdana;
margin: 0;
overflow-x: hidden;
}
.header {
margin-top: -2vh;
background: linear-gradient(75deg, blue, green, rgb(0, 205, 50));
margin: 0;
height: 2.6em;
position: fixed;
width: 100%;
}
.parent-div {
display: flex;
box-sizing: border-box;
}
.side-div {
width: 16%;
height: 35vh;
position: fixed;
}
.side-div ul li:hover {
list-style-type: "=>";
}
.a-links:hover {
padding: 2px;
border-radius: 100px;
background-color: yellow;
color: darkblue;
}
.a-links {
font-weight: 650;
text-align: center;
display: block;
width: 100%;
color: rgb(0, 0, 100);
font-size: 10pt;
color: yellow;
}
.main-div {
padding: 0px;
box-sizing: border-box;
}
iframe {
display: block;
transition: all 1s ease;
}
.play-pause-btn:hover, .stop-btn:hover {
cursor: pointer;
}
@media screen and (max-width: 500px) {
.iframe1, .iframe2, .iframe3 {
transform: scale(70%);
}
}
@media screen and (max-width: 720px) {
body {
overflow-x: hidden;
}
.iframe1, .iframe2, .iframe3 {
transform: scale(80%);
}
}
@media screen and (max-width: 501px) {
.main-div {padding: 0;}
}
@media screen and (max-width: 944px) {
.side-div {width: 150px;}
}
@media screen and (max-width: 412px) {
.iframe1, .iframe2, .iframe3 {transform: scale(100%);}
}
@keyframes fade-in-out {
0% {opacity: 1;}
50% {opacity: 0.5;}
100% {opacity: 1;}
}

@media screen and (min-width: 1700px) {
.section-desc {font-size: 16pt;}
}
@media screen and (max-width: 805px) {
.section-desc {font-size: 10pt; padding-left: 10%; padding-right: 10%;}
}
.hr1 {transition: margin-bottom 1s ease;}
.side-div {z-index: 5;}
.header {z-index: 5;}
.section-desc {transition: font-size 1s ease;}
@media screen and (max-width: 750px) {
.hr1 {margin-bottom: 55px;}
}
@keyframes bigger-input {
0% {transform: scale(100%);}
100% {transform: scale(1000%);}
}
</style>
</head>
<body style="background: linear-gradient(90deg, rgb(0, 80, 15), rgb(0, 100, 55));">
<center>
<div class="header">
<!--<h1 style="vertical-align: top; margin-top: 0; margin-bottom: 0; color: lime; display: inline-block;">WinXprt</h1><h2 style="vertical-align: bottom; margin: 0; color: darkblue; display: inline-block;">'s page</h2>-->
<marquee direction="left" behavior="alternate" scrollamount="20" loop="2"><h1 style="vertical-align: top; margin-top: 0; margin-bottom: 0; color: lime; display: inline-block;">WinXprt</h1><h2 style="vertical-align: bottom; margin: 0; color: darkblue; display: inline-block;">&nbsp;'S (LUKE) BIRTHDAY WAS YESTERDAY</h2></marquee>
</div>
</center>
<br><br>
<audio class="audio" onended="TrackChange(1)" autoplay></audio>
<audio class="audio-sfx" src=""></audio>
<img style="position: fixed; z-index: -10; transform: rotate(10deg); margin-top: 22vh; margin-left: 5vw; opacity: 0.5;" width="175" src="media-player.PNG">
<img style="position: fixed; z-index: -10; transform: rotate(-4deg); margin-top: 45vh; margin-left: 60vw; opacity: 0.5;" width="465" src="Code-Notepad.PNG">
<div class="play-pause-stop-div" style="z-index: 15; position: fixed; display: inline-block; margin-top: 38vh; margin-left: 89vw;">
<img class="play-pause-btn" title="Play music" style="display: block; curs" width="75" src="play-xxl.png" onclick="PlayPause();">
<img class="stop-btn" title="Stop music" style="display: block; margin-top: 10px; cursor: pointer;" width="75" src="stop-xxl.png" onclick="StopAudio();">
</div>
<div class="next-prev-tracks" style="position: fixed; display: inline-block; z-index: 15; margin-top: 50vh; margin-left: 15px;">
<div class="prev-track" style="z-index: 15; transform: scaleX(-1); cursor: pointer;" title="Previous Track" onclick="TrackChange(-1);">
<img width="50" height="75" src="play-xxl.png"/>
<img style="margin-left: -25px;" width="50" height="75" src="play-xxl.png"/>
</div>
<div class="next-track" style="z-index: 15; cursor: pointer;" title="Next Track" onclick="TrackChange(1);">
<img width="50" height="75" src="play-xxl.png"/>
<img style="margin-left: -25px;" width="50" height="75" src="play-xxl.png"/>
</div>
</div>
<div class="side-div">
<div class="side-div-div" style="border-radius: 0px 0px 20px 50px; padding: 2px; background: linear-gradient(75deg, green, rgba(0, 175, 40, 0.7));">
<h2 style="margin-bottom: -0.5em; padding-left: 1em;">Links</h2>
<ul style="list-style-type: '=⇒ ';">
<li><a class="a-links a-link1" href="https://instagram.com/winxprt/" target="_blank">Instagram</a></li>
<li><a class="a-links a-link2" href="https://youtube.com/@winxprt/" target="_blank">YouTube</a></li>
<hr>
<h3 style="display: block; margin-top: 0; margin-bottom: 6px;">Other pages: </h3>
<li><a class="a-links a-link3" href="projects.html">Projects by me</a></li>
<li style="cursor: not-allowed;"><s class="a-links a-link4" onclick="IdiotQuiz();">Home page</s></li>
</ul>
<hr>
<div class="music-info" style="padding-left: 15px;">
<span>♫&nbsp;</span> 
<span></span>
<hr style="margin: 0;">
<span></span>
</div>
<br>
</div>
</div>
<div class="main-div">
<center>
<div style="position: fixed; display: none; padding: 10px; margin-top: 25px; background-color: rgba(100, 100, 100, 0.55); margin-top: 40vh; margin-right: 26vw;" class="mouse-leave-mess">
What are you doing outside??
<br><br>
<input style="animation: bigger-input 7s linear; transform: scale(1000%);" class="input-mouse-leave" type="text" placeholder="Please Describe">
</div>
<h3>Welcome to my website!</h3>
<span style="margin-bottom: 10px; display: block;">Hello World!</span>
<fieldset style="border-radius: 25px; border-color: green; width: 95%;">
<legend style="z-index: -1; background-color: grey; font-weight: 550; border-radius: 25px; transform: scale(120%); padding: 4px 10px 6px 10px; margin-left: 30vw;">Page Settings</legend>
<span>Choose theme: </span>
<input checked="" style="display: inline-block;" name="sett-green-blue" id="sett1" type="radio" onclick="BlueTheme();"><label style="display: inline;" for="sett1" onclick="BlueTheme();">Blue</label>
<input style="display: inline;" name="sett-green-blue" id="sett2" type="radio" onclick="GreenTheme();"><label for="sett2" onclick="GreenTheme();">Green</label>
<br>
<span>Allow cookies on YouTube Embed Videos?</span>
<input checked style="display: inline-block;" name="sett-yt-cookies" id="sett3" type="radio" onclick="YtIframeCookies('1');" title="Allow cookies on YouTube Embed Videos. This will allow information associated with your Google account (if you're signed in) and other cookies allowed on YouTube to pass through allowing you to save the video to watch later on your current account without being redirected to YouTube's site."><label style="display: inline;" for="sett3" onclick="YtIframeCookies('0');" title="Allow cookies on YouTube Embed Videos. This will allow information associated with your Google account (if you're signed in) and other cookies allowed on YouTube to pass through allowing you to save the video to watch later on your current account without being redirected to YouTube's site.">Consent to cookies</label>
<input style="display: inline;" name="sett-yt-cookies" id="sett4" type="radio" onclick="YtIframeCookies('0');" title="Do not allow cookies on YouTube Embed Videos. This will not allow information associated with your Google account (if you're signed in) and other cookies allowed on YouTube to pass through."><label for="sett4" onclick="YtIframeCookies('1');" title="Do not allow cookies on YouTube Embed Videos. This will not allow information associated with your Google account (if you're signed in) and other cookies allowed on YouTube to pass through.">Do not consent to cookies</label>
<button style="transform: scale(125%); display: block; margin-top: 10px;" onclick="localStorage.clear(); window.alert('Changes will reset after reload');">Clear all settings</button>
</fieldset>
<span style="font-size: 10pt; display: inline-block; width: 100%; text-align: right;">Last update: Sunday 2/2/2025</span>
<hr class="hr1" style="border-color: lightblue;">
<h2 style="display: inline-block; font-size: 126%;">Upgrading Windows ME until it freezes&nbsp;</h2><h4 style="display: inline-block;">GREEK</h4>
<br><span style="display: block; margin: 0; padding-left: 12%; padding-right: 12%;" class="section-desc">The ultimate experiment! It wasn't until 19th of April 2023 when I tried to install Windows ME and upgrade it without changing any hardware settings until I barely could install Windows 8.1 (I had all my ISOs in Greek language back then)</span>
<p style="display: block;"><iframe class="iframe1" src="https://www.youtube.com/embed/07kkCVbjY7E?hl=en-us&amp;rel=0&amp;mute=1&amp;autoplay=0&amp;color=white&amp;disablekb=1" width="560" height="315" title="Upgrading Windows ME until it crashes GREEK" frameborder="0" allowfullscreen=""></iframe></p>
</center>
<hr class="hr2" style="border-color: lime;">
<center>
<h2 style="display: block;">Easter eggs of old Windows versions</h2>
<span style="display: inline-block; padding-left: 12%; padding-right: 12%;" class="section-desc">On the video above I have showed easter eggs of old Windows OSes. It would be quite ironical not knowing the existence of these back in the days when XP came out.
But it wasn't until 2001 when Microsoft had decided to remove these easter eggs and never put them again
</span>
<p><iframe class="iframe2" src="https://www.youtube.com/embed/SFmRsIMJ0aE?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0" width="560" height="315" title="Easter Eggs of old Windows OSes" frameborder="0" allowfullscreen=""></iframe></p>
</center>
<hr class="hr3" style="border-color: lime;">
<div>
<center>
<h2 style="display: block; margin-bottom: -20px;">Installing Windows Whistler Build 2446</h2><h3 style="display: block;">(20th Anniversary)</h3>
<span class="section-desc" style="display: inline-block; padding-left: 12%; padding-right: 12%;">On the video below, I installed and tried one of Windows Whistler's builds on a VM, since it was its 20th anniversary day. This build had many differences in comparison to the final and famous Windows XP version at a closer look, for instance the Red Moon Desert, shown as default in this build, was replaced with Bliss wallpaper in the final build</span>
<p><iframe class="iframe3" width="560" height="315" src="https://www.youtube.com/embed/pAoysWh-PNY?hl=en-us&amp;rel=0&amp;color=white&amp;disablekb=1&amp;mute=1&amp;autoplay=0" title="Installing Windows Whistler Build 2446" frameborder="0" allowfullscreen></iframe></p>
</center>
</div>
</div>
<script src="script.js"></script>
</body>
</html>
