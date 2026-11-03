1. // Impor file gambar dari folder assets
import workspacePhoto from '../assets/Images/Workspace.jpeg';
export const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="w-full h-96 bg-gray-200 rounded-3xl shadow-inner relative overflow-hidden group">
              <img
                src={workspacePhoto}
                alt="Foto workspace"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Narrative */}
          <div className="order-1 md:order-2">
            <h2 className="text-sm font-bold tracking-wider text-[#007ACC] uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming complex problems into elegant solutions.
            </h3>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                I am a 5th-semester university student with a deep passion for technology. My journey
                started with a fascination for numbers, which led me to Data Analysis. Soon, I realized
                that data becomes even more powerful when integrated into seamless web applications.
              </p>
              <p>
                My vision is to bridge the gap between backend logic, data interpretation, and intuitive
                user interfaces. I believe in clean code, continuous learning, and building products that
                matter.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 p-4 rounded-2xl bg-white shadow-sm">
                <h4 className="font-bold text-gray-900 text-lg">Semester 4</h4>
                <p className="text-sm text-gray-500">Active Student</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-2xl bg-white shadow-sm">
                <h4 className="font-bold text-gray-900 text-lg">3+</h4>
                <p className="text-sm text-gray-500">Projects Built</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};