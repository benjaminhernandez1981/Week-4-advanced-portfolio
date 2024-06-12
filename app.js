//service_4jmgxz3
//template_uvtfft2
//982p7mGRS4PRHcotF

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_4jmgxz3",
      "template_uvtfft2",
      event.target,
      "982p7mGRS4PRHcotF"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        " The email service is temporarly unavailable. Please contact me directly on benjamineric2005@gmail.com"
      );
    });
}
let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
