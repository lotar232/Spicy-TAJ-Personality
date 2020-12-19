//TODO: If has spoon nearby => use spoon sometimes or other stuff or even make the sub get the spoon
run("Session/Modules/Pain/CockBallTorture.js");

function smallPunishment(cbt = true, spanking = true) {
    //TODO: Anal, corner time, gold subtract, punishment points too in the future at random
    if ((isInChastity() || !cbt && spanking) && PAIN_LIMIT.isAllowed()) {
        doSpankingPunishment();
    } else if (CBT_LIMIT.isAllowed()) {
        smallCBTPunishment();
    } else {
        //Fallback
        sendMessage('I am gonna only assign a few punishment points this time %SlaveName%');

        addPunishmentPoints(75);
    }
}

function doRubberbandPunishment(multiplier = 1) {
    if (fetchToy('large rubberband', undefined, 4)) {
        sendMessage('Now...');
        sendMessage('Put one around each butt cheek');
        sendMessage('Additionally one around your left and one around right thigh');

        sendMessage('Tell me when you are done');
        waitForDone();

        sendMessage("You will be given 4 different commands"); //#DT4
        sendMessage("Left thigh"); //#DT4
        sendMessage("Right thigh"); //#DT4
        sendMessage("Whenever you are given a thigh related command I want you pull the rubber band far back"); //#DT4
        sendMessage("You have to be worried that it might snap"); //#DT4
        sendMessage("If you aren't you haven't pulled it far enough back..."); //#DT4
        sendMessage("Aim for your inner thigh and let it go"); //#DT4
        sendMessage("The last 2 commands are"); //#DT4
        sendMessage("Left butt cheek"); //#DT4
        sendMessage("Right butt cheek"); //#DT4
        sendMessage("Again as far back as it goes"); //#DT4
        sendMessage("You may aim wherever you choose as long as you're aiming for a part of the butt cheek"); //#DT4

        sendMessage('Let\'s get started %Grin%', 3);

        let strikes = randomInteger(20, 40) * multiplier;

        while (strikes > 0) {
            strikes--;

            if ((strikes % 50 == 0)) {
                sendMessage(strikes + " strikes remaining...");
            }

            sendMessage(random("Left thigh...", "Right thigh...", "Left Cheek...", "Right Cheek..."), randomInteger(1, 2));
            sendMessage("Pull back!", randomInteger(1, 3)); //#DT4

            switch (randomInteger(1, 4)) {
                case 1:
                    sendMessage("You can pull it further back than that %SlaveName%", 2); //#DT4
                    break;
                case 2:
                    sendMessage("%SlaveName%, you deserve this ", 2); //#DT4
                    break;
                case 3:
                    sendMessage("Suffer %SlaveName% ", 2); //#DT4
                    break;
                case 4:
                    sendMessage("A little further %SlaveName%...", 2); //#DT4
                    break;
            }

            playAudio("Audio/Spicy/Spanking/cane.mp3");
        }

        sendMessage('You can stop now %SlaveName%');
        sendMessage('Remove the rubber bands and tell me when you are done');
        waitForDone();
    } else {
        return false;
    }



}

function doSpankingPunishment(multiplier = 1) {
    const implement = fetchSpankingImplement();

    if(isHandPalm(implement)) {
        sendMessage('You are just gonna use your ' + implement + ' for this spanking');
    }

    sendMessage('Let\'s get started %Grin%');

    //TODO: SOUND: Voice commands etc.?
    sendMessage('I want you to ' + random('kneel', 'bend over a chair', 'stand') + ' for this');
    sendMessage('Now get ready to spank your ass cheeks on my command %SlaveName%!', 5);

    let countLoud = isChance(30);
    if(countLoud) {
        sendMessage(random('I want you to count out loud!', 'I want you to count along', 'I want you to count with me'));
    }

    let maxLoops = Math.max(10, Math.min(100, getVar(VARIABLE_SUB_PAIN_TOLERANCE)*multiplier*3));

    while(maxLoops > 0) {
        maxLoops--;
        playSound("Audio/Spicy/Spanking/cane.mp3");

        if(maxLoops%2 == 0) {
            sendMessage('Left cheek!', 1);
        } else {
            sendMessage('Right cheek!', 1);
        }
    }

    sendMessage('You can stop now %SlaveName%');
    sendMessage('Get back to your chair!');
}

function smallCBTPunishment(balls = true, penis = true) {
    switch (randomInteger(0, 2)) {
        case 0:
            punishSmallSqueezeBalls();
            break;
        case 1:
            punishSmallBustBalls();
            break;
        case 2:
            punishSmallFlickBalls();
            break;
    }

    punishSmallBustBallsMultiple();
}


//Personality strictness should not influence pain!

function punishSmallBustBallsMultiple(maxLoops = getVar(VARIABLE_SUB_PAIN_TOLERANCE), earlyExitChance = 60 - getVar(VARIABLE_SUB_PAIN_TOLERANCE)*2) {
    //TODO: Count out loud?
    while(maxLoops > 0) {
        maxLoops--;

        switch (randomInteger(0, 9)) {
            case 0:
                sendMessage('Let\'s give those %Balls% another ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' smacks %EmoteHappy%');
                waitForDone();
                break;
            case 1:
                sendMessage('I want ' + returnYourOrMy() + '%Balls% to really hurt. Give them another hard slap');
                waitForDone();
                break;
            case 2:
                sendMessage('Punch your %Balls% ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' times for me');
                waitForDone();
                break;
            case 3:
                sendMessage('Now smack those %Balls% ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) + ' times as hard as you can');
                waitForDone();
                break;
            case 4:
                sendMessage('Now flick each testicle ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * +' times');
                waitForDone();
                break;
            case 5:
                sendMessage('Now ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' more smacks to each ball');
                waitForDone();
                break;
            case 6:
                sendMessage('Give me ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' more slaps');
                waitForDone();
                break;
            case 7:
                sendMessage(getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' more ' + random('smacks', 'slaps', 'hits'));
                waitForDone();
                break;
            case 8:
                sendMessage('I want ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' more ' + random('smacks', 'slaps', 'hits'));
                waitForDone();
                break;
            case 9:
                //TODO: Punches with fist and slaps with open hand
                sendMessage('I want you to add ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' more ' + random('smacks', 'slaps', 'hits') + ' to each ball');
                waitForDone();
                break;

        }

        if(isChance(getEarlyPunishmentExitChance())) {
            break;
        }
    }
}

function getEarlyPunishmentExitChance() {
    let earlyExitChance = 60 - getVar(VARIABLE_SUB_PAIN_TOLERANCE)*2 - (feelsLikePunishingSlave()? 30 : 0);
    return earlyExitChance;
}

function punishSmallSqueezeBalls() {
    sendMessage('Grab my %Balls% and squeeze them', 10);
    sendMessage('Squeeze them ' + random('as hard as you can', 'so hard that your eyes start to tear') + ' until I tell you to release your grip %SlaveName%', 3*getVar(VARIABLE_SUB_PAIN_TOLERANCE));
    sendMessage('You can stop squeezing my %Balls% now %SlaveName%');

    if (askBallPain()) {
        sendMessage('%Moan%');
    } else {
        sendMessage('I am sure I can do something about that %SlaveName%');

        if (randomInteger(0, 1) == 0) {
            punishSmallFlickBalls();
        } else {
            punishSmallBustBalls();
        }
    }
}

function punishSmallFlickBalls() {
    sendMessage('I want you to flick my balls %SlaveName%');

    let completedInTime = false;
    while (!completedInTime) {
        sendMessage('Flick each side ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' times');
        let answer = sendInput(random('Let me know when you\'re done', 'Inform me when you\'re done') + ' %SlaveName%', 60);
        while (true) {
            if (answer.isTimeout()) {
                sendMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                changeMeritLow(true);
                sendMessage(random('I guess we have to try this again', 'Let\'s try this again shall we?'));
                break;
            } else if (answer.isLike('done', 'yes')) {
                sendMessage('%Grin%');

                if (askBallPain()) {
                    sendMessage('%Moan%');
                } else {
                    sendMessage('I am sure I can do something about that %SlaveName%');

                    if (randomInteger(0, 1) == 0) {
                        punishSmallSqueezeBalls();
                    } else {
                        punishSmallBustBalls();
                    }
                }

                completedInTime = true;
                break;
            } else {
                sendMessage("Are you trying to write 'done'?");
                answer.loop();
            }
        }
    }
}

function punishSmallBustBalls() {
    sendMessage('Get ready to bust my %Balls% %SlaveName%');
    const hits = getVar(VARIABLE_SUB_PAIN_TOLERANCE);
    let completedInTime = false;
    while (!completedInTime) {
        sendMessage('Hit them hard ' + hits + ' times');
        let answer = sendInput(random('Let me know when you\'re done', 'Inform me when you\'re done') + ' %SlaveName%', 45);
        while (true) {
            if (answer.isTimeout()) {
                sendMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                changeMeritLow(true);
                sendMessage(random('I guess we have to try this again', 'Let\'s try this again shall we?'));
                break;
            } else if (answer.isLike('done')) {
                sendMessage('%Grin%');

                sendMessage('Hit my %Balls% another ' + hits + ' times %SlaveName%');
                answer = createInput(45);
                while (true) {
                    if (answer.isLike('done', 'yes')) {
                        sendMessage('%Good%');
                        completedInTime = true;
                        break;
                    } else if (answer.isTimeout()) {
                        sendMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                        changeMeritLow(true);
                        sendMessage(random('I guess we have to try this again', 'Let\'s try this again shall we?'));
                        break;
                    } else {
                        sendMessage("Are you trying to write 'done'?");
                        answer.loop();
                    }
                }
                break;
            } else {
                sendMessage("Are you trying to write 'done'?");
                answer.loop();
            }
        }
    }
}

function waitForDone(timeout = 100) {
    const answer = createInput(timeout);
    while (true) {
        if (answer.isTimeout()) {
            //TODO: Better timeout options?
            break;
        } else if (answer.isLike('done', 'ready', 'yes')) {
            break;
        } else {
            sendMessage('Are you done?');
            answer.loop();
        }
    }
}

function waitForDoneVirtualAssistant(timeout = 100) {
    const answer = createInput(timeout);
    while (true) {
        if (answer.isTimeout()) {
            //TODO: Better timeout options?
            break;
        } else if (answer.isLike('done', 'ready', 'yes')) {
            break;
        } else {
            sendVirtualAssistantMessage('Are you done?');
            answer.loop();
        }
    }
}

function askBallPain() {
    const answer = sendInput(random('Are they ' + random('blue', 'sore', 'purple', 'hurting') + ' yet?', random('Does it ', 'Do they ') + random('hurt', 'ache', 'burn') + ' yet?'));
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

    return true;
}