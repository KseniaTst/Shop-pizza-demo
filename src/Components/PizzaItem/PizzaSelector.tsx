import React from "react";

type PropsType={
    types:number[],
    sizes: number[],
    activeSize:number
    activeType:string
    setActiveType:(type:string)=>void
    setActiveSize:(sizeIndex:number)=>void
}

function PizzaSelector(props:PropsType){

    const onSelectSizeClick=(index:number)=>{
        props.setActiveSize(index)
    }
    const onSelectTypeClick=(type:string)=>{
        props.setActiveType(type)
    }

    return(
        <div className="pizza-block__selector">
            <ul>
                <li className={props.activeType==='тонкое'? 'active' :''}
                    onClick={()=>onSelectTypeClick('тонкое')} >тонкое</li>
                { props.types.includes(1) && <li className={props.activeType==='традиционное'? 'active' :''}
                    onClick={()=>onSelectTypeClick('традиционное')}>традиционное</li>}
            </ul>
            <ul>
                {props.sizes.map((s,index)=> <li key={index}
                                                 onClick={()=>onSelectSizeClick(index)}
                className={props.activeSize===props.sizes[index] ? 'active': ''}>{s}</li>)}

            </ul>
        </div>
    )
}
export default PizzaSelector