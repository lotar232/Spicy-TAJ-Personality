const ORGASM_FREQUENCY_VERY_RARE = 0;
const ORGASM_FREQUENCY_RARE = 1;
const ORGASM_FREQUENCY_SEMI_RARE = 2;
const ORGASM_FREQUENCY_SOMEWHAT_RARE = 3;
const ORGASM_FREQUENCY_DOM = 4;

const ORGASM_CATEGORY_ALLOWED = 0;
const ORGASM_CATEGORY_RUINED = 1;
const ORGASM_CATEGORY_DENIED = 2;

function registerOrgasm() {
    setDate(VARIABLE_LAST_ORGASM);
    setVar(VARIABLE_ORGASM_COUNTER, getVar(VARIABLE_ORGASM_COUNTER, 0) + 1);
    registerEjaculation();
}

function registerRuin() {
    setDate(VARIABLE_LAST_RUINED_ORGASM);
    setVar(VARIABLE_RUIN_COUNTER, getVar(VARIABLE_RUIN_COUNTER, 0) + 1);
    registerEjaculation();
}

function registerEjaculation() {
    setVar(VARIABLE_ORGASM_POINTS, 0);
    setVar(VARIABLE_REQUIRED_ORGASM_POINTS, getRequiredOrgasmPoints());
}

function getLastEjaculationDate() {
    if(!isVar(VARIABLE_LAST_RUINED_ORGASM) && !isVar(VARIABLE_LAST_ORGASM)) {
        //Just some really old date if the sub hasn't cum yet for some reason (although the date should be set in the startup file)
        return setDate().addYear(-10);
    }

    if(!isVar(VARIABLE_LAST_RUINED_ORGASM) || getDate(VARIABLE_LAST_RUINED_ORGASM).after(getDate(VARIABLE_LAST_ORGASM))) {
        return getDate(VARIABLE_LAST_ORGASM);
    }

    return getDate(VARIABLE_LAST_RUINED_ORGASM);
}

function waitForCumAnswer() {
    let answer = createInput();

    //Ignored thank rule
    let ignoredRule = false;
    while(true) {
        if(answer.isLike('came', 'cum', 'orgasm', 'ruin')) {
            sendMessage('%Good%');

            if(RULE_ALWAYS_THANK_FOR_ORGASM.isActive()) {
                if(!ignoredRule) {
                    sendMessage(random('A "thank you" would be nice %Slave%', 'How about you thank your %DomHonorific%?'));
                    sendMessage('Every single on of your orgasms is at my mercy');
                    sendMessage('I will not tolerate you disrespecting this');
                    addPunishmentPoints(getPPRuleIgnored());
                    changeMeritHigh(true);

                    if(CBT_LIMIT.isAllowed()) {
                        smallCBTPunishment();
                    }

                    sendMessage('Now...');
                    sendMessage('Let\'s try this again');
                    sendMessage('What do you say?');
                    ignoredRule = true;
                } else {
                    sendMessage('But still not what I wanted to hear!');
                    addPunishmentPoints(getPPRuleIgnored());
                    changeMeritHigh(true);
                }
            } else if(isChance(20)) {
                RULE_ALWAYS_THANK_FOR_ORGASM.sendIntroduction();
            }

            answer.loop();
        } else if(answer.isLike('thanks', 'thank you', "merci", "gracias", "grateful")) {
            if(!ignoredRule) {
                changeMeritLow(true);
            }

            sendMessage('You\'re welcome %SlaveName% %Grin%');
            break;
        } else {
            sendMessage('How about you thank your %DomHonorific%?');
            changeMeritLow(true);
            answer.loop();
        }
    }
}

function decideOrgasm(noDenied = false) {
    let decide = 0;

    let array = [
        //First personality
        /*VPleased*/ 100, 170,  /*PLeased*/ 90, 160,  /*Neutral*/ 80, 150,  /*Annoyed*/70, 140, /*VAnnoyed*/60, 130,
        //Second personality
        /*VPleased*/ 90, 150,  /*PLeased*/ 80, 140,  /*Neutral*/ 70, 130,  /*Annoyed*/60, 120, /*VAnnoyed*/50, 110,
        //Third personality
        /*VPleased*/ 80, 130,  /*PLeased*/ 70, 120,  /*Neutral*/ 60, 110,  /*Annoyed*/50, 100, /*VAnnoyed*/40, 90,
    ];

    const personalityOffset = getStrictnessForCharacter()*5*2;
    decide += randomInteger(array[personalityOffset], array[personalityOffset + 1]);

    let goodDays = getMonthlyGoodDays();

    //Bad days > good days
    if(goodDays < 31 - goodDays) {
        decide -= 31 - goodDays;
    }

    if(getVar(VARIABLE_HAPPINESS) < getVar(VARIABLE_ANGER)) {
        decide -= getVar(VARIABLE_ANGER);
    }

    if(getVar(VARIABLE_LUST) > 27) {
        decide += getVar(VARIABLE_LUST);
    }

    sendDebugMessage('Orgasm decided threshold of ' + decide + ' rolled');

    //TODO: Ruined mode?
    //The smaller orgasm ratio the more ruined orgasms
    if(decide >= 100 && getVar(VARIABLE_ORGASM_RATION) >= randomInteger(1, 100)) {
        let ratioArray = [
            //First personality
            25,
            //Second personality
            65,
            //Third personality
            100,
        ];

        incrementVar(VARIABLE_ORGASM_RATION, -ratioArray[getStrictnessForCharacter()]);

        if(getVar('slaveMode', false)) {
            incrementVar(VARIABLE_ORGASM_RATION, -45);
        }

        return ORGASM_CATEGORY_ALLOWED;
    } else if(decide >= 80 || noDenied) {
        let ratioArray = [
            //First personality
            9,
            //Second personality
            8,
            //Third personality
            6,
        ];

        incrementVar(VARIABLE_ORGASM_RATION, ratioArray[getStrictnessForCharacter()]);

        if(getVar('slaveMode', false)) {
            incrementVar(VARIABLE_ORGASM_RATION, -4);
        }

        return ORGASM_CATEGORY_RUINED;
    } else {
        sendDebugMessage('Decided to deny sub');
        return ORGASM_CATEGORY_DENIED;
    }
}

function distributeOrgasmPoints() {
    let points = [
        //First personality
        /*VPleased*/ 5, 15,  /*PLeased*/ 4, 13,  /*Neutral*/ 3, 10,  /*Annoyed*/2, 7, /*VAnnoyed*/1,5, /*Lover mode*/ 2, 20, /*Good days*/ 7, 15, /*Lust*/ 15, 40, /*Denial*/ 5, 15,
        //Second personality
        /*VPleased*/ 3, 13,  /*PLeased*/ 2, 11,  /*Neutral*/ 1, 8,  /*Annoyed*/1, 5, /*VAnnoyed*/0,3, /*Lover mode*/ 1, 17, /*Good days*/ 6, 12, /*Lust*/ 10, 30, /*Denial*/ 3, 12,
        //Third personality
        /*VPleased*/ 2, 10,  /*PLeased*/ 1, 8,  /*Neutral*/ 0, 6,  /*Annoyed*/0, 4, /*VAnnoyed*/0,1, /*Lover mode*/ 0, 14, /*Good days*/ 5, 10, /*Lust*/ 5, 25, /*Denial*/ 1, 9,
    ];

    const personalityOffset = getStrictnessForCharacter()*9*2;
    const moodOffset = getMood()*2;
    const loverOffset = 5*2;
    const goodDaysOffset = 6*2;
    const lustOffset = 7*2;
    const denialOffset = 8*2;

    let totalToAdd = randomInteger(points[personalityOffset + moodOffset], points[personalityOffset + moodOffset + 1]);

    if(getVar('loverMode', false)) {
        totalToAdd += randomInteger(points[personalityOffset + loverOffset], points[personalityOffset + loverOffset + 1]);
    }

    if(getMonthlyGoodDays() > personalityOffset == 0? 20 : personalityOffset == 18? 24 : 28) {
        totalToAdd += randomInteger(points[personalityOffset + goodDaysOffset], points[personalityOffset + goodDaysOffset + 1]);
    }

    if(getVar(VARIABLE_LUST) > 28) {
        totalToAdd += randomInteger(points[personalityOffset + lustOffset], points[personalityOffset + lustOffset + 1]);
    }

    if(getLastEjaculationDate().addDay(getVar(VARIABLE_DENIAL_LEVEL)).hasPassed()) {
        totalToAdd += randomInteger(points[personalityOffset + denialOffset], points[personalityOffset + denialOffset + 1]);
    }

    let map = [];

    switch(getVar(VARIABLE_ORGASM_FREQUENCY)) {
        case ORGASM_FREQUENCY_VERY_RARE:
            //Personality 1
            map.push(1, 5);
            //Personality 2
            map.push(0, 5);
            //Personality 3
            map.push(0, 3);
            break;
        case ORGASM_FREQUENCY_RARE:
            //Personality 1
            map.push(2, 8);
            //Personality 2
            map.push(1, 7);
            //Personality 3
            map.push(0, 6);
            break;
        case ORGASM_FREQUENCY_SEMI_RARE:
            //Personality 1
            map.push(3, 11);
            //Personality 2
            map.push(2, 10);
            //Personality 3
            map.push(1, 8);
            break;
        case ORGASM_FREQUENCY_SOMEWHAT_RARE:
            //Personality 1
            map.push(5, 15);
            //Personality 2
            map.push(4, 13);
            //Personality 3
            map.push(2, 10);
            break;
        case ORGASM_FREQUENCY_DOM:
            //Personality 1
            map.push(0, 15);
            //Personality 2
            map.push(0, 12);
            //Personality 3
            map.push(0, 9);
            break;
    }

    totalToAdd += randomInteger(map[getStrictnessForCharacter()*2], map[getStrictnessForCharacter()*2 + 1]);

    incrementVar(VARIABLE_ORGASM_POINTS, totalToAdd);

    sendDebugMessage('Added ' + totalToAdd + 'orgasm points');
}

function getRequiredOrgasmPoints() {
    const denialLevel = getVar(VARIABLE_DENIAL_LEVEL);
    const minPoints = 26.87*java.lang.Math.E^(0.2598*denialLevel);
    const maxPoints = 68.559*java.lang.Math.E^(0.2501*denialLevel);
    return randomInteger(minPoints, maxPoints);
}


function runOrgasmCategory(category) {
    setTempVar('lastOrgasmCategory', category);

    let path = 'Session/Orgasm/Allowed/*.js';

    switch(category) {
        case ORGASM_CATEGORY_DENIED:
            path = 'Session/Orgasm/Denied/*.js';
            break;
        case ORGASM_CATEGORY_RUINED:
            path = 'Session/Orgasm/Ruined/*.js';
            break;
    }

    //Keep track of how many times we tried to find an orgasm file
    setTempVar('findOrgasmTries', getVar('findOrgasmTries', 0) + 1);

    run(path);
}

function tryRunOrgasmFetchId(minFilesSinceRun = 5) {
    return tryRunOrgasm(getCurrentScriptName(), getVar('lastOrgasmCategory'), minFilesSinceRun);
}

function tryRunOrgasm(moduleId, category, minFilesSinceRun = 5) {
    let maxTries = 10;

    moduleId = moduleId.toLowerCase();

    if (ORGASM_HISTORY.isInHistory(moduleId)) {
        //Check whether not enough modules have passed since last time we ran this module
        if (ORGASM_HISTORY.getModulesSinceHistory(moduleId) < minFilesSinceRun) {
            if (getVar('findOrgasmTries') < maxTries) {
                //Try to run from same category
                runOrgasmCategory(category);
                return false;
            }
            //Else
            //We tried too often so we gotta let this pass
        }
    }

    ORGASM_HISTORY.addHistoryRun(moduleId);
    return true;
}

function askAboutDenialLevel() {
    if(!isVar('denialLevelTalkInDays')) {
        setVar('denialLevelTalkInDays', randomInteger(5, 15));
    } else {
        if(getVar('denialLevelTalkInDays') <= 0) {

            //Reset variable
            setVar('denialLevelTalkInDays', randomInteger(5, 15));

            const chancesIncrease = [25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 50, 50];
            let denialLevelIndex = getVar(VARIABLE_DENIAL_LEVEL) - 1;

            if(getVar(VARIABLE_DENIAL_LEVEL) < 15) {
                if(isChance(chancesIncrease[Math.min(denialLevelIndex, chancesIncrease.length - 1)])) {
                    incrementVar(VARIABLE_DENIAL_LEVEL, 1);
                }
            }

            const talkChance = [50, 55, 55, 60, 60, 70, 70, 80, 80, 90, 25, 30, 35, 40, 50];

            //Too long after orgasm the sub might decide differently so we only ask him if he came 3 or less days ago
            if(isChance(talkChance[Math.min(denialLevelIndex, talkChance.length - 1)]) && !getLastEjaculationDate().addDay(3).hasPassed()) {
                sendMessage("%SlaveName%");
                sendMessage(random("Once in a while I feel it\'s important to discuss denial with you ", "As you know its important to discuss your denial practice with you.. "));
                sendMessage(random("Today is one of those days ", "And today we\'ll do just that! "));
                sendMessage("Currently your denial level is " + getVar(VARIABLE_DENIAL_LEVEL));
                sendMessage(random("Just to remind you ", "Let me remind you that..."));
                sendMessage("Level 1 to 5 is for beginners");
                sendMessage("Level 6 to 8 is for the trained");
                sendMessage("Level 9 to 11 is for the advanced");
                sendMessage("Level 12 to 15 is for the high skilled");
                sendMessage("Anything above is always to my liking but you will probably not cum in a long time");
                sendMessage(random("I try to constantly adjust you level to be appropriate to what I think you can handle", "Often I try to adjust this little by little to keep you at your limit"));
                sendMessage(random("But...", "But it's not that easy..."));
                sendMessage(random("What I want to ask you is", "What I simply have to ask is"));
                const appropiate = sendInput(random("Do you think you\'re placed at an appropriate level? ", "Do you feel your current level of denial to be appropriate? "));

                while(true) {
                    if(appropiate.isLike('yes')) {
                        sendMessage('%Good%');
                        break;
                    } else if(appropiate.isLike('no')) {
                        const highOrLowAnswer = sendInput(random("Are you set at a too low or too high level? ", "Is your current level too high or too low "));
                        while(true) {
                            if(highOrLowAnswer.isLike('high')) {
                                if(getVar(VARIABLE_DENIAL_LEVEL) > 1) {
                                    sendMessage('Well then, I will try to work on that then %Grin%');
                                    incrementVar(VARIABLE_DENIAL_LEVEL, -1);
                                } else {
                                    sendMessage('Your level can\'t be lower than 1 %Lol%');
                                    sendMessage('You gotta at least deal with a very small amount of denial %SlaveName%');
                                }

                                break;
                            } else if(highOrLowAnswer.isLike('low')) {
                                if(getVar(VARIABLE_DENIAL_LEVEL) >= 15) {
                                    sendMessage('I am already denying you like almost every time %SlaveName%');
                                    sendMessage('But you still keeping going');
                                }

                                sendMessage('I like your attitude %SlaveName% %Grin%');
                                incrementVar(VARIABLE_DENIAL_LEVEL, 1);
                                break;
                            } else {
                                sendMessage('Too high or low %SlaveName%?');
                                answer.loop();
                            }
                        }

                        break;
                    } else {
                        sendMessage(YES_OR_NO);
                        answer.loop();
                    }
                }
            }
        } else {
            incrementVar('denialLevelTalkInDays', -1);
        }
    }


}
