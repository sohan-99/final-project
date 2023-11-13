/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center">
            <p className="text-yellow-500 mb-2">---{heading}---</p>
            <p className="text-3xl uppercase border-y-4 py-4 mb-4">{subheading}</p>
        </div>
    );
};

export default SectionTitle;