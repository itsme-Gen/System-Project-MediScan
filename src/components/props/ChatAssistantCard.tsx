import React, { useState } from 'react';
import { MessageSquare, Send, Lightbulb } from 'lucide-react';
import styles from './ChatAssistantCard.module.css';

const ChatAssistantCard: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const quickActions = [
    'List all patients with diabetes',
    'Show recent emergency visits',
    'Find patients due for checkups',
    "Summarize today's appointments"
  ];

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log('Sending message:', inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <MessageSquare size={20} className={styles.headerIcon} />
        <h2 className={styles.title}>Chat Assistant</h2>
      </div>
      <p className={styles.subtitle}>
        Ask questions about patients, appointments, or medical records
      </p>

      {/* Chat Message */}
      <div className={styles.messageContainer}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            <MessageSquare size={16} color="white" />
          </div>
        </div>
        <div className={styles.messageContent}>
          <div className={styles.messageBubble}>
            Hello! I'm your MediScan AI Assistant. I can help you with patient records, 
            medical queries, and administrative tasks. How can I assist you today?
          </div>
          <div className={styles.timestamp}>4:50:04 PM</div>
          <div className={styles.quickActions}>
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={styles.quickActionButton}
                onClick={() => handleQuickAction(action)}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Ask about patients, appointments, or medical records..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.input}
          />
          <button
            onClick={handleSend}
            className={styles.sendButton}
            style={{ opacity: inputValue.trim() ? 1 : 0.5 }}
            disabled={!inputValue.trim()}
          >
            <Send size={16} />
          </button>
        </div>
        <div className={styles.suggestion}>
          <Lightbulb size={14} className={styles.suggestionIcon} />
          <span className={styles.suggestionText}>
            Try asking: "Show me patients with diabetes" or "What are today's appointments?"
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistantCard;
