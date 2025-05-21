document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const message = document.getElementById('message');

  if (!username || !password || !confirmPassword) {
    message.textContent = 'Vui lòng điền đầy đủ thông tin!';
    message.style.color = 'red';
    return;
  }
  if (password !== confirmPassword) {
    message.textContent = 'Mật khẩu xác nhận không khớp!';
    message.style.color = 'red';
    return;
  }
  // Nếu muốn lưu thông tin đăng ký vào LocalStorage (demo), có thể dùng:
  // localStorage.setItem('user', JSON.stringify({username, password}));

  message.style.color = 'green';
  message.textContent = 'Đăng ký thành công!';
  setTimeout(() => {
    // Sau khi đăng ký thành công có thể chuyển hướng sang trang đăng nhập
    // window.location.href = 'login.html';
  }, 1500);
});