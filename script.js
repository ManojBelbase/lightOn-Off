const startBtn = document.getElementById("startBtn");
    const offBtn = document.getElementById("offBtn");

    startBtn.addEventListener("click", function () {
      const onImg = document.getElementById("img").src = "lightOn.png";
    });

    offBtn.addEventListener("click", function () {
     document.getElementById("img").src = "./lightoff.png";
    });