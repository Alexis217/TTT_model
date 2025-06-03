document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const resetBtn = document.getElementById("restart");
  let game = Array(9).fill(0);
  let model;

  async function loadModel() {
    model = await tf.loadLayersModel("model/ttt_model.json");
  }

  function playMove(index, player) {
    if (game[index] === 0) {
      game[index] = player;
      cells[index].textContent = player === 1 ? "X" : "O";
      cells[index].classList.add(player === 1 ? "x" : "o");
    }
    checkWinner();
  }

  function aiMove() {
    const inputTensor = tf.tensor([game]);
    const prediction = model.predict(inputTensor).argMax(1).dataSync()[0];
    playMove(prediction, -1);
  }

  function checkWinner() {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    wins.forEach((combo) => {
      const [a, b, c] = combo;
      if (game[a] !== 0 && game[a] === game[b] && game[a] === game[c]) {
        alert(`Ganador: ${game[a] === 1 ? "X" : "O"}`);
        resetGame();
      }
    });
  }

  function resetGame() {
    game.fill(0);
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("x", "o");
    });
  }

  resetBtn.addEventListener("click", resetGame);
  cells.forEach((cell, i) => {
    cell.addEventListener("click", () => {
      if (game[i] === 0) {
        playMove(i, 1);
        setTimeout(aiMove, 500);
      }
    });
  });

  loadModel();
});
