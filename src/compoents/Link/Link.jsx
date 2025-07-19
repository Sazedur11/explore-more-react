

const Link = ({route}) => {
    console.log(route)
    return (
        <div className="hover:bg-amber-500 px-4">
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;