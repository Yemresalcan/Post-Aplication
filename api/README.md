# POS Sistemi API

Bu dizin, POS (Point of Sale) sisteminin backend API'sini içerir. Node.js, Express ve MongoDB kullanılarak geliştirilmiştir.

## Özellikler

- Kullanıcı kimlik doğrulama ve yetkilendirme
- Ürün yönetimi
- Kategori yönetimi
- Fatura/Sipariş işlemleri
- Müşteri yönetimi
- RESTful API tasarımı

## Kurulum

1. Gerekli paketleri yükleyin:
```bash
npm install
```

2. .env dosyası oluşturun:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Geliştirme

Geliştirme modunda API'yi çalıştırmak için:
```bash
npm start
```

## API Rotaları

| Metot | Yol | Açıklama |
|-------|-----|----------|
| POST | /api/auth/register | Yeni kullanıcı kaydı |
| POST | /api/auth/login | Kullanıcı girişi |
| GET | /api/categories | Tüm kategorileri getir |
| POST | /api/categories | Yeni kategori ekle |
| GET | /api/products | Tüm ürünleri getir |
| POST | /api/products | Yeni ürün ekle |
| GET | /api/bills | Tüm faturaları getir |
| POST | /api/bills | Yeni fatura oluştur |
| GET | /api/users | Tüm kullanıcıları getir |

## Teknolojiler

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt (şifreleme)
- dotenv (çevre değişkenleri)
- CORS

---

# 🇬🇧 POS System API

This directory contains the backend API for the POS (Point of Sale) system. It's developed using Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- Product management
- Category management
- Invoice/Order processing
- Customer management
- RESTful API design

## Installation

1. Install required packages:
```bash
npm install
```

2. Create .env file:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Development

To run the API in development mode:
```bash
npm start
```

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | User login |
| GET | /api/categories | Get all categories |
| POST | /api/categories | Add new category |
| GET | /api/products | Get all products |
| POST | /api/products | Add new product |
| GET | /api/bills | Get all bills |
| POST | /api/bills | Create new bill |
| GET | /api/users | Get all users |

## Technologies

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt (encryption)
- dotenv (environment variables)
- CORS 