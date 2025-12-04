"use client";
import { useState, useEffect, FormEvent, useRef } from "react";
import Cookies from "js-cookie";
import { UserCheck } from "@/lib/(authorization)/user-check";
import { toast } from "react-hot-toast";
import LoadingSpinner from "@/components/(same-component)/loading-spiner";
type Message = {
  user_id: string;
  user_name: string;
  text: string;
  time_stamp: string;
};

export default function ChatBox() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [me, setMe] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("...");
  const [loadingSp, setLoading] = useState<boolean>(true);
  const fetchMessages = async () => {
    const serverResponse = await fetch("/api/read-chat", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const messages = await serverResponse.json();
    const userName = await UserCheck();
    const checkingUsername = userName?.serverResponse._id;
    setUsername(checkingUsername);
    setMessages(messages);
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
    scrollToBottom();
    window.location.href = "#chatbottom";
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
    const UserToken = Cookies.get("token");
    const sendMessageIntoServer = await fetch("/api/send-chat", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: input,
      }),
    });
    const serverRespond = await sendMessageIntoServer.json();
    if (serverRespond.status == 200) {
      window.location.reload();
    } else {
      toast.error("can't send message");
    }
  };

  return (
    <div className="w-[80vw] h-[90vh] mx-auto mt-6 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 bg-[#A65F00] text-white flex justify-between items-center">
        <h2 className="text-xl font-semibold">Student Discussion Group</h2>
        <span className="text-sm opacity-80">Cyber Lab</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-6 overflow-y-auto bg-[#FFF7ED]">
        {loadingSp ? <LoadingSpinner /> : ""}

        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                username === msg.user_id ? "justify-end" : "justify-start"
              }`}
            >
              {/* Avatar */}
              {me && (
                <div
                  className="w-12 h-12 rounded-xl"
                  style={{ backgroundColor: "#A65F00" }}
                ></div>
              )}

              {/* Message bubble */}
              <div
                className={`max-w-[70%] p-4 rounded-2xl shadow-sm ${
                  me ? "text-white" : "text-[#5A370A]"
                }`}
                style={{
                  backgroundColor: me ? "#A65F00" : "#FFF2D9",
                }}
              >
                <p
                  className={`text-sm font-semibold mb-1 ${
                    me ? "text-white" : "text-[#A65F00]"
                  }`}
                >
                  {msg.user_name}
                </p>
                <div className="xss-part text-base leading-relaxed">
                  {/<script|<iframe|<object/i.test(msg.text) ? (
                    // Dangerous content → sandboxed iframe
                    <iframe
                      sandbox="allow-scripts allow-modals"
                      srcDoc={msg.text}
                      className="w-full h-24 bg-white"
                    ></iframe>
                  ) : (
                    <p
                      id="chatbottom"
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                    ></p>
                  )}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    me ? "text-white/80" : "text-[#A65F00]"
                  }`}
                >
                  {msg.time_stamp}
                </div>
              </div>

              {/* Avatar right side for me */}
              {me && (
                <div
                  className="w-12 h-12 rounded-xl"
                  style={{ backgroundColor: "#A65F00" }}
                ></div>
              )}
              <div></div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a message..."
          className="flex-1 p-3 border rounded-xl outline-none text-lg bg-[#FFF7ED] border-[#E0C9A8]"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl text-lg text-white shadow"
          style={{ backgroundColor: "#A65F00" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
