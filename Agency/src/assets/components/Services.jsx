const Services = () => {
    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
            <div className="text-center my-8">
                <h2 className={`text-4xl text-neutralDGrey font-semibold mb-2 `}>Our Clients</h2>
                <p className="text-neutralDGrey">We have been working with some Fortune 500+ clients</p>
                {/* Logos */}
                <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                    <img src="src/assets/images/S_Logo.png" alt=""/>
                    <img src="src/assets/images/S_Logo.png" alt=""/>
                    <img src="src/assets/images/S_Logo.png" alt=""/>
                    <img src="src/assets/images/S_Logo.png" alt=""/>
                    <img src="src/assets/images/S_Logo.png" alt=""/>
                    <img src="src/assets/images/S_Logo.png" alt=""/>
                    <img src="src/assets/images/S_Logo.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Services;