"use client";

import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  
  // State for API Integrations
  const [settings, setSettings] = useState({
    apifyToken: import.meta.env.VITE_APIFY_API_KEY || "",
    anthropicKey: import.meta.env.VITE_ANTHROPIC_API_KEY || "",
    openaiKey: import.meta.env.VITE_OPENAI_API_KEY || "",
    systemPrompt: "You are a helpful, intelligent writing assistant.",
    userFormatting: `Your task is to take, as input, a bunch of information about a prospect and then generate a customized, one-line email icebreaker to imply that the rest of my communique is personalized.
You'll return your icebreakers in the following JSON format:
{"verdict": true or false, "string": "Hey {firstName}, {icebreaker}"}
You'll also work in {the/prospective/industry}. Wanted to run something by you," shortenedCompanyName + "The human tech agency"
It will also work as a company. If this is the case, return a "false" string for "verdict".
Rules:

Write in a spartan/laconic tone of voice.
Make sure to use the above rules when constructing your icebreakers.
Also note, the data provided will not be of a person. Instead, it will be of a company. If this is the case, return a "false" string for "verdict".
Shorten the company name wherever possible (e.g. "XYZ" instead of "XYZ Agency"). More examples: "Love AMS" instead of "Love AMS Trofomation (Australia)". "Love Mayo" instead of "Love Mayo Inc.", etc.
Do the same with locations: "San Fran" instead of "San Francisco", "BC" instead of "British Columbia", etc.

Input: {{firstName}}, {{lastName}}, {{headline}}, {{industry}}, {{company}}`
  });

  // Load from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("leadso_workspace_settings");
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error("Failed to parse saved settings", e);
      }
    }
  }, []);

  const handleSave = () => {
    setSaving(true);
    localStorage.setItem("leadso_workspace_settings", JSON.stringify(settings));
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      setSaving(false);
      alert("Changes saved successfully!");
    }, 600);
  };

  const handleChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <main style={{ padding: '40px', maxWidth: '1200px', width: '100%', margin: '0' }}>
      
      {/* HEADER SECTION */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '32px' 
      }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '600', color: '#fff', marginBottom: '8px' }}>
            Workspace Settings
          </h1>
          <p style={{ color: '#a1a1aa', fontSize: '14px' }}>
            Manage your API integrations and personalization rules.
          </p>
        </div>
        <button onClick={handleSave} disabled={saving} style={{
          backgroundColor: '#D1FF4D', color: '#000',
          padding: '10px 24px', borderRadius: '8px', fontWeight: '600', fontSize: '14px',
          display: 'flex', alignItems: 'center', gap: '8px', border: 'none', 
          cursor: saving ? 'not-allowed' : 'pointer',
          opacity: saving ? 0.7 : 1, transition: 'all 0.2s'
        }}>
          {saving ? (
            "Saving..."
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
              Save Changes
            </>
          )}
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* API INTEGRATIONS COLUMN */}
        <div style={{ 
          backgroundColor: '#111111', 
          border: '1px solid rgba(255,255,255,0.05)', 
          borderRadius: '16px', 
          padding: '24px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>API Integrations</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { id: "apifyToken", label: "Apify API Token", placeholder: "apify_api_...", desc: "Required for scraping" },
              { id: "anthropicKey", label: "Anthropic API Key", placeholder: "sk-ant-...", desc: "Primary model for personalization" },
              { id: "openaiKey", label: "OpenAI API Key", placeholder: "sk-...", desc: "Fallback model if Anthropic fails" },
            ].map(item => (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#e4e4e7' }}>{item.label}</label>
                  <span style={{ fontSize: '12px', color: '#71717a' }}>{item.desc}</span>
                </div>
                <input 
                  type="password" 
                  autoComplete="off"
                  value={settings[item.id as keyof typeof settings]}
                  onChange={(e) => handleChange(item.id, e.target.value)}
                  placeholder={item.placeholder} 
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '8px', 
                    border: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#18181b', color: '#fff', outline: 'none',
                    fontSize: '14px', fontFamily: 'monospace'
                  }} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* PROMPT ENGINEERING COLUMN */}
        <div style={{ 
          backgroundColor: '#111111', 
          border: '1px solid rgba(255,255,255,0.05)', 
          borderRadius: '16px', 
          padding: '24px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D1FF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>Prompt Engineering</h2>
          </div>
          <p style={{ color: '#a1a1aa', fontSize: '13px', marginBottom: '24px', lineHeight: '1.5' }}>
            Define the rules Leadso should follow when generating the <code style={{ color: '#D1FF4D', background: '#1e240b', padding: '2px 6px', borderRadius: '4px' }}>{"{{personalization}}"}</code> column for each lead.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: '500', color: '#e4e4e7' }}>System Prompt</label>
              <textarea 
                rows={2} 
                value={settings.systemPrompt}
                onChange={(e) => handleChange("systemPrompt", e.target.value)}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '8px', resize: 'vertical',
                  border: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#18181b', color: '#fff', outline: 'none',
                  fontSize: '14px', lineHeight: '1.5'
                }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: '500', color: '#e4e4e7' }}>User Formatting Instruction</label>
              <textarea 
                rows={16} 
                value={settings.userFormatting}
                onChange={(e) => handleChange("userFormatting", e.target.value)}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '8px', resize: 'vertical',
                  border: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#18181b', color: '#fff', outline: 'none',
                  fontSize: '14px', lineHeight: '1.5'
                }} 
              />
            </div>

            <div style={{ 
              backgroundColor: '#1e240b', 
              border: '1px solid #2d3810', 
              borderRadius: '8px', 
              padding: '16px' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1FF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#D1FF4D' }}>Available Variables</span>
              </div>
              <p style={{ color: '#a1a1aa', fontSize: '13px', fontFamily: 'monospace' }}>
                {"{{firstName}}, {{lastName}}, {{headline}}, {{industry}}, {{company}}"}
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
