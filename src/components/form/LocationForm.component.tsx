import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import type { Location } from '~/types'
import { schema } from './LocationForm.schema'

interface Props {
  onSubmit: (location: Location) => void
}

export const LocationForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    formState: { errors, isValid },
    handleSubmit,
    register
  } = useForm<Location>({
    resolver: yupResolver(schema)
  })

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

          {errors.state && <small>errors.state.message</small>}
        </div>

        <div className="form-control mb-3">
          <input
            className="input-ghost input input-md w-full border-none bg-secondary/50"
            placeholder="City"
            type="text"
            {...register('city')}
          />

          {errors.city && <small>errors.city.message</small>}
        </div>

        <div className="form-control mb-3">
          <input
            className="input-ghost input input-md w-full border-none bg-secondary/50"
            placeholder="Street number and name"
            type="text"
            {...register('street')}
          />

          {errors.street && <small>errors.street.message</small>}
        </div>

        <div className="form-control mb-3">
          <input
            className="input-ghost input input-md w-full border-none bg-secondary/50"
            placeholder="Zip code (optional)"
            type="text"
            {...register('zip')}
          />
        </div>

        <button className="btn-ghost btn bg-secondary" disabled={!isValid}>
          {isValid ? 'Go!' : 'Please fill out all fields'}
        </button>
      </section>
    </form>
  )
}
