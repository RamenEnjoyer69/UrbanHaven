import { Save2 } from "iconsax-react"
import { PictureFrame } from "iconsax-react"
import { FilterSearch } from "iconsax-react"

export const AboutCard = ({ icons, title, paragraph }) => {
    return (
        <div className="p-8 lg:p-10 space-y-6 bg-gray-50 rounded-3xl w-full hover:scale-105 duration-300 cursor-pointer">
            <div>
                {icons == 'one' ? <FilterSearch size="24" color="#374151" variant="Bulk" /> : icons == 'two' ? <PictureFrame size="32" color="#374151" variant="Bulk" /> : <Save2 size="32" color="#374151" variant="Bulk" />}
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
            <p className="text-xs lg:text-sm text-gray-500">{paragraph}</p>
        </div>
    )
}