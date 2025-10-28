import React from 'react';

// A collection of SVG icons used in the application.
// This approach is used to avoid external dependencies for icons.

export const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const SmartphoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

export const StoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    <path d="M2 7h20" />
    <path d="M22 7v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7" />
  </svg>
);

export const CreditCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

export const BotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <path d="M12 16h.01" />
  </svg>
);

export const BarChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

export const PenToolIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <path d="M11 11a2 2 0 114 0 2 2 0 01-4 0z"/>
    </svg>
);

export const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
);

export const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
);

export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
);

export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </svg>
);

export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
  
  export const AlertTriangleIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
  );

// Fix: Update icon component to accept an optional `title` prop and render it as an SVG `<title>` element.
export const ReactIcon = ({ title, ...props }: React.SVGProps<SVGSVGElement> & { title?: string }) => (
    <svg viewBox="0 0 114 102" fill="none" height="48" width="48" {...props}>
        {title && <title>{title}</title>}
        <ellipse cx="57" cy="51" rx="57" ry="17.5" stroke="currentColor" strokeWidth="5"></ellipse><ellipse cx="57" cy="51" rx="57" ry="17.5" stroke="currentColor" strokeWidth="5" transform="rotate(60 57 51)"></ellipse><ellipse cx="57" cy="51" rx="57" ry="17.5" stroke="currentColor" strokeWidth="5" transform="rotate(120 57 51)"></ellipse><circle cx="57" cy="51" r="10.5" stroke="currentColor" strokeWidth="5"></circle>
    </svg>
);

export const AngularIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 250 250" height="48" width="48" {...props}><path fill="currentColor" d="M125 0L0 40.99 17.65 181.61 125 250l107.35-68.39L250 40.99 125 0zm63.4 181.61h-28.92l-14-35.93h-51.19l-14 35.93H51.41l73.59-152.9 73.4 152.9zM125 74.31L104.11 125h41.77L125 74.31z"></path></svg>
);

// Fix: Update icon component to accept an optional `title` prop and render it as an SVG `<title>` element.
export const PythonIcon = ({ title, ...props }: React.SVGProps<SVGSVGElement> & { title?: string }) => (
    <svg viewBox="0 0 24 24" height="48" width="48" fill="currentColor" {...props}>
        {title && <title>{title}</title>}
        <path d="M14.25 10.56a2.38 2.38 0 01-2.37-2.38V5.75a2.375 2.375 0 014.75 0V7.5h1.88a2.38 2.38 0 012.37 2.38V12a2.375 2.375 0 01-4.75 0v-1.12a.38.38 0 00-.38-.38h-1.5zm-4.5 2.88a2.38 2.38 0 012.37 2.37v2.44a2.375 2.375 0 01-4.75 0v-1.75H5.5a2.38 2.38 0 01-2.38-2.37V12a2.375 2.375 0 014.75 0v1.13c0 .2.17.37.38.37h1.5z"></path>
    </svg>
);

// Fix: Update icon component to accept an optional `title` prop and render it as an SVG `<title>` element.
export const JSIcon = ({ title, ...props }: React.SVGProps<SVGSVGElement> & { title?: string }) => (
    <svg viewBox="0 0 24 24" height="48" width="48" fill="currentColor" {...props}>
        {title && <title>{title}</title>}
        <path d="M21 21H3V3h18v18zM10.2 13.04c.15.42.36.74.65 1.01.29.27.63.45.99.59l-.4 1.76c-.52-.16-.98-.41-1.39-.77-.41-.35-.73-.8-1-1.3l2.15-.29zm5.22-6.5c.22.6.33 1.25.33 1.95 0 .73-.12 1.4-.36 2.04-.24.63-.58 1.16-1.01 1.58-.43.42-.96.73-1.54.91l.4 1.76c.7-.17 1.3-.47 1.8-.88.5-.41.9-.94 1.19-1.56.29-.62.43-1.3.43-2.03 0-.6-.09-1.2-.27-1.78l-2.61.5z"></path>
    </svg>
);

export const HTMLIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" height="48" width="48" fill="currentColor" {...props}><path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-3.05 13.48l-1.42.36-4.5-14.48h2.32l3.32 11.23 3.42-11.23h2.32l-5.46 14.12zM10.45 15.1h-2.32L9.2 8.78h-2.43l1.07-3.26h6.76l-.42 1.36H9.72l-.75 2.22h2.23l-.8 2.6h-2.23l-1.07 3.4z"></path></svg>
);

// Fix: Update icon component to accept an optional `title` prop and render it as an SVG `<title>` element.
export const GitHubIcon = ({ title, ...props }: React.SVGProps<SVGSVGElement> & { title?: string }) => (
    <svg viewBox="0 0 24 24" height="48" width="48" fill="currentColor" {...props}>
        {title && <title>{title}</title>}
        <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .5.4.8 1.2.8 2.4v3.5c0 .3.2.7.8.6A12 12 0 0012 .3z"></path>
    </svg>
);

// Fix: Update icon component to accept an optional `title` prop and render it as an SVG `<title>` element.
export const NodeIcon = ({ title, ...props }: React.SVGProps<SVGSVGElement> & { title?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="48" width="48" {...props}>
        {title && <title>{title}</title>}
        <path d="M22.5 13.2H18v-1.8l4.5.1v1.7zM17 13.2h-3.8v7.4c0 .8.2 1.2.6 1.2.4 0 .7-.4.7-1.2V13.2zM9.7 18.2c0 2 1.2 3.2 3.3 3.2s3.3-1.2 3.3-3.2V6.2H9.7v12zM8.8 13.2H1.5v-1.9L8.8 11v2.2zm0-3.3H1.5V8.2l7.3-.4v2.1zM17 11.1h3.9c.7 0 1.1-.3 1.1-.9s-.4-.9-1.1-.9h-3.9v1.8zm0-3.6h3.2c.7 0 1-.3 1-.8s-.3-.8-1-.8h-3.2v1.6zM8.8 5.9H1.5V4l7.3.7v1.2z"></path>
    </svg>
);

// Fix: Update icon component to accept an optional `title` prop and render it as an SVG `<title>` element.
export const DockerIcon = ({ title, ...props }: React.SVGProps<SVGSVGElement> & { title?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="48" width="48" {...props}>
        {title && <title>{title}</title>}
        <path d="M21.92,6.09,19.3,5.15a2.1,2.1,0,0,0-1.59.1,2.45,2.45,0,0,0-1.12,1.31,6.86,6.86,0,0,0-2.31,0,2.5,2.5,0,0,0-1.12-1.31,2.1,2.1,0,0,0-1.59-.1L8.36,6.09a2.47,2.47,0,0,0-1.81,2.23V15.2a1,1,0,0,0,1,1H20.73a1,1,0,0,0,1-1V8.32A2.47,2.47,0,0,0,21.92,6.09ZM8.5,10.6H5.75a.25.25,0,0,1-.25-.25V7.6a.25.25,0,0,1,.25-.25H8.5a.25.25,0,0,1,.25.25v2.75A.25.25,0,0,1,8.5,10.6Zm4,0H9.75a.25.25,0,0,1-.25-.25V7.6a.25.25,0,0,1,.25-.25h2.75a.25.25,0,0,1,.25.25v2.75A.25.25,0,0,1,12.5,10.6Zm4,0h-2.75a.25.25,0,0,1-.25-.25V7.6a.25.25,0,0,1,.25-.25h2.75a.25.25,0,0,1,.25.25v2.75A.25.25,0,0,1,16.5,10.6Z"></path>
    </svg>
);