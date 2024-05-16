const delay = 5000;

const startTime = new Date().getTime();

const redirectToSuccess = () => {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;

  if (elapsedTime >= delay) {
    window.location.href = "success.html";
  } else {
    setTimeout(redirectToSuccess, delay - elapsedTime);
  }
};

redirectToSuccess();
