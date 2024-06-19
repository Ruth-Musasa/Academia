interface CoursProps {
    categories: string;
    image: string;
    description: string;
}

export default function CoursRecent({ categories, image, description }: CoursProps) {
    return (
        <div className="bg-white rounded-3xl p-4 ">
            <div className="relative h-64 bg-cover bg-center rounded-xl 	" style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute top-0 left-0 bg-white rounded-md opacity-75 py-2 px-4 m-2">
                    {categories}
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
}
