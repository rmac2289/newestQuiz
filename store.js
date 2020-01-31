const STORE = {
    
    questions: [
        //question #1//
        {
            question: "You've stumbled upon an emergency, and somebody asks you to call 911 - what is the most important piece of information to give the dispatcher?",
            options: [
               "The nature of the emergency",
               "Your name and phone number",
               "Your location",
               "A detailed story about your life starting several days ago"
           ],
            answer: "Your location" 
        },
        //question #2//
        {
            question: "Which of the following situations would qualify as a good reason to dial 911?",
            options: [
                "I was gone from my car for 2 hours. I get back to the car and the window is broken and my laptop is gone",
                "My sister just texted me saying she was thinking about hurting herself",
                "I locked my keys in my car (seriously this happens)",
                "I just got in a car accident. Everyone is okay, but the cars are totaled"
            ],
            answer: "My sister just texted me saying she was thinking about hurting herself"
        },
        //question #3//
        {
            question: "What is the best way to ensure that you get help you need as fast as possible?",
            options: [
                "Get angry at the dispatcher's questions and tell them your tax dollars pay their salary",
                "Ignore the dispatcher's questions and repeat 'hurry up and get here!' 5-6 times",
                "Remain as calm as possible and follow the direction of the dispatcher",
                "Call 911, yell 'help!', and then immediately hang up"
            ],
            answer: "Remain as calm as possible and follow the direction of the dispatcher"
        },
        //question #4//
        {
            question: "You're at home sound asleep - somebody sneaks into your house and is stealing all of your valuables. You wake up and politely say 'hey please stop it those are mine', but instead of respecting your wishes, the person rips your phone out of your hand and takes off. What crime is committed?",
            options: [
                "Petty theft",
                "Burglary",
                "Robbery",
                "Grand theft"
            ],
            answer: "Robbery"
        },
        //question #5//
        {
            question: "Which of the following calls have I received on 911 in my dispatching career?",
            options: [
                "My neighbor is shooting laser beams into my apartment to steal my information",
                "I've been kidnapped! I work security at the mall, someone was parked in a handicap spot illegally and was about to leave so I jumped in the bed of the truck to stop them! We're now on the highway and I'm still in the bed of the truck",
                "I lit a candle and I can't put it out. I need the fire department now!",
                "All of the above"
            ],
            answer: "All of the above"
        },
        //question #6//
        {
            question: "Back to crime - I bought this super sick guitar off of craig's list - there were no pictures but the guy's name was Ron and I trust anyone named Ron no questions asked. He doesn't have change so I give him 200 more dollars than the asking price and he says he'll send me change. Ron never sends the change! What crime is committed?",
            options: [
                "Petty theft",
                "No crime, just a civil issue. See you in small claims court Ron!",
                "Wire fraud",
                "Robbery"
            ],
            answer: "No crime, just a civil issue. See you in small claims court Ron!"
        },
        //question #7//
        {
            question: "I work for a relatively safe, small county in Northern California in a dispatch center where usually 2 to 3 people are answering phones - approximately how many calls (both 911 and non-emergency) do you think we received in 2018?",
            options: [
                "25,200",
                "1,200,500",
                "215,000",
                "8,000"
            ],
            answer: "215,000"
        },
        //question #8//
        {
            question: "If you dial 9-1-1 from a cell phone, how accurately does the dispatcher already know your location?",
            options: [
                "They know  your exact gps coordinates",
                "They have no idea where you are",
                "It depends, the system gives the cell tower and a radius of distance/accuracy from it",
                "The government is always listening they knew where you were before you even called"
            ],
            answer: "It depends, the system gives the cell tower and a radius of distance/accuracy from it"
        },
        //question #9//
        {
            question: "What is the length/intensity of the processs of getting a job as a police/fire/ems dispatcher?",
            options: [
                "It can vary from about 3 months to a year, but it involves a complete background check, polygraph, pysch evaluation",
                "It takes about 2 years - if they don't hear back from your references, they just wait",
                "Its just like a regular job, about 2 weeks to a month",
                "No sweat, you just graduate high school and sign up"
            ],
            answer: "It can vary from about 3 months to a year, but it involves a complete background check, polygraph, pysch evaluation",

        }
    ],
    currentQuestion: 0,
    score: 0
};

/* 
ACCESS ANSWER 
***** 
STORE.questions[index].answer 
****** 
ACCESS QUESTION
STORE.questions[index].question
******
ACCESS OPTIONS
STORE.questions[index].options ** or STORE.questions[index].options[optionIndex] for specific option
******
*/
