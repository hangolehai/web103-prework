import { createClient } from '@supabase/supabase-js'

const URL = 'https://mbovidkqsyizxbzgmmgd.supabase.co'

const API_KEY = 'sb_publishable_YomiU24BII9cJZZMk8mdIA_9-FUeMBn'

export const supabase = createClient(URL, API_KEY)
