import { Navbar, Footer } from '../components';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="font-sans scroll-smooth text-gray-900 bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};