// Minimalist Ngie Ngao Kham (Ahom winged dragon-lion) crest
export default function AhomCrest({ size = 44, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Ngie Ngao Kham, the Ahom winged dragon-lion crest"
    >
      <circle cx="32" cy="32" r="30" fill="#A62B2B" />
      <circle cx="32" cy="32" r="26.5" fill="none" stroke="#D4AF37" strokeWidth="1.4" strokeDasharray="2.2 2.4" />

      {/* Upswept wing */}
      <path
        d="M28 34 C24 27 22.5 20 24.5 13 C27 19 30 23.5 34 27 C33.2 21 34.2 16 37.5 12 C38.4 18.5 39.2 23.5 40.5 29 Z"
        fill="#D4AF37"
        opacity="0.9"
      />
      <path d="M26.5 22 C28.5 25 31 27.5 33.5 29.5" stroke="#A62B2B" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M35.8 18 C36.4 22 37.3 25.5 38.6 28.5" stroke="#A62B2B" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Seated dragon-lion body with raised head */}
      <path
        d="M16 47 C16 39.5 21.5 34 29 34 L38.5 34 C41.5 30.5 43 26.5 45.8 24.2 C48.6 22 51.8 22.6 53 25.3 L50.2 26.2 L52.4 29 L48.6 29 C47.8 33 46 36.5 43.4 38.8 L44.4 47 L40.4 47 L39.2 41.2 L28.6 42 L27.6 47 L23.4 47 L23.2 42.4 C19.6 43.4 17.4 45 16 47 Z"
        fill="#FDFBF7"
      />
      {/* Eye and mane curl */}
      <circle cx="48.6" cy="25.6" r="0.9" fill="#A62B2B" />
      <path d="M44.2 27.4 C42.6 29.2 42.8 31.6 44.6 32.4" stroke="#D4AF37" strokeWidth="1.3" fill="none" strokeLinecap="round" />

      {/* Curled dragon tail */}
      <path
        d="M17.2 44.5 C11.5 42.5 10.8 35.5 14.6 32.6 C17 30.8 20.2 31.8 19.4 34.6"
        stroke="#FDFBF7"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
