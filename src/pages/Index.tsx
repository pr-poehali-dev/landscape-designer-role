import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Городской парк "Зелёная долина"',
      description: 'Комплексное благоустройство городского парка с созданием экологических зон отдыха',
      image: 'https://cdn.poehali.dev/projects/c06674a6-27b0-4e92-8cb7-cc567e3b5458/files/0960afbd-f094-49d2-956c-69bfb8d3ef99.jpg',
      area: '12 га',
      year: '2024'
    },
    {
      id: 2,
      title: 'Центральная площадь',
      description: 'Создание современного общественного пространства с водными элементами и зелёными островками',
      image: 'https://cdn.poehali.dev/projects/c06674a6-27b0-4e92-8cb7-cc567e3b5458/files/8c345628-2de4-4201-9d79-572d9f6fb8dc.jpg',
      area: '5 га',
      year: '2023'
    },
    {
      id: 3,
      title: 'Экологический коридор',
      description: 'Велопешеходная зона с цветущими растениями и местами для активного отдыха',
      image: 'https://cdn.poehali.dev/projects/c06674a6-27b0-4e92-8cb7-cc567e3b5458/files/17c4ca21-095e-42d5-9a99-9abc514ec184.jpg',
      area: '8 га',
      year: '2024'
    }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-primary">Ландшафтный дизайн</h1>
          <div className="flex gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={scrollToProjects} className="text-foreground hover:text-primary transition-colors">
              Проекты
            </button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl font-bold text-primary leading-tight">
                Создаём комфортную городскую среду
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ландшафтный дизайнер — это архитектор живой природы в городе. 
                Мы создаём пространства, где человек чувствует гармонию с окружающей средой.
              </p>
              <Button onClick={scrollToProjects} size="lg" className="mt-4 rounded-full px-8">
                Посмотреть проекты
                <Icon name="ArrowDown" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://cdn.poehali.dev/projects/c06674a6-27b0-4e92-8cb7-cc567e3b5458/files/0960afbd-f094-49d2-956c-69bfb8d3ef99.jpg" 
                alt="Городской парк" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow border-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Trees" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Экологичность</h3>
              <p className="text-muted-foreground">
                Используем местные растения и природные материалы для создания устойчивой среды
              </p>
            </Card>
            <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow border-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Для людей</h3>
              <p className="text-muted-foreground">
                Проектируем пространства, где приятно находиться людям всех возрастов
              </p>
            </Card>
            <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow border-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Красота</h3>
              <p className="text-muted-foreground">
                Создаём эстетически привлекательные решения, которые радуют глаз
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-primary">Наши проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый проект — это уникальная история преобразования городского пространства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="group overflow-hidden cursor-pointer transition-all hover:shadow-2xl"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-primary/60 transition-opacity duration-300 ${
                    activeProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Map" size={16} />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={16} />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-5xl font-bold text-primary">Философия работы</h2>
          <blockquote className="text-2xl text-foreground italic leading-relaxed">
            "Роль ландшафтного дизайнера — это не просто озеленение территории. 
            Это создание живых систем, которые улучшают качество жизни, 
            очищают воздух, снижают стресс и объединяют людей через общение с природой."
          </blockquote>
          <div className="pt-8">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Связаться с нами
              <Icon name="Mail" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">© 2024 Ландшафтный дизайн. Создаём комфортную среду</p>
            <div className="flex gap-6">
              <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Mail" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
