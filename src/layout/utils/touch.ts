const touch  = (htmlElement: HTMLDivElement) => {
  let isDragging = false;
  let startX = 0;
  let currentX = 0;

  htmlElement?.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    currentX = startX;
  });

  htmlElement?.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - currentX;
    currentX = touch.clientX;

    // Mover a div mãe de acordo com o deslocamento horizontal
    htmlElement.scrollLeft -= deltaX;
  });

  htmlElement?.addEventListener("touchend", () => {
    isDragging = false;
  });

  htmlElement?.addEventListener("touchcancel", () => {
    isDragging = false;
  });
};

export { touch };
