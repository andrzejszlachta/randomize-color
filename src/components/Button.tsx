import "./Button.css";

type ButtonProps = {
  color: string;
  text: string;
  fontColor?: string;
};

export default function Button({ color, text, fontColor }: ButtonProps) {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    const body = document.querySelector("body")!;
    body.style.backgroundColor = getRandomColor();

    const btn = event.target as HTMLButtonElement;
    btn.style.backgroundColor = getRandomColor();
  }

  return (
    <button
      className="btn"
      onClick={handleClick}
      style={{ backgroundColor: color, color: fontColor ? fontColor : "white" }}
    >
      {text}
    </button>
  );
}
