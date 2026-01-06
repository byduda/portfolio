document.addEventListener("mousemove", function(e) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = e.pageX + "px";
  star.style.top = e.pageY + "px";
  star.innerText = " ݁˖⁺";
  star.style.fontSize = Math.random() * 10 + 10 + "px";
  star.style.transform = `rotate(${Math.random() * 360}deg)`;
  const cores = ["#ffffff", "#000000", "#d3d3d3", "#4f4f4f"];
  star.style.color = cores[Math.floor(Math.random() * cores.length)];

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1000);
});