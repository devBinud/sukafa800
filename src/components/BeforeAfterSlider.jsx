import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import beforeImg from '../images/before1228.jpg'
import afterImg from '../images/after1228.jpg'

// Drag-to-compare: the colour "after" photo sits underneath, and the greyscale
// "before" photo is clipped from the right at the handle position. An invisible
// range input on top handles mouse, touch and keyboard input.
export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="ba-slider" style={{ '--ba-pos': `${position}%` }}>
      <img src={afterImg} alt="The Brahmaputra valley after 1228: the Ahom kingdom with forts, temples and boats" className="ba-img" loading="lazy" />
      <img src={beforeImg} alt="The Brahmaputra valley before 1228: scattered villages along the river" className="ba-img ba-img--before" loading="lazy" />

      <span className="ba-label ba-label--before">Before 1228</span>
      <span className="ba-label ba-label--after">After 1228</span>

      <div className="ba-divider" aria-hidden="true">
        <span className="ba-handle">
          <ChevronLeft size={18} strokeWidth={2.5} />
          <ChevronRight size={18} strokeWidth={2.5} />
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        step="0.5"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="ba-range"
        aria-label="Compare the valley before and after 1228"
      />
    </div>
  )
}
