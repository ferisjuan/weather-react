import { useForm } from 'react-hook-form'
import type { Location } from '~/types'

interface Props {
  onSubmit: (location: Location) => void
}

export const LocationForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<Location>({})

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="container flex flex-col">
        <div className="form-control mb-3">
          <input
            className="input-ghost input input-md w-full border-none bg-secondary/50"
            placeholder="State"
            type="text"
            {...register('state')}
          />
        </div>

        <div className="form-control mb-3">
          <input
            className="input-ghost input input-md w-full border-none bg-secondary/50"
            placeholder="City"
            type="text"
            {...register('city')}
          />
        </div>

        <div className="form-control mb-3">
          <input
            className="input-ghost input input-md w-full border-none bg-secondary/50"
            placeholder="Street number and name"
            type="text"
            {...register('street')}
          />
        </div>

        <div className="form-control mb-3">
          <input
            className="input-ghost input input-md w-full border-none bg-secondary/50"
            placeholder="Zip code (optional)"
            type="text"
            {...register('zip')}
          />
        </div>

        <button className="btn-ghost btn bg-secondary">Go!</button>
      </section>
    </form>
  )
}
