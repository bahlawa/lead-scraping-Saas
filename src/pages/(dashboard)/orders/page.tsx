"use client";

import { useState, useEffect } from "react";
import { supabase } from '../../../lib/supabase';
import { downloadLeadsAsCSV } from '../../../lib/export';

export default function OrdersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: supabaseError } = await supabase
        .from('scraping_jobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (supabaseError) throw supabaseError;
      setJobs(data || []);
    } catch (err: any) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to connect to the database. Please ensure your Supabase tables and policies are correctly configured.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const activeJob = jobs.find(j => j.id === selectedJob);

  const handleDownload = (e: React.MouseEvent, fileName: string, leadsCount: number) => {
    e.stopPropagation();
    downloadLeadsAsCSV(fileName, leadsCount);
  };

  const handleExternalLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert("Opening job details in external view...");
  };

  const handleMoreActions = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert("Opening more actions menu...");
  };

  return (
    <main style={{ padding: '40px', maxWidth: '1200px', width: '100%', margin: '0', position: 'relative' }}>
      
      {/* HEADER SECTION */}
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '600', color: '#fff', marginBottom: '8px' }}>
          Order History
        </h1>
        <p style={{ color: '#a1a1aa', fontSize: '14px' }}>
          View past scrapes, enriched lists, and download your CSVs.
        </p>
      </header>

      {/* TABLE SECTION */}
      <div style={{ 
        backgroundColor: '#111111', 
        border: '1px solid rgba(255,255,255,0.05)', 
        borderRadius: '16px', 
        overflow: 'hidden',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#71717a' }}>Loading order history...</div>
        ) : error ? (
          <div style={{ padding: '60px', textAlign: 'center' }}>
            <p style={{ color: '#ef4444', fontSize: '14px', marginBottom: '16px' }}>{error}</p>
            <button onClick={fetchJobs} style={{ backgroundColor: '#18181b', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>Try Again</button>
          </div>
        ) : jobs.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#71717a' }}>
            <p style={{ marginBottom: '16px' }}>No orders found. Run a new scrape to get started.</p>
            <button onClick={fetchJobs} style={{ backgroundColor: '#18181b', color: '#71717a', border: '1px solid rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>Refresh</button>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#71717a' }}>
                <th style={{ padding: '16px 24px', fontWeight: '500', fontSize: '12px', letterSpacing: '0.5px' }}>JOB ID</th>
                <th style={{ padding: '16px 24px', fontWeight: '500', fontSize: '12px', letterSpacing: '0.5px' }}>SEARCH NAME</th>
                <th style={{ padding: '16px 24px', fontWeight: '500', fontSize: '12px', letterSpacing: '0.5px' }}>DATE</th>
                <th style={{ padding: '16px 24px', fontWeight: '500', fontSize: '12px', letterSpacing: '0.5px' }}>TOTAL LEADS</th>
                <th style={{ padding: '16px 24px', fontWeight: '500', fontSize: '12px', letterSpacing: '0.5px' }}>VERIFIED EMAILS</th>
                <th style={{ padding: '16px 24px', fontWeight: '500', fontSize: '12px', letterSpacing: '0.5px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', fontWeight: '500', fontSize: '12px', letterSpacing: '0.5px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr 
                  key={job.id} 
                  onClick={() => setSelectedJob(job.id)}
                  style={{ 
                    borderBottom: '1px solid rgba(255,255,255,0.02)', 
                    transition: 'background 0.2s', 
                    cursor: 'pointer',
                    backgroundColor: selectedJob === job.id ? 'rgba(255,255,255,0.03)' : 'transparent'
                  }}
                >
                  <td style={{ padding: '20px 24px', fontSize: '13px', color: '#71717a', fontFamily: 'monospace' }}>{job.id.slice(0, 8).toUpperCase()}</td>
                  <td style={{ padding: '20px 24px', fontSize: '14px', color: '#fff', fontWeight: '500' }}>{job.name}</td>
                  
                  <td style={{ padding: '20px 24px', fontSize: '14px', color: '#a1a1aa' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      {new Date(job.created_at).toLocaleDateString()}
                    </div>
                  </td>
                  
                  <td style={{ padding: '20px 24px', fontSize: '14px', color: '#e4e4e7' }}>{job.leads_count}</td>
                  
                  <td style={{ padding: '20px 24px', fontSize: '14px', color: '#D1FF4D', fontWeight: '500' }}>
                    {job.verified_count} ({( (job.verified_count / (job.leads_count || 1)) * 100).toFixed(0)}%)
                  </td>
                  
                  <td style={{ padding: '20px 24px' }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '4px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: '500',
                      border: '1px solid #2d3810', color: '#D1FF4D', backgroundColor: '#1e240b'
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D1FF4D' }}></div>
                      {job.status}
                    </div>
                  </td>
                  
                  <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '16px', color: '#71717a' }}>
                       <svg onClick={(e) => handleDownload(e, job.name, job.leads_count)} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#71717a'}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                       <svg onClick={(e) => handleExternalLink(e)} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#71717a'}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                       <svg onClick={(e) => handleMoreActions(e)} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#71717a'}><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* JOB DETAILS SIDEBAR / PANEL */}
      {selectedJob && activeJob && (
        <>
          <div 
            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 40 }} 
            onClick={() => setSelectedJob(null)}
          ></div>
          <div style={{
            position: 'fixed', right: 0, top: 0, bottom: 0, width: '400px',
            backgroundColor: '#111111', borderLeft: '1px solid rgba(255,255,255,0.05)',
            zIndex: 50, padding: '32px 24px', display: 'flex', flexDirection: 'column',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
            transform: selectedJob ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#fff' }}>Job Details</h2>
              <button 
                onClick={() => setSelectedJob(null)}
                style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
              <div>
                <p style={{ fontSize: '12px', color: '#71717a', marginBottom: '4px' }}>Search Query</p>
                <p style={{ fontSize: '15px', color: '#fff', fontWeight: '500' }}>{activeJob.name}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ backgroundColor: '#18181b', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ fontSize: '12px', color: '#71717a', marginBottom: '4px' }}>Job ID</p>
                  <p style={{ fontSize: '14px', color: '#e4e4e7', fontFamily: 'monospace' }}>{activeJob.id.slice(0, 8).toUpperCase()}</p>
                </div>
                <div style={{ backgroundColor: '#18181b', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ fontSize: '12px', color: '#71717a', marginBottom: '4px' }}>Date</p>
                  <p style={{ fontSize: '14px', color: '#e4e4e7' }}>{new Date(activeJob.created_at).toLocaleDateString()}</p>
                </div>
                <div style={{ backgroundColor: '#18181b', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ fontSize: '12px', color: '#71717a', marginBottom: '4px' }}>Extracted</p>
                  <p style={{ fontSize: '18px', color: '#fff', fontWeight: '600' }}>{activeJob.leads_count}</p>
                </div>
                <div style={{ backgroundColor: '#18181b', padding: '16px', borderRadius: '12px', border: '1px solid #2d3810' }}>
                  <p style={{ fontSize: '12px', color: '#71717a', marginBottom: '4px' }}>Verified Emails</p>
                  <p style={{ fontSize: '18px', color: '#D1FF4D', fontWeight: '600' }}>{activeJob.verified_count}</p>
                </div>
              </div>

              <div>
                <p style={{ fontSize: '12px', color: '#71717a', marginBottom: '8px' }}>Active Filters (Generated by AI)</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Industry: SaaS', 'Seniority: VP', 'Geo: US'].map(filter => (
                    <span key={filter} style={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      padding: '4px 10px', 
                      borderRadius: '6px', 
                      fontSize: '12px', 
                      color: '#e4e4e7'
                    }}>
                      {filter}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={(e) => handleDownload(e, activeJob.name, activeJob.leads_count)}
              style={{
                width: '100%', padding: '14px', borderRadius: '8px', 
                backgroundColor: '#D1FF4D', color: '#000', 
                fontWeight: '600', fontSize: '14px', border: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
                marginTop: 'auto'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Verified Results CSV
            </button>
          </div>
        </>
      )}

    </main>
  );
}
