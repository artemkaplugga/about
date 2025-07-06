import React, { useState, useEffect } from 'react';
import './App.css';  // Импортируем CSS-файл

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Привет, я</span>
              <span className="name">Артем</span>
            </h1>
            <p className="hero-subtitle">Frontend Developer & UI/UX Enthusiast</p>
            <p className="hero-description">
              Создаю современные, отзывчивые и красивые веб-приложения с использованием React и TypeScript
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">Посмотреть работы</a>
              <a href="#contact" className="btn btn-secondary">Связаться</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-block">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-content">
                <pre><code>{`const developer = {
  name: "Артем",
  skills: ["React", "TypeScript", "CSS3"],
  passion: "создание красивых UI"
};`}</code></pre>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">Обо мне</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Я начинающий фронтенд-разработчик с страстью к созданию интуитивных и визуально привлекательных пользовательских интерфейсов. 
                Специализируюсь на React экосистеме и современных веб-технологиях.
              </p>
              <p>
                Мой подход сочетает техническую экспертизу с пониманием пользовательского опыта, 
                что позволяет создавать продукты, которые не только функциональны, но и приятны в использовании.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">7+</span>
                <span className="stat-label">Месяца опыта</span>
              </div>
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Проектов</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Довольных клиентов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title">Навыки & Технологии</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">React</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">TypeScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">HTML/CSS</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Git</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Webpack</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">VS Code</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Figma</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">Мои проекты</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/artemkaplugga/optimized_hosting" target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Aetix</h3>
                <p>Современный веб-сайт, разработанный для компании Aetix с использованием передовых технологий.</p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Интернет Магазин</h3>
                <p>Полнофункциональный интернет-магазин с корзиной, каталогом товаров и системой оплаты.</p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Портфолио</h3>
                <p>Простой и функциональный веб-сайт, созданный для демонстрации основных навыков веб-разработки.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>CSS3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Связаться со мной</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
              <div className="contact-icon"><img src={process.env.PUBLIC_URL + '/reshot-icon-important-email-TRXVZ8GKDP.svg'} alt="GitHub Icon" style={{ width: '40px', height: '40px' }} /></div>
                <div>
                  <h3>Email</h3>
                  <p>artem6841@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
              <div className="contact-icon"><img src={process.env.PUBLIC_URL + '/icons8-linkedin.svg'} alt="GitHub Icon" style={{ width: '40px', height: '40px' }} /></div>
                <div>
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/artemkaplugga</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><img src={process.env.PUBLIC_URL + '/github-mark.svg'} alt="GitHub Icon" style={{ width: '40px', height: '40px' }} /></div>
                <div>
                  <h3>GitHub</h3>
                  <p>https://github.com/artemkaplugga</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Ваше имя" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Ваш email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Ваше сообщение" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Отправить сообщение</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Артем. Все права защищены.</p>
            <div className="footer-links">
              <a href="#about">Обо мне</a>
              <a href="#skills">Навыки</a>
              <a href="#projects">Проекты</a>
              <a href="#contact">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
