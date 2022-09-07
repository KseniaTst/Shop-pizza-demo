// @ts-ignore
import frontPage from '../assets/img/pizzaFront.jpg'
import Button from "../Components/Button/Button";
import {NavLink} from "react-router-dom";
import '../scss/components/front-page.scss'




export const FrontPage = () => {

    return (
        <div>
                <div  className={'frontPageContainer'}>
                    <img src={frontPage}/>
                    <div className={'frontPageBlock'}>
                        <span>Welcome to</span>
                        <span> hot. fresh. fast. </span>
                        <span>React pizza! </span>
                        <NavLink to={'/shop/home'}>
                            <Button  add>Buy it now</Button>
                        </NavLink>
                    </div>
                </div>
        </div>
    )
}