import beforeImg from '../images/before1228.jpg'
import afterImg from '../images/after1228.jpg'

// Fixed half-and-half comparison: the colour "after" photo sits underneath and
// the greyscale "before" photo covers the left half, split by a thin line.
export default function BeforeAfterSlider() {
  return (
    <div className="ba-slider">
      <img src={afterImg} alt="The Brahmaputra valley after 1228: the Ahom kingdom with forts, temples and boats" className="ba-img" loading="lazy" />
      <img src={beforeImg} alt="The Brahmaputra valley before 1228: scattered villages along the river" className="ba-img ba-img--before" loading="lazy" />

      <span className="ba-label ba-label--before">Before 1228</span>
      <span className="ba-label ba-label--after">After 1228</span>

      <div className="ba-divider" aria-hidden="true" />
    </div>
  )
}
