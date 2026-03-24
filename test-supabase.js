import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || ''

console.log('Testing connection to:', supabaseUrl)

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function test() {
  const { data, error } = await supabase.from('scraping_jobs').select('*').limit(1)
  if (error) {
    console.error('Connection error:', error.message)
  } else {
    console.log('Connection successful! Data:', data)
  }
}

test()
