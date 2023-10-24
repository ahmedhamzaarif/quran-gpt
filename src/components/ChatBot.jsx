import { BubbleChat } from 'flowise-embed-react'

const ChatBot = () => {
    return (
        <BubbleChat 
        id="chatBotButton"
        chatflowid="02248678-7ab9-44d2-a93c-b9757ce8fd14"
        apiHost="https://q-gpt.onrender.com"
        theme={{
            button: {
                backgroundColor: "#144d45",
                right: 30,
                bottom: 30,
                size: "medium",
                iconColor: "white",
                // customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            },
            chatWindow: {
                welcomeMessage: "Assalumu Alaikum! I'm Quran GPT. How can I help you?",
                backgroundColor: "#ffffff",
                height: 500,
                width: 400,
                fontSize: 16,
                poweredByTextColor: "#fff",
                botMessage: {
                    backgroundColor: "#e6f5f1",
                    textColor: "#303235",
                    // showAvatar: true,
                    // avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                },
                userMessage: {
                    backgroundColor: "#144d45",
                    textColor: "#ffffff",
                    // showAvatar: true,
                    // avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                },
                textInput: {
                    placeholder: "Type your question",
                    backgroundColor: "#ffffff",
                    textColor: "#303235",
                    sendButtonColor: "#144d45",
                }
            }
        }}
    />
    );
};

export default ChatBot