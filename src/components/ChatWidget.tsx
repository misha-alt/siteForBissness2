import React, { useState, useEffect, useRef } from 'react';
import profilePhoto from '../assets/images/foto.png';
import profileWomenPhoto from '../assets/images/womenManager.png';
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  const storedId = localStorage.getItem('user_id');
  const generatedId = 'user_' + Math.random().toString(36).substring(2, 9);
  const userId = useRef<string>(storedId || generatedId);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return; // Если чат закрыт — ничего не делаем
  
    const handleClickOutside = (event: MouseEvent) => {
      // Если клик был вне чата И не по кнопке открытия/закрытия
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        const chatButton = document.querySelector('.fixed.bottom-5.right-5 button');
        if (chatButton && !chatButton.contains(event.target as Node)) {
          setIsOpen(false); // Закрываем чат
        }
      }
    };
  
    // Вешаем обработчик на весь документ
    document.addEventListener('mousedown', handleClickOutside);
    
    // Удаляем обработчик при размонтировании или закрытии чата
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]); // Добавляем зависимости





  

  // Загрузка истории при монтировании
  useEffect(() => {
    if (!storedId) {
      localStorage.setItem('user_id', userId.current);
    }

    // Загружаем историю сообщений
    const savedHistory = localStorage.getItem('chat-history');
    if (savedHistory) {
      try {
        const parsedMessages = JSON.parse(savedHistory) as Message[];
        setMessages(parsedMessages);
      } catch (e) {
        console.error('Failed to parse chat history', e);
      }
    }
  }, []);

  // Сохраняем историю при изменении messages
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chat-history', JSON.stringify(messages));
    }
  }, [messages]);

  // Отрисовка сообщений при изменении messages или открытии чата
  useEffect(() => {
    if (chatMessagesRef.current) {
      // Очищаем текущие сообщения
      chatMessagesRef.current.innerHTML = '';
      
      // Добавляем все сообщения из истории
      messages.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${msg.sender} mb-2 p-2 rounded-lg max-w-[80%] ${
          msg.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
        }`;
        msgDiv.textContent = msg.text;
        chatMessagesRef.current?.appendChild(msgDiv);
      });
      
      // Прокручиваем вниз
      chatMessagesRef.current.scrollTo(0, chatMessagesRef.current.scrollHeight);
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    const text = input;
    setInput('');

    try {
      const res = await fetch('https://testdeploysalesmanai2-production.up.railway.app/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId.current, message: text }),
      });
      const data = await res.json();
      const botMessage = { text: data.reply, sender: 'bot' as const };
      setMessages(prev => [...prev, botMessage]);
    } catch (err: any) {
      const errorMessage = { text: 'Ошибка: ' + err.message, sender: 'bot' as const };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  return (
    <>
      {/* Плавающая кнопка с аватаркой (без изменений) */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 md:gap-4 bg-white p-2 md:p-4 pl-3 md:pl-5 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm md:text-base font-medium text-gray-700">Помощь</span>
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-blue-500">
              <img 
                src={profileWomenPhoto}
                alt="Менеджер"
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        )}

        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg"
          >
            <img 
              src={profileWomenPhoto}
              alt="Менеджер Михаил"
              className="w-full h-full object-cover"
            />
          </button>
        )}
      </div>

      {/* Окно чата с исправлениями */}
      {isOpen && (
        <div 
          ref={chatRef}
          className="fixed bottom-24 right-5 w-full max-w-[calc(100vw-40px)] md:w-96 md:max-w-none h-96 bg-white shadow-xl rounded-lg flex flex-col z-40 border border-gray-300 overflow-hidden"
          style={{
            right: '20px',
            left: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {/* Шапка чата с фото и именем (без изменений) */}
          <div className="bg-blue-600 text-white p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img 
                src={profileWomenPhoto}
                alt="Менеджер Михаил"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold">Надежда</div>
              <div className="text-xs opacity-80">Менеджер</div>
            </div>
          </div>
          
          {/* Область сообщений (без изменений) */}
          <div
            ref={chatMessagesRef}
            className="flex-1 overflow-y-auto p-3 bg-gray-50"
          />
          
          {/* Поле ввода (без изменений) */}
          <div className="border-t border-gray-200 p-2 bg-white">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Напишите сообщение..."
                className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={sendMessage} 
                className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700 transition"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;