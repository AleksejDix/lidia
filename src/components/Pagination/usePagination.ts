// usePagination.ts
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function usePagination(totalItems: number, itemsPerPage: number, visiblePages: number = 5) {
  const route = useRoute()

  const totalPages = computed(() => Math.ceil(totalItems / itemsPerPage))
  const currentPage = computed(() => parseInt(route.query.page as string) || 1)

  const visiblePageNumbers = computed(() => {
    let start = Math.max(currentPage.value - Math.floor(visiblePages / 2), 1)
    let end = Math.min(start + visiblePages - 1, totalPages.value)

    if (end === totalPages.value) {
      start = Math.max(end - visiblePages + 1, 1)
    }

    return Array.from({ length: end - start + 1 }, (_, i) => i + start)
  })

  return {
    currentPage,
    totalPages,
    visiblePageNumbers
  }
}
