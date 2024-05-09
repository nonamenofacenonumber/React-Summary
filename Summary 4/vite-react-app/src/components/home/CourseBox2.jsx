

export default function CourseBox2(props){
    return (
        <div>
            {/* ?. means safe null */}
            <h4>{props?.course?.title}</h4>
            <p>{props?.course?.details}</p>
            <span>time: 10</span>
        </div>
    )
}
