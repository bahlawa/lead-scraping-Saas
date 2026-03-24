export default function ConfigPage() {
  return (
    <>
      <div className="config-header-row">
        <div className="config-header">
          <h1>Workspace Settings</h1>
          <p>Manage your API integrations and personalization rules.</p>
        </div>
        <button className="btn-save">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          Save Changes
        </button>
      </div>

      <div className="config-grid">
        <div className="config-card">
          <div className="config-card-header green-svg">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/><path d="M12 3v9"/><path d="M12 12l4-4"/><path d="M12 12l-4-4"/></svg>
            API Integrations
          </div>
          
          <div className="config-form-group">
            <label>Apify API Token (Required for scraping)</label>
            <input type="password" placeholder="•••••••••••••••••••••" className="config-input" />
          </div>

          <div className="config-form-group">
            <label>Anthropic API Key (Claude 3.5 Sonnet)</label>
            <input type="password" placeholder="•••••••••••••••••••••" className="config-input" />
          </div>

          <div className="config-form-group">
            <label>OpenAI API Key (Fallback fallback)</label>
            <input type="password" placeholder="sk-..." className="config-input" />
          </div>

          <div className="config-form-group" style={{ marginBottom: 0 }}>
            <label>Instantly API Key (For 1-click campaigns)</label>
            <input type="password" placeholder="sk-..." className="config-input" />
          </div>
        </div>

        <div className="config-card">
          <div className="config-card-header green-svg">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            Prompt Engineering
          </div>

          <p className="config-info-text">
            Define the rules Leadso should follow when generating the <code>{"{{personalization}}"}</code> column for each lead.
          </p>

          <div className="config-form-group">
            <label>System Prompt</label>
            <textarea className="config-textarea" defaultValue="You are an expert sales SDR. Your job is to create a highly relevant 1-2 sentence icebreaker for cold email outreach using the lead's LinkedIn bio and company description." />
          </div>

          <div className="config-form-group" style={{ marginBottom: 0 }}>
            <label>User Formatting Instruction</label>
            <textarea className="config-textarea" defaultValue="Keep it under 25 words. Do not use generic praise. Focus on a specific business challenge their role ({{title}}) faces at {{company}}." />
          </div>

          <div className="config-variables-box">
            <div className="config-variables-header">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Available Variables
            </div>
            <div className="config-variables-list">
              {"{{firstName}}"}, {"{{lastName}}"}, {"{{company}}"}, {"{{title}}"}, {"{{industry}}"}, {"{{city}}"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
