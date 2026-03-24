export const downloadLeadsAsCSV = (jobName: string, leadsCount: number, realLeads: any[] = []) => {
  try {
    console.log("Starting CSV export for job:", jobName, "leads:", leadsCount, "realLeads count:", realLeads.length);
    if (realLeads.length > 0) {
      const headers = "First Name,Last Name,Email,Verification,Job Title,Company,Location,LinkedIn,Website,Personalization\n";
      let rows = "";
      
      realLeads.forEach(lead => {
        const leadObj = lead || {};
        const fName = String(leadObj.first_name || leadObj.firstName || leadObj.name || "").replace(/"/g, '""');
        const lName = String(leadObj.last_name || leadObj.lastName || "").replace(/"/g, '""');
        const email = String(leadObj.contact_email || leadObj.email || "").replace(/"/g, '""');
        
        // Premium fields pulled directly from Apify
        const jobTitle = String(leadObj.contact_job_title || leadObj.jobTitle || "").replace(/"/g, '""');
        const company = String(leadObj.company_name || leadObj.company || "").replace(/"/g, '""');
        const location = String(leadObj.location_city || leadObj.location || leadObj.city || "").replace(/"/g, '""');
        const linkedIn = String(leadObj.contact_linkedin || leadObj.linkedin || "").replace(/"/g, '""');
        const site = String(leadObj.company_domain || leadObj.website || leadObj.url || "").replace(/"/g, '""');
        
        const personal = leadObj.personalization ? String(leadObj.personalization).replace(/"/g, '""') : "Hope your company is doing great!";
        
        rows += `"${fName}","${lName}","${email}","Verified","${jobTitle}","${company}","${location}","${linkedIn}","${site}","${personal}"\n`;
      });
      
      const csvContent = headers + rows;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const safeJobName = (jobName || "Scrape_Export").toString().replace(/[^a-zA-Z0-9_-]/g, '_');
    
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${safeJobName}_leads.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log("CSV Download triggered successfully.");
    } else {
      console.warn("No real leads to export! CSV generation aborted to prevent empty file.");
      alert("No leads found to download.");
    }
  } catch (err) {
    console.error("Error generating CSV:", err);
    alert("Failed to generate CSV download. Check the console for details.");
  }
};
