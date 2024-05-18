import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aqtgztppyiopsukmrhhg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxdGd6dHBweWlvcHN1a21yaGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NzkyODAsImV4cCI6MjAyOTM1NTI4MH0.tviLqxCO3Jc4cRknDigdYJFQ9eiUY6GxzfUVspmA-Tc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
