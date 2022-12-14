import React, {MouseEvent, useEffect, useRef, useState} from "react";
import {useAppDispatch} from "../../../Data/state";
import {sortPizzasTC} from "../../../Data/Pizzas-reducer";

function Sort(){

    const options =[
        {name:'популярности', type:'rating'},
        {name:'цене',type:'price'},
        {name: 'алфавиту',type: 'name'}
    ]


    const [accordion, setAccordion] = useState<boolean>(false)
    const [option, setOption] = useState<string>('популярности')
    const [order, setOrder]=useState<boolean>(false)
    const sortRef = useRef<HTMLDivElement | null>()
    const dispatch = useAppDispatch()

    const onAccordionClick = () => {
        setAccordion(!accordion)
    }
    const onOptionClick = (e: MouseEvent<HTMLLIElement>, type:string) => {


        setOption(e.currentTarget.title)
        dispatch(sortPizzasTC(type))
    }
    const handleOutsideClick = (e: any) => {
        if (!e.path.includes(sortRef.current)) setAccordion(false)
    }


    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div className="sort" ref={(ref) => {
            sortRef.current = ref
        }}>
            <div className="sort__label">
                <svg
                    className={accordion? 'rotated': ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={onAccordionClick}>{option}</span>
            </div>
            {accordion && <div className="sort__popup">
                <ul>
                    {options.map((op, i) => {
                        return <li key={`${op}_${i}`} title={op.name} className={option === op.name ? 'active' : ''}
                                   onClick={(e)=>onOptionClick(e, op.type)}
                                   onBlur={(e) => setAccordion(false)}>
                            {op.name}
                        </li>
                    })}
                </ul>
            </div>}

        </div>
    )

}
export default Sort