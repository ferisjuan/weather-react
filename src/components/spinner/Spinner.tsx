import { BounceLoader } from 'react-spinners'

export const Spinner: React.FC = () => (
  <section className="absolute z-50 flex h-full w-full animate-pulse items-center justify-center bg-slate-900/80 transition-opacity duration-75 ease-in-out">
    <BounceLoader color="#ffffff" />
  </section>
)
