import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone, Menu, X,
  Cloud, Container, GitBranch, Activity, Server, Database, ChevronUp,
  MousePointer2, Sparkles
} from 'lucide-react';
import './style.css';

const profile = {
  name: 'Mohammed Afras M',
  email: 'afrazcloud44@gmail.com',
  github: 'https://github.com/afrazcloud44',
  linkedin: 'https://www.linkedin.com/in/mohammed-afras',
  location: 'Kannur, Kerala, India'
};

const metrics = [
  ['30+', 'Microservices', '14 production • 16 development'],
  ['3', 'EKS Clusters', '1.32 → 1.34 upgrade'],
  ['89%', 'Faster Deployments', '3 hours → 20 minutes'],
  ['15%', 'AWS Cost Reduction', 'Karpenter rightsizing']
];

const tools = [
  ['AWS', 'amazon cloud', 'tools/aws.png'],
  ['Kubernetes', 'container orchestration', 'tools/kubernetes.png'],
  ['Docker', 'containers', 'tools/docker.png'],
  ['Jenkins', 'ci/cd automation', 'tools/jenkins.png'],
  ['Terraform', 'infrastructure as code', 'tools/terraform.png'],
  ['ArgoCD', 'gitops delivery', 'tools/argocd.png'],
  ['Prometheus', 'metrics monitoring', 'tools/prometheus.png'],
  ['Grafana', 'observability', 'tools/grafana.png']
];

const skills = {
  Cloud: ['AWS', 'GCP', 'Azure', 'EC2', 'EKS', 'S3', 'IAM', 'VPC', 'Route 53', 'CloudWatch'],
  Containers: ['Docker', 'Kubernetes', 'Amazon EKS', 'Helm', 'Microservices'],
  CI_CD: ['Jenkins', 'ArgoCD', 'GitHub Actions', 'GitOps'],
  IaC: ['Terraform', 'AWS CloudFormation'],
  Linux_Web: ['Linux / Ubuntu', 'Bash', 'Nginx', 'Apache', 'Reverse Proxy'],
  Observability: ['Prometheus', 'Grafana', 'CloudWatch', 'Metrics', 'Alerting']
};

const jobs = [
  {
    company: '2Cloud', role: 'DevOps Engineer', date: 'Dec 2025 — Aug 2026',
    items: [
      'Manage 30 microservices across production and development on Amazon EKS.',
      'Administer Kubernetes networking, ingress, autoscaling and security.',
      'Led a zero-downtime upgrade of 3 EKS clusters from Kubernetes 1.32 to 1.34.',
      'Designed Jenkins + ArgoCD + Playwright/Allure CI/CD workflows, reducing deployment time from 3 hours to 20 minutes.',
      'Implement GitOps workflows and troubleshoot production incidents with root-cause analysis.',
      'Performed a manual 28-hour cross-region recovery of a full cluster and 15 microservices after an AWS regional outage.',
      'Manage on-premise servers and virtualized infrastructure in hybrid environments.'
    ]
  },
  {
    company: 'Bridge Skill', role: 'DevOps Engineer Intern', date: 'May 2025 — Nov 2025',
    items: [
      'AWS EC2, S3, IAM and VPC.',
      'Docker containerization and image management.',
      'Terraform Infrastructure as Code.',
      'Linux administration, server configuration and troubleshooting.',
      'CI/CD fundamentals, CloudWatch and Route 53.'
    ]
  }
];

const projects = [
  ['EKS Platform Setup, Scaling & Cost Optimization', 'AWS / Kubernetes', 'Scalable EKS infrastructure for development and production environments supporting 30 microservices, with Karpenter-based rightsizing.', '15% AWS compute cost reduction', ['EKS', 'Karpenter', 'Kubernetes'], Cloud],
  ['Microservices CI/CD & Infrastructure Operations', 'CI/CD / GitOps', 'Jenkins pipelines integrated with Playwright and Allure testing, plus GitOps-based application and infrastructure delivery.', '89% faster deployment cycle', ['Jenkins', 'ArgoCD', 'GitOps'], GitBranch],
  ['Flutter Application on Kubernetes', 'Application Platform', 'Operational lifecycle and deployment automation for a Flutter application on Kubernetes with production-grade ingress and automated scaling.', 'Production Kubernetes deployment', ['Docker', 'Kubernetes', 'Ingress'], Container],
  ['EKS Observability & Alerting', 'Monitoring', 'Prometheus and Grafana observability with custom dashboards and Slack-based alerting for resource failures, pod crashes and abnormal behaviour.', 'Faster incident diagnosis', ['Prometheus', 'Grafana', 'CloudWatch'], Activity]
];

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const root = document.documentElement;
    const move = (e) => {
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
      root.classList.add('pointer-active');
    };
    const click = () => {
      root.classList.remove('pointer-click');
      void root.offsetWidth;
      root.classList.add('pointer-click');
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', click);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', click);
    };
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -55%' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenu(false);
  };

  return (
    <div className="site">
      <motion.div className="progress" style={{ scaleX: scale }} />
      <div className="cursor-spot" />
      <div className="cursor-ring"><MousePointer2 size={13} /></div>
      <div className="cursor-orbit orbit-a" />
      <div className="cursor-orbit orbit-b" />
      <div className="aurora a1" /><div className="aurora a2" /><div className="grid" />
      <div className="contours" /><div className="noise" />

      <header>
        <button className="brand" onClick={() => go('home')}><span className="brand-line" /> MOHAMMED AFRAS M</button>
        <nav className={menu ? 'open' : ''}>
          {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map(x => (
            <button key={x} className={active === x ? 'on' : ''} onClick={() => go(x)}>{x}</button>
          ))}
        </nav>
        <div className="navsocial">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={16} /></a>
          <a className="resume" href="/afraz-cv.pdf" download><Download size={15} /> Download Resume</a>
        </div>
        <button className="hamb" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> CLOUD • KUBERNETES • AUTOMATION</div>
            <div className="micro-label">DEVOPS ENGINEER / CLOUD INFRASTRUCTURE</div>
            <h1>Build systems<br />that <em>think</em><br /><strong>faster than you.</strong></h1>
            <p className="hero-description">DevOps Engineer focused on scalable cloud infrastructure, Kubernetes platforms, CI/CD automation and reliable application delivery.</p>
            <div className="actions">
              <button className="primary" onClick={() => go('projects')}>View My Work <ArrowUpRight /></button>
              <a className="secondary" href="/afraz-cv.pdf" download><Download /> Download Resume</a>
            </div>
            <div className="social"><a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href={`mailto:${profile.email}`}><Mail /> Email</a></div>
          </div>

          <Reveal className="portrait">
            <div className="photo-shell">
              <div className="scan-line" />
              <div className="photo"><img src={`${import.meta.env.BASE_URL}profile.png`} alt="Mohammed Afras M" /><div className="photo-badge"><i /> DevOps Engineer</div></div>
            </div>
          </Reveal>

          <div className="metrics">
            {metrics.map((m, i) => <Reveal key={m[1]} delay={i * .08}>
              <motion.div className="metric" whileHover={{ y: -8, scale: 1.015 }}>
                <span className="metric-corner" /><strong>{m[0]}</strong><b>{m[1]}</b><small>{m[2]}</small>
              </motion.div>
            </Reveal>)}
          </div>

          <Reveal className="tools-panel">
            <div className="tools-intro"><span className="pulse-dot" /> TECHNOLOGIES<br /><b>I WORK WITH</b></div>
            <div className="tool-list">
              {tools.map(([name, sub, img], i) => <motion.div className="tool-card" key={name} whileHover={{ y: -7, scale: 1.025 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <div className="tool-image"><img src={`${import.meta.env.BASE_URL}${img}`} alt={name} /></div><b>{name}</b><small>{sub}</small><span className="tool-glow" />
              </motion.div>)}
            </div>
            <div className="more-tools">AND<br /><span>MORE →</span></div>
          </Reveal>

          <div className="scroll-cue"><div className="mouse"><span /></div><small>SCROLL TO EXPLORE</small></div>
        </section>

        <section id="about" className="section">
          <Reveal><div className="kicker">01 / ABOUT</div><h2 className="title">Engineering with <span>reliability</span> in mind.</h2></Reveal>
          <div className="about-grid"><Reveal><p className="lead">DevOps Engineer with hands-on experience designing, deploying and maintaining cloud-native infrastructure and Kubernetes-based platforms across 30 microservices in production and development.</p><p className="muted">Experienced with AWS, Azure and GCP, Kubernetes, Infrastructure as Code, CI/CD, GitOps, Linux administration and production incident response.</p></Reveal><Reveal delay={.12}><div className="terminal"><div className="termbar"><i /><i /><i /><span>afras@devops:~</span></div><div><p><b>$</b> whoami</p><strong>Mohammed Afras M</strong><p><b>$</b> stack</p><strong>AWS / Kubernetes / Jenkins / Terraform</strong><p><b>$</b> location</p><strong>Kannur, Kerala, India</strong><p><b>$</b> status</p><strong className="green">ready_to_build()</strong></div></div></Reveal></div>
        </section>

        <section id="experience" className="section"><Reveal><div className="kicker">02 / EXPERIENCE</div><h2 className="title">Production experience, <span>measurable impact.</span></h2></Reveal><div className="timeline">{jobs.map((j, i) => <Reveal key={j.company} delay={i * .1} className="job"><div className="dot" /><div className="date">{j.date}</div><div><small>{j.company}</small><h3>{j.role}</h3><ul>{j.items.map(x => <li key={x}>{x}</li>)}</ul></div></Reveal>)}</div></section>

        <section id="projects" className="section"><Reveal><div className="kicker">03 / PROJECTS</div><h2 className="title">Selected <span>work.</span></h2></Reveal><div className="projects">{projects.map(([title, tag, desc, result, tags, Icon], i) => <Reveal key={title} delay={i * .07}><motion.article className="project" whileHover={{ y: -9 }}><div className="ptop"><small>{tag}</small><Icon /></div><h3>{title}</h3><p>{desc}</p><strong>{result}</strong><div>{tags.map(t => <span key={t}>{t}</span>)}</div></motion.article></Reveal>)}</div></section>

        <section id="skills" className="section"><Reveal><div className="kicker">04 / SKILLS</div><h2 className="title">Tools I use to <span>ship infrastructure.</span></h2></Reveal><div className="skills">{Object.entries(skills).map(([cat, items], i) => <Reveal key={cat} delay={i * .05}><motion.div className="skill" whileHover={{ y: -6 }}><div className="skillicon">{i === 0 ? <Cloud /> : i === 1 ? <Container /> : i === 2 ? <GitBranch /> : i === 3 ? <Database /> : i === 4 ? <Server /> : <Activity />}</div><h3>{cat.replace('_', ' / ')}</h3><div>{items.map(x => <span key={x}>{x}</span>)}</div></motion.div></Reveal>)}</div></section>

        <section className="section flow-section"><Reveal><div className="kicker">05 / DELIVERY FLOW</div><h2 className="title">From code push <span>to production.</span></h2></Reveal><div className="flow">{[['GitHub', 'Code Push', Github], ['Jenkins', 'CI / Test', GitBranch], ['Docker', 'Build Image', Container], ['ECR', 'Registry', Database], ['EKS', '30 Microservices', Cloud], ['Grafana', 'Observe', Activity]].map(([a, b, I], i) => <Reveal key={a} delay={i * .06}><div className="flowwrap"><motion.div className="node" whileHover={{ scale: 1.05 }}><I /><b>{a}</b><small>{b}</small></motion.div>{i < 5 && <span>→</span>}</div></Reveal>)}</div></section>

        <section id="contact" className="section"><Reveal><div className="contact"><div><div className="kicker">06 / CONTACT</div><h2>Let's build something <span>reliable.</span></h2><p>Open to DevOps, Cloud Infrastructure and Kubernetes opportunities.</p></div><div className="contacts"><a href={`mailto:${profile.email}`}><Mail /><span>{profile.email}</span><ArrowUpRight /></a>{/* Phone */}<a href="tel:+919526361632"><Phone /><span>+919526361632</span><ArrowUpRight /></a> <a href={profile.github} target="_blank" rel="noreferrer"><Github /><span>github.com/afrazcloud44</span><ArrowUpRight /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /><span>linkedin.com/in/mohammed-afras</span><ArrowUpRight /></a><div><MapPin /><span>{profile.location}</span></div></div></div></Reveal></section>
      </main>
      <footer><span><b>&lt;/&gt;</b> MOHAMMED AFRAS M</span><small>React + Framer Motion • DevOps Portfolio</small><button onClick={() => go('home')}><ChevronUp /></button></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
