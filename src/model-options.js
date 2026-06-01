function notInSameGroup(source, target) {
    return source.group == null || target.group == null || source.group !== target.group
}

export default {
    beforeConnect:(source, target) => {
        return notInSameGroup(source, target)
    }
}
