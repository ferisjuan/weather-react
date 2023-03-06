interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex items-center h-full w-full flex-col gap-3 rounded-md  border border-solid border-white/50 border-b-white/25 border-l-white/25 bg-white/20 p-2 h-full shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-[2px]">
      {children}
    </section>
  )
}
