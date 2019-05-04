const YES_OR_NO = "Yes or no?";

function sendVirtualAssistantMessage(message, wait, skipImage) {
    textName = new javafx.scene.text.Text("[Vivienne]: ");
    textName.setFill(javafx.scene.paint.Color.ROYALBLUE);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.ROYALBLUE);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);

    //Show image
    if(skipImage === undefined || !skipImage) {
        showImage("Images/Spicy/Assistant/" + ASSISTANT_CURRENT_SET_ID + "/*.jpg");
    }

    if(wait === undefined ) {
        sleep(1000 + message.length * 50, "MILLISECONDS");
    }else
		{sleep(wait*1000, "MILLISECONDS");
		}
}

function sendSystemMessage(message) {
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 13));

    sendCustomMessage(text);
}


function sendArbMessage(textName,message, wait, ImagePath) {
 
    sendName = new javafx.scene.text.Text(textName);
    sendName.setFill(javafx.scene.paint.Color.ROYALBLUE);
    sendName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));


    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.ROYALBLUE);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(sendName, text);
	    //Show image
  //  if(ImagePath !== undefined) {
  //      showImage(ImagePath);
   // }

    if(wait === undefined ) {
        sleep(1000 + message.length * 50, "MILLISECONDS");
    }else
		{sleep(wait*1000, "MILLISECONDS");
		}

}