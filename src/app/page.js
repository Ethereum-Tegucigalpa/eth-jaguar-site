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

      // Always show nav on mobile
      if (window.innerWidth <= 768) {
        nav.classList.add('visible');
        return;
      }

      const rect = sponsorsSection.getBoundingClientRect();
      if (rect.bottom < 0) {
        nav.classList.add('visible');
      } else {
        nav.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', checkNav);
    window.addEventListener('resize', checkNav);
    checkNav();

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.main-nav-links');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

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
      {/* Hamburger Menu */}
      <div className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Floating Shapes Left & Right */}
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
        <div className="hero-content">
          <Image
            src="/assets/ETH JAGUAR_logo blanco.png"
            alt="ETH Jaguar Logo"
            className="logo"
            width={600}
            height={330}
          />
          <div className="date-banner">29–31 DE AGOSTO, TEGUCIGALPA</div>
          <p>ETH Jaguar es un evento tecnológico de tres días lleno de charlas técnicas, talleres, competencias y programación sin parar.</p>
          <Link href="https://taikai.network/ethereumTGU/hackathons/eth-jaguar/" className="btn" target="_blank">
            Regístrate Ahora
          </Link>
        </div>
        {/* Navigation Menu */}
        <nav className="main-nav" id="mainNav">
          <div className="main-nav-links">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#informacion" className="nav-link">Sponsors</a>
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
            <img src="/assets/org1.png" alt="Sponsor 1" className="sponsor-logo large first" />
            <img src="/assets/org2.png" alt="Sponsor 2" className="sponsor-logo" />
            <img src="/assets/org3.png" alt="Sponsor 3" className="sponsor-logo" />
          </div>

          <h2 className="people-title sponsors-subtitle">Partners & Sponsors</h2>
          <div className="sponsor-logos">
            <img src="/assets/sponsor1.png" alt="Sponsor 1" className="sponsor-logo" />
            <img src="/assets/sponsor2.png" alt="Sponsor 2" className="sponsor-logo" />
            <img src="/assets/sponsor3.png" alt="Sponsor 3" className="sponsor-logo" />
            <img src="/assets/sponsor4.png" alt="Sponsor 4" className="sponsor-logo" />
            <img src="/assets/sponsor5.png" alt="Sponsor 5" className="sponsor-logo" />
          </div>
        </section>

        {/* Metrics Section */}
        {/* <section className="metrics-section new-metrics v2-metrics" id="metrics">
          <h2 className="metrics-headline">Construye el futuro <span className="highlight">Descentralizado</span></h2>
          <div className="metrics-description">ETH Jaguar está dirigido a mentes creativas con espíritu innovador. Cualquier persona con perfil técnico puede postularse, no solo ingenieros (por ejemplo, diseñadores, emprendedores, etc.).</div>
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
        </section> */}

        {/* Speakers & Mentors Section */}
        <section className="people-section" id="mentores">
          <h2 className="people-title">Speakers & <span className="highlight">Mentores</span></h2>
          <div className="people-list">
            <div className="person-card">
              <Image
                src="/assets/ahmed.jpeg"
                alt="Speaker thumbnail"
                className="person-photo"
                width={64}
                height={64}
              />
              <div className="person-info">
                <div className="person-name">Ahmed</div>
                <div className="person-role">Devrel @ Scroll</div>
              </div>
            </div>
            <div className="person-card">
              <Image
                src="/assets/benji.png"
                alt="Mentor thumbnail"
                className="person-photo"
                width={64}
                height={64}
              />
              <div className="person-info">
                <div className="person-name">Benji</div>
                <div className="person-role">Dev @ Revelry Labs</div>
              </div>
            </div>
            <div className="person-card">
              <Image
                src="/assets/jorge.jpg"
                alt="Speaker thumbnail"
                className="person-photo"
                width={64}
                height={64}
              />
              <div className="person-info">
                <div className="person-name">Jorge</div>
                <div className="person-role">Dev</div>
              </div>
            </div>
            <div className="person-card coming-soon">
              <div className="person-photo">
                <span className="coming-soon-text">⋯</span>
              </div>
              <div className="person-info">
                <div className="person-name">Más Mentores</div>
                <div className="person-role">Próximamente</div>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section className="prizes-section" id="premios">
          <div className="prizes-headline">
            <span className="prizes-highlight">¡Hasta la fecha hemos confirmado:</span><br />
            <span className="prizes-amount">+$3,000 <span className="prizes-label">en premios</span>!</span>
          </div>
          <div className="prizes-cta">
            <Link href="#" className="metrics-btn">Aplica al Hackathon</Link>
          </div>
        </section>

        {/* Activities Section */}
        <section className="other-activities-section" id="actividades">
          <h2 className="other-activities-title">Preparate para el <span className="highlight">Hackathon</span></h2>
          <div className="other-activities-desc">¿Buscas más actividades antes o después del hackathon? ¡Descubre eventos, meetups y experiencias para conectar y aprender más!</div>
          <div className="activities-cards-row">
            <div className="activity-card">
              <Image
                src="/assets/event1.png"
                alt="Meetup"
                className="activity-img"
                width={220}
                height={120}
                unoptimized
              />
              <div className="activity-content">
                <div className="activity-title">Solidity Bootcamp</div>
                <div className="activity-date">13 de Junio, Unitec</div>
                <a href="#" className="activity-btn disabled">Registro pronto</a>
              </div>
            </div>
            <div className="activity-card coming-soon">
              <div className="activity-img coming-soon-img">
                <span className="coming-soon-text">⋯</span>
              </div>
              <div className="activity-content">
                <div className="activity-title">Próximamente</div>
                <div className="activity-date">Más actividades</div>
                <div className="activity-btn disabled">Próximamente</div>
              </div>
            </div>
            <div className="activity-card coming-soon">
              <div className="activity-img coming-soon-img">
                <span className="coming-soon-text">⋯</span>
              </div>
              <div className="activity-content">
                <div className="activity-title">Próximamente</div>
                <div className="activity-date">Más actividades</div>
                <div className="activity-btn disabled">Próximamente</div>
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
                q: '¿Puedo  llevar un acompañante?',
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
        <div className="footer-social">
          <a href="https://x.com/ethereumTGU_" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="X (Twitter)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://discord.gg/zG3kfSdJtz" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Discord">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
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
