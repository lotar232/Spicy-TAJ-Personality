const YES_OR_NO = "Yes or no?";
const TAJ_CHAT_HANDLER = Java.type('me.goddragon.teaseai.api.chat.ChatHandler');
const LOGGER = Java.type('me.goddragon.teaseai.utils.TeaseLogger');
const LOGGER_LEVEL = Java.type('java.util.logging.Level');
const DEBUG_MODE = 1;

const SENDER_TAJ = 1;
const SENDER_ASSISTANT = 0;

const ANSWER_YES = 0;
const ANSWER_NO = 1;
const ANSWER_TIMEOUT = 2;

let CURRENT_SENDER = SENDER_TAJ;

function sendDebugMessage(message) {
    switch(DEBUG_MODE) {
        //Chat and log mode
        case 0:
            sendDebugMessageToChat(message, false, true);
            break;
            //Log mode only
        case 1:
            LOGGER.getLogger().log(LOGGER_LEVEL.INFO, message)
            break;
            //No debug at all
        default:
            break;
    }
}

function getCurrentTAJSenderID() {
    return TAJ_CHAT_HANDLER.getHandler().getSelectedSender().getId();
}

function getCurrentSender() {
    return CURRENT_SENDER;
}

function setCurrentSender(sender) {
    CURRENT_SENDER = sender;
}

function sendMessageBasedOnSender(message, secondsToWait = undefined, skipImage = false) {
    if (getCurrentSender() === SENDER_TAJ) {
        if (skipImage) {
            lockImages();
        }

        if (secondsToWait === undefined) {
            sendMessage(message);
        } else if (secondsToWait !== false) {
            sendMessage(message, secondsToWait);
        } else {
            sendMessage(message);
        }

        if (skipImage) {
            unlockImages();
        }
    } else if (getCurrentSender() == SENDER_ASSISTANT) {
        sendVirtualAssistantMessage(message, secondsToWait, skipImage);
    } else {
        sendVirtualAssistantMessage('Error: Sender id ' + getCurrentSender() + ' is unknown');
    }
}

function sendDebugMessageToChat(message) {
    let textName = new javafx.scene.text.Text("[Debug]: ");
    textName.setFill(javafx.scene.paint.Color.POWDERBLUE);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.POWDERBLUE);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    //test below to see if tts is supported and sendmessage can be swapped for sendcustom message
    sendCustomMessage(textName, text);
}

function sendVirtualAssistantMessage(message, wait, skipImage) {
    let textName = new javafx.scene.text.Text("[Vivienne]: ");
    textName.setFill(javafx.scene.paint.Color.ROYALBLUE);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.ROYALBLUE);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

//test below to see if tts is supported and sendmessage can be swapped for sendcustom message
   // sendCustomMessage(textName, text);
    systemMessage("<c=royalblue b fs=14>[Vivienne]: <>" +message);
    //Show image
    if(skipImage === undefined || !skipImage) {
        if(!isImagesLocked()) {
            showImage("Images/Spicy/Assistant/" + ASSISTANT_CURRENT_SET_ID + "/*.jpg");
        }
    }

    if(wait === undefined) {
        sleep(1000 + message.length * 50, "MILLISECONDS");
    } else if(wait) {
        sleep(wait*1000, "MILLISECONDS");
    }
}

function sendSystemMessage(message) {
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 13));

    sendCustomMessage(text);
}


function addContact(id) {
    let contactName = "";

    if (id > 2) {
        contactName = '%domFriend' + (id - 2) + 'Name%';
    } else {
        contactName = '%domName%';
    }

    let textName = new javafx.scene.text.Text(replaceVocab(contactName));
    textName.setFill(TAJ_CHAT_HANDLER.getHandler().getParticipantById(id).getNameColor());
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));


    let text = new javafx.scene.text.Text(' joined the chat');
    text.setFill(javafx.scene.paint.Color.AQUA);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    sendCustomMessage(textName, text);
}

function removeContact(id) {
    let contactName = "";

    if (id > 2) {
        contactName = '%domFriend' + (id - 2) + 'Name%';
    } else {
        contactName = '%domName%';
    }

    let textName = new javafx.scene.text.Text(replaceVocab(contactName));
    textName.setFill(TAJ_CHAT_HANDLER.getHandler().getParticipantById(id).getNameColor());
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    let text = new javafx.scene.text.Text(' left the chat');
    text.setFill(javafx.scene.paint.Color.AQUA);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    sendCustomMessage(textName, text);
}

function createIntegerInput(question, min, max, notNumberMessage, outOfRangeMessage) {
    sendMessageBasedOnSender(question, 0);
    let answer = createInput();

    while (true) {
        if (answer.isInteger()) {
            if (min === undefined && max === undefined) {
                return answer.getInt();
            } else {
                let int = answer.getInt();
                if (int >= min && int <= max) {
                    return int;
                }

                sendMessageBasedOnSender(outOfRangeMessage);
                answer.loop();
            }
        } else {
            sendMessageBasedOnSender(notNumberMessage);
            answer.loop();
        }
    }
}

function sendGoodForMe() {
    let finalSentence = [
        'I am all that matters anyway',
        'Pleasing me is most important anyway',
        'You aren\'t of any importance anyway',
        'But I don\'t think your opinion matters here',
        'But you don\'t get a say anyway',
        'You have no say in it anyway',
        'I am all that matters anyway',
        'I should be all that matters anyway',
        'I should be all that matters to you anyway'
    ];

    sendMessage('%Good%');
    if(isChance(50)) {
        sendMessage(random('Well at least good for me', 'Good for me at least', 'Maybe not that good for you but it makes me happy', 'Maybe not that good for you but for me at least', 'Not that good for you but for me at least')
            + ' ' + random('%Grin%', '%Lol%'));

        finalSentence.push('And that\'s all that counts', 'And that\'s all that matters');
    } else {
        sendMessage(random('Probably not so good for you though', 'Maybe not that good for you', 'Could be not that good for you though', 'Could be bad for you though',
            'On the other hand it might be bad for you though') + ' %Lol%');

        finalSentence.push('There is nothing better than something being good for me and bad for you', 'Nothing better than it being good for me and bad for you', 'It being good for me and being bad for you is the deal anyway isn\'t it?');
    }

    sendMessage(finalSentence[randomInteger(0, finalSentence.length - 1)] + '  %EmoteHappy%');
}

function sendAlreadyKnowWhatsNext(triggerwords) {
    sendMessage("You already know " + random("what I am gonna make you do now", "what I am gonna to do you now", "what comes next", "what you are gonna do next", "what I want you to do next", "what is gonna happen now", "what we are gonna do to you now", "what we are gonna do now") + random('', ', don\'t you? %EmoteHappy%'), 0);

    let answer = createInput(4);

    while (true) {
        if (answer.isTimeout()) {
            return ANSWER_TIMEOUT;
        } else if (answer.isLike('yes')) {
            sendMessage('We\'ll see if you are right %Grin%');
            return ANSWER_YES;
        } else if (answer.isLike('no')) {
            sendMessage('Well you are gonna know pretty soon %Lol%');
            return ANSWER_NO;
        } else {
            for(let x = 0; x < arguments.length; x++) {
                if(answer.isLike(arguments[x])) {
                    sendMessage('You must know me pretty well %SlaveName% %EmoteHappy%');
                    return ANSWER_YES;
                }
            }

            sendMessage('No %SlaveName% %Grin%');
            return ANSWER_NO;
        }
    }
}


function sendYesOrNoQuestion(question, sender = null) {
    let previousSender = getCurrentSender();

    if (sender !== null) {
        setCurrentSender(sender);
    }

    if (getCurrentSender() === SENDER_ASSISTANT) {
        sendVirtualAssistantMessage(question, 0);
        return createYesOrNoQuestion();
    }

    let answer = sendInput(question);

    while (true) {
        if (answer.isLike('yes')) {
            return true;
        } else if (answer.isLike('no')) {
            return false;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }

    //Restore sender
    if (sender !== null) {
        setCurrentSender(previousSender);
    }
}


function sendYesOrNoQuestionTimeout(question, timeout) {
    let answer = sendInput(question, timeout);

    while (true) {
        if (answer.isTimeout()) {
            return ANSWER_TIMEOUT;
        } else if (answer.isLike('yes')) {
            return ANSWER_YES;
        } else if (answer.isLike('no')) {
            return ANSWER_NO;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }
}

function createYesOrNoQuestion() {
    let answer = createInput();

    while (true) {
        if (answer.isLike('yes')) {
            return true;
        } else if (answer.isLike('no')) {
            return false;
        } else {
            sendMessageBasedOnSender(YES_OR_NO);
            answer.loop();
        }
    }
}

function sendArbMessage(textName, message, wait, imagePath) {
    let sendName = new javafx.scene.text.Text(textName);
    sendName.setFill(javafx.scene.paint.Color.ROYALBLUE);
    sendName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));


    message = replaceVocab(message);
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.ROYALBLUE);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(sendName, text);

    /*Show image
    if(ImagePath !== undefined) {
       showImage(ImagePath);
    }*/

    if (wait === undefined) {
        sleep(1000 + message.length * 50, "MILLISECONDS");
    } else if (wait) {
        sleep(wait * 1000, "MILLISECONDS");
    }
}