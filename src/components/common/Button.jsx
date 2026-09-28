import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

/**
 * Global Royal Button Component
 * Standardizes all buttons across the website into 2 consistent styles:
 * 1. "filled" (default) - Royal crimson filled background with subtle gold/ambient glow
 * 2. "outline" - Elegant bordered button with subtle hover background fill
 *
 * Supports both standard HTML button and React Router Link seamlessly.
 */
export default function Button({
  children,
  variant = 'filled', // 'filled' | 'outline'
  size = 'md',        // 'sm' | 'md' | 'lg'
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  style = {},
  icon,
  arrow = false,
  fullWidth = false,
  onDark = false,
  ...props
}) {
  const baseClass = 'royal-btn';
  const variantClass = variant === 'outline' ? 'royal-btn--outline' : 'royal-btn--filled';
  const sizeClass = size === 'sm' ? 'royal-btn--sm' : size === 'lg' ? 'royal-btn--lg' : '';
  const darkClass = onDark ? 'royal-btn--on-dark' : '';
  const fullWidthClass = fullWidth ? 'royal-btn--full' : '';

  const combinedClassName = [
    baseClass,
    variantClass,
    sizeClass,
    darkClass,
    fullWidthClass,
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      <span className="royal-btn__text">{children}</span>
      {icon && <span className="royal-btn__icon">{icon}</span>}
      {arrow && (
        <span className="royal-btn__arrow">
          <ArrowUpRight size={15} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={combinedClassName} style={style} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClassName} style={style} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      style={style}
      {...props}
    >
      {content}
    </button>
  );
}
