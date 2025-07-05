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
              <button className="btn btn-primary">Посмотреть работы</button>
              <button className="btn btn-secondary">Связаться</button>
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
                Я фронтенд-разработчик с страстью к созданию интуитивных и визуально привлекательных пользовательских интерфейсов. 
                Специализируюсь на React экосистеме и современных веб-технологиях.
              </p>
              <p>
                Мой подход сочетает техническую экспертизу с пониманием пользовательского опыта, 
                что позволяет создавать продукты, которые не только функциональны, но и приятны в использовании.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Года опыта</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
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
                    <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>GitHub</span>
                    </a>
                    <a href="#" className="project-link">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>E-Commerce Platform</h3>
                <p>Современная платформа электронной коммерции с React и TypeScript</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
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
                    <a href="#" className="project-link">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Task Management App</h3>
                <p>Приложение для управления задачами с drag-and-drop функциональностью</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>CSS3</span>
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
                    <a href="#" className="project-link">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Weather Dashboard</h3>
                <p>Интерактивная панель погоды с красивой анимацией и API интеграцией</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>API</span>
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
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>artem6841@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/artem</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🐙</div>
                <div>
                  <h3>GitHub</h3>
                  <p>github.com/artem</p>
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
