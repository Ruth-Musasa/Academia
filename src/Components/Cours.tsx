interface CoursProps {
    categories: string, 
    src:string, 
    description:string
  }
export default function CoursRecent({categories, src, description}: CoursProps) {
    return (
        <div className="bg-white rounded-3xl p-4">
            <div className="">
                <div className="bg-white rounded-3xl opacity-25">{categories} </div>
                <img src={src} alt="" />
            </div>
            <p>{description} </p>
        </div>
    )
}