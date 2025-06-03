# 🎮 Tres en Raya con IA 🤖

Un juego clásico de Tres en Raya (Tic-Tac-Toe) donde compites contra una inteligencia artificial entrenada con [TensorFlow.js](https://www.tensorflow.org/js).

---

## 🧠 Tecnologías utilizadas

- 🔹 **HTML5** + **CSS3**
- 🔹 **JavaScript**
- 🔹 **TensorFlow.js** para la IA

---

## 📦 Estructura del proyecto

```

📁 model/              → Contiene el modelo entrenado (ttt\_model.json y pesos)
📄 index.html          → Página principal del juego
📄 styles.css          → Estilos visuales del juego
📄 script.js           → Lógica del juego e integración con IA

```

---

## ▶️ Cómo jugar

1. Haz clic en una celda para colocar tu **X**.
2. La IA responderá con una **O** automáticamente.
3. El primer jugador en alinear tres símbolos en fila, columna o diagonal, gana.
4. Pulsa el botón 🔁 `Reiniciar` para empezar una nueva partida.

---

## 🧠 Cómo funciona la IA

- El modelo fue entrenado previamente para jugar al Tres en Raya.
- Usa un tensor de 9 entradas representando el tablero.
- El modelo predice la mejor jugada para la IA (jugador O).

---

## 🚀 Instalación local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Alexis217/TTT_model.git
   ```

2. Asegúrate de que los archivos del modelo estén en la carpeta `/model`.

3. Abre `index.html` en tu navegador favorito 🚀

---
