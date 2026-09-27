# TASKFLOW - Görev ve Proje Yönetim Sistemi API

## Proje Hakkında

TASKFLOW, bir ekip içerisindeki görevlerin oluşturulması, listelenmesi,
güncellenmesi ve silinmesini sağlayan REST API tabanlı bir görev yönetim
sistemidir.

Proje Node.js ve Express.js kullanılarak geliştirilmiştir.

## Kullanılan Teknolojiler

- Node.js
- Express.js
- REST API
- JSON
- Postman

## Proje Yapısı

```text
backend proje
│
├── controllers
│   └── taskcontroller.js
│
├── data
│   └── tasks.json
│
├── middleware
│   └── logger.js
│
├── routes
│   └── taskroutes.js
│
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Kurulum

Projeyi bilgisayara indirdikten sonra proje klasöründe terminali açın.

Gerekli paketleri yüklemek için:

```bash
npm install
```

## Server'ı Çalıştırma

Server'ı başlatmak için:

```bash
node server.js
```

Server başarılı şekilde çalıştığında:

```text
Server 3000 portunda çalışıyor
```

mesajı görüntülenir.

API adresi:

```text
http://localhost:3000
```

## API Endpointleri

### Görevleri Listeleme

```text
GET /tasks
```

### Görev Detayı

```text
GET /tasks/:id
```

### Yeni Görev Ekleme

```text
POST /tasks
```

Örnek:

```json
{
    "title": "Backend projesini tamamla",
    "description": "TASKFLOW API geliştir",
    "priority": "high",
    "assignee": "Sude"
}
```

### Görev Güncelleme

```text
PUT /tasks/:id
```

### Görev Silme

```text
DELETE /tasks/:id
```

## Logger Middleware

Projede API isteklerini takip etmek amacıyla logger middleware kullanılmıştır.

Logger;

- HTTP methodunu
- İstek adresini
- İstek zamanını

terminalde gösterir.

Örnek:

```text
GET /tasks - 27.09.2026 14:17:25
```

## Test

API endpointleri Postman kullanılarak test edilmiştir.

Test edilen CRUD işlemleri:

- Görev ekleme
- Görev listeleme
- Görev detayı görüntüleme
- Görev güncelleme
- Görev silme
