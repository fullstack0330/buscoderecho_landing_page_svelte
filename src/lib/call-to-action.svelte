<script>
  import { onDestroy, onMount } from 'svelte'
  import { scale } from 'svelte/transition'

  const slides = [
    '¿Tienes dudas en algún área jurídica?',
    'Cuéntanos tu caso a través del chat interno o por WhatsApp.',
    'Contamos con un equipo de profesionales dispuestos a orientarte.',
    'Consigue una asesoría profesional personalizada a un bajo costo.'
  ]

  let index = 0
  let interval

  onMount(() => {
    interval = setInterval(() => {
      index === 3 ? (index = 0) : (index += 1)
    }, 3500)
  })

  onDestroy(() => clearInterval(interval))
</script>

<aside
  class="-mx-6 flex h-48 items-center bg-gradient-to-r from-primary-100
    to-secondary px-6 text-default sm:-mx-7 sm:px-7 md:-mx-10 md:px-10
    lg:-mx-14 lg:h-60"
>
  {#key index}
    <p
      in:scale
      class="mx-auto mb-2 max-w-4xl text-center text-2xl font-medium italic
        sm:text-3xl md:font-semibold lg:text-4xl lg:leading-tight"
    >
      {slides[index]}
    </p>
  {/key}
</aside>
