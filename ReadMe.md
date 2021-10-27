start with ```npm init```

app.get/post(route,middleware,function)

ตัวอย่าง
```
app.get("/", function (req, res) {
  res.send("hello world");
});

app.post("/", function (req, res) {
  // res.send("hello world");
  res.status(200).send({ massage: "you get 200" });

});
```

* send อันเดียวจะจบเลยเหมือน return
* การใช้ get จะไม่ encode ข้อมูลให้สามารถอ่านได้เราจึงไม่นิยมส่ง body ไปด้วย
* ถ้าจะส่ง body จะใช้ push ถึงจะมีการ encode

### middleware ###

- ใช้ตรวจสอบ auth
- แก้ไข req ก่อนเข้าไปทำอื่นๆต่อ
- ทำอะไรบางอย่างก่อนที่จะไปทำอื่นๆต่อ

### เรื่องที่ต้องไปดูเพิ่มเติม ###
- express.Router
- [nodeJS http request](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html)
- [get IP when recieve request](https://codeforgeek.com/how-to-get-users-ip-details-in-express/)

