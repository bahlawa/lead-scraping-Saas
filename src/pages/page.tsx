import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="landing-page">
      
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="/logo-shield-transparent.png" alt="Shield" style={{ height: '55px', width: 'auto', objectFit: 'contain', display: 'block' }} />
          <span style={{ fontWeight: '700', fontSize: '45px', letterSpacing: '-0.5px', color: '#fff', fontFamily: 'Inter, sans-serif' }}>Leadso</span>
        </div>
        <div className="navbar-links">
          <a href="#features">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Resources</a>
        </div>
        <div className="navbar-actions">
          <Link to="/login" className="btn-ghost">Log in</Link>
          <Link to="/signup" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero-split">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            Trusted by 2M+ professionals worldwide
          </div>
          <h1 className="animate-slide-up">
            The Precision Layer for Your<br/>
            <span className="accent">B2B Outreach Strategy</span>
          </h1>
          <p className="animate-slide-up-delay">
            Leadso is a sophisticated lead intelligence engine designed to bridge the gap between abstract market segments and verified, high-intent decision makers. We don't just find contacts; we map the professional landscape to ensure every message you send lands in a receptive inbox.
          </p>
          <div className="hero-ctas animate-slide-up-delay-2">
            <Link to="/signup" className="btn-primary">Start for free<span style={{ marginLeft: '6px' }}>→</span></Link>
            <a href="#features" className="btn-outline">See how it works</a>
          </div>
          <div className="hero-note animate-fade-in-delay">
            <span>○</span> No credit card required. 100 free credits upon sign up.
          </div>
        </div>

        <div className="hero-visual">
          <div className="cube-container">
            <div className="cube">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
              
              {/* Floating Points / Data Particles */}
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`particle p${i}`} />
              ))}
            </div>
            <div className="glow-effect"></div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section" id="features">
        <div className="section-header">
          <h2>A Comprehensive Narrative of Discovery</h2>
          <p>We've meticulously engineered every stage of the lead lifecycle to provide a seamless, descriptive flow from initial curiosity to qualified conversion.</p>
        </div>
        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <h3>Extensive Scraping Capabilities</h3>
            <p>Scrape leads from LinkedIn, Sales Navigator, and other professional platforms with precision targeting.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
            </div>
            <h3>High-Quality Database</h3>
            <p>Access our curated database of 200M+ professionals with continuously refreshed, accurate data.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>Simple Workflow</h3>
            <p>From search to export, our streamlined process gets you from zero to outreach in minutes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            </div>
            <h3>Superior Verification</h3>
            <p>Verify emails with 97% accuracy to minimize bounce rates and maximize deliverability.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4 4-4-4"></path><path d="M12 8v8"></path></svg>
            </div>
            <h3>One-Click Export</h3>
            <p>Instantly download your verified leads as a clean CSV ready for your outreach tool.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <h3>Cost-Effective Pricing</h3>
            <p>At just $0.05 per credit on average, we're significantly more affordable than competitors.</p>
          </div>
        </div>
      </section>

      {/* ===== AI PERSONALIZATION ===== */}
      <section className="ai-section" id="ai">
        <div className="ai-left">
          <div className="ai-badge"><span>✨</span> Semantic Intelligence</div>
          <h2>Transform Data Into Human Dialogue</h2>
          <p>
            {"True personalization requires more than just a name; it requires a descriptive understanding of a prospect's professional journey. Our semantic engine synthesizes public profiles and company news into primary research notes, allowing your outreach to sound like it was written by a peer, not a script."}
          </p>
          <ul className="ai-features-list">
            <li><span className="check">✓</span> Custom LLM-based icebreaker generation</li>
            <li><span className="check">✓</span> Role & Industry Intelligence</li>
            <li><span className="check">✓</span> Start for free - no credit purchase required</li>
          </ul>
        </div>
        <div className="ai-preview">
          <div className="ai-preview-header">
            <span>AI Personalization Prompt</span>
            <div className="ai-preview-toggle">
              <div className="ai-preview-toggle-handle"></div>
            </div>
          </div>
          <div className="ai-preview-prompt">
            {'"Create a 2-sentence icebreaker for {{firstName}} at {{company}} mentioning their role as {{title}} and a recent achievement..."'}
          </div>
          <div className="ai-preview-output">
            {'"Hi {{firstName}}, I noticed {{company}} just closed Series B - congratulations! As {{title}}, you must be scaling rapidly. I\'d love to show you how our solution helped a similar company increase their conversion rate by 40%."'}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="section" id="pricing">
        <div className="section-header" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>Simple, Transparent Pricing</h2>
          <p style={{ color: '#a1a1aa', fontSize: '16px' }}>
            Averages $0.05 per credit. 1 Credit = 1 Verified Email. Volume discounts applied for larger usage.
          </p>
        </div>
        
        <div className="pricing-grid">
          {/* Starter Plan */}
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">$49<span>/mo</span></div>
            <p className="description">Perfect for individuals starting their outbound journey.</p>
            
            <ul className="pricing-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                1,000 Credits
              </li>
              <li style={{ color: '#71717a' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                (~$0.05 / credit)
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                AI Intent Classification
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Real-time Verification
              </li>
            </ul>
            
            <Link to="/signup" className="pricing-btn outline">Get Started</Link>
          </div>

          {/* Growth Plan */}
          <div className="pricing-card featured">
            <div className="pricing-badge">Most Popular</div>
            <h3>Growth</h3>
            <div className="price">$99<span>/mo</span></div>
            <p className="description">For growing teams running scaled outbound plays.</p>
            
            <ul className="pricing-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                2,500 Credits
              </li>
              <li style={{ color: '#71717a' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                (~$0.04 / credit)
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Custom LLM Column Parsing
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Team Workspaces (up to 3)
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Advanced API Access
              </li>
            </ul>
            
            <Link to="/signup" className="pricing-btn solid">Get Started</Link>
          </div>

          {/* Scale Plan */}
          <div className="pricing-card">
            <h3>Scale</h3>
            <div className="price">$249<span>/mo</span></div>
            <p className="description">For agencies and high-volume data operations.</p>
            
            <ul className="pricing-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                10,000 Credits
              </li>
              <li style={{ color: '#71717a' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                (~$0.025 / credit)
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Unlimited Workspaces
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Dedicated Support Rep
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Custom Deliverability Setup
              </li>
            </ul>
            
            <Link to="/signup" className="pricing-btn outline">Get Started</Link>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <div className="section-header">
          <h2>Industry-Leading Data Accuracy & Coverage</h2>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>3B+</h3>
            <p>Email searches processed</p>
          </div>
          <div className="stat-item">
            <h3>92%</h3>
            <p>Average success rate</p>
          </div>
          <div className="stat-item">
            <h3>200M+</h3>
            <p>Profile database</p>
          </div>
          <div className="stat-item">
            <h3>20M+</h3>
            <p>Company profiles</p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="testimonials">
        <div className="section-header">
          <h2>What our customers say</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="quote">
              {'"It delivers as expected — if all you need is email, this tool is great. Also like that there doesn\'t seem to have limitations on how many emails I can extract."'}
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">S</div>
              <div className="testimonial-author-info">
                <h4>Sophia Georgeo</h4>
                <p>B2B Account Executive, Dashlane</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">
              {'"Leadso is easy to use software with a lot of features that helps in the process of data sourcing used in my day-to-day functionality. Extremely intuitive."'}
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">E</div>
              <div className="testimonial-author-info">
                <h4>Ethan W</h4>
                <p>Co-Founder, Boston Wells</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">
              {'"So far, the ROI on Leadso has been more than any other tool in our tech stack. Its quality data has led to thousands in deals for our company."'}
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">C</div>
              <div className="testimonial-author-info">
                <h4>Caleb S</h4>
                <p>Founder, SocialBloom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <h2>Start Building Your Cold Email List Today</h2>
        <p>Get 100 free credits and begin crafting high-converting outreach campaigns.</p>
        <Link to="/signup" className="btn-primary">Start for free<span style={{ marginLeft: '6px' }}>→</span></Link>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer-bar">
        <span>© 2026 Leadso. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">GDPR</a>
        </div>
      </footer>

    </div>
  );
}
