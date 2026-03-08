// وظيفة للانتقال بين الشاشات
setTimeout(() => {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('auth-choice-screen').classList.add('active');
}, 3000); // ينتقل بعد 3 ثواني تلقائياً