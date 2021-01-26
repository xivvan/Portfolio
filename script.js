//store all the phrases inside an object array
const phrases = { 
    dryJokes: ['1 + 1 = 1 because two small anthills become 1 big anthill if combined.', 'One does not simply ask for a random prompt.', 'Hello Hungry, my name is Dad!'],
    bogusWeatherInfo:['Daily temperature will be somewhere between -20* and 30* celsius!', 'If you\'re outside and your clothes become wet it might be raining! ', 'Bring an umbrella cause someone was spotted performing the rain dance.'],
    pickUpLines: ['I wish I was cross-eyed so I could see you twice.', 'I can swim but I\'ll drown in your eyes.', 'Damn girl what\'s your sign?'],
}
    let emptyArray = []; 
       // push all 3 phrases along with a string stored in the objects index (chosen randomly) onto emptyArray
    const getPhrases = () => {
        emptyArray.push(`Here's a brilliant joke, funniest thing I've ever heard: ${phrases.dryJokes[Math.floor(Math.random() * 3)]} `);
        emptyArray.push(`Your daily totally accurate and useful weather info: ${phrases.bogusWeatherInfo[Math.floor(Math.random() * 3)]} `);
        emptyArray.push(`Listen user, I've felt like this for a long time so here goes... ${phrases.pickUpLines[Math.floor(Math.random() * 3)]} `);
        }
    
        // cleans up the array so that we can log it without giving anyone poor eyesight
    const cleanUpArray = array => {
        array = array.join('\n')
        return array;
    }

getPhrases();
    console.log(cleanUpArray(emptyArray));

/*  alternative solution, not as pretty, only returns one sentence per run but alas it is doable without using an array to store the end result.


     const getPhrases = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return  randomNumber === 0 ? `Here's a brilliant joke, funniest thing I've ever heard: ${phrases.dryJokes[Math.floor(Math.random() * 3)]} `:
            randomNumber === 1 ? `Your daily totally accurate and useful weather info: ${phrases.bogusWeatherInfo[Math.floor(Math.random() * 3)]} `:
            `Listen user, I've felt like this for a long time so here goes... ${phrases.pickUpLines[Math.floor(Math.random() * 3)]} `
        }
            
    
    
        console.log(getPhrases()); */