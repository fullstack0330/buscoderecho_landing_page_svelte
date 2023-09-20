<script>
  import logo from './assets/logo.webp'
  import whatsapp from './assets/whatsapp.svg'
</script>

<header
  class="mx-auto flex max-w-5xl flex-col gap-y-6 pt-5 sm:flex-row
    sm:justify-between md:items-center md:pt-6"
>
  <div class="grid grid-cols-[repeat(2,_max-content)] items-center gap-x-3">
    <img
      class="row-span-2 w-9 md:w-10"
      src={logo}
      alt=""
      width="48"
      height="48"
    />
    <p class="text-lg font-semibold leading-6 text-primary-100 md:text-xl">
      buscoderecho.com
    </p>
    <p
      class="mb-px text-sm font-medium leading-none text-primary-200/80
        md:text-[1rem]"
    >
      Servicios jurídicos al alcance de todos.
    </p>
  </div>
  <div
    class="flex items-center justify-around font-semibold tracking-wide
      text-secondary sm:gap-x-5 md:gap-x-10 lg:gap-x-14"
  >
    <a class="transition-colors hover:text-primary-100" href="#servicios">
      Servicios
    </a>
    <figure class="flex items-center gap-x-1.5">
      <img class="w-5" src={whatsapp} alt="WhatsApp" width="24" height="24" />
      <figcaption>301 486 4376</figcaption>
    </figure>
  </div>
</header>
