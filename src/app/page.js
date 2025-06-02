'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // FAQ toggle logic
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        this.classList.toggle('active');
        answer.classList.toggle('open');
      });
    });

    // Show/hide nav after sponsors section
    const nav = document.getElementById('mainNav');
    const sponsorsSection = document.querySelector('.sponsors-section');

    function checkNav() {
      if (!nav || !sponsorsSection) return;

      const rect = sponsorsSection.getBoundingClientRect();
      if (rect.bottom < 0) {
        nav.classList.add('visible');
      } else {
        nav.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', checkNav);
    checkNav();

    // Smooth scroll and active link
    const links = document.querySelectorAll('.main-nav .nav-link');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 60,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', checkNav);
    };
  }, []);

  return (
    <>
    {/* <!-- Floating Shapes Left & Right --> */}
        <div className="floating-shapes left-shapes">
            <img src="assets/01.svg" alt="Shape 1" className="floating-shape" />
            <img src="assets/02.svg" alt="Shape 2" className="floating-shape" />
            <img src="assets/03.svg" alt="Shape 3" className="floating-shape" />
            <img src="assets/04.svg" alt="Shape 4" className="floating-shape" />
            <img src="assets/05.svg" alt="Shape 5" className="floating-shape" />
        </div>
        <div className="floating-shapes right-shapes">
            <img src="assets/06.svg" alt="Shape 6" className="floating-shape" />
            <img src="assets/07.svg" alt="Shape 7" className="floating-shape" />
            <img src="assets/08.svg" alt="Shape 8" className="floating-shape" />
            <img src="assets/09.svg" alt="Shape 9" className="floating-shape" />
            <img src="assets/10.svg" alt="Shape 10" className="floating-shape" />
        </div>
      <div className="container" id="inicio">
        <Image
          src="/assets/ETH JAGUAR_logo blanco.png"
          alt="ETH Jaguar Logo"
          className="logo"
          width={600}
          height={330}
        />
        <div className="date-banner">29–31 DE AGOSTO</div>
        <p>Únete a un fin de semana de construcción e innovación. Colabora con desarrolladores, diseñadores y emprendedores para dar vida a tus ideas.</p>
        <Link href="https://taikai.network/ethereumTGU/hackathons/eth-jaguar/" className="btn" target="_blank">
          Regístrate Ahora
        </Link>

        {/* Navigation Menu */}
        <nav className="main-nav" id="mainNav">
          <div className="main-nav-links">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#informacion" className="nav-link">Información</a>
            <a href="#mentores" className="nav-link">Mentores</a>
            <a href="#premios" className="nav-link">Premios</a>
            <a href="#actividades" className="nav-link">Actividades</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <Link href="https://taikai.network/ethereumTGU/hackathons/eth-jaguar/" className="main-nav-btn" target="_blank">
              Aplicar
            </Link>
          </div>
        </nav>

        {/* Sponsors Section */}
        <section className="people-section sponsors-section" id="informacion">
          <h2 className="people-title">Organizan</h2>
          <div className="sponsor-logos">
            <img src="/assets/sponsor1.png" alt="Sponsor 1" className="sponsor-logo large first" />
            <img src="/assets/sponsor2.png" alt="Sponsor 2" className="sponsor-logo" />
            <img src="/assets/sponsor3.png" alt="Sponsor 3" className="sponsor-logo" />
          </div>
        </section>

        {/* Metrics Section */}
        <section className="metrics-section new-metrics v2-metrics" id="metrics">
          <h2 className="metrics-headline">Construye el futuro <span className="highlight">descentralizado</span></h2>
          <div className="metrics-description">ETH Jaguar te permite experimentar con tecnología web3 de vanguardia y desarrollar ideas que te apasionan. Aprende sobre cripto, expande tu red, conoce profesionales de la industria y encuentra personas afines creando el nuevo internet.</div>
          <div className="metrics-blocks">
            <div className="metric">
              <span className="metric-number">800<span className="metric-highlight">+</span></span>
              <span className="metric-label">Asistentes</span>
            </div>
            <div className="metric">
              <span className="metric-number">20<span className="metric-highlight">+</span></span>
              <span className="metric-label">Protocolos</span>
            </div>
            <div className="metric">
              <span className="metric-number">29<span className="metric-highlight">+</span></span>
              <span className="metric-label">Workshops</span>
            </div>
          </div>
          <div className="metrics-features-row">
            <ul className="features-list">
              <li><span className="checkmark"></span> Beginner friendly</li>
              <li><span className="checkmark"></span> Technical mentorship</li>
              <li><span className="checkmark"></span> Curated content</li>
            </ul>
            <ul className="features-list">
              <li><span className="checkmark"></span> Learn by doing</li>
              <li><span className="checkmark"></span> Exclusive swag</li>
              <li><span className="checkmark"></span> Free food & drinks</li>
            </ul>
          </div>
          <div className="metrics-images-row">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&q=80"
              alt="Evento 1"
              className="metrics-img"
              width={140}
              height={140}
              unoptimized
            />
            <Image
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&q=80"
              alt="Evento 2"
              className="metrics-img"
              width={140}
              height={140}
              unoptimized
            />
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&q=80"
              alt="Evento 3"
              className="metrics-img"
              width={140}
              height={140}
              unoptimized
            />
          </div>
        </section>

        {/* Speakers & Mentors Section */}
        <section className="people-section" id="mentores">
          <h2 className="people-title">Speakers & Mentores</h2>
          <div className="people-list">
            {/* Person cards */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="person-card">
                <Image
                  src={`/sponsor${(i % 3) + 1}.png`}
                  alt="Speaker thumbnail"
                  className="person-photo"
                  width={64}
                  height={64}
                />
                <div className="person-info">
                  <div className="person-name">Nombre del {i % 2 ? 'Speaker' : 'Mentor'}</div>
                  <div className="person-role">{i % 2 ? 'Speaker' : 'Mentor'}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prizes Section */}
        <section className="prizes-section" id="premios">
          <div className="prizes-headline">
            <span className="prizes-highlight">¡Hasta la fecha hemos confirmado:</span><br />
            <span className="prizes-amount">+$65,000 <span className="prizes-label">en premios</span>!</span>
          </div>
          <div className="prizes-cta">
            <Link href="#" className="metrics-btn">Aplicar a la Conferencia</Link>
            <Link href="#" className="metrics-btn">Aplicar al Hackathon</Link>
            <Link href="#" className="metrics-link">Hazte Partner</Link>
          </div>
        </section>

        {/* Activities Section */}
        <section className="other-activities-section" id="actividades">
          <h2 className="other-activities-title">Aprovecha toda la semana</h2>
          <div className="other-activities-desc">¿Buscas más actividades antes o después del hackathon? ¡Descubre eventos, meetups y experiencias para conectar y aprender más!</div>
          <div className="activities-cards-row">
            <div className="activity-card">
              <Image
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&q=80"
                alt="Meetup"
                className="activity-img"
                width={220}
                height={120}
                unoptimized
              />
              <div className="activity-content">
                <div className="activity-title">Web3 Meetup Tegus</div>
                <div className="activity-date">28 de agosto, 2024</div>
                <a href="#" className="activity-btn">Registrarse</a>
              </div>
            </div>
            <div className="activity-card">
              <Image
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&q=80"
                alt="Workshop"
                className="activity-img"
                width={220}
                height={120}
                unoptimized
              />
              <div className="activity-content">
                <div className="activity-title">Taller: Smart Contracts</div>
                <div className="activity-date">1 de septiembre, 2024</div>
                <a href="#" className="activity-btn">Registrarse</a>
              </div>
            </div>
            <div className="activity-card">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&q=80"
                alt="City Tour"
                className="activity-img"
                width={220}
                height={120}
                unoptimized
              />
              <div className="activity-content">
                <div className="activity-title">City Tour Blockchain</div>
                <div className="activity-date">1 de septiembre, 2024</div>
                <a href="#" className="activity-btn">Registrarse</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" id="faq">
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <div className="faq-list">
            {[
              {
                q: '¿Qué es ETH Jaguar?',
                a: 'ETH Jaguar es un evento tecnológico anual de tres días lleno de charlas técnicas, talleres, competencias y programación sin parar. Durante 60 horas seguidas, los participantes disfrutan de presentaciones de clase mundial, demostraciones, eventos comunitarios y su clásica competencia de programación de 48 horas.'
              },
              {
                q: '¿Quién puede asistir a ETH Jaguar?',
                a: 'ETH Jaguar está dirigido a mentes creativas con espíritu hacker (en el sentido clásico del término). Cualquier persona con perfil técnico puede postularse, no solo ingenieros (por ejemplo, diseñadores web también son bienvenidos).'
              },
              {
                q: '¿Cuánto cuesta?',
                a: 'ETH Jaguar es gratuito para todos los candidatos seleccionados.'
              },
              {
                q: '¿Puedo llevar un acompañante?',
                a: 'No. Todos los asistentes deben postularse individualmente.'
              },
              {
                q: '¿Debo participar en la competencia de programación de 48 horas?',
                a: 'No. Pero te animamos a participar en alguna de las actividades del evento. Hay muchas opciones más allá de la competencia principal.'
              },
              {
                q: 'Fui seleccionado pero no podré asistir, ¿qué hago?',
                a: 'Por favor avísanos. Los cupos son limitados y sería ideal que otro candidato pueda ocupar tu lugar (aunque no puedes elegir quién será).'
              },
              {
                q: '¿Habrá comida y bebidas?',
                a: 'Sí. Todos los asistentes tendrán acceso gratuito a almuerzo y cena cada día, además de snacks y bebidas disponibles 24/7.'
              },
              {
                q: '¿Se entrega certificado de participación?',
                a: 'Sí, podemos proveer certificados de participación bajo solicitud en los días posteriores al evento. Solo asegúrate de participar.'
              },
              {
                q: '¿Puedo formar equipo con quien yo quiera? ¿Incluso un ponente?',
                a: 'Sí, si ambos están de acuerdo. Pero todos deben ser participantes aprobados.'
              },
              {
                q: '¿Hay premios para los ganadores?',
                a: 'En la mayoría de los casos, sí. Pero no se anuncian por adelantado.'
              }
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question">{faq.q}</button>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer outside the container */}
      <footer className="site-footer">
        <div className="footer-social-simple">
          <a href="#" className="footer-social-icon" title="Ethereum">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="#2970FF" d="M12 2l7 12-7 4-7-4 7-12zm0 15.5l6.16-3.52L12 21l-6.16-6.98L12 17.5z"/>
            </svg>
          </a>
          <a href="#" className="footer-social-icon" title="Twitter">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="#2970FF" d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 12 9.03c0 .34.04.67.1.99C8.09 9.85 4.6 8.13 2.13 5.36c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.22-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.32 0-.63-.02-.94-.06A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/>
            </svg>
          </a>
          <a href="#" className="footer-social-icon" title="Telegram">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="#2970FF" d="M21.05 3.05a2.25 2.25 0 0 0-2.3-.3L3.7 9.1c-1.1.45-1.1 2.05.01 2.48l3.6 1.36 1.36 3.6c.43 1.1 2.03 1.1 2.48.01l6.35-15.05a2.25 2.25 0 0 0-.3-2.3zM9.5 13.5l-1-2.5 7.5-3-6.5 5.5z"/>
            </svg>
          </a>
          <a href="#" className="footer-social-icon" title="GitHub">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="#2970FF" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.7.12 2.5.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
            </svg>
          </a>
        </div>
        <div className="footer-copyright">
          © 2025 ETH Jaguar · Ethereum Tegucigalpa
        </div>
      </footer>
    </>
  );
}
