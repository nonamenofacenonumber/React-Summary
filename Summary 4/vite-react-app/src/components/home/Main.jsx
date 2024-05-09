import { useState } from "react"
import CourseBox from "./CourseBox"
import CourseBox2 from "./CourseBox2"
import CourseBox3 from "./CourseBox3"
import CourseList from "./CourseList"

export default function Main() {

    let courseTwo = {
        key: '2',
        title: 'title two',
        details: 'detail two'
    }
    let courseThree = {
        key: '3',
        title: 'title three',
        details: 'detail three'
    }


    let list1 = [
        <span key='1'>list1 ... item1</span>,
        <span key='2'>list1 ... item1</span>,
        <span key='3'>list1 ... item1</span>
    ]
    let list2 = [
        "list2 ... item1",
        "list2 ... item1",
        "list2 ... item1"
    ]
    let courses = [
        {
            key: '7',
            title: 'title seven',
            details: 'detail seven'
        },
        {
            key: '8',
            title: 'title eight',
            details: 'detail eight'
        },
        {
            key: '9',
            title: 'title nine',
            details: 'detail nine'
        }
    ]

    const [coursesWithState, SetCoursesWithState] = useState([
        {
            key: '10',
            title: 'title ten',
            details: 'detail ten'
        },
        {
            key: '11',
            title: 'title eleven',
            details: 'detail eleven'
        }
    ])




    const loadMoreCourseHandler = () => {
        SetCoursesWithState([
            ...coursesWithState,
            {
                key: '12',
                title: 'title twelve',
                details: 'detail twelve'
            }
        ])
        // or
        // SetCoursesWithState(prevState => {
        //     return [
        //         ...prevState,
        //         {
        //             key: '12',
        //             title: 'title twelve',
        //             details: 'detail twelve'
        //         }
        //     ]
        // })
    }

    const [loading, setLoading] = useState(false);
    const conditionalLoadMoreCourseHandler = () => {
        setLoading(true);
        setTimeout(() => {
            SetCoursesWithState([
                ...coursesWithState,
                {
                    key: '12',
                    title: 'title twelve',
                    details: 'detail twelve'
                }
            ])
            setLoading(false);
        }, 3000);
    }


    return (
        <div>


            <CourseList>
                <CourseBox key='1' title='title one' details='detail one' />
                <CourseBox key={courseTwo.id} title={courseTwo.title} details={courseTwo.details} />
            </CourseList>
            <CourseList>
                <CourseBox2 course={courseThree} />
                <CourseBox2 course={{
                    key: '4',
                    title: 'title four',
                    details: 'detail four'
                }} />
            </CourseList>
            <CourseList>
                <CourseBox3 key='5' title='title five' details='detail five' />
                <CourseBox3 key='6' title='title six' />
            </CourseList>


            <h3>Lists:</h3>
            <div>{list1}</div>
            <div>{list2.map((item, index) => <span key={index}>{item}</span>)}</div>


            <CourseList>
                {courses.map((course) =>
                    <CourseBox2 key={course.key} course={course} />
                )}
            </CourseList>


            <CourseList>
                {coursesWithState.map((courseWithState) =>
                    <CourseBox2 key={courseWithState.key} course={courseWithState} />
                )}
                <button onClick={loadMoreCourseHandler}>Load more Course Box</button>
            </CourseList>


            {/* Conditional Statement */}
            <CourseList>
                {coursesWithState.map((courseWithState) =>
                    <CourseBox2 key={courseWithState.key} course={courseWithState} />
                )}
                {
                    loading
                        ? <span>loading ...</span>
                        : <button onClick={conditionalLoadMoreCourseHandler}>load more</button>
                }
            </CourseList>


        </div>
    )
}