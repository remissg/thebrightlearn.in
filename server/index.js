const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Only initialize Supabase if credentials are provided
let supabase;
if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
} else {
    console.warn('Supabase credentials not found. Database features will be disabled.');
}

// Routes
app.get('/', (req, res) => {
    res.send('BrightLearn server is running');
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    if (!supabase) {
        // Mock success if no DB
        console.log('Contact form submitted (Mock):', { name, email, phone, message });
        return res.status(200).json({ message: 'Message received (Mock)' });
    }

    try {
        const { data, error } = await supabase
            .from('leads')
            .insert([{ name, email, phone, message }]);

        if (error) throw error;

        res.status(200).json({ message: 'Message sent successfully', data });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
