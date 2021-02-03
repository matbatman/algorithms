let voted = new Map()

let check_voter = (name) => {
    if (voted.has(name)) {
        console.log("kick them out")
    } else {
        voted.set(name, true)
        console.log("let them vote")
    }
}

check_voter("Tom")