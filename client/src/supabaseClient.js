import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://lpclurxlyrriqctyziyo.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwY2x1cnhseXJyaXFjdHl6aXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3MzA3ODEsImV4cCI6MjA4NDMwNjc4MX0.m6DNOlPzRXcFCh7skawWqKvi_7XjyZH896znzaUNByk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
