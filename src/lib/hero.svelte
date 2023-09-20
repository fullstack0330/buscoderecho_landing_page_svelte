<script>
  import Chatra from '@chatra/chatra'
  import image from './assets/hero.webp'
</script>

<section
  class="mx-auto mb-14 mt-10 grid max-w-5xl gap-y-6 sm:mb-16 sm:mt-11
    sm:grid-cols-2 sm:items-center sm:gap-x-10 md:mb-20 md:mt-14 md:gap-x-12
    xl:gap-x-20"
>
  <div class="text-center sm:text-left">
    <h1
      class="text-3xl font-bold tracking-wide sm:text-2xl md:text-3xl
        lg:text-4xl xl:text-5xl xl:leading-[1.1]"
    >
      Servicios Jurídicos Profesionales
    </h1>
    <p
      class="mb-7 mt-3 text-lg text-primary-200 sm:text-base md:text-lg
        lg:mb-8 lg:mt-4 lg:text-xl"
    >
      Consigue la mejor asesoría jurídica que hay en el mercado colombiano a un
      precio asequible para todos los usuarios.
    </p>
    <button
      class="rounded-full bg-gradient-to-r from-primary-100 to-secondary
        px-7 py-3.5 font-semibold tracking-wide text-default shadow-lg
        transition-opacity hover:opacity-95 lg:mb-7 lg:text-xl"
      on:click={() => Chatra('openChat', true)}
    >
      Chatea con nosotros
    </button>
  </div>
  <img
    class="row-start-1 drop-shadow-sm sm:col-start-2"
    src={image}
    alt=""
    width="480"
    height="472"
  />
</section>
