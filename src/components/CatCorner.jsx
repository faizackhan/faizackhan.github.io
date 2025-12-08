import { useEffect, useState } from "react";

const FRAME_SIZE = 32;

const animations = [
  { row: 0, frames: 4, duration: 1000 },
  { row: 1, frames: 4, duration: 1000 },
  { row: 2, frames: 4, duration: 1000 },
  { row: 3, frames: 4, duration: 1000 },
  { row: 4, frames: 8, duration: 900 },
  { row: 5, frames: 8, duration: 900 },
  { row: 6, frames: 4, duration: 1000 },
  { row: 7, frames: 6, duration: 1100 },
  { row: 8, frames: 7, duration: 1050 },
  { row: 9, frames: 8, duration: 850 },
];

export default function CatCorner() {
  const [anim, setAnim] = useState(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const chosen =
      animations[Math.floor(Math.random() * animations.length)];
    setAnim(chosen);
    setFrame(0);

    let current = 0;
    const interval = setInterval(() => {
      current = (current + 1) % chosen.frames;
      setFrame(current);
    }, chosen.duration / chosen.frames);

    return () => clearInterval(interval);
  }, []);

  if (!anim) return null;

  return (
    <div
      className="cat"
      style={{
        backgroundImage: "url(/cat/cat.png)",
        backgroundPositionX: `-${frame * FRAME_SIZE}px`,
        backgroundPositionY: `-${anim.row * FRAME_SIZE}px`,
      }}
    />
  );
}
