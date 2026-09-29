import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uatjyvlxatliavdsxbnz.supabase.co";
const supabaseKey = "sb_publishable_uBWd0bei1T-ZP5ht8-STPQ_TjmbxQK8";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);