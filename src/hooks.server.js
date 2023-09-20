export const handle = async ({ resolve, event }) => {
  const response = await resolve(event, {
    preload: ({ path }) => path.includes('latin-wght-normal')
  })

  return response
}
