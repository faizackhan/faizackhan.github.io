import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function DraggableModal({ title, children, onClose }) {
  const [position, setPosition] = useState({ x: 200, y: 120 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const onMouseUp = () => setDragging(false);

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <motion.div
          style={{ left: position.x, top: position.y }}
          className="draggable-modal absolute w-[500px] rounded-xl
                     bg-white/10 backdrop-blur-lg shadow-xl border border-white/20"
          
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div
            onMouseDown={onMouseDown}
            className="cursor-move flex justify-between items-center
                       px-4 py-2 bg-white/10 rounded-t-xl"
          >
            <span className="font-bold">{title}</span>
            <button onClick={onClose}>✕</button>
          </div>
          
          <div className="p-4 text-xl leading-relaxed overflow-y-auto max-h-[65vh]">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
