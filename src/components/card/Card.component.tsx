interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex h-full w-full flex-col items-center gap-3  overflow-hidden rounded-md border border-solid border-white/50 border-b-white/25 border-l-white/25 bg-white/20 p-2 shadow-2xl shadow-black/60 backdrop-blur-[2px]">
      {children}
    </section>
  )
}
