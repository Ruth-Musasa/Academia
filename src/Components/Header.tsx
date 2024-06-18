export default function Header() {
    return (
        <div className="flex w-9/12 m-auto py-44">
            <div className="space-y-2  w-1/2">
                <span className="text-[#F19308]  public-sans ">Jovan Group Academia</span>
                <h1 className="text-[57px] font-semibold ">Formation & Stage <br /> Profitez de nos formation et stage maintenant</h1>
                <p className="text-[#6D737A] text-xl w-11/12">Notre ambition est la montée en compétence des étudiants et Professionnels IT</p>
                <div className="space-x-6">
                    <button className="px-6 py-3 bg-[#68226F] text-white rounded-lg	font-medium	"> Demander un stage </button>
                    <button className="px-6 py-3 border border-[#68226F] text-[#68226F] rounded-lg font-medium	"> Reserver une formation </button>
                </div>
            </div>
            <div className="flex w-1/2 ">
                <img src="src/assets/img/Frame 12.png " alt="" />
                <img src="src/assets/img/Frame 18.png " alt="" />
            </div>
        </div>
    )
}