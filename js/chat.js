function checkEmail() {
    const message = document.getElementById("bms_send_message");
    const button = document.getElementById("bms_send_btn");
    if(message.value && message.value.length) {
      // 入力欄が空👉disabled解除
      button.disabled = false;
    } else {
      // 入力されている👉disabledを付与
      button.disabled = true;
    }
}