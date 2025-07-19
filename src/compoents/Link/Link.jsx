import PropTypes from 'prop-types';


const Link = ({route}) => {
    
    return (
        <div className="hover:bg-amber-400 px-4">
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object,
}

export default Link;