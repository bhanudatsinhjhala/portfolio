const chatbot = document.querySelector(".chatbot");

function closeChatbot(){
  chatbot.innerHTML ="";
}
function openChatbot(){
     chatbot.innerHTML = `<iframe class="open" width="280" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/32cf4fd6-9b26-43dd-be79-16754809d792"></iframe>`;
}

document.querySelector(".whole-body").addEventListener("click", closeChatbot);
chatbot.addEventListener("click", openChatbot);
