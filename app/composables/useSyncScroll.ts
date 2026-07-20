interface ElementRef<T extends HTMLElement> {
  value: T | null
}

export function useSyncScroll<
  TSource extends HTMLElement = HTMLDivElement,
  TTarget extends HTMLElement = HTMLDivElement,
>(
  source: ElementRef<TSource>,
  target: ElementRef<TTarget>,
) {
  let frameId = 0
  let pendingScrollLeft = 0
  let appliedScrollLeft = Number.NaN

  function flushScrollSync() {
    frameId = 0

    const targetElement = target.value
    if (!targetElement) {
      return
    }

    if (pendingScrollLeft === appliedScrollLeft && targetElement.scrollLeft === pendingScrollLeft) {
      return
    }

    appliedScrollLeft = pendingScrollLeft

    if (targetElement.scrollLeft === pendingScrollLeft) {
      return
    }

    targetElement.scrollLeft = pendingScrollLeft
  }

  function queueScrollSync() {
    pendingScrollLeft = source.value?.scrollLeft ?? 0

    if (frameId) {
      return
    }

    frameId = requestAnimationFrame(flushScrollSync)
  }

  function handleSourceScroll() {
    queueScrollSync()
  }

  watch(() => source.value, (nextSource, previousSource) => {
    previousSource?.removeEventListener('scroll', handleSourceScroll)
    nextSource?.addEventListener('scroll', handleSourceScroll, { passive: true })
    queueScrollSync()
  }, { flush: 'post' })

  watch(() => target.value, () => {
    queueScrollSync()
  }, { flush: 'post' })

  onBeforeUnmount(() => {
    source.value?.removeEventListener('scroll', handleSourceScroll)

    if (frameId) {
      cancelAnimationFrame(frameId)
    }
  })
}
