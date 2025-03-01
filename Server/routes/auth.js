const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const router = express.Router();

// تسجيل مستخدم جديد
router.post('/signup', async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const user = await User.create({ username, email, password, role });
    res.status(201).json({ message: 'تم إنشاء المستخدم بنجاح', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// تسجيل الدخول
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: 'المستخدم غير موجود' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'كلمة المرور غير صحيحة' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // تخزين التوكن في كوكي
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000,
      sameSite: 'strict',
    });

    res.json({ message: 'تم تسجيل الدخول بنجاح' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// تسجيل الخروج
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'تم تسجيل الخروج بنجاح' });
});

module.exports = router;