import data from '../../../data/feed.json';

let PostData = Object.values(data).sort(
    (a, b) => a.date.localeCompare(b.date)
)

export { PostData }