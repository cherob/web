import { useRef, forwardRef, useImperativeHandle } from 'react'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.5rem',
      }}

      {...props}
      ref={localRef}>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
