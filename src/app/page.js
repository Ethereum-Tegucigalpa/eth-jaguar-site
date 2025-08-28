'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    useEffect(() => {
        // FAQ toggle logic
        document.querySelectorAll('.faq-question').forEach(btn => {
            btn.addEventListener('click', function () {
                const answer = this.nextElementSibling;
                this.classList.toggle('active');
                answer.classList.toggle('open');
            });
        });

        // Show nav when reaching agenda section
        const nav = document.getElementById('mainNav');
        const agendaSection = document.querySelector('.agenda-section');

        function checkNav() {
            if (!nav || !agendaSection) return;

            // Always show nav on mobile
            if (window.innerWidth <= 768) {
                nav.classList.add('visible');
                return;
            }

            const rect = agendaSection.getBoundingClientRect();
            if (rect.top <= 100) {
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
            link.addEventListener('click', function (e) {
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
                    <div className="beginner-friendly-banner">BEGINNER FRIENDLY</div>
                    <p>ETH Jaguar es un evento tecnológico de tres días lleno de charlas técnicas, talleres, competencias y programación sin parar. <br></br> <br></br> Los participantes pueden ganar hasta <b className="highlight">$6,000</b> en premios.</p>
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
                    </div>
                </nav>

                {/* Agenda Section */}
                <section className="agenda-section" id="agenda">
                    <h2 className="people-title"><span className="highlight">Agenda</span></h2>
                    <div className="agenda-container">
                        <div className="agenda-day">
                            <h3 className="agenda-day-title">Viernes 29 de Agosto</h3>
                            <div className="agenda-items">
                                <div className="agenda-item">
                                    <span className="agenda-time">5:30 pm</span>
                                    <span className="agenda-activity">Registro de Participantes</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">6:00 pm</span>
                                    <span className="agenda-activity">Cena y Networking</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">6:30 pm</span>
                                    <span className="agenda-activity">Apertura del Evento</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">7:00 pm</span>
                                    <div className="agenda-activity-container">
                                        <span className="agenda-activity">Charla: La magia de Ethereum</span>
                                        <span className="agenda-speaker">Juan Molina</span>
                                    </div>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">7:20 pm</span>
                                    <div className="agenda-activity-container">
                                        <span className="agenda-activity">Team Building / Ice Breaker - Formación de Equipos</span>
                                        <span className="agenda-speaker">Manuela Flores</span>
                                    </div>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">8:00 pm</span>
                                    <span className="agenda-activity">Inicio de Hackear</span>
                                </div>
                            </div>
                        </div>

                        <div className="agenda-day">
                            <h3 className="agenda-day-title">Sábado 30 de Agosto</h3>
                            <div className="agenda-items">
                                <div className="agenda-item">
                                    <span className="agenda-time">8:15 am</span>
                                    <span className="agenda-activity">Desayuno</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">8:30 am</span>
                                    <span className="agenda-activity">Recap</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">11:00 am</span>
                                    <span className="agenda-activity">Ronda de Mentorías</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">12:30 pm</span>
                                    <span className="agenda-activity">Almuerzo</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">3:00 pm</span>
                                    <span className="agenda-activity">Ronda de Mentorías</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">6:00 pm</span>
                                    <span className="agenda-activity">Cena</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">6:30 pm</span>
                                    <div className="agenda-activity-container">
                                        <span className="agenda-activity">Preparación de Pitches</span>
                                        <span className="agenda-speaker">Josue Reyes</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="agenda-day">
                            <h3 className="agenda-day-title">Domingo 31 de Agosto</h3>
                            <div className="agenda-items">
                                <div className="agenda-item">
                                    <span className="agenda-time">8:30 am</span>
                                    <span className="agenda-activity">Desayuno</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">9:00 am</span>
                                    <span className="agenda-activity">Ronda de Mentores</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">10:30 am</span>
                                    <span className="agenda-activity">Fin de plazo para subir Proyectos</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">11:00 am</span>
                                    <span className="agenda-activity">Evaluación Técnica de Proyectos</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">12:00 pm</span>
                                    <span className="agenda-activity">Almuerzo</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">1:30 pm</span>
                                    <span className="agenda-activity">Presentación Final de Proyectos</span>
                                </div>
                                <div className="agenda-item">
                                    <span className="agenda-time">3:00 pm</span>
                                    <span className="agenda-activity">Deliberación y entrega de premios</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Optional Workshops Section */}
                    <h2 className="people-title "><span className="highlight">Talleres</span></h2>
                    <div className="workshops-container">
                        <div className="workshop-item">
                            <div className="workshop-header">
                                <span className="workshop-day">Viernes</span>
                                <span className="workshop-time">8:20 pm</span>
                            </div>
                            <div className="workshop-content">
                                <span className="workshop-name">Arbitrum Stylus Workshop</span>
                                <span className="workshop-mentor">Oscar Fonseca</span>
                            </div>
                        </div>

                        <div className="workshop-item">
                            <div className="workshop-header">
                                <span className="workshop-day">Sábado</span>
                                <span className="workshop-time">9:00 am</span>
                            </div>
                            <div className="workshop-content">
                                <span className="workshop-name">Building apps with AI</span>
                                <span className="workshop-mentor">Chris Carella</span>
                            </div>
                        </div>

                        <div className="workshop-item">
                            <div className="workshop-header">
                                <span className="workshop-day">Sábado</span>
                                <span className="workshop-time">9:30 am</span>
                            </div>
                            <div className="workshop-content">
                                <span className="workshop-name">Scaffold Eth</span>
                                <span className="workshop-mentor">Ahmed Castro</span>
                            </div>
                        </div>

                        <div className="workshop-item">
                            <div className="workshop-header">
                                <span className="workshop-day">Sábado</span>
                                <span className="workshop-time">10:30 am</span>
                            </div>
                            <div className="workshop-content">
                                <span className="workshop-name">Como crear una Wallet</span>
                                <span className="workshop-mentor"></span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sponsors Section */}
                <section className="people-section sponsors-section" id="informacion">
                    <h2 className="people-title">Organizan</h2>
                    <div className="sponsor-logos">
                        <img src="/assets/org1.png" alt="Sponsor 1" className="sponsor-logo larger" />
                        <img src="/assets/org2.png" alt="Sponsor 2" className="sponsor-logo unitec" />
                    </div>

                    <h2 className="people-title sponsors-subtitle">Partners & Sponsors</h2>
                    <div className="sponsor-logos">
                        <img src="/assets/sponsors/sponsor2.png" alt="Sponsor 2" className="sponsor-logo" />
                        <img src="/assets/sponsors/devconnect.png" alt="Devconnect" className="sponsor-logo large" />
                        <img src="/assets/sponsors/sponsor3.png" alt="Sponsor 3" className="sponsor-logo small" />
                        <img src="/assets/sponsors/sponsor4.png" alt="Sponsor 4" className="sponsor-logo large" />
                        <img src="/assets/sponsors/sponsor5.png" alt="Sponsor 5" className="sponsor-logo smaller" />
                        <img src="/assets/sponsors/seguridad.png" alt="Seguridad" className="sponsor-logo seguridad-logo large" />
                        <img src="/assets/sponsors/arbitrum.png" alt="Arbitrum" className="sponsor-logo large" />
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
                        <div className="person-card silvina-card">
                            <Image
                                src="/assets/silvina.jpeg"
                                alt="Mentor thumbnail"
                                className="person-photo"
                                width={64}
                                height={64}
                            />
                            <div className="person-info">
                                <div className="person-name">Silvina</div>
                                <div className="person-role">Facilitadora del ETH Jaguar Hackathon 2025</div>
                            </div>
                        </div>
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
                        <div className="person-card">
                            <Image
                                src="/assets/antonio.jpeg"
                                alt="Speaker thumbnail"
                                className="person-photo"
                                width={64}
                                height={64}
                            />
                            <div className="person-info">
                                <div className="person-name">Antonio</div>
                                <div className="person-role">Google Developer Expert</div>
                            </div>
                        </div>
                        <div className="person-card">
                            <Image
                                src="/assets/josue.jpeg"
                                alt="Mentor thumbnail"
                                className="person-photo"
                                width={64}
                                height={64}
                            />
                            <div className="person-info">
                                <div className="person-name">Josue Reyes</div>
                                <div className="person-role">Director @ Impact Hub</div>
                            </div>
                        </div>
                        <div className="person-card">
                            <Image
                                src="/assets/ccarella.jpg"
                                alt="Mentor thumbnail"
                                className="person-photo"
                                width={64}
                                height={64}
                            />
                            <div className="person-info">
                                <div className="person-name">Chris Carella</div>
                                <div className="person-role">Co-founder @ Scout Game</div>
                            </div>
                        </div>
                        <div className="person-card">
                            <Image
                                src="/assets/hody.png"
                                alt="Mentor thumbnail"
                                className="person-photo"
                                width={64}
                                height={64}
                            />
                            <div className="person-info">
                                <div className="person-name">Hody Canales</div>
                                <div className="person-role">Especialista en Competencia Financiera @ CNBS</div>
                            </div>
                        </div>
                        <div className="person-card">
                            <Image
                                src="/assets/kat.png"
                                alt="Mentor thumbnail"
                                className="person-photo"
                                width={64}
                                height={64}
                            />
                            <div className="person-info">
                                <div className="person-name">Katherinne Nolasco</div>
                                <div className="person-role">Líder de programas @ Impact Hub</div>
                            </div>
                        </div>
                        <div className="person-card">
                            <Image
                                src="/assets/soh.jpg"
                                alt="Mentor thumbnail"
                                className="person-photo"
                                width={64}
                                height={64}
                            />
                            <div className="person-info">
                                <div className="person-name">Sohany Medina</div>
                                <div className="person-role">Comunicación y Comunidad @ Impact Hub</div>
                            </div>
                        </div>
                        <div className="person-card">
                            <Image
                                src="/assets/juan.jpg"
                                alt="Mentor thumbnail"
                                className="person-photo"
                                width={64}
                                height={64}
                            />
                            <div className="person-info">
                                <div className="person-name">Juan Molina</div>
                                <div className="person-role">Community @ Scroll</div>
                            </div>
                        </div>
                        <div className="person-card">
                            <Image
                                src="/assets/oscar.jpeg"
                                alt="Mentor thumbnail"
                                className="person-photo"
                                width={64}
                                height={64}
                            />
                            <div className="person-info">
                                <div className="person-name">Oscar Fonseca</div>
                                <div className="person-role">Web3 Dev</div>
                            </div>
                        </div>
                        <div className="person-card">
                            <Image
                                src="/assets/nelson.jpeg"
                                alt="Mentor thumbnail"
                                className="person-photo"
                                width={64}
                                height={64}
                            />
                            <div className="person-info">
                                <div className="person-name">Nelson</div>
                                <div className="person-role">Founder @ Republica DAO</div>
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
                        <span className="prizes-amount">+$6,000 <span className="prizes-label">en premios</span>!</span>
                    </div>
                </section>

                {/* Activities Section */}
                <section className="other-activities-section" id="actividades">
                    <h2 className="other-activities-title">Preparate para el <span className="highlight">Hackathon</span></h2>
                    <div className="other-activities-desc">¿Buscas más actividades antes del hackathon? ¡Descubre eventos, meetups y experiencias para conectar y aprender más!</div>
                    <div className="activities-cards-row">
                        <div className="activity-card">
                            <Image
                                src="/assets/nodos.jpeg"
                                alt="Nodos Event"
                                className="activity-img nodos-img"
                                width={220}
                                height={120}
                                unoptimized
                            />
                            <div className="activity-content">
                                <div className="activity-title">Taller de Nodos</div>
                                <div className="activity-date">Julio 26, Unitec</div>
                                <div className="activity-btn disabled">Finalizado</div>
                            </div>
                        </div>
                        <div className="activity-card">
                            <Image
                                src="/assets/10years.jpeg"
                                alt="10 Years Event"
                                className="activity-img"
                                width={220}
                                height={120}
                                unoptimized
                            />
                            <div className="activity-content">
                                <div className="activity-title">10 años de Ethereum</div>
                                <div className="activity-date">30 de Julio</div>
                                <div className="activity-btn disabled">Finalizado</div>
                            </div>
                        </div>
                        <div className="activity-card">
                            <Image
                                src="/assets/bootcamp1.png"
                                alt="Bootcamp Road to Eth Jaguar"
                                className="activity-img nodos-img"
                                width={220}
                                height={120}
                                unoptimized
                            />
                            <div className="activity-content">
                                <div className="activity-title">Bootcamp Road to Eth Jaguar</div>
                                <div className="activity-date">8 de Agosto</div>
                                <div className="activity-btn disabled">Finalizado</div>
                            </div>
                        </div>
                        <div className="activity-card">
                            <Image
                                src="/assets/meet1.png"
                                alt="Hack the idea: tips para elegir tu proyecto"
                                className="activity-img"
                                width={220}
                                height={120}
                                unoptimized
                            />
                            <div className="activity-content">
                                <div className="activity-title">Tips para elegir tu proyecto</div>
                                <div className="activity-date">14 de Agosto</div>
                                <div className="activity-btn disabled">Finalizado</div>
                            </div>
                        </div>
                        <div className="activity-card">
                            <Image
                                src="/assets/bootcamp2.png"
                                alt="Bootcamp Road to EthJaguar vol 2"
                                className="activity-img"
                                width={220}
                                height={120}
                                unoptimized
                            />
                            <div className="activity-content">
                                <div className="activity-title">Bootcamp Road to EthJaguar vol 2</div>
                                <div className="activity-date">16 de Agosto</div>
                                <div className="activity-btn disabled">Finalizado</div>
                            </div>
                        </div>
                        <div className="activity-card">
                            <Image
                                src="/assets/bootcamp3.png"
                                alt="Bootcamp Road to Eth Jaguar V3 Online"
                                className="activity-img"
                                width={220}
                                height={120}
                                unoptimized
                            />
                            <div className="activity-content">
                                <div className="activity-title">Bootcamp V3 Frontend (Online) </div>
                                <div className="activity-date">25 de Agosto</div>
                                <div className="activity-btn disabled">Finalizado</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Partners Section */}
                <section className="people-section community-section">
                    <h2 className="people-title">Community <span className="highlight">Partners</span></h2>
                    <div className="sponsor-logos">
                        <img src="/assets/community/EthMX_BlancoFull.png" alt="EthMX" className="sponsor-logo large" />
                        <img src="/assets/community/Logo EC_White.png" alt="Ethereum Community" className="sponsor-logo" />
                        <img src="/assets/community/cnbs.png" alt="cnbs" className="sponsor-logo larger" />
                        <img src="/assets/community/community2.png" alt="Community Partner" className="sponsor-logo larger" />
                        <img src="/assets/community/ethgt-logo-1.png" alt="ETH Guatemala" className="sponsor-logo" />
                        <img src="/assets/community/logo-ujcv.svg" alt="UJCV" className="sponsor-logo" />
                        <img src="/assets/community/ih.png" alt="Community Partner" className="sponsor-logo larger" />
                        <img src="/assets/community/logo-unah-blanco.png" alt="Community Partner" className="sponsor-logo larger" />
                        <img src="/assets/community/nica.png" alt="Nica" className="sponsor-logo larger " />
                        <img src="/assets/community/stone.png" alt="Stone" className="sponsor-logo stone-logo" />
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
                                a: 'Si. Hay hasta $6,000 en premios.'
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
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/Ethereumtgu" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" />
                        </svg>
                    </a>
                    <a href="https://t.me/+K-fE1Mh7wgtmMGQ5" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Telegram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="currentColor" />
                        </svg>
                    </a>
                    <a href="https://discord.gg/zG3kfSdJtz" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Discord">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill="currentColor" />
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
