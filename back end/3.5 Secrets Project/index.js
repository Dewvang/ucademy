// To see how the final website should work, run "node solution.js".
// Make sure you have installed all the dependencies with "npm i".
// The password is ILoveProgramming

import express from "express";          // นำเข้า Express เพื่อใช้งานในโปรเจกต์
import bodyParser from "body-parser";   // นำเข้า body-parser เพื่อจัดการข้อมูลที่ส่งมาจาก body ของ request
import { dirname } from "path";        // นำเข้า dirname เพื่อหาตำแหน่งของไฟล์ปัจจุบัน
import { fileURLToPath } from "url";    // นำเข้า fileURLToPath เพื่อแปลง URL เป็น path

// ใช้ dirname และ fileURLToPath เพื่อหาตำแหน่งของไฟล์ปัจจุบัน
const __dirname = dirname(fileURLToPath(import.meta.url));

// สร้างแอพ Express
const app = express();
// กำหนดพอร์ตที่เซิร์ฟเวอร์จะทำงาน
const port = 3000;

// ตัวแปร userIsAuthorised ใช้เพื่อเก็บสถานะว่า user ได้รับอนุญาตหรือไม่
var userIsAuthorised = false;

// ใช้ body-parser เพื่อดึงข้อมูลจาก body ของ POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// ฟังก์ชัน middleware สำหรับตรวจสอบรหัสผ่าน
function passwordCheck(req, res, next) {
    const password = req.body["password"]; // ดึงค่ารหัสผ่านจาก body ของ request

    // เช็คว่ารหัสผ่านที่ส่งมาถูกต้องหรือไม่
    if (password === "ILoveProgramming") {
        userIsAuthorised = true; // ถ้ารหัสผ่านถูกต้องให้เปลี่ยนสถานะเป็น authorized
    }

    // แสดงรหัสผ่านที่ผู้ใช้กรอก (เพื่อการดีบั๊ก)
    console.log(req.body["password"]);

    // เรียกฟังก์ชัน next() เพื่อให้ request ไปยัง middleware หรือ route handler ถัดไป
    next();
}

// ใช้ middleware passwordCheck ทุกครั้งที่มีคำขอเข้ามา
app.use(passwordCheck);

// เริ่มต้นเซิร์ฟเวอร์ที่พอร์ต 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Route ที่จะแสดงหน้าแรก (index.html) เมื่อเข้า URL "/"
app.get("/", (req, res) => {
    // ส่งไฟล์ index.html กลับไปให้ผู้ใช้เมื่อเข้า URL "/"
    res.sendFile(__dirname + "/public/index.html");
});

// Route สำหรับการตรวจสอบรหัสผ่าน (ทำงานเมื่อส่งคำขอ POST ไปที่ "/check")
app.post("/check", (req, res) => {
    // ถ้า user ผ่านการตรวจสอบรหัสผ่าน (userIsAuthorised เป็น true)
    if (userIsAuthorised) {
        // ส่งไฟล์ secret.html ให้กับผู้ใช้ (หากรหัสผ่านถูกต้อง)
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        // หากรหัสผ่านไม่ถูกต้อง ให้กลับไปที่หน้า index.html (หรือใช้ res.redirect("/") แทนก็ได้)
        res.sendFile(__dirname + "/public/index.html");
        // Alternatively res.redirect("/");   // คุณสามารถใช้ res.redirect() ได้
    }
});
