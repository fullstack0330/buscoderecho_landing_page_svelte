<script>
  import '@fontsource-variable/work-sans'
  import '@fontsource-variable/work-sans/wght-italic.css'
  import { onMount } from 'svelte'
  import Chatra from '@chatra/chatra'
  import Header from '$lib/header.svelte'
  import Hero from '$lib/hero.svelte'
  import CallToAction from '$lib/call-to-action.svelte'
  import '../app.css'

  export let data

  onMount(() => {
    Chatra('init', {
      ID: 'wxBQeo3abaWvhcvJu',
      setup: { colors: { buttonBg: '#201a23', buttonText: '#fbfbfb' } }
    })
  })
</script>

<svelte:head>
  <title>Servicios Jurídicos Profesionales</title>
  <meta
    name="description"
    content={'Consigue la mejor asesoría jurídica que hay en el mercado ' +
      'colombiano a un precio asequible para todos los usuarios.'}
  />
</svelte:head>

<Header />
<main>
  <Hero />
  <CallToAction />
  <section
    id="servicios"
    class="mx-auto grid max-w-5xl gap-y-16 py-16 md:gap-y-24 md:py-24
      lg:gap-y-28"
  >
    {#each data.services as { image, title, description }}
      <article
        class="md:grid md:grid-cols-[min(45%,_400px)_1fr] md:items-center
          md:gap-x-9 md:even:grid-cols-[1fr,_min(45%,_400px)] lg:gap-x-14"
      >
        <img
          class="mx-auto rounded-3xl"
          src={image}
          alt=""
          width="400"
          height="200"
          loading="lazy"
        />
        <div class="text-center md:text-left">
          <h2
            class="mb-2 mt-4 text-2xl font-bold md:mt-0 lg:mb-2.5 lg:text-3xl"
          >
            {title}
          </h2>
          <p class="mx-auto max-w-prose text-primary-200 lg:text-lg">
            {description}
          </p>
        </div>
      </article>
    {/each}
  </section>
</main>

<style lang="postcss">
  @media screen(md) {
    article:nth-child(even) div {
      grid-column-start: 1;
      grid-row-start: 1;
    }
  }
</style>
