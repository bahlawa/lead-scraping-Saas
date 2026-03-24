"use client";

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const links = [
    { href: "/scrape", label: "Scrape Leads", icon: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" },
    { href: "/orders", label: "Orders", icon: "M4 6h16M4 12h16M4 18h16" },
    { href: "/settings", label: "Configuration", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }
  ];

  return (
    <aside style={{
      width: '240px',
      backgroundColor: '#111111',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      borderRight: '1px solid rgba(255,255,255,0.05)',
      height: '100vh',
      flexShrink: 0
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '48px',
        paddingLeft: '8px'
      }}>
        <img src="/logo-shield-transparent.png" alt="Shield" style={{ width: '45px', height: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: '26px', fontWeight: 'bold', color: '#fff', letterSpacing: '0.5px' }}>LEADSO</span>
      </div>

      {/* Nav Links */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link to={link.href} key={link.href} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: isActive ? '#1e240b' : 'transparent',
              color: isActive ? '#D1FF4D' : '#a1a1aa',
              transition: 'all 0.2s',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '14px'
            }}>
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={link.icon}></path>
               </svg>
               {link.label}
            </Link>
          )
        })}
      </nav>

      {/* Profile Avatar (Optional based on screenshot but good to have) */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#333',
          overflow: 'hidden',
          flexShrink: 0
        }}>
          <img src="https://i.pravatar.cc/100?img=33" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '14px', fontWeight: 500, color: '#fff' }}>John Doe</span>
          <span style={{ fontSize: '12px', color: '#a1a1aa' }}>john@acme.com</span>
        </div>
      </div>
    </aside>
  );
}
