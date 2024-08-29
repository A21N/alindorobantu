import '../css/burger.css';


export const Burger = ({ isOpen, onToggle }) => {
    const handleClick = () => {
        onToggle(!isOpen);
    };

    return (
        <>
            <div className='menu-bars-container'>
                <div className='menu-bars' onClick={handleClick}>
                    <div className={isOpen ? 'bar-1' : 'bar-1-arrow'}></div>
                    <div className={isOpen ? 'bar-2' : 'bar-2-arrow'}></div>
                    <div className={isOpen ? 'bar-3' : 'bar-3-arrow'}></div>
                </div>
                <div className="contour-indicator-1"></div>
                <div className="contour-indicator-2"></div>
                <div className="contour-indicator-3"></div>
                <div className="contour-indicator-4"></div>
                <div className="contour-indicator-5"></div>
                <div className="contour-indicator-6"></div>
                
            </div>
        </>
    );
};
