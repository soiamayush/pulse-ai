import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';
import { useLeads } from '../../context/LeadsContext';
import {
  BOT_MESSAGES,
  LEAD_STAGES,
  QUICK_REPLIES,
  INTENT_RESPONSES,
  getIntentFromMessage,
  isValidEmail,
} from '../../data/chatFlow';
import './ChatWidget.css';

let openChatRef = null;

export function openChatWidget() {
  openChatRef?.();
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [stage, setStage] = useState(LEAD_STAGES.GREETING);
  const [leadData, setLeadData] = useState({ intent: 'default' });
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { saveLead } = useLeads();

  openChatRef = useCallback(() => setIsOpen(true), []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const addBotMessage = (text, delay = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text, id: Date.now() }]);
    }, delay);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { role: 'user', text, id: Date.now() }]);
  };

  const initChat = useCallback(() => {
    if (messages.length === 0) {
      addBotMessage(BOT_MESSAGES.greeting, 600);
      setStage(LEAD_STAGES.INTENT);
    }
  }, [messages.length]);

  useEffect(() => {
    if (isOpen) initChat();
  }, [isOpen, initChat]);

  const handleQuickReply = (value) => {
    const label = QUICK_REPLIES.find((q) => q.value === value)?.label || value;
    addUserMessage(label);
    processIntent(value);
  };

  const processIntent = (intent) => {
    const response = INTENT_RESPONSES[intent] || INTENT_RESPONSES.default;
    setLeadData((prev) => ({ ...prev, intent }));
    addBotMessage(response, 1000);
    setTimeout(() => {
      addBotMessage(BOT_MESSAGES.askName, 800);
      setStage(LEAD_STAGES.NAME);
    }, 1800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isTyping) return;

    addUserMessage(text);
    setInput('');

    switch (stage) {
      case LEAD_STAGES.INTENT: {
        const intent = getIntentFromMessage(text);
        processIntent(intent);
        break;
      }
      case LEAD_STAGES.NAME: {
        setLeadData((prev) => ({ ...prev, name: text }));
        addBotMessage(BOT_MESSAGES.askEmail(text), 900);
        setStage(LEAD_STAGES.EMAIL);
        break;
      }
      case LEAD_STAGES.EMAIL: {
        if (!isValidEmail(text)) {
          addBotMessage(BOT_MESSAGES.invalidEmail, 700);
          return;
        }
        setLeadData((prev) => ({ ...prev, email: text }));
        addBotMessage(BOT_MESSAGES.askCompany, 900);
        setStage(LEAD_STAGES.COMPANY);
        break;
      }
      case LEAD_STAGES.COMPANY: {
        const company = text.toLowerCase() === 'skip' ? '' : text;
        const finalData = { ...leadData, company };
        setLeadData(finalData);
        saveLead(finalData);
        addBotMessage(BOT_MESSAGES.complete(finalData.name), 1000);
        setStage(LEAD_STAGES.COMPLETE);
        break;
      }
      default:
        addBotMessage("Thanks for reaching out! Feel free to ask about our features, pricing, or request a demo.", 800);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setStage(LEAD_STAGES.GREETING);
    setLeadData({ intent: 'default' });
    setTimeout(initChat, 100);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.4 }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">
                  <Bot size={20} color="white" />
                </div>
                <div>
                  <strong>Pulse AI</strong>
                  <span>
                    <span className="online-dot" /> LangChain Agent
                  </span>
                </div>
              </div>
              <div className="chat-header-actions">
                <button className="chat-reset" onClick={resetChat} title="Reset chat">
                  ↺
                </button>
                <button className="chat-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-msg ${msg.role}`}>
                  {msg.role === 'bot' && <Sparkles size={14} className="msg-icon" />}
                  {msg.text}
                </div>
              ))}

              {isTyping && (
                <div className="chat-typing">
                  <span /><span /><span />
                </div>
              )}

              {stage === LEAD_STAGES.INTENT && !isTyping && messages.length <= 1 && (
                <div className="quick-replies">
                  {QUICK_REPLIES.map((q) => (
                    <button key={q.value} onClick={() => handleQuickReply(q.value)}>
                      {q.label}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form className="chat-input-form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  stage === LEAD_STAGES.NAME
                    ? 'Your name...'
                    : stage === LEAD_STAGES.EMAIL
                      ? 'your@email.com'
                      : stage === LEAD_STAGES.COMPANY
                        ? 'Company name (or skip)'
                        : 'Type a message...'
                }
                disabled={stage === LEAD_STAGES.COMPLETE}
              />
              <button type="submit" disabled={!input.trim() || stage === LEAD_STAGES.COMPLETE}>
                <Send size={18} />
              </button>
            </form>

            <div className="chat-powered">
              Powered by <strong>FastAPI</strong> + <strong>LangChain</strong>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`chat-fab ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        {isOpen ? <X size={28} color="white" /> : <MessageCircle size={28} color="white" />}
        {!isOpen && <span className="fab-pulse" />}
      </motion.button>
    </>
  );
}
