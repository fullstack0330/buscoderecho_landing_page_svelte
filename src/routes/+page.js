import image1 from '$lib/assets/service-1.webp'
import image2 from '$lib/assets/service-2.webp'
import image3 from '$lib/assets/service-3.webp'
import image4 from '$lib/assets/service-4.webp'
import image5 from '$lib/assets/service-5.webp'

export const prerender = true

export const load = () => ({
  services: [
    {
      title: 'Derechos de petición',
      description:
        'Con este servicio podrás obtener un documento dirigido a una ' +
        'entidad pública o privada ante las cuales se busca obtener una ' +
        'respuesta pronta, oportuna y completa sobre sus inquietudes y ' +
        'reclamaciones.',
      image: image1
    },
    {
      title: 'Acciones de tutela',
      description:
        '¿Sientes que te han vulnerado un derecho fundamental? No te ' +
        'preocupes, la tutela es el mecanismo judicial idoneo para proteger ' +
        'tus derechos fundamentales y con el que puedes evitar sufrir un ' +
        'daño irremediable.',
      image: image2
    },
    {
      title: 'Asesorías jurídicas',
      description:
        '¿Necesitas asesoría sobre algún tema normativo? Con el apoyo de ' +
        'nuestros asesores podrás encontrar soluciones rápidas y eficaces a ' +
        'tus inquietudes mediante una videollamada en vivo y en directo con ' +
        'un profesional.',
      image: image3
    },
    {
      title: 'Elaboración de contratos',
      description:
        'Te elaboramos el contrato que necesitas ajustado a la normatividad ' +
        'vigente para que puedas dejar plasmado en un documento la voluntad ' +
        'de las partes.',
      image: image4
    },
    {
      title: 'Conceptos jurídicos',
      description:
        'Te brindamos información escrita para todos esos temas que son de ' +
        'tu interés y lo mejor a un precio bajo pero con una calidad increíble.',
      image: image5
    }
  ]
})
