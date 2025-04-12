# POS Uygulama Sistemi

Bu proje, bir Point of Sale (POS) uygulamasıdır. MERN stack kullanılarak geliştirilmiştir (MongoDB, Express.js, React ve Node.js).

## 📋 Proje Yapısı

Bu proje iki ana kısımdan oluşmaktadır:

1. **API (Backend)**: Node.js ve Express.js ile yazılmış RESTful API
2. **Client (Frontend)**: React.js ile geliştirilmiş kullanıcı arayüzü

Her iki bölümün de ayrı package.json dosyaları ve bağımlılıkları vardır.

## 🚀 Başlangıç

### Ön Koşullar

- Node.js (v14 veya üzeri)
- MongoDB
- npm veya yarn

### Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/[kullanıcı-adınız]/pos-uygulama-sistemi.git
cd pos-uygulama-sistemi
```

2. Her iki bölüm için de bağımlılıkları yükleyin:
```bash
# Backend bağımlılıkları
cd api
npm install

# Frontend bağımlılıkları
cd ../client
npm install
```

3. API için gerekli ortam değişkenlerini ayarlayın. "api" dizininde bir `.env` dosyası oluşturun:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 🏃‍♂️ Çalıştırma

### Geliştirme Ortamında

Backend ve frontend'i ayrı terminallerde çalıştırın:

1. Backend'i çalıştırın:
```bash
cd api
npm start
```

2. Frontend'i çalıştırın:
```bash
cd client
npm start
```

Frontend uygulaması http://localhost:3000 adresinde, backend API ise http://localhost:5000 adresinde çalışacaktır.

### Üretim Ortamında

Uygulamayı üretim ortamında dağıtmak için:

1. Frontend'i derleyin:
```bash
cd client
npm run build
```

2. Backend'i yapılandırın ve başlatın:
```bash
cd ../api
npm start
```

## 🧰 Özellikler

- Kullanıcı kimlik doğrulama ve yetkilendirme
- Ürün ve kategori yönetimi
- Satış işlemleri ve sepet yönetimi
- Fatura oluşturma ve yönetimi
- Müşteri veritabanı
- İstatistik ve raporlama
- Karanlık/Aydınlık tema desteği

## 👨‍💻 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/your-feature-name`)
3. Değişikliklerinizi commit edin (`git commit -am 'Add some feature'`)
4. Branch'inizi push edin (`git push origin feature/your-feature-name`)
5. Pull Request oluşturun

## 📜 Lisans

Bu proje [ISC License](LICENSE) altında lisanslanmıştır.

---

# 🇬🇧 POS Application System

This project is a Point of Sale (POS) application. It was developed using the MERN stack (MongoDB, Express.js, React, and Node.js).

## 📋 Project Structure

This project consists of two main parts:

1. **API (Backend)**: RESTful API written with Node.js and Express.js
2. **Client (Frontend)**: User interface developed with React.js

Both parts have separate package.json files and dependencies.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or above)
- MongoDB
- npm or yarn

### Installation

1. Clone the project:
```bash
git clone https://github.com/[your-username]/pos-application-system.git
cd pos-application-system
```

2. Install dependencies for both parts:
```bash
# Backend dependencies
cd api
npm install

# Frontend dependencies
cd ../client
npm install
```

3. Set up the necessary environment variables for the API. Create a `.env` file in the "api" directory:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 🏃‍♂️ Running

### In Development Environment

Run backend and frontend in separate terminals:

1. Run the backend:
```bash
cd api
npm start
```

2. Run the frontend:
```bash
cd client
npm start
```

The frontend application will run at http://localhost:3000, and the backend API will run at http://localhost:5000.

### In Production Environment

To deploy the application in a production environment:

1. Build the frontend:
```bash
cd client
npm run build
```

2. Configure and start the backend:
```bash
cd ../api
npm start
```

## 🧰 Features

- User authentication and authorization
- Product and category management
- Sales operations and cart management
- Invoice creation and management
- Customer database
- Statistics and reporting
- Dark/Light theme support

## 👨‍💻 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a Pull Request

## 📜 License

This project is licensed under the [ISC License](LICENSE). 