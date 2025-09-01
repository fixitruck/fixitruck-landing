interface InternalIconProps {
  className?: string
  width?: number | string
  height?: number | string
}

export function InternalIcon({ 
  className = "", 
  width = 24, 
  height = 24 
}: InternalIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      width={width}
      height={height}
      className={className}
      id="Lock-Close-1--Streamline-Cyber"
    >
      <desc>
        Lock Close 1 Streamline Icon: https://streamlinehq.com
      </desc>
      <path fill="#ffffff" d="M20.8201 9.54999H3.18005V23.27H20.8201V9.54999Z" strokeWidth="1"></path>
      <path fill="#bbd8ff" d="M12 9.54999V12.49l2.94 1.47v2.45l-1.96 1.47 1.47 3.43H12v1.96h8.82V9.54999H12Z" strokeWidth="1"></path>
      <path stroke="#092f63" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M20.8201 9.54999H3.18005V23.27H20.8201V9.54999Z" strokeWidth="1"></path>
      <path stroke="#092f63" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="m14.9401 13.96 -2.94 -1.47 -2.94004 1.47v2.45l1.96004 1.47 -1.47004 3.43h4.90004l-1.47 -3.43 1.96 -1.47v-2.45Z" strokeWidth="1"></path>
      <path stroke="#092f63" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M7.09998 9.55001v-6.86L12 0.730011l4.9 1.959999v6.86" strokeWidth="1"></path>
    </svg>
  )
}