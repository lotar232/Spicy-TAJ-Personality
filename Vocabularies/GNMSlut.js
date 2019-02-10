
function GNMSlutVocabulary() {

   const answers =[" slut "," girl "," horny girl  "," horny slut "," cock loving girl "," cum craving girl "," little girl "," horny little slut "," horny little girl "," slutty girl "];

   
   if(isVar("BlockSounds") &&(getVar("BlockSounds")==true)){
	   
   }else
   {		 playAudio("Audio/GNMSounds/Humiliation/Slut/*.mp3", true);
   }
	   
     return answers[randomInteger(0, answers.length - 1)];
}

