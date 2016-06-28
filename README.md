# D'Coups

D'Coups adalah sebuah aplikasi berbabasi website yang digunakan untuk mendapatkan kupon promosi dari setiap cafe atau restoran yang terdaftar. Untuk menggunakan aplikasi ini pengguna cukup melakukan scan terhadap QR-Code yang tersedia melalui mobile app nantinya. 

> versi mobile app masih dalam tahap pengembangan

### Package Requierments

Paket atau modul yang diperlukan agar aplikasi dapat berjalan dengan baik:

* **Express JS**
* **nunjucks**
* **bcrypt-nodejs**
* **qr-image**
* **mongoose**
* **morgan**
* **passport**
* **passport-local**
* **connect-flash**
* **cookie-parser**
* **express-session**

dan demo aplikasi ini dapat dilihat melauli [link](https://sleepy-falls-26610.herokuapp.com/) berikut.

### Installation

D'Coups menggunakan [Node.js](https://nodejs.org/) v4+

untuk menjalankan aplikasi, buka CLI dan jalankan perintah berikut:

```sh
$ git clone [git-repo-url] dcoups
$ cd dcoups
$ node index.js
```

untuk mengakses halaman admin kita dapat menuju url
> [base_url]/admin

maka akan dialihkan kehalaman login. Setelah itu login dengan akun berikut:

```sh
Username: pizzahut@gmail.com
Password: 12345p
```

**url repositori** - https://github.com/Uno95/web-project.git
### API

Aplikasi ini dibangun menggunakan API berikut

* **Google Map** - Untuk menampilkan letak cafe/restoran yang dicari
* **Mlab API** - Untuk mengambil data-data yang telah di store
