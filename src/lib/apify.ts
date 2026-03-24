/**
 * Service to interact with Apify API for real lead scraping.
 */
const APIFY_BASE_URL = '/api/apify/v2';

export const runScraperSync = async (token: string, payload: any) => {
  const actorId = 'code_crafter~leads-finder';
  
  // Directly append the synchronous execution flag to skip polling
  const targetUrl = `${APIFY_BASE_URL}/acts/${actorId}/run-sync-get-dataset-items?token=${token}`;
  
  const response = await fetch(targetUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorMsg = errorText;
    try {
      const errorJson = JSON.parse(errorText);
      errorMsg = errorJson.error?.message || errorJson.message || errorText;
    } catch(e) {}
    throw new Error(`Apify Error: ${errorMsg}`);
  }
  
  // `run-sync-get-dataset-items` returns the raw array of dataset items directly
  const items = await response.json();
  
  if (Array.isArray(items) && items.length === 1 && items[0].error) {
    throw new Error(`Apify Actor Blocked: ${items[0].error}`);
  }
  
  return items;
};
