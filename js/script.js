document.addEventListener("DOMContentLoaded", function () {
    const accountInfo = document.getElementById("account-info");
    const cartButton = document.getElementById("cart-button");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    function updateUIForLoggedIn(username) {
        accountInfo.textContent = `Đăng Xuất (${username})`;
        cartButton.style.display = "inline-block";
        accountInfo.onclick = handleLogout;
        addToCartButtons.forEach(button => {
            button.disabled = false;
            button.title = ""; // Xóa thông báo yêu cầu đăng nhập
        });
    }

    function updateUIForLoggedOut() {
        accountInfo.textContent = "Đăng Nhập";
        cartButton.style.display = "none";
        accountInfo.onclick = () => location.href = "login.html";
        addToCartButtons.forEach(button => {
            button.disabled = true;
            button.title = "Vui lòng đăng nhập để thêm vào giỏ hàng!";
        });
    }

    function handleLogout() {
        const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất không?");
        if (confirmLogout) {
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("username");
            alert("Bạn đã đăng xuất thành công!");
            location.reload();
        }
    }

    // Kiểm tra trạng thái đăng nhập
    if (localStorage.getItem("loggedIn") === "true") {
        const username = localStorage.getItem("username");
        updateUIForLoggedIn(username);
    } else {
        updateUIForLoggedOut();
    }

    // Hiệu ứng ẩn/hiện thanh điều hướng khi cuộn
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Lướt xuống: Ẩn thanh điều hướng
            navbar.classList.add("hidden");
        } else {
            // Lướt lên: Hiển thị thanh điều hướng
            navbar.classList.remove("hidden");
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Đặt lại giá trị scrollTop
    });
});