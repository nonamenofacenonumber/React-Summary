


export default function CourseBox(props){
    return (
        <div>
            {/* ?. means safe null */}
            <h4>{props?.title}</h4>
            <p>{props?.details}</p>
            <span>time: 10</span>
        </div>
    )
}






