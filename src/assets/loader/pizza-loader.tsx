import ContentLoader from "react-content-loader";

export const PizzaLoader = () => (
    <ContentLoader
        className={'pizza-block'}
        speed={2}
        width={280}
        height={457}
        viewBox="0 0 280 457"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="254" rx="7" ry="7" width="260" height="16" />
        <circle cx="125" cy="125" r="122" />
        <rect x="0" y="300" rx="6" ry="6" width="260" height="84" />
        <rect x="0" y="417" rx="3" ry="3" width="69" height="27" />
        <rect x="122" y="405" rx="25" ry="25" width="132" height="44" />
    </ContentLoader>
)