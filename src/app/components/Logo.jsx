import logoImage from '../../assets/YOOVI DIGITAL LOGO FILE-01.jpg';

export const Logo = ({ variant = 'light', className = '' }) => {
  const accentColor = '#1ED3B3';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="Logo" 
        className="w-12 h-12 object-contain rounded-lg"
        onError={(e) => {
          // Fallback to SVG if image fails to load
          e.target.style.display = 'none';
          if (e.target.nextSibling) {
            e.target.nextSibling.style.display = 'block';
          }
        }}
      />
      <svg 
        width="50" 
        height="50" 
        viewBox="0 0 50 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="hidden"
      >
        <circle cx="25" cy="25" r="24" stroke={accentColor} strokeWidth="1.5" />
        <path
          d="M18 16L25 32L32 16"
          stroke={variant === 'dark' ? '#F8FAFC' : '#0F172A'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="18" y1="34" x2="32" y2="34" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        <span 
          className="tracking-[0.2em] uppercase"
          style={{ 
            color: variant === 'dark' ? '#F8FAFC' : '#0F172A',
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: 1
          }}
        >
          Yoovi Digital
        </span>
        <span 
          className="tracking-[0.3em] uppercase"
          style={{ 
            color: accentColor,
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.3em',
            lineHeight: 1
          }}
        >
          Creative
        </span>
      </div>
    </div>
  );
};
