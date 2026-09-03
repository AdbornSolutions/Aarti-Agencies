import { useState } from "react";
import { CursorProvider } from "./components/CursorProvider";
import { Preloader } from "./components/Preloader";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BrandIntro } from "./components/BrandIntro";
import { Categories } from "./components/Categories";
import { TextureExperience } from "./components/TextureExperience";
import { WhyChoose } from "./components/WhyChoose";
import { Applications } from "./components/Applications";
import { FeaturedCollection } from "./components/FeaturedCollection";
import { Projects } from "./components/Projects";
import { Stats } from "./components/Stats";
import { ConsultationCta } from "./components/ConsultationCta";
import { Footer } from "./components/Footer";
function App({
  showIntro = true,
  customCursor = true,
  textureShowcase = "horizontal-scroll"
}) {
  const [ready, setReady] = useState(!showIntro);
  return <CursorProvider enabled={customCursor}><div className="w-full bg-sand">{showIntro && <Preloader onComplete={() => setReady(true)} />}<Header ready={ready} /><main><Hero ready={ready} /><BrandIntro /><Categories /><TextureExperience stacked={textureShowcase === "stacked"} /><WhyChoose /><Applications /><FeaturedCollection /><Projects /><Stats /><ConsultationCta /></main><Footer /></div></CursorProvider>;
}
export {
  App
};
