import { useState } from "react"
import './CourseList.css'




export default function CourseList({ children }) {

    function clickHandler() {
        console.log('courseList Click')
    }

    const [message, setMessage] = useState(0)
    function useStateClickHandler() {
        setMessage(message + 1)
        console.log('useState Click')
    }

    const useStateButtonColor = {
        color: 'red'
    }

    const [courseListMessageHover, setCourseListMessageHover] = useState(false)
    const h6Style = {
        backgroundColor: courseListMessageHover ? 'green' : 'transparent'
    }

    const [courseListH4Hover, setCourseListH4Hover] = useState(false)

    return (
        <div>
            <h2 className="CourseList-header">Course Lists:</h2>
            {/* eventHandler in React */}
            <button onClick={clickHandler} style={{ color: 'green' }}>courseList Click</button>
            {/* useState in React */}
            <button onClick={useStateClickHandler} style={useStateButtonColor}>useState Click</button>
            <h6 onMouseEnter={() => setCourseListMessageHover(true)} onMouseLeave={() => setCourseListMessageHover(false)} style={h6Style}>{message}</h6>
            <h4 onMouseEnter={() => setCourseListH4Hover(true)} onMouseLeave={() => setCourseListH4Hover(false)} className={`CourseList-h4 ${courseListH4Hover ? 'CourseList-h4-hover' : ''}`}>Here is Course Lists</h4>
            <p>{children}</p>
            <hr />
        </div>
    )
}






