// ✅ Khi người dùng bấm nút → thay đổi nội dung đoạn văn có id="demo"
function thayDoiNoiDung() {
  document.getElementById("demo").innerText = "Bạn vừa bấm nút thành công!";
}

// ✅ Khi form gửi → kiểm tra tên có trống không
function kiemTraForm() {
  const ten = document.getElementById("ten").value.trim(); // Lấy tên và loại bỏ khoảng trắng
  if (ten === "") {
    alert("Bạn chưa nhập tên!"); // Thông báo nếu chưa nhập
    return false; // Ngăn không cho form gửi đi
  }
  document.getElementById("thongbao").innerText = "Chào bạn, " + ten + "!";
  return false; // Luôn ngăn submit thật
}

// ✅ Nút mở/đóng danh sách liên kết mạng xã hội
const buttonsCompoent = document.querySelector('.buttons'); // Khối nút mạng xã hội
const buttonsToggle = document.querySelector('.buttons__toggle'); // Nút mở/tắt

buttonsToggle.addEventListener('click', toggleButtons); // Gán sự kiện click

function toggleButtons() {
  buttonsToggle.classList.toggle('buttons__toggle--active'); // Đổi icon nút
  buttonsCompoent.classList.toggle('buttons--active');       // Mở/ẩn khối nút
  document.activeElement.blur();                             // Bỏ focus
}

// Lưu tên và chào lại lần sau
function luuTen() {
  const ten = document.getElementById("ten").value.trim();
  if (ten !== "") {
    localStorage.setItem("tenNguoiDung", ten);
    document.getElementById("thongbao").innerText = "🌟 Xin chào, " + ten + "!";
  }
}

// Tự động chào khi tải trang nếu đã lưu tên
window.addEventListener("load", function () {
  const ten = localStorage.getItem("tenNguoiDung");
  if (ten) {
    document.getElementById("thongbao").innerText = "👋 Chào mừng trở lại, " + ten + "!";
  }
});

// ✅ Hàm lưu tên người dùng vào trình duyệt (localStorage)
function luuTen() {
  const ten = document.getElementById("ten").value.trim(); // Lấy tên từ ô input, loại bỏ khoảng trắng

  if (ten !== "") {
    localStorage.setItem("tenNguoiDung", ten); // Lưu tên vào localStorage
    document.getElementById("thongbao").innerText = "🌟 Xin chào, " + ten + "!"; // Hiển thị lời chào
  }
}

// ✅ Khi trang vừa tải → kiểm tra nếu đã lưu tên thì tự chào luôn
window.addEventListener("load", function () {
  const ten = localStorage.getItem("tenNguoiDung"); // Lấy tên đã lưu (nếu có)

  if (ten) {
    document.getElementById("thongbao").innerText = "👋 Chào mừng trở lại, " + ten + "!"; // Hiển thị tên
  }
});

// ✅ Hàm bật/tắt chế độ tối bằng cách thêm hoặc gỡ class 'dark' cho body
function chuyenCheDo() {
  document.body.classList.toggle("dark"); // Toggle (bật/tắt) class dark
}

// ✅ Hàm hiển thị lời chào dựa trên thời gian hiện tại
function chaoTheoGio() {
  const gio = new Date().getHours(); // Lấy giờ hiện tại (từ 0 đến 23)
  let chao = "Xin chào";             // Mặc định

  // ✅ Tùy theo giờ mà đổi lời chào cho phù hợp
  if (gio < 12) {
    chao = "☀️ Chào buổi sáng!";
  } else if (gio < 18) {
    chao = "🌤️ Chào buổi chiều!";
  } else {
    chao = "🌙 Chào buổi tối!";
  }

  alert(chao); // Hiển thị lời chào bằng hộp thoại
}
