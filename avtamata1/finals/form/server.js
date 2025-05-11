const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '.'))); // HTML, CSS, JS файлуудыг root хавтаснаас ачаална

// data.json файлын байршил
const dataFilePath = path.join(__dirname, 'data.json');

// data.json-г унших функц
async function readData() {
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data.json:', error);
        return { users: [] };
    }
}

// data.json-д бичих функц
async function writeData(data) {
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing to data.json:', error);
    }
}

// Шинэ хэрэглэгч нэмэх API
app.post('/api/users', async (req, res) => {
    const newUser = req.body;
    const data = await readData();

    // Хэрэглэгч аль хэдийн бүртгэгдсэн эсэхийг шалгах
    const existingUser = data.users.find(user => user.personalInfo.email === newUser.personalInfo.email);
    if (existingUser) {
        return res.status(400).json({ error: 'Энэ имэйл хаяг аль хэдийн бүртгэгдсэн байна.' });
    }

    data.users.push(newUser);
    await writeData(data);
    res.status(201).json({ message: 'Хэрэглэгч амжилттай нэмэгдлээ.', user: newUser });
});

// Хэрэглэгчийн мэдээллийг засах API
app.put('/api/users/:email', async (req, res) => {
    const email = req.params.email;
    const updatedField = req.body;
    const data = await readData();

    const userIndex = data.users.findIndex(user => user.personalInfo.email === email);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Хэрэглэгч олдсонгүй.' });
    }

    const user = data.users[userIndex];
    const fieldParts = updatedField.field.split('.');
    let current = user;
    for (let i = 0; i < fieldParts.length - 1; i++) {
        current = current[fieldParts[i]];
    }
    current[fieldParts[fieldParts.length - 1]] = updatedField.value;

    await writeData(data);
    res.json({ message: 'Мэдээлэл амжилттай шинэчлэгдлээ.', user: data.users[userIndex] });
});

// Хэрэглэгчийг устгах API
app.delete('/api/users/:email', async (req, res) => {
    const email = req.params.email;
    const data = await readData();

    const userIndex = data.users.findIndex(user => user.personalInfo.email === email);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Хэрэглэгч олдсонгүй.' });
    }

    data.users.splice(userIndex, 1);
    await writeData(data);
    res.json({ message: 'Хэрэглэгч амжилттай устгагдлаа.' });
});

// Бүх хэрэглэгчдийн мэдээллийг авах API
app.get('/api/users', async (req, res) => {
    const data = await readData();
    res.json(data);
});

// Серверийг ажиллуулах
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});