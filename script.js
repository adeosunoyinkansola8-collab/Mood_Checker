function checkMood(mood) {

    let moodResult = document.getElementById("moodResult");
    let message = document.getElementById("message");

    if (mood === "happy") {
        moodResult.textContent = "😊 You're Happy!";
        message.textContent = "That's wonderful! Keep that beautiful energy going. 💕";
    }

    else if (mood === "sad") {
        moodResult.textContent = "😢 You're Feeling Sad";
        message.textContent = "It's okay to have bad days. Take your time and be kind to yourself. ❤️";
    }

    else if (mood === "angry") {
        moodResult.textContent = "😡 You're Angry";
        message.textContent = "Take a deep breath and give yourself some time to calm down. 🧘";
    }

    else if (mood === "tired") {
        moodResult.textContent = "😴 You're Tired";
        message.textContent = "You deserve some rest. Put your feet up and relax. 💤";
    }

    else if (mood === "excited") {
        moodResult.textContent = "🤩 You're Excited!";
        message.textContent = "Yesss! Enjoy the moment and make the most of your excitement! 🎉";
    }
}