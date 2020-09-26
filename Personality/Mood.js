const VERY_PLEASED_MOOD = 0;
const PLEASED_MOOD = 1;
const NEUTRAL_MOOD = 2;
const ANNOYED_MOOD = 3;
const VERY_ANNOYED_MOOD = 4;

function getMonthlyGoodDays() {
    let goodDays = 0;

    for(let day = 0; day < 31; day++) {
        if(getVar("day" + day + "Good", false)) {
            goodDays++;
        }
    }

    return goodDays;
}

function getMonthlyBadDays() {
    return 31 - getMonthlyGoodDays();
}

function allowTeasingStroking() {
    return !feelsLikePunishingSlave();
}

//Just bad behaviour etc.
function feelsLikePunishingSlave() {
    const mood = getMood();

    let chance = 0;

    if (mood === VERY_PLEASED_MOOD) {
        chance = getStrictnessForCharacter() * 10;
    } else if (mood === PLEASED_MOOD) {
        chance = getStrictnessForCharacter() * 15;
    } else if (mood === NEUTRAL_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 20;
    } else if (mood === ANNOYED_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 25;
    } else if (mood === VERY_ANNOYED_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 30;
    }

    if(getVar(VARIABLE_PUNISHMENT_POINTS) >= 250) {
        chance += 50;
    }

    return isChance(chance);
}

function wouldLikeToProlongSession() {
    let mood = getMood();

    if(mood > 1) {
        sendDebugMessage('No prolonged session because mood neutral or worse');
        return false;
    } else {
        let chance = (3 - mood)*10;
        let daysPassed = 7;

        if(isVar(VARIABLE_LAST_PROLONGED_SESSION)) {
            let last = getVar(VARIABLE_LAST_PROLONGED_SESSION).getTimeInMillis();
            let current = setDate().getTimeInMillis();

            daysPassed = Math.ceil((current - last)/(1000*60*60*24));
            sendDebugMessage('Last prolonged session was ' + daysPassed + ' days ago');
        }

        chance += daysPassed*7;
        sendDebugMessage('Checking for prolonged session with chance ' + chance);

        return isChance(chance);
    }
}

//Annoyed by too many questions  etc.
function isAnnoyedByTalking() {
    let mood = getMood();

    let chance = 0;

    //Talking issues
    chance += getVar(VARIABLE_FORGETTING_HONORIFIC_COUNT, 0)*10*mood;
    chance += getVar(VARIABLE_UNALLOWED_TALKS, 0)*10*mood;
    chance += getVar(VARIABLE_COMPLAINTS, 0)*10*mood;

    //General mood
    if(chance > 0) {
        //Mood already applied
        chance += mood*5;
    } else {
        //Mood had no effect yet
        chance += mood*10;
    }

    sendDebugMessage('Annoyed by talking chance: ' + chance);
    return isChance(chance);
}

//Meant in a playful but evil kind of way (not really pain or anything)
function feelsEvil() {
    let mood = getMood();

    let chance = 0;

    if (mood === VERY_PLEASED_MOOD) {
        chance = getStrictnessForCharacter() * 10;
    } else if (mood === PLEASED_MOOD) {
        chance = getStrictnessForCharacter() * 15;
    } else if (mood === NEUTRAL_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 20;
    } else if (mood === ANNOYED_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 25;
    } else if (mood === VERY_ANNOYED_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 30;
    }

    return isChance(chance);
}

function handleTodaysMood() {
    //Update mood at the end of session (prevents cheating by restarting the session over and over)
    loadMood();

    const dayOfMonth = setDate().getDay();

    //Positive
    if(getMood() < NEUTRAL_MOOD) {
        setVar('day' + dayOfMonth + 'Good',  true);
    } else if(getMood() > NEUTRAL_MOOD) {
        //Annoyed
        setVar('day' + dayOfMonth + 'Good',  false);
    }

    //Otherwise no change
}

//Teasing is meant to be cruel in this case => which means Happiness would cause her to be less cruel
function getCruelTeasingMood() {
    let multiplier = 1;

    if(getStrictnessForCharacter() === 1) {
        multiplier = 1.2;
    } if(getStrictnessForCharacter() === 2) {
        multiplier = 1.5;
    }

    return (getVar(VARIABLE_ANGER) + getVar(VARIABLE_LUST, 0))*multiplier - getVar(VARIABLE_HAPPINESS, 0);
}

function getHumiliationMood() {

}

function getHumilationTimeModifier() {

}

//TODO: Add to it hurts etc.
function registerComplain() {
    if(getVar(VARIABLE_COMPLAINTS, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE_COMPLAINTS) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }

    setTempVar(VARIABLE_COMPLAINTS, getVar(VARIABLE_COMPLAINTS, 0) + 1);
}

function registerUnallowedTalk() {
    if(getVar(VARIABLE_UNALLOWED_TALKS, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE_UNALLOWED_TALKS) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }

    setTempVar(VARIABLE_UNALLOWED_TALKS, getVar(VARIABLE_UNALLOWED_TALKS, 0) + 1);
}

function registerForgetHonorific() {
    if(getVar(VARIABLE_FORGETTING_HONORIFIC_COUNT, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE_FORGETTING_HONORIFIC_COUNT) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }


    setTempVar(VARIABLE_FORGETTING_HONORIFIC_COUNT, getVar(VARIABLE_FORGETTING_HONORIFIC_COUNT, 0) + 1);
}