// Lector DS — shared components for the enrollment prototype
// Exports to window.* for cross-script use

// ── SVG Icons ──────────────────────────────────────────────────
function Icon({ name, size = 16, color = 'currentColor', strokeWidth = 1.75, style: s = {} }) {
  const icons = {
    'chevron-right': `<polyline points="9,18 15,12 9,6"/>`,
    'chevron-down':  `<polyline points="6,9 12,15 18,9"/>`,
    'chevron-up':    `<polyline points="18,15 12,9 6,15"/>`,
    'chevron-left':  `<polyline points="15,18 9,12 15,6"/>`,
    'x':             `<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`,
    'check':         `<polyline points="20,6 9,17 4,12"/>`,
    'check-circle':  `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
    'info':          `<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`,
    'alert-circle':  `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`,
    'clock':         `<circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>`,
    'refresh-cw':    `<polyline points="23,4 23,11 16,11"/><polyline points="1,20 1,13 8,13"/><path d="M3.51,9a9,9,0,0,1,14.85-3.36L23,11M1,13l4.64,5.36A9,9,0,0,0,20.49,15"/>`,
    'credit-card':   `<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>`,
    'qr-code':       `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><line x1="20" y1="14" x2="20" y2="14"/><line x1="17" y1="17" x2="20" y2="17"/><line x1="20" y1="17" x2="20" y2="20"/>`,
    'copy':          `<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>`,
    'upload-cloud':  `<polyline points="16,16 12,12 8,16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39,18.39A5,5,0,0,0,18,9h-1.26A8,8,0,1,0,3,16.3"/>`,
    'send':          `<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/>`,
    'loader':        `<line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>`,
    'tag':           `<path d="M20.59,13.41l-7.17,7.17a2,2,0,0,1-2.83,0L2,12V2h10l8.59,8.59A2,2,0,0,1,20.59,13.41Z"/><line x1="7" y1="7" x2="7.01" y2="7"/>`,
    'wallet':        `<path d="M20,12V22H4a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H18"/><path d="M20,12a2,2,0,0,1,0,4H4"/><line x1="22" y1="6" x2="22" y2="12"/>`,
    'calendar':      `<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
    'play':          `<polygon points="5,3 19,12 5,21"/>`,
    'play-circle':   `<circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16"/>`,
    'file-text':     `<path d="M14,2H6a2,2,0,0,0-2,2v16a2,2,0,0,0,2,2h12a2,2,0,0,0,2-2V8Z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>`,
    'video':         `<polygon points="23,7 16,12 23,17"/><rect x="1" y="5" width="15" height="14" rx="2"/>`,
    'users':         `<path d="M17,21v-2a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2"/><circle cx="9" cy="7" r="4"/><path d="M23,21v-2a4,4,0,0,0-3-3.87"/><path d="M16,3.13a4,4,0,0,1,0,7.75"/>`,
    'monitor-play':  `<path d="M20,3H4a2,2,0,0,0-2,2v11a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V5A2,2,0,0,0,20,3Z"/><polygon points="10,8 14,11 10,14"/><line x1="8" y1="21" x2="16" y2="21"/>`,
    'box':           `<path d="M21,16V8a2,2,0,0,0-1-1.73l-7-4a2,2,0,0,0-2,0l-7,4A2,2,0,0,0,3,8v8a2,2,0,0,0,1,1.73l7,4a2,2,0,0,0,2,0l7-4A2,2,0,0,0,21,16z"/>`,
    'check-square':  `<polyline points="9,11 12,14 22,4"/><path d="M21,12v7a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5a2,2,0,0,1,2-2h11"/>`,
    'star':          `<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>`,
    'award':         `<circle cx="12" cy="8" r="7"/><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>`,
    'folder':        `<path d="M22,19a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V5a2,2,0,0,1,2-2H9l2,3H20a2,2,0,0,1,2,2Z"/>`,
    'layers':        `<polygon points="12,2 2,7 12,12 22,7"/><polyline points="2,17 12,22 22,17"/><polyline points="2,12 12,17 22,12"/>`,
    'eye':           `<path d="M1,12S5,5 12,5s11,7 11,7-4,7-11,7S1,12,1,12Z"/><circle cx="12" cy="12" r="3"/>`,
    'eye-off':       `<path d="M17.94,17.94A10.07,10.07,0,0,1,12,20C5,20,1,12,1,12a18.45,18.45,0,0,1,5.06-5.94"/><path d="M9.9,4.24A9.12,9.12,0,0,1,12,4c7,0,11,8,11,8a18.5,18.5,0,0,1-2.16,3.19"/><line x1="1" y1="1" x2="23" y2="23"/>`,
    'plus-circle':   `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>`,
  };
  const d = icons[name] || `<circle cx="12" cy="12" r="10"/>`;
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: color, strokeWidth,
    strokeLinecap: 'round', strokeLinejoin: 'round',
    style: { flexShrink: 0, display: 'block', ...s },
    dangerouslySetInnerHTML: { __html: d }
  });
}

// ── Spinner ────────────────────────────────────────────────────
function Spinner({ size = 16, color = '#E87722' }) {
  const [rot, setRot] = React.useState(0);
  React.useEffect(() => {
    let frame;
    const tick = () => { setRot(r => r + 6); frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', style: { transform: `rotate(${rot}deg)`, flexShrink: 0 }
  },
    React.createElement('circle', { cx: 12, cy: 12, r: 10, stroke: '#e0e0e0', strokeWidth: 2.5 }),
    React.createElement('path', { d: 'M12 2 A10 10 0 0 1 22 12', stroke: color, strokeWidth: 2.5, strokeLinecap: 'round' })
  );
}

// ── Badge ──────────────────────────────────────────────────────
function Badge({ children, variant = 'default', size = 'sm' }) {
  const variants = {
    default:     { background: '#F5F5F5',  color: '#666666' },
    free:        { background: '#EDF7EE',  color: '#2E7D32' },
    recommended: { background: '#FDF0E6',  color: '#C4611A' },
    extras:      { background: '#EAF6EE',  color: '#3D8A52' },
    pending:     { background: '#FEF8EC',  color: '#B45309' },
    danger:      { background: '#FDECEC',  color: '#C62828' },
    primary:     { background: '#E87722',  color: '#fff'    },
    teal:        { background: '#E4F4F8',  color: '#1B8CA6' },
    navy:        { background: '#E4EBF5',  color: '#1C4B82' },
    exclusive:   { background: '#EAF6EE',  color: '#3D8A52' },
  };
  const v = variants[variant] || variants.default;
  return React.createElement('span', {
    style: {
      display: 'inline-flex', alignItems: 'center',
      padding: size === 'xs' ? '1px 5px' : '2px 7px',
      borderRadius: 4, fontSize: size === 'xs' ? 10 : 11,
      fontWeight: 600, lineHeight: 1.4, whiteSpace: 'nowrap',
      ...v
    }
  }, children);
}

// ── Button ─────────────────────────────────────────────────────
function Button({ children, variant = 'primary', size = 'md', onClick, disabled, icon, fullWidth, style: extra = {} }) {
  const [hov, setHov] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const variants = {
    primary:   { bg: hov ? '#C4611A' : '#E87722', color: '#fff',     border: 'none' },
    outline:   { bg: hov ? '#FDF0E6' : '#fff',    color: '#E87722',  border: '1.5px solid #E87722' },
    ghost:     { bg: hov ? '#FDF0E6' : 'transparent', color: '#E87722', border: 'none' },
    secondary: { bg: hov ? '#EBEBEB' : '#F5F5F5', color: '#444',     border: '1px solid #E0E0E0' },
    danger:    { bg: hov ? '#C62828' : '#E53935', color: '#fff',     border: 'none' },
  };
  const sizes = {
    xs: { fontSize: 11, padding: '4px 10px', height: 26 },
    sm: { fontSize: 12, padding: '5px 12px', height: 30 },
    md: { fontSize: 13, padding: '7px 16px', height: 34 },
    lg: { fontSize: 14, padding: '9px 20px', height: 40 },
  };
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  return React.createElement('button', {
    onClick, disabled,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => { setHov(false); setPressed(false); },
    onMouseDown: () => { if (!disabled) setPressed(true); },
    onMouseUp: () => setPressed(false),
    style: {
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
      fontFamily: "'Source Sans 3','Source Sans Pro','Segoe UI',system-ui,sans-serif",
      fontWeight: 600, borderRadius: 6, cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 150ms, opacity 150ms, transform 80ms',
      opacity: disabled ? 0.45 : 1,
      transform: pressed && !disabled ? 'scale(0.97)' : 'scale(1)',
      width: fullWidth ? '100%' : undefined,
      background: v.bg, color: v.color, border: v.border || 'none',
      ...s, ...extra
    }
  }, icon && React.createElement(Icon, { name: icon, size: 14, color: 'currentColor' }), children);
}

// ── Content Type Icon ──────────────────────────────────────────
const CONTENT_TYPES = {
  'Tópico':       { icon: 'layers',        bg: '#FDF0E6', color: '#E87722' },
  'Vídeos':       { icon: 'play-circle',   bg: '#FDF0E6', color: '#E87722' },
  'Documentos':   { icon: 'file-text',     bg: '#E4F4F8', color: '#1B8CA6' },
  'Gravado':      { icon: 'video',         bg: '#EAF6EE', color: '#3D8A52' },
  'Aula presencial': { icon: 'users',      bg: '#EAF6EE', color: '#3D8A52' },
  'Webconferência': { icon: 'monitor-play',bg: '#E4F4F8', color: '#1B8CA6' },
  'Scorm':        { icon: 'box',           bg: '#E4EBF5', color: '#1C4B82' },
  'Entrega de atividade': { icon: 'upload-cloud', bg: '#F5F5F5', color: '#666' },
  'Avaliação':    { icon: 'check-square',  bg: '#FEF8EC', color: '#B45309' },
  'Avaliação de reação/pesquisa': { icon: 'star', bg: '#FEF8EC', color: '#B45309' },
  'Certificado':  { icon: 'award',         bg: '#EDF7EE', color: '#2E7D32' },
};

function ContentTypeIcon({ type, size = 22 }) {
  const t = CONTENT_TYPES[type] || { icon: 'box', bg: '#F5F5F5', color: '#999' };
  return React.createElement('div', {
    style: {
      width: size, height: size, borderRadius: 4,
      background: t.bg, flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }
  }, React.createElement(Icon, { name: t.icon, size: Math.round(size * 0.56), color: t.color }));
}

Object.assign(window, { Icon, Badge, Button, ContentTypeIcon, CONTENT_TYPES, Spinner });
