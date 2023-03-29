import { ref, computed, watchEffect } from 'vue'

interface Boundary {
  width: number
  height: number
  offset: number
}

interface Rect {
  left: number
  top: number
  width: number
  height: number
}

interface UsePlacementOptions {
  buttonRect: Rect
  contentRect: Rect
  boundary: Boundary
  position: string
}

export const Position = {
  Auto: 'auto',
  TopLeft: 'top-start',
  TopCenter: 'top-center',
  TopRight: 'top-end',
  RightTop: 'right-start',
  RightCenter: 'right-center',
  RightBottom: 'right-end',
  BottomLeft: 'bottom-start',
  BottomCenter: 'bottom-center',
  BottomRight: 'bottom-end',
  LeftTop: 'left-start',
  LeftCenter: 'left-center',
  LeftBottom: 'left-end'
}

function getBestPosition(buttonRect: Rect, contentRect: Rect, boundary: Boundary) {
  const centerX = boundary.width / 2
  const centerY = boundary.height / 2

  if (buttonRect.left + buttonRect.width / 2 < centerX) {
    if (buttonRect.top + buttonRect.height / 2 < centerY) {
      return Position.BottomRight
    } else {
      return Position.TopRight
    }
  } else {
    if (buttonRect.top + buttonRect.height / 2 < centerY) {
      return Position.BottomLeft
    } else {
      return Position.TopLeft
    }
  }
}

const positionToPos = (buttonRect: Rect, contentRect: Rect, boundary: Boundary) => ({
  [Position.TopCenter]: [
    buttonRect.left + buttonRect.width / 2 - contentRect.width / 2,
    buttonRect.top - contentRect.height
  ],
  [Position.TopLeft]: [buttonRect.left, buttonRect.top - contentRect.height],
  [Position.TopRight]: [
    buttonRect.left + buttonRect.width - contentRect.width,
    buttonRect.top - contentRect.height
  ],
  [Position.RightCenter]: [
    buttonRect.left + buttonRect.width,
    buttonRect.top + buttonRect.height / 2 - contentRect.height / 2
  ],
  [Position.RightTop]: [buttonRect.left + buttonRect.width, buttonRect.top],
  [Position.RightBottom]: [
    buttonRect.left + buttonRect.width,
    buttonRect.top + buttonRect.height - contentRect.height
  ],
  [Position.BottomCenter]: [
    buttonRect.left + buttonRect.width / 2 - contentRect.width / 2,
    buttonRect.top + buttonRect.height
  ],
  [Position.BottomLeft]: [buttonRect.left, buttonRect.top + buttonRect.height],
  [Position.BottomRight]: [
    buttonRect.left + buttonRect.width - contentRect.width,
    buttonRect.top + buttonRect.height
  ],
  [Position.LeftCenter]: [
    buttonRect.left - contentRect.width,
    buttonRect.top + buttonRect.height / 2 - contentRect.height / 2
  ],
  [Position.LeftTop]: [buttonRect.left - contentRect.width, buttonRect.top],
  [Position.LeftBottom]: [
    buttonRect.left - contentRect.width,
    buttonRect.top + buttonRect.height - contentRect.height
  ]
})

export function usePlacement(options: UsePlacementOptions) {
  const { buttonRect, contentRect, boundary, position } = options

  const bestPosition = ref(Position.Auto)

  watchEffect(() => {
    if (position === Position.Auto) {
      bestPosition.value = getBestPosition(buttonRect, contentRect, boundary)
    } else {
      bestPosition.value = position
    }
  })

  return {
    pos: computed(() => positionToPos(buttonRect, contentRect, boundary)[bestPosition.value])
  }
}
