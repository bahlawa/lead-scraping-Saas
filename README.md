# Lead Scraping SaaS Application

A modern web application for scraping leads from Google Maps and personalizing outreach using AI.

## Features

- Scrape business leads from Google Maps using Apify
- AI-powered personalization with Anthropic Claude
- Export leads to CSV format
- Integration with Supabase for data storage

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Copy the `.env.example` file to `.env` and fill in your API keys:
   ```
   VITE_ANTHROPIC_API_KEY=your_anthropic_api_key
   ANTHROPIC_API_KEY=your_anthropic_api_key
   VITE_APIFY_API_KEY=your_apify_api_key
   APIFY_API_KEY=your_apify_api_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Architecture

- Frontend: React + TypeScript + Vite
- Backend: Server-side API routes
- Database: Supabase
- Lead Scraping: Apify Google Maps Scraper
- AI Personalization: Anthropic Claude API

## Troubleshooting

### "Error: Failed to fetch"

This error typically occurs due to one of the following reasons:

1. **Invalid API Keys**: Check that your Apify and Anthropic API keys are valid and correctly configured in the `.env` file.

2. **CORS Issues**: Direct client-side requests to external APIs may be blocked by CORS policies. This implementation routes all API calls through the backend to avoid CORS issues.

3. **Network Connectivity**: Ensure you have internet connectivity and can reach the Apify and Anthropic APIs.

4. **Rate Limiting**: You may be hitting API rate limits. Check the API provider's documentation for limits.

### Fixing the "Failed to fetch" Error

The application has been updated to resolve this issue by:

1. Moving all external API calls to the backend (`/api/scrape`)
2. Using server-side environment variables without the `VITE_` prefix for backend access
3. Proper error handling with descriptive error messages
4. Implementing retries and timeouts for robust API communication

If you continue to experience issues:
1. Verify your API keys are correct and active
2. Check the browser console and server logs for detailed error messages
3. Ensure your firewall or proxy isn't blocking the requests