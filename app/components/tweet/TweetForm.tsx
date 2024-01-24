import { useState } from "react";

const TweetForm = () => {
    const [message, setMessage] = useState<string>("")

    const messageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setMessage(event.target.value)
    }

    return (
        <div>
            <textarea
                value={message}
                onChange={messageHandler}
                className="resize-none w-full h-24 border rounded-md p-2"
                placeholder="今なにしてる？"></textarea>
            <div className="p-3">{message.length} characters.</div>
            <button
                className="w-full bg-blue-500 hover:bg-blue-700
                text-white font-bold 
                py-3 px-4 mb-2
                rounded"
                onClick={() => { }}>
                Send
            </button>
        </div>
    );
}

export default TweetForm;