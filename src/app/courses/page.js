import CourseCatalog from "@/components/Courses/CourseCatalog"
import CourseSearch from "@/components/Courses/CourseSearch"
import UniversityPartners from "@/components/Courses/UniversityPartners"

export default function CoursesPage() {
  return (
    <div>
      <CourseSearch />
      <CourseCatalog />
      <UniversityPartners />
    </div>
  )
}
