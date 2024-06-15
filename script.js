document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box-gallery');

  const checkBoxes = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', checkBoxes);
  checkBoxes();
});
