import * as yup from 'yup'
export const schema = yup.object<Location>({
  city: yup.string().required(),
  state: yup.string().required(),
  street: yup.string().required(),
  zip: yup.string().optional()
})

export type FormData = yup.InferType<typeof schema>
