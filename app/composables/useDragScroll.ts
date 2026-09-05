export function useDragScroll(
  scroller: Ref<HTMLElement | null>,
  content: Ref<HTMLElement | null>,
) {
  const hasOverflow = ref(false)
  const isDragging = ref(false)
  // The schedule scrolls horizontally inside the grid and vertically with the page.
  const pageScroller = computed(() => scroller.value?.ownerDocument.scrollingElement)
  const dragThreshold = 5
  let drag: { startX: number, startY: number, scrollLeft: number, scrollTop: number } | null = null
  let suppressClick = false

  function stopDragging() {
    drag = null
    isDragging.value = false
  }

  function updateOverflow() {
    const element = scroller.value
    const page = pageScroller.value
    hasOverflow.value = !!element && (element.scrollWidth > element.clientWidth
      || (!!page && page.scrollHeight > page.clientHeight))
    if (!hasOverflow.value) {
      stopDragging()
    }
  }

  useResizeObserver([scroller, content, () => scroller.value?.ownerDocument.documentElement], updateOverflow)
  useEventListener('resize', updateOverflow)

  useDraggable(scroller, {
    pointerTypes: ['mouse'],
    buttons: [0],
    axis: 'both',
    onStart(_, event) {
      updateOverflow()
      const element = scroller.value
      if (!element || !hasOverflow.value
        || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) {
        return false
      }

      drag = {
        startX: event.clientX,
        startY: event.clientY,
        scrollLeft: element.scrollLeft,
        scrollTop: pageScroller.value?.scrollTop ?? 0,
      }
    },
    onMove(_, event) {
      const element = scroller.value
      if (!element || !drag) {
        return
      }
      if (!(event.buttons & 1)) {
        stopDragging()
        return
      }

      const distanceX = event.clientX - drag.startX
      const distanceY = event.clientY - drag.startY
      // Keep ordinary clicks on session links until the mouse actually drags.
      if (!isDragging.value && Math.hypot(distanceX, distanceY) < dragThreshold) {
        return
      }

      isDragging.value = true
      suppressClick = true
      element.scrollLeft = drag.scrollLeft - distanceX
      if (pageScroller.value) {
        pageScroller.value.scrollTop = drag.scrollTop - distanceY
      }
    },
    onEnd: stopDragging,
  })
  useEventListener('blur', stopDragging)

  // Block native mouse dragging without preventing link focus or touch gestures.
  useEventListener(scroller, ['dragstart', 'selectstart'], (event) => {
    if (drag) {
      event.preventDefault()
    }
  })
  useEventListener(scroller, 'pointerdown', () => {
    suppressClick = false
  }, { capture: true })
  useEventListener(scroller, 'click', (event) => {
    if (suppressClick && event.detail > 0) {
      event.preventDefault()
      event.stopImmediatePropagation()
      suppressClick = false
    }
  }, { capture: true })

  return { hasOverflow, isDragging }
}
