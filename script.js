
const dryJokes = ['1 + 1 = 1 because two small anthills become 1 big anthill if combined.', 'One does not simply ask for a random prompt.', 'Hello Hungry, my name is Dad!'];
const bogusWeatherInfo = ['Daily temperature will be somewhere between -20* and 30* celsius!', 'If you\'re outside and your clothes become wet it\'s definitely raining! ', 'Bring an umbrella cause someone was spotted performing a rain dance.'];
const pickUpLines = ['I wish I was cross-eyed so I could see you twice.', 'I can swim but I\'ll drown in those eyes.', 'Damn girl what\'s your sign.'];

    

    const getPhrases = () => {
        let randomNumber = Math.floor(Math.random() * 2);
        if(randomNumber === 0){
            return `Here's a brilliant joke, funniest thing I've ever heard: ${dryJokes[Math.floor(Math.random() * 2)]} `
        } else if(randomNumber === 1){
            return `Your daily totally accurate and useful weather info: ${bogusWeatherInfo[Math.floor(Math.random() * 2)]} `
        } else {
            return `Listen user, I've felt like this for a long time so here goes... ${pickUpLines[Math.floor(Math.random() * 2)]} `
        }

    }


    console.log(getPhrases());

//let phrasesArray = []; // empty array to contain the random phrases later on