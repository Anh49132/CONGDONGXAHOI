document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("comment-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let username = document.getElementById("username").value.trim();
        let commentText = document.getElementById("comment").value.trim();
        if (commentText === "") {
            alert("Vui lòng nhập nội dung bình luận!");
            return;
        }
        if (username === "") {
            username = "Ẩn danh";
        }
        let commentElement = document.createElement("div");
        commentElement.innerHTML = `<strong>${username}:</strong> <p>${commentText}</p>`;
        document.getElementById("comments").appendChild(commentElement);
        document.getElementById("username").value = "";
        document.getElementById("comment").value = "";
    });
    document.getElementById("volunteer-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("volunteer-name").value;
        let email = document.getElementById("volunteer-email").value;
        document.getElementById("volunteer-message").innerText = `Cảm ơn ${name}! Chúng tôi sẽ liên hệ qua email ${email}.`;
    });
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("contact-message-status").innerText = "Tin nhắn đã được gửi. Chúng tôi sẽ phản hồi sớm!";
    });
});
