const storyData = {
    start: {
        text: "Simba, a young lion cub, gets separated from his family in the wild. He must find his way back.",
        choices: [
            { text: "Follow the river", next: "river" },
            { text: "Go through the dark forest", next: "forest" }
        ],
        image: "https://ih1.redbubble.net/image.2923949223.3533/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg"
    },
    river: {
        text: "Simba follows the river. He finds a bridge but also sees a shallow crossing.",
        choices: [
            { text: "Cross the bridge", next: "bridge" },
            { text: "Wade through the shallow water", next: "shallow" }
        ],
        image: "https://www.shutterstock.com/image-vector/illustration-young-tiger-crossing-river-260nw-132329555.jpg"
    },
    forest: {
        text: "Simba ventures into the dark forest. He hears rustling in the bushes.",
        choices: [
            { text: "Investigate the sound", next: "sound" },
            { text: "Run away", next: "run" }
        ],
        image: "https://t3.ftcdn.net/jpg/10/81/78/58/240_F_1081785843_BRf2I7Lil8cOp8pT1WWs7b2dx9wk3Kce.jpg"
    },
    sound: {
        text: "Simba investigates the sound and discovers a leopard lurking in the bushes!",
        choices: [
            { text: "Fight the leopard", next: "fight" },
            { text: "Climb a tree", next: "tree" }
        ],
        image: "https://t4.ftcdn.net/jpg/13/25/58/39/240_F_1325583917_bs3W9qTqwpw8ZtIgToXg1AgMRaqs7ETA.jpg"
    },
    run: {
        text: "Simba runs, but he gets lost deeper in the forest. He cannot find his way back... (Ending 1)",
        choices: [],
        image: "https://t3.ftcdn.net/jpg/12/99/25/03/240_F_1299250387_ajM7G7evTPnQr65pjVwTWF6IniGZCG1U.jpg"
    },
    bridge: {
        text: "The bridge is old and collapses! Simba struggles to stay afloat.",
        choices: [
            { text: "Swim to shore", next: "shore" },  // Corrected: ensure 'shore' is the next step
            { text: "Let the current take him", next: "current" }
        ],
        image: "https://ik.imagekit.io/storybird/images/544284de-4f84-4a5f-b27f-b57ceb2e9aa8/3_645546175.webp?tr=q-80"
    },
    shallow: {
        text: "Simba safely crosses and finds a familiar scent.",
        choices: [{ text: "Follow the scent", next: "family" }],
        image: "https://as2.ftcdn.net/v2/jpg/11/29/79/73/1000_F_1129797317_yp9wZ1GFGoxBeTT0Zqtmdgfv8qnmeaXb.jpg"
    },
    shore: {
        text: "Simba reaches the shore but is exhausted. He rests and sees a vulture approaching... (Ending 2)",
        choices: [],
        image: "https://t4.ftcdn.net/jpg/12/99/25/03/240_F_1299250387_ajM7G7evTPnQr65pjVwTWF6IniGZCG1U.jpg"
    },
    current: {
        text: "The current carries Simba far away. He ends up in a human village... (Ending 3)",
        choices: [],
        image: "https://as1.ftcdn.net/jpg/01/15/02/60/1000_F_115026005_pYbLjm6hrp3vb2zQfD9lNXMURzrqFV4u.jpg"
    },
    family: {
        text: "Simba follows the scent and finds his family! He is home! (Ending 8 - Happy Ending)",
        choices: [],
        image: "https://t4.ftcdn.net/jpg/09/59/79/69/240_F_959796917_8KDfOkuQmSwU0RYBMoxH98tB21ohNefR.jpg"
    },
    fight: {
        text: "Simba bravely fights but is injured. He stumbles forward, searching for safety.",
        choices: [
            { text: "Rest in a cave", next: "cave" },
            { text: "Keep moving despite injuries", next: "injured" },
            { text: "Seek help", next: "rescue" }
        ],
        image: "https://t4.ftcdn.net/jpg/13/25/58/39/240_F_1325583917_bs3W9qTqwpw8ZtIgToXg1AgMRaqs7ETA.jpg"
    },
    tree: {
        text: "Simba climbs the tree and waits. The leopard leaves, but Simba is stuck... (Ending 5)",
        choices: [],
        image: "https://as2.ftcdn.net/v2/jpg/13/00/29/85/1000_F_1300298579_Grc6or0Tv2k97t6Eo6yimjSxcdyGv9D2.jpg"
    },
    cave: {
        text: "Simba finds a hidden cave. He shelters there but never finds his family... (Ending 6)",
        choices: [],
        image: "https://t3.ftcdn.net/jpg/12/16/52/14/240_F_1216521474_PudxLBaecvKHEAmecSa5cdPa1Prl4qBt.jpg"
    },
    injured: {
        text: "Simba pushes on despite his injuries but grows weaker. His strength fades... (Ending 4)",
        choices: [],
        image: "https://t3.ftcdn.net/jpg/09/81/12/80/240_F_981128064_4nkidDziY3qyIlnt0lDJR43Uj8jJXvpc.jpg"
    },
    rescue: {
        text: "A group of friendly animals finds Simba and leads him home! (Ending 7 - Rescue Ending)",
        choices: [],
        image: "https://t4.ftcdn.net/jpg/10/89/22/11/240_F_1089221185_4txrfLIsh9yK5yooG0oouG04qmrLsF7c.jpg"
    }
};

// Start the game
function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("reset-button").style.display = "inline-block";
    document.getElementById("game-container").style.display = "block";
    updatePage("start");
}

// Reset the game
function resetGame() {
    document.getElementById("start-button").style.display = "inline-block";
    document.getElementById("reset-button").style.display = "none";
    document.getElementById("game-container").style.display = "none";
}

// Update the game page based on the current stage
function updatePage(stage) {
    const story = storyData[stage];

    // Update the story and image
    document.getElementById("story").textContent = story.text;
    document.getElementById("story-image").src = story.image;

    // Update choices
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; // Clear previous choices

    // Loop through the choices and create buttons
    if (story.choices.length === 0) {
        const endMessage = document.createElement("p");
        endMessage.textContent = "The End.";
        choicesContainer.appendChild(endMessage);
    } else {
        story.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.onclick = () => updatePage(choice.next); // Ensure button actions update the game state
            choicesContainer.appendChild(button);
        });
    }
}

document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("reset-button").addEventListener("click", resetGame);






