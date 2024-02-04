function reply(answer) {
    const responseElement = document.getElementById("response");
    
    if (answer === "Yes") {
        responseElement.innerText = "That's wonderful! Happy Valentine's Day!";
    } else if (answer === "No") {
        responseElement.innerText = "Oh no! Maybe next time.";
    }
}
