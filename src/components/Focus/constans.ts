export const SELECTOR_FOCUSABLE = `
    a[href],
    area[href],
    button:not([disabled]):not([aria-hidden]),
    input:not([disabled]):not([aria-hidden]):not([type="hidden"]),
    select:not([disabled]):not([aria-hidden]),
    textarea:not([disabled]):not([aria-hidden]),
    embed,
    iframe,
    object,
    [contenteditable],
    [tabindex]:not([tabindex^="-"])
`