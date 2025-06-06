import HomeHero from "@/components/Home/HomeHero"
import InstituteDetails from "@/components/Home/InstituteDetails"
import CoursesOffered from "@/components/Home/CoursesOffered"
import DetailedCourseGrid from "@/components/Home/DetailedCourseGrid"

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <InstituteDetails />
      <CoursesOffered />
      <DetailedCourseGrid />
    </div>
  )
}
