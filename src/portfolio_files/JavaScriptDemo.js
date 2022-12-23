/**
 * Some script for asking the name of the user
 */
function someScript(){
    const name = window.prompt("What is your name?: ");
    document.getElementById("initiationButton").innerHTML = "Hello " + name + "! Welcome to my site!";
    document.getElementById("questionPrompts").innerHTML = "How is your day so far?";
    get_prompt(0);
}

/**
 * Generate the prompt of the questions to ask the user
 *
 * @param id the id of current question
 */
function get_prompt(id){
    const USER_RESPONSE_1 = 0
    const USER_RESPONSE_2 = 1
    const MY_RESPONSE_1 = 2
    const MY_RESPONSE_2 = 3
    const NEXT_QUESTION = 4

    const prompts = [
        [
            "Good! Thank you for asking!",
            "Bad! It's been a rough day...",
            "No Problem! I hope this dialogue makes it more interesting!",
            "Oh no! I hope this dialogue makes it better for you!",
            "What is your opinion on JavaScript?"
        ],
        [
            "I love it! It's wonderful!",
            "It's alright I guess...",
            "Yeah it is isn't it? However, I still prefer python though...",
            "Yeah me too. I prefer Python as compared to JavaScript.",
            "Alright! Have a nice day!"
        ]
    ]

    if (id <= prompts.length){
        const currPrompt = prompts[id]

        generate_double_buttons(currPrompt[USER_RESPONSE_1],
            currPrompt[USER_RESPONSE_2], currPrompt[MY_RESPONSE_1],
            currPrompt[MY_RESPONSE_2], currPrompt[NEXT_QUESTION], id);
    }
}

/**
 * Generate the buttons with the correct button responses
 *
 * @param leftButtonPrompt the prompt to be displayed on the left button
 * @param rightButtonPrompt the prompt to be displayed on the right button
 * @param leftButtonResponse the response when the left button is pressed
 * @param rightButtonResponse the response when the right button is pressed
 * @param next_question the next question to be asked
 * @param curr_id the current id of the prompts
 */
function generate_double_buttons(leftButtonPrompt, rightButtonPrompt,
                                 leftButtonResponse, rightButtonResponse,
                                 next_question, curr_id){
    let leftButton;
    let rightButton;

    /**
     * An inner function for all the general duties of what should happen
     * when the button is pressed.
     *
     * The Prompt is displayed at `questionPrompts`, and the buttons will
     * appear at `responseButtons`
     *
     * @param next_prompt the next prompt to be generated
     */
    function buttonResponse(next_prompt){
        document.getElementById("questionPrompts").innerHTML = next_prompt;

        // Clear buttons
        document.getElementById("responseButtons").removeChild(leftButton);
        document.getElementById("responseButtons").removeChild(rightButton);

        // Get the next buttons and prompts
        get_prompt(curr_id + 1);
    }

    /**
     * The action to be preformed when the left button is pressed
     */
    function leftResponse() {
        buttonResponse(leftButtonResponse + " " + next_question)
    }

    /**
     * The action to be preformed when the right button is pressed
     */
    function rightResponse(){
        buttonResponse(rightButtonResponse + " " + next_question)
    }

    leftButton = document.createElement("button");
    leftButton.innerHTML = leftButtonPrompt;
    leftButton.onclick = leftResponse;
    document.getElementById("responseButtons").appendChild(leftButton);

    rightButton = document.createElement("button");
    rightButton.innerHTML = rightButtonPrompt;
    rightButton.onclick = rightResponse;
    document.getElementById("responseButtons").appendChild(rightButton);
}
