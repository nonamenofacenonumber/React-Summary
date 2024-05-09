


export default function CourseBox3({ title:ti, details = 'default message' }) {
    return (
        <div>
            {/* ?. means safe null */}
            <h4>{ti}</h4>
            <p>{details}</p>
            <span>time: 10</span>
        </div>
    )
}
