const ColorButton = ({ color, setColor }) => {
  return (
    <button
      className="flex justify-center items-center m-2 border rounded-full w-15 h-15 hover:scale-110 transition-transform duration-200 cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      <span className="font-bold text-black">{color}</span>
    </button>
  );
};

export default ColorButton;
