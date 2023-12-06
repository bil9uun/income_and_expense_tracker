import { useState, useEffect } from "react";

const gridSize = 20;

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);

  const generateFood = () => ({
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  });

  const [food, setFood] = useState(generateFood());
  const [direction, setDirection] = useState("RIGHT");

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection("UP");
          break;
        case "ArrowDown":
          setDirection("DOWN");
          break;
        case "ArrowLeft":
          setDirection("LEFT");
          break;
        case "ArrowRight":
          setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      const newSnake = [...snake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
        case "LEFT":
          head.x -= 1;
          break;
        case "RIGHT":
          head.x += 1;
          break;
        default:
          break;
      }

      // Check if the snake collided with the walls or itself
      if (
        head.x < 0 ||
        head.x >= gridSize ||
        head.y < 0 ||
        head.y >= gridSize ||
        snake.some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        alert("Game Over!");
        resetGame();
        return;
      }

      newSnake.unshift(head);

      // Check if the snake ate the food
      if (head.x === food.x && head.y === food.y) {
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameInterval = setInterval(moveSnake, 200);

    return () => clearInterval(gameInterval);
  }, [snake, direction, food]);

  const resetGame = () => {
    setSnake([{ x: 2, y: 2 }]);
    setFood(generateFood());
    setDirection("RIGHT");
  };

  return (
    <div>
      <h1>Snake Game</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 20px)`,
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const x = index % gridSize;
          const y = Math.floor(index / gridSize);

          const isSnakeSegment = snake.some(
            (segment) => segment.x === x && segment.y === y
          );

          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={index}
              style={{
                width: "20px",
                height: "20px",
                border: "1px solid #ccc",
                backgroundColor: isSnakeSegment
                  ? "green"
                  : isFood
                  ? "red"
                  : "white",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SnakeGame;
