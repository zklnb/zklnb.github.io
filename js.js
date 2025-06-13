// Thay đổi nội dung đoạn văn khi bấm nút
function thayDoiNoiDung() {
  document.getElementById("demo").innerText = "Bạn vừa bấm nút thành công!";
}

// Kiểm tra form khi gửi
function kiemTraForm() {
  const ten = document.getElementById("ten").value.trim();
  if (ten === "") {
    alert("Bạn chưa nhập tên!");
    return false;
  }
  document.getElementById("thongbao").innerText = "Chào bạn, " + ten + "!";
  return false; // không gửi form thật
}