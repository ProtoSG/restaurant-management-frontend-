interface ContainerProps {
  children: React.ReactNode,
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <section
      className={`${className} bg-bg-200 rounded-2xl px-6 py-2`}
    >
      {children}
    </section>
  )
}
