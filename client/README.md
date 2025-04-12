# POS Uygulama Sistemi

Bu proje, bir Point of Sale (POS) uygulamasıdır. MERN stack kullanılarak geliştirilmiştir (MongoDB, Express.js, React ve Node.js).

## 📋 Özellikler

- Kullanıcı kimlik doğrulama (Kayıt olma ve giriş yapma)
- Ürün yönetimi
- Kategori yönetimi
- Sepet işlemleri
- Fatura oluşturma ve yönetimi
- Müşteri yönetimi
- İstatistik görüntüleme
- Karanlık/Aydınlık mod desteği

## 🚀 Başlangıç

### Ön Koşullar

- Node.js
- MongoDB
- npm veya yarn

### Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/[kullanıcı-adınız]/pos-uygulama-sistemi.git
cd pos-uygulama-sistemi
```

2. Client için gerekli paketleri yükleyin:
```bash
cd client
npm install
```

3. API için gerekli paketleri yükleyin:
```bash
cd ../api
npm install
```

4. API için .env dosyası oluşturun ve MongoDB bağlantı URL'nizi ekleyin:
```
MONGO_URI=your_mongodb_connection_string
```

### Çalıştırma

#### Backend
```bash
cd api
npm start
```

#### Frontend
```bash
cd client
npm start
```

Uygulama http://localhost:3000 adresinde çalışacaktır.

## 🧰 Kullanılan Teknolojiler

### Frontend
- React
- Redux Toolkit
- React Router DOM
- Ant Design & Ant Design Charts
- Tailwind CSS
- Font Awesome
- XLSX (Excel dosyaları için)

### Backend
- Express.js
- MongoDB & Mongoose
- bcrypt (şifreleme için)
- dotenv
- CORS

## 🏗️ Proje Yapısı

```
pos-uygulama-sistemi/
├── api/                    # Backend kodları
│   ├── models/             # Mongoose modelleri
│   ├── routes/             # Express rotaları
│   └── server.js           # Ana Express sunucu
│
└── client/                 # Frontend kodları
    ├── public/             # Statik dosyalar
    └── src/                # React kaynak kodu
        ├── components/     # Yeniden kullanılabilir bileşenler
        ├── pages/          # Sayfa bileşenleri
        └── redux/          # Redux durum yönetimi
```

## 📜 Lisans

Bu proje [ISC License](LICENSE) altında lisanslanmıştır.

---

# 🇬🇧 POS Application System

This project is a Point of Sale (POS) application. It was developed using the MERN stack (MongoDB, Express.js, React, and Node.js).

## 📋 Features

- User authentication (Registration and Login)
- Product management
- Category management
- Cart operations
- Invoice creation and management
- Customer management
- Statistics display
- Dark/Light mode support

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the project:
```bash
git clone https://github.com/[your-username]/pos-application-system.git
cd pos-application-system
```

2. Install packages for Client:
```bash
cd client
npm install
```

3. Install packages for API:
```bash
cd ../api
npm install
```

4. Create a .env file for the API and add your MongoDB connection URL:
```
MONGO_URI=your_mongodb_connection_string
```

### Running

#### Backend
```bash
cd api
npm start
```

#### Frontend
```bash
cd client
npm start
```

The application will run at http://localhost:3000.

## 🧰 Technologies Used

### Frontend
- React
- Redux Toolkit
- React Router DOM
- Ant Design & Ant Design Charts
- Tailwind CSS
- Font Awesome
- XLSX (for Excel files)

### Backend
- Express.js
- MongoDB & Mongoose
- bcrypt (for encryption)
- dotenv
- CORS

## 🏗️ Project Structure

```
pos-application-system/
├── api/                    # Backend code
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   └── server.js           # Main Express server
│
└── client/                 # Frontend code
    ├── public/             # Static files
    └── src/                # React source code
        ├── components/     # Reusable components
        ├── pages/          # Page components
        └── redux/          # Redux state management
```

## 📜 License

This project is licensed under the [ISC License](LICENSE).


