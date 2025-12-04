// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchSection from '@/components/SearchSection';
import TopUniversities from '@/components/TopUniversities';
import PopularCourses from '@/components/PopularCourse';
import HelpSection from '@/components/HelpSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SearchSection />
        <TopUniversities />
        <PopularCourses />
        <HelpSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}