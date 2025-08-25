import {
  Benefits,
  Criteria,
  CTA,
  Footer,
  Gallery,
  Header,
  Hero,
  Process,
  SubmitApplication,
} from './components';

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Gallery />
        <Criteria />
        <Process />
        <SubmitApplication />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
