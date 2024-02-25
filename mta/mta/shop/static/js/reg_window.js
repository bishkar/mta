function createModal() {
    // Створюємо модальне вікно
    let modal = $("<div>").css({
      display: "none",
      position: "fixed",
      zIndex: "1",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: "rgba(0,0,0,0.4)"
    });
  
    // Створюємо контент модального вікна
    let modalContent = $("<div>").css({
      backgroundColor: "#fefefe",
      margin: "15% auto",
      padding: "20px",
      border: "1px solid #888",
      width: "80%"
    });
  
    // Створюємо кнопку для закриття модального вікна
    let closeBtn = $("<span>").text("×").css({
      color: "#aaa",
      float: "right",
      fontSize: "28px",
      fontWeight: "bold",
      cursor: "pointer"
    }).click(function() {
      modal.hide();
    });
  
    modalContent.append(closeBtn);
  
    // Додаємо заголовок та форму до модального вікна
    let heading = $("<h2>").text("Реєстрація");
    modalContent.append(heading);
  
    let form = $("<form>").attr("id", "registrationForm");
    modalContent.append(form);
  
    // Додаємо поля для введення та кнопку для реєстрації
    let usernameLabel = $("<label>").text("Нік:");
    form.append(usernameLabel);
  
    let usernameInput = $("<input>").attr({
      type: "text",
      id: "username",
      name: "username",
      required: true
    });
    form.append(usernameInput);
  
    let passwordLabel = $("<label>").text("Пароль:");
    form.append(passwordLabel);
  
    let passwordInput = $("<input>").attr({
      type: "password",
      id: "password",
      name: "password",
      required: true
    });
    form.append(passwordInput);
  
    let registerBtn = $("<button>").attr("type", "button").text("Зареєструватися").click(function() {
      let usernameValue = $("#username").val();
      let passwordValue = $("#password").val();
      console.log("Реєстрація: Нік - " + usernameValue + ", Пароль - " + passwordValue);
      modal.hide();
    });
    form.append(registerBtn);
  
    modal.append(modalContent);
  
    // Додаємо модальне вікно до тіла документа
    $("body").append(modal);
  
    return modal;
  }
  
  // Функція для відкриття модального вікна
  function openModal(modal) {
    modal.show();
  }
  
  // Вішаємо обробник подій на кнопку
  $(document).ready(function() {
    let modal = createModal();
    $("#reg_window").click(function() {
      openModal(modal);
    });
  });



