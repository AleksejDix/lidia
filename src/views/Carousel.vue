<template>
  <h1>Carousel</h1>

  <Carousel>
    <CarouselSlides>
      <CarouselSlide>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bmKYiUOEo2A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </CarouselSlide>
      <CarouselSlide>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3VQ382QG-y4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </CarouselSlide>
    </CarouselSlides>
    <CarouselControls>
      <CarouselPrev></CarouselPrev>
      <CarouselNext></CarouselNext>
    </CarouselControls>
  </Carousel>
</template>

<script setup lang="ts">
import {
  Carousel,
  CarouselNext,
  CarouselPrev,
  CarouselControls,
  CarouselSlide,
  CarouselSlides
} from '@/components/Carousel'
</script>
