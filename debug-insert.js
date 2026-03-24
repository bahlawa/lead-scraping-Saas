import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envFile = fs.readFileSync('.env', 'utf8');
const getEnv = (key) => {
  const match = envFile.match(new RegExp(`${key}=(.+)`));
  return match ? match[1].trim() : null;
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseKey = getEnv('VITE_SUPABASE_ANON_KEY');

console.log("Supabase URL:", supabaseUrl);
// console.log("Supabase Key:", supabaseKey); // Don't log sensitive key but confirm it's found

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testInsert() {
  console.log("Attempting test insert into 'scraping_jobs'...");
  const { data, error } = await supabase
    .from('scraping_jobs')
    .insert([
      { 
        name: "DEBUG TEST JOB",
        leads_count: 55,
        verified_count: 44,
        status: 'Completed'
      }
    ])
    .select()
    .single();

  if (error) {
    console.error("INSERT FAILED!");
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
    console.error("Error Hint:", error.hint);
    console.error("Error Details:", error.details);
  } else {
    console.log("INSERT SUCCESSFUL!");
    console.log("Inserted Data:", data);
  }
}

testInsert();
