import { MainLayout } from './layouts/MainLayout';
import { Hero, About, Skills, Projects, Experience, Contact } from './sections';

const App = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </MainLayout>
  );
};

export default App;