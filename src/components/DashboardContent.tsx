"use client";

import { Link } from 'react-router-dom';

export default function DashboardContent() {
  return (
    <main className="main-content">
      {/* Top Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: '500', letterSpacing: '-1px' }}>
          Managing Your Lead <br/>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--accent-dark)' }}>✦</span>
            Workflows
          </span>
        </h1>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button style={{
            width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#fff', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path></svg>
          </button>
          <Link to="/scrape" className="pill-button">
            <span>+</span> Create a New Job
          </Link>
        </div>
      </header>

      {/* Horizontal Tabs */}
      <nav style={{ display: 'flex', gap: '8px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '8px' }}>
        {['Overview', 'Recent Scrapes', 'API Keys', 'Billing', 'Integrations'].map((tab, i) => (
          <button key={tab} style={{
            padding: '8px 20px',
            borderRadius: '99px',
            backgroundColor: i === 0 ? 'var(--sidebar-bg)' : '#fff',
            color: i === 0 ? '#fff' : 'var(--text-muted)',
            fontWeight: i === 0 ? '500' : '400',
            fontSize: '14px',
            whiteSpace: 'nowrap',
            boxShadow: i !== 0 ? 'var(--shadow-sm)' : 'none'
          }}>
            {tab}
          </button>
        ))}
      </nav>

      {/* Main Grid Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px' }}>
        
        {/* Left Column (Widgets & Charts) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Top Widgets Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) minmax(250px, 1fr) 1fr', gap: '16px' }}>
            
            {/* Scrapes Widget */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '500' }}>
                   <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path><path d="M13 2v7h7"></path></svg>
                   Jobs Run
                 </div>
                 <button style={{ color: 'var(--text-muted)' }}>⋮</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                 <span className="stat-value">54</span>
                 <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>/ 100</span>
              </div>
              <div style={{ display: 'flex', gap: '4px', marginTop: 'auto' }}>
                 {/* Progress visualization */}
                 {Array.from({length: 8}).map((_, i) => (
                    <div key={i} style={{ height: '24px', flex: 1, borderRadius: '12px', backgroundColor: i < 5 ? '#1a1b1f' : '#f0f0f0' }} />
                 ))}
              </div>
            </div>

            {/* Leads Widget */}
            <div className="card" style={{ backgroundColor: 'var(--accent-main)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '500' }}>
                   <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg>
                    Verified Leads
                 </div>
                 <button>⋮</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                 <span className="stat-value">12.4k</span>
                 <span style={{ opacity: 0.7, fontSize: '14px' }}>/ 50.0k</span>
              </div>
              <div style={{ display: 'flex', gap: '4px', marginTop: 'auto' }}>
                 {/* Progress visualization */}
                 {Array.from({length: 8}).map((_, i) => (
                    <div key={i} style={{ height: '24px', flex: 1, borderRadius: '12px', backgroundColor: i < 3 ? '#1a1b1f' : 'rgba(0,0,0,0.05)' }} />
                 ))}
              </div>
            </div>

            {/* Banner Widget */}
            <div className="card" style={{ 
              backgroundColor: '#1a1b1f', 
              color: '#fff', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              backgroundImage: 'url("https://images.unsplash.com/photo-1620121478247-ec786cb1eb1d?w=400&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
              <h3 style={{ position: 'relative', fontSize: '20px', fontWeight: '500', zIndex: 1 }}>
                Scale Your Outreach<br/>to the Next Level <span style={{ color: 'var(--accent-main)'}}>↗</span>
              </h3>
              <button style={{ 
                position: 'relative', 
                zIndex: 1, 
                backgroundColor: '#fff', 
                color: '#000', 
                width: '100%', 
                padding: '12px', 
                borderRadius: '99px', 
                fontWeight: '500', 
                marginTop: '32px' 
              }}>
                Upgrade Plan ▷
              </button>
            </div>

          </div>

          {/* Statistics Chart Placeholder */}
          <div className="card" style={{ flex: 1, minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '500' }}><span style={{marginRight:'8px'}}>📊</span> Statistics</h3>
                <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width:'8px',height:'8px',borderRadius:'50%',backgroundColor:'#1a1b1f'}}></div> Scrapes</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width:'8px',height:'8px',borderRadius:'50%',backgroundColor:'var(--accent-main)'}}></div> Leads</span>
                </div>
              </div>
              <button style={{ padding: '6px 12px', backgroundColor: '#f4f5f5', borderRadius: '12px', fontSize: '12px' }}>2026 ⌄</button>
            </div>
            
            {/* Chart Bars matching aesthetic */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, padding: '0 24px' }}>
              {[80, 50, 65, 0, 85, 45, 55].map((val, i) => (
                <div key={i} style={{ width: '32px', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '4px' }}>
                  {val > 0 ? (
                    <>
                      <div style={{ height: `${val}%`, backgroundColor: '#1a1b1f', borderRadius: '16px', position: 'relative', zIndex: 2 }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%', position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)' }} />
                      </div>
                      <div style={{ height: `${val * 0.6}%`, backgroundColor: 'var(--accent-main)', borderRadius: '16px', position: 'absolute', bottom: 0, width: '100%', zIndex: 1 }}>
                         <div style={{ width: '8px', height: '8px', backgroundColor: '#1a1b1f', borderRadius: '50%', position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)' }} />
                      </div>
                    </>
                  ) : (
                    <div style={{ height: '90%', border: '2px dashed #e0e0e0', borderRadius: '16px', width: '100%' }} />
                  )}
                  <div style={{ textAlign: 'center', fontSize: '10px', color: 'var(--text-muted)', marginTop: '12px' }}>
                    {27 + i} Jun
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Sidebar grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '16px', alignContent: 'start' }}>
          {[
            { title: 'Community', icon: '💬' },
            { title: 'Academy', icon: '🎓' },
            { title: 'Help Center', desc: 'Explore our detailed documentation...', icon: '❓' },
            { title: 'API Docs', desc: 'Integrate scraping natively into your stack.', icon: '🧑‍💻' },
            { title: 'Use Cases', desc: 'Get inspired by all the ways you can...', icon: '📊' }
          ].map((item, i) => (
            <div key={i} className="card" style={{ 
              gridColumn: i < 2 ? 'span 1' : 'span 2', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: i < 2 ? '16px' : '8px',
              padding: '20px',
              cursor: 'pointer'
            }}>
              <div style={{ display: 'flex', justifyContent: i < 2 ? 'center' : 'space-between', alignItems: 'center' }}>
                <div style={{ 
                  width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f4f5f5', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' 
                }}>
                  {item.icon}
                </div>
                {i >= 2 && <span style={{ color: 'var(--text-muted)' }}>↗</span>}
              </div>
              <div style={{ textAlign: i < 2 ? 'center' : 'left' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>{item.title}</h4>
                {item.desc && <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
