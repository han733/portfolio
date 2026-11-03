import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Contact from './models/Contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 1. KUNCI UTAMA PERBAIKAN CORS
// Wajib diletakkan di paling atas sebelum middleware dan rute lainnya
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Mengizinkan request dari frontend Vite
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// 2. Middleware untuk parsing body JSON
app.use(express.json());

// 3. Konfigurasi Transporter Nodemailer (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 4. Koneksi ke Database MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Terhubung ke MongoDB Database'))
  .catch((error) => console.log('❌ Gagal terhubung ke MongoDB:', error.message));

// 5. API Endpoint Kontak (Simpan DB + Kirim Email)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // A. Simpan ke MongoDB Atlas
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // B. Kirim Notifikasi Email ke Gmail kamu
    /*const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📩 Pesan Baru Portofolio dari: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2>Ada pesan baru dari pengunjung website portofolio!</h2>
          <hr />
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email Pengirim:</strong> ${email}</p>
          <p><strong>Pesan:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007ACC;">
            ${message}
          </blockquote>
          <hr />
          <small>Pesan ini dikirim otomatis oleh server backend portofolio kamu.</small>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
*/

    res.status(201).json({ success: true, message: 'Pesan berhasil disimpan dan email terkirim!' });
  } catch (error) {
    console.error('Error saat memproses pesan:', error);
    res.status(500).json({ success: false, message: 'Gagal memproses pesan.' });
  }
});

// Rute tes bawaan
app.get('/', (req, res) => {
  res.send('API Backend Portofolio Berjalan!');
});

// Menjalankan Server
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});