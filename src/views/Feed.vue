<template>
  <Feed>
    <FeedTitle tag="h1">News</FeedTitle>
    <FeedArticle v-for="aricle in feed" :key="aricle">article: {{ aricle }}</FeedArticle>
  </Feed>
</template>

<script setup lang="ts">
import { Feed, FeedTitle, FeedArticle } from '@aleksejdix/feed/src'
import { ref } from 'vue'
const feed = ref<number[]>([])

setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 100)
  feed.value.push(randomNumber)
}, 5000)
</script>
