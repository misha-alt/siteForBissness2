import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Database, 
  Bot, 
  Zap, 
  Github, 
  Linkedin, 
  Mail,
  ArrowDown,
  ExternalLink,
  Server,
  BarChart3,
  Globe,
  MessageCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  Cpu,
  FileText,
  Settings
} from 'lucide-react';
import profilePhoto from './assets/images/foto.png';
import logo from './assets/images/6374b1a785a3b578541946-1536x768.jpeg'

import Header from './components/Header';
import MouseParallax from './components/MouseParallax';
import TiltCard from './components/TiltCard';
import FadeInSection from './components/FadeInSection';
import ChatWidget from './components/ChatWidget';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const accessKey = import.meta.env.VITE_WEB3FORMS_API_KEY;
  
  useEffect(() => {
    // Initialize GSAP animations
    if (heroRef.current) {
      gsap.fromTo(
        '.hero-text',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      );
      
      gsap.fromTo(
        '.hero-cta',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8 }
      );
    }
    
    // Set up scroll animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const techStack = [
    { name: 'Java Spring', icon: <Code size={24} />, color: 'bg-green-500' },
    { name: 'Python', icon: <Bot size={24} />, color: 'bg-blue-500' },
    { name: 'PostgreSQL', icon: <Database size={24} />, color: 'bg-indigo-500' },
    { name: 'REST API', icon: <Server size={24} />, color: 'bg-purple-500' },
    { name: 'React', icon: <Globe size={24} />, color: 'bg-cyan-500' },
    { name: 'Docker', icon: <Settings size={24} />, color: 'bg-blue-600' },
  ];

  const services = [
    {
      title: 'Разработка на Java Spring',
      subtitle: 'Надежный backend для вашего бизнеса',
      description: 'Создаю производительные и безопасные корпоративные приложения на Java Spring Boot',
      features: [
        'REST API для мобильных и веб-приложений',
        'Микросервисная архитектура',
        'Интеграция с базами данных hibernate (PostgreSQL, MySQL)',
        'Настройка авторизации (JWT, OAuth2)'
      ],
      example: 'Разработал API для CRM-системы с обработкой 10K+ запросов в день',
      icon: <Code size={32} />,
      color: 'bg-green-500',
      buttonText: 'Заказать разработку'
    },
    {
      title: 'Интеграция искуственного интеллекта в бизнес',
      subtitle: 'Автоматизирую рутину и внедряю AI-решения',
      description: 'Помогаю бизнесу работать эффективнее с помощью Python',
      features: [
        'Внедрение искусственного интеллекта в различные сферы бизнеса',
        'Автоматизация отчетов (Pandas, Excel)',
        'Интеграция с API (Telegram, Google Sheets)',
        'Парсинг данных (Scrapy, BeautifulSoup)'
      ],
      example: 'Создал ботов помощников с искуственным интеллектом обученных на бизнес данных заказчиков',
      icon: <Bot size={32} />,
      color: 'bg-blue-500',
      buttonText: 'Узнать подробности'
    },
    {
      title: 'Создание лендингов',
      subtitle: 'Сайты, которые продают',
      description: 'Делаю быстрые и современные лендинги для вашего продукта или услуги',
      features: [
        'Адаптивный дизайн (отлично выглядит на телефонах и ПК)',
        'Оптимизация скорости (Google PageSpeed 90+)',
        'Продающие тексты + SEO-база',
        'Интеграция с CRM, Telegram, платежами'
      ],
      example: 'Лендинг для IT-курсов: конверсия в заявки — 23%',
      icon: <Globe size={32} />,
      color: 'bg-purple-500',
      buttonText: 'Заказать лендинг'
    },
  ];

  const projects = [
    {
      title: 'CRM для логистики',
      tech: 'Java Spring',
      task: 'API для трекинга грузов',
      result: '1500+ запросов/мин, интеграция с 1С',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['Java Spring', 'PostgreSQL', 'REST API'],
    },
    {
      title: 'Парсер товаров',
      tech: 'Python',
      task: 'Сбор цен конкурентов',
      result: 'Ежедневный отчет в Telegram',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['Python', 'Scrapy', 'Telegram API'],
    },
    {
      title: 'Лендинг IT-курсов',
      tech: 'React + Node.js',
      task: 'Продающий сайт с высокой конверсией',
      result: 'Конверсия в заявки — 23%',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80',
      tags: ['React', 'Tailwind CSS', 'Node.js'],
    },
  ];

  const blogPosts = [
    {
      title: 'Как Spring Boot ускоряет разработку API',
      excerpt: 'Разбираем преимущества фреймворка и лучшие практики',
      readTime: '5 мин',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Какие Python-скрипты полезны для малого бизнеса?',
      excerpt: 'Практические примеры автоматизации рутинных задач',
      readTime: '7 мин',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80'
    },
    {
      title: '5 элементов лендинга, которые увеличивают конверсию',
      excerpt: 'Проверенные методы повышения эффективности сайта',
      readTime: '4 мин',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <MouseParallax>
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
          </div>
        </MouseParallax>
        
        <motion.div 
          className="container mx-auto px-4 z-10 text-center"
          style={{ y, opacity }}
        >
          <motion.h1 
            className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
             <img
    src={logo}
    
    className="inline-block h-[1em] align-middle mr-2"
  /> Внедряем искуственный интеллект <br/>
            <span className="gradient-text"> в ваш бизнес: автоматизация, умные сервисы и digital-решения под ключ</span>
          </motion.h1>
          
          <motion.div 
            className="hero-text text-lg md:text-xl text-gray-700 mb-8 max-w-4xl mx-auto text-left bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="mb-4">
              Привет! Я fullstack-разработчик с опытом создания надежных приложений, автоматизации бизнеса, внедрения ИИ и быстрых лендингов для ваших проектов.
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                <span>Пишу чистый и масштабируемый код</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                <span>Внедряю решения, которые экономят время и деньги</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                <span>Делаю сайты, которые привлекают клиентов</span>
              </div>
            </div>
            
            <p className="font-medium">
              📌 Нужен мощный API, скрипт для автоматизации или продающий лендинг? Давайте обсудим ваш проект!
            </p>
          </motion.div>
          
          <motion.div 
            className="hero-cta mb-32"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact" className="btn-primary text-lg px-8 py-4">
              → Обсудить задачу
            </a>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <ArrowDown size={32} className="text-gray-600" />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="section-title text-center mb-16">Обо мне</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="flex justify-center">
                <img 
                  src={profilePhoto} 
                  alt="Михаил Яцкевич" 
                  className="rounded-full w-[200px] h-[200px] object-cover shadow-lg"
                />
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-4">Fullstack-разработчик с фокусом на результат</h3>
                <p className="text-gray-700 mb-6">
                  Специализируюсь на создании надежных backend-решений на Java Spring, автоматизации бизнес-процессов с помощью искуственного интеллекта на Python и разработке эффективных лендингов. Мой подход — это сочетание технической экспертизы с пониманием бизнес-задач.
                </p>
                <p className="text-gray-700 mb-6">
                  За годы работы помог десяткам клиентов оптимизировать процессы, создать масштабируемые системы и увеличить конверсию сайтов. Всегда стремлюсь к созданию решений, которые не просто работают, но и приносят реальную пользу бизнесу.
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-primary-500" />
                    <span className="font-medium">Лендинг — от 5 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} className="text-green-500" />
                    <span className="font-medium">50+ проектов</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
          
          <FadeInSection delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
              {techStack.map((tech, index) => (
                <TiltCard key={index}>
                  <div className={`card h-full flex flex-col items-center justify-center p-4 border border-gray-100 hover:shadow-xl`}>
                    <div className={`${tech.color} p-3 rounded-full text-white mb-3`}>
                      {tech.icon}
                    </div>
                    <h4 className="font-bold text-sm text-center" translate="no">{tech.name}</h4>
                  </div>
                </TiltCard>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="section-title text-center mb-16">Услуги</h2>
          </FadeInSection>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 0.2}>
                <div className="card max-w-4xl mx-auto">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${service.color} p-4 rounded-xl text-white flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <h4 className="text-lg text-primary-600 font-semibold mb-3">{service.subtitle}</h4>
                      <p className="text-gray-700 mb-4">{service.description}:</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">📌 Пример:</p>
                      <p className="text-gray-800 font-medium">{service.example}</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a href="#contact" className="btn-primary">
                      {service.buttonText}
                    </a>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="section-title text-center mb-8">Мои работы</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Здесь — реальные проекты, которые помогли клиентам решить их задачи.
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <TiltCard>
                  <div className="card group overflow-hidden h-full flex flex-col">
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                          {project.tech}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <span className="text-sm font-medium text-gray-500">Задача:</span>
                          <p className="text-gray-700">{project.task}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Результат:</span>
                          <p className="text-gray-700 font-medium">{project.result}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded" translate="no">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </FadeInSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <FadeInSection>
              <a href="#contact" className="btn-outline inline-flex items-center gap-2">
                Смотреть все кейсы <ExternalLink size={16} />
              </a>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="section-title text-center mb-16">Блог</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <TiltCard>
                  <article className="card group overflow-hidden h-full flex flex-col hover:shadow-xl">
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{post.excerpt}</p>
                    </div>
                  </article>
                </TiltCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="section-title text-center mb-8">Готов обсудить ваш проект!</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            <FadeInSection>
              <div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary-500" size={20} />
                    <a href="mailto:mihailnadia27@gmail.com" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                      mihailnadia27@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="text-primary-500" size={20} />
                    <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                      @your_telegram
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="text-primary-500" size={20} />
                    <a href="https://www.linkedin.com/in/mikhail-yatskevich-708973350/" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                      LinkedIn профиль
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">Примерные сроки:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock size={16} className="text-primary-500" />
                      <span>Лендинг — от 5 дней</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock size={16} className="text-primary-500" />
                      <span>Python-скрипт — от 3 дней</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock size={16} className="text-primary-500" />
                      <span>API на Spring — от 7 дней</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <form className="card" action="https://api.web3forms.com/submit" method="POST">
                {/* <input type="hidden" name="access_key" value={process.env.REACT_APP_WEB3FORMS_ACCESS_KEY}/> */}
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}/>
                <input type="hidden" name="subject" value="Новая заявка с сайта портфолио" />
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <input 
                    name="name"
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Ваше имя"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Описание задачи</label>
                  <textarea 
                    name="message"
                    id="message" 
                    rows={4} 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  → Отправить
                </button>
              </form>
            </FadeInSection>
          </div>
        </div>
      </section>
      {/* вставка чата */}
      <ChatWidget/>  
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Михаил Яцкевич. Все права защищены.</p>
          <p className="text-gray-400 mt-2">Разработчик Java Spring • Python-интеграции • Лендинги под ключ</p>
        </div>
      </footer>
    </div>
  );
}

export default App;