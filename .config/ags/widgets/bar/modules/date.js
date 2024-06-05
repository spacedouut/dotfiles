const time = Variable("", {
    poll: [500, 'date "+%I:%M"']
})

const date = Variable("", {
    poll: [500, 'date "+%A, %B %d"']
})

export function Time() {
    return Widget.Label({
        className: "clock",
        label: time.bind()
    })
}

export function Date() {
    return Widget.Label({
        className: "date",
        label: date.bind()
    })
}
