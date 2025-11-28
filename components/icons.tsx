import React from 'react';

export const CatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true"
  >
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM4.09 15.37C5.3 16.91 7 18 9 18c.61 0 1.19-.1 1.74-.29.43-.15.86-.36 1.26-.61.4-.25.77-.55 1.1-.89.33-.34.62-.73.86-1.16.24-.43.43-.89.57-1.37.14-.49.22-1 .22-1.52 0-2.22-1.21-4.15-3-5.19V6.5c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v1.77c-1.79 1.04-3 2.97-3 5.19 0 .04.01.08.01.12C5.9 14.28 4.91 14.89 4.09 15.37zM16 14.5c0 .83-.67 1.5-1.5 1.5S13 15.33 13 14.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
  </svg>
);


export const CatPawIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
       <path d="M12.89 2.05c-1.2-.5-2.58-.5-3.78 0C6.73 3.08 5 5.52 5 8.25c0 2.22 1.21 4.15 3 5.19V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5.56c1.79-1.04 3-2.97 3-5.19 0-2.73-1.73-5.17-4.11-6.2zM10 9.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm4 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
    </svg>
);

export const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

export const ImageIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
  </svg>
);

export const ThumbsUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
  </svg>
);

export const ChatBubbleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
);

export const VideoCameraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
    </svg>
);

export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-1.65 5.25h16.5" />
  </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.483.01-4.702.066-2.68.122-3.832 1.28-3.954 3.955-.056 1.218-.066 1.583-.066 4.701s.01 3.483.066 4.702c.123 2.67 1.275 3.833 3.955 3.955 1.218.056 1.585.066 4.701.066s3.483-.01 4.702-.066c2.67-.122 3.832-1.28 3.955-3.955.056-1.218.066-1.585.066-4.701s-.01-3.483-.066-4.702c-.122-2.67-1.28-3.832-3.955-3.954-1.218-.057-1.585-.066-4.701-.066zm0 2.88c-1.802 0-3.26 1.458-3.26 3.26s1.458 3.26 3.26 3.26 3.26-1.458 3.26-3.26-1.458-3.26-3.26-3.26zm0 5.32c-1.137 0-2.06-0.923-2.06-2.06s0.923-2.06 2.06-2.06 2.06.923 2.06 2.06-0.923 2.06-2.06 2.06zm4.965-6.28c-.78 0-1.41.63-1.41 1.41s.63 1.41 1.41 1.41 1.41-.63 1.41-1.41-.63-1.41-1.41-1.41z"/>
  </svg>
);

export const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M9.94,15.545V8.455l6.782,3.545L9.94,15.545z"/>
  </svg>
);

export const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-1-6.7-2.91-1.87-1.9-2.86-4.58-2.64-7.18.22-2.6 1.8-4.83 3.92-6.26.57-.39 1.2-.68 1.82-.91.02-3.56.02-7.12.01-10.67z"/>
  </svg>
);

export const EnvelopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

export const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 9.196C34.973 5.618 29.81 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
        <path fill="#FF3D00" d="M6.306 14.691c-1.332 2.65-2.083 5.618-2.083 8.81C4.223 30.301 6.84 34.09 9.863 36.691L16.22 30.56C14.366 28.91 13 26.61 13 24s1.366-4.91 3.22-6.56l-6.56-6.56C8.507 12.09 7.317 13.33 6.306 14.691z"/>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-6.19C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 6.522C9.253 40.422 16.027 44 24 44z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 6.19C40.085 36.21 44 30.601 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.456-2.456L12.75 18l1.178-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.178a3.375 3.375 0 002.456 2.456L20.25 18l-1.178.398a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

export const ArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
    </svg>
);

export const BkashIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className} fill="currentColor">
        <path fill="#D82A7D" d="M64 4c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4z"/>
        <path fill="#fff" d="M92.3 75.8c0-1.2-0.1-2.4-0.4-3.6 -0.3-1.4-0.8-2.8-1.5-4.1 -0.6-1.2-1.4-2.3-2.3-3.3 -1-1-2.2-1.9-3.5-2.6 -1.2-0.6-2.5-1.1-3.9-1.5 -1.2-0.3-2.4-0.5-3.6-0.6h-2.1c-1.3 0-2.5 0.1-3.7 0.4l-4.1 1c-0.6 0.1-1.1 0.3-1.7 0.4 -0.5 0.2-1 0.4-1.5 0.7 -0.5 0.3-0.9 0.6-1.3 1 -0.4 0.4-0.8 0.8-1 1.3 -0.2 0.4-0.4 0.9-0.5 1.4 -0.1 0.5-0.2 1-0.2 1.5v0.1c0 0.8 0.1 1.5 0.4 2.2 0.3 0.7 0.6 1.4 1.1 2 0.5 0.6 1 1.2 1.7 1.7 0.6 0.4 1.3 0.8 2 1.1s1.5 0.6 2.2 0.8c0.8 0.2 1.5 0.4 2.3 0.5l-10.2 24.3h8.9l5.3-13.2c0.2-0.6 0.5-1.1 0.7-1.7 0.2-0.6 0.5-1.2 0.7-1.8 0.1-0.3 0.2-0.6 0.3-0.9 0.1-0.3 0.2-0.7 0.3-1h0.1c0.5 1.5 1.2 2.9 1.8 4.3l4.6 12.3h7.9L73.1 76.2c0.7-1.8 1-3.6 1-5.5v-2.3c0.8 0.4 1.6 0.7 2.4 1 0.8 0.3 1.6 0.6 2.3 0.9 1.1 0.5 2.1 1.1 3 1.9 0.9 0.8 1.7 1.7 2.4 2.8 0.6 1 1.1 2.2 1.5 3.4 0.3 1.1 0.5 2.3 0.5 3.5v0.1c0 1.9-0.4 3.8-1.1 5.5 -0.8 1.8-1.9 3.4-3.3 4.7s-3 2.4-4.9 3.1c-1.9 0.7-4 1-6.1 1h-1.6c-1.1 0-2.1-0.1-3.1-0.4 -1-0.2-1.9-0.5-2.8-0.9 -1.1-0.5-2.1-1.1-3-1.8 -0.9-0.7-1.7-1.6-2.4-2.6 -0.6-0.9-1.1-1.9-1.5-3 -0.3-1-0.5-2.1-0.5-3.2v-0.7c0-1.1 0.2-2.2 0.5-3.3 0.4-1.1 0.9-2.1 1.5-3.1 0.6-1 1.4-1.9 2.3-2.7 0.9-0.8 1.9-1.5 3.1-2 1-0.4 2.1-0.8 3.2-1.1 1-0.3 2-0.5 3-0.6l4.6-1.1c0.7-0.2 1.4-0.3 2.1-0.5 0.8-0.2 1.5-0.4 2.2-0.7 0.6-0.2 1.2-0.5 1.7-0.8 0.5-0.3 1-0.7 1.4-1.1 0.3-0.3 0.7-0.7 0.9-1.1 0.2-0.4 0.4-0.8 0.5-1.3 0.1-0.5 0.2-0.9 0.2-1.4v-0.1c0-0.6-0.1-1.2-0.3-1.8 -0.2-0.6-0.5-1.1-0.9-1.6 -0.3-0.4-0.8-0.8-1.2-1.1 -0.5-0.3-1-0.6-1.6-0.8 -0.6-0.2-1.2-0.4-1.8-0.5 -0.6-0.1-1.3-0.2-1.9-0.2h-1.4c-1.2 0-2.3 0.2-3.4 0.5 -1.1 0.3-2.2 0.8-3.2 1.4 -1 0.6-1.9 1.3-2.7 2.1 -0.8 0.8-1.5 1.8-2 2.8 -0.5 1-0.9 2.1-1.1 3.2 -0.2 1.1-0.3 2.2-0.3 3.3v10.2h-8.8V76c0-2.8 0.5-5.5 1.5-8.1 1-2.6 2.5-5 4.4-6.9s4.2-3.4 6.9-4.4c2.6-1 5.3-1.5 8.1-1.5h1.9c1.6 0 3.2 0.2 4.7 0.6 1.5 0.4 3 1 4.4 1.8 1.4 0.8 2.7 1.8 3.8 3s2 2.5 2.7 4c0.7 1.5 1.2 3.1 1.5 4.8 0.3 1.7 0.5 3.4 0.5 5.1v0.7c0 2.5-0.5 5-1.4 7.3 -1 2.3-2.3 4.4-4.1 6.1 -1.8 1.7-3.9 3-6.4 3.8 -2.5 0.8-5.2 1.2-8.1 1.2h-1.9c-1.5 0-3-0.2-4.4-0.5 -1.4-0.4-2.8-0.9-4.1-1.5 -1.3-0.7-2.5-1.5-3.6-2.5 -1.1-1-2-2.1-2.8-3.4 -0.7-1.2-1.3-2.5-1.8-3.9 -0.4-1.4-0.6-2.8-0.6-4.3v-19h-8.8v19.4c0 3.8 0.7 7.4 2.1 10.9s3.3 6.5 5.9 9.1c2.6 2.6 5.6 4.5 9.1 5.9 3.5 1.4 7.1 2.1 10.9 2.1h1.9c3.5 0 6.9-0.6 10.1-1.8 3.2-1.2 6.1-2.9 8.6-5.1 2.5-2.2 4.5-4.9 5.9-7.9 1.4-3.1 2.1-6.3 2.1-9.7v-1.1z"/>
        <path fill="#fff" d="M43.3 33.6h-8.8v56.8h8.8z"/>
    </svg>
);

export const NagadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className} fill="currentColor">
        <path fill="#E84524" d="M64 4c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4z"/>
        <path fill="#fff" d="M81.2 30.1c-1.3-0.1-2.6 0-3.9 0.2 -2 .3-4 .9-5.9 1.8 -2 .9-3.8 2.2-5.4 3.7 -1.6 1.6-2.9 3.5-3.8 5.6 -0.9 2.1-1.4 4.3-1.4 6.7 0 2.2 0.4 4.4 1.2 6.4 0.8 2 2 3.8 3.5 5.4 1.5 1.6 3.2 2.9 5.2 3.9 2 .9 4.1 1.5 6.4 1.7l-26.6 24.3h8.9l26.4-24.1c0.4 0 0.8 0 1.2-0.1 0.4 0 0.9-0.1 1.3-0.2 2.6-0.4 5.1-1.3 7.3-2.6 2.2-1.4 4.1-3.2 5.5-5.3 1.4-2.2 2.2-4.6 2.2-7.3 0-2.8-0.8-5.4-2.3-7.7 -1.5-2.3-3.6-4.1-6.1-5.4 -2.5-1.3-5.3-2-8.3-2.2zm-2.2 34.5c-1.2-0.2-2.3-0.5-3.4-1 -1.1-0.5-2.1-1.2-3-2 -0.9-0.8-1.6-1.8-2.2-2.9 -0.6-1.1-0.9-2.3-0.9-3.6 0-1.4 0.3-2.7 0.9-3.9 0.6-1.2 1.3-2.2 2.3-3.1s2-1.6 3.2-2.1c1.2-0.5 2.5-0.8 3.8-0.8 1.3 0 2.6 0.2 3.8 0.7 1.2 0.5 2.3 1.1 3.3 1.9 1 0.8 1.8 1.8 2.4 2.9 0.6 1.1 0.9 2.4 0.9 3.8 0 1.4-0.3 2.8-1 4.1 -0.7 1.3-1.6 2.4-2.7 3.3 -1.1 0.9-2.4 1.6-3.8 2.1 -1.4 0.5-2.9 0.8-4.5 0.8z"/>
        <path fill="#fff" d="M37.1 30.1h8.9v36.6h-8.9z"/>
    </svg>
);

export const BankIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V3m0 0l-3.75 3.75M12 3l3.75 3.75M3 12h18M4.5 3.75h15a2.25 2.25 0 012.25 2.25v12a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25v-12A2.25 2.25 0 014.5 3.75z" />
    </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export const HealthIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const InformationCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

export const AlertTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

export const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v3.042m-7.416 0v3.042c0 .212.03.418.084.612m7.332 0c.646.229 1.217.568 1.699 1.071l3.056 3.056c.503.503.842 1.053 1.07 1.699m-7.416 0a2.25 2.25 0 00-2.25 2.25v3.375c0 .621.504 1.125 1.125 1.125h3.042c.621 0 1.125-.504 1.125-1.125V13.5a2.25 2.25 0 00-2.25-2.25h-3.042Z" />
  </svg>
);

export const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

export const LanguageIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.625M21 21l-5.25-11.625M3.75 5.25h16.5M4.5 19.5h15M5.625 5.25l5.25 11.625" />
    </svg>
);