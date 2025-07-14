import TrueFocus from './TrueFocus';
import Aurora from "../components/Aurora";
import Particles from '../components/Particles';
import ASCIIText from './ASCIIText';
import { tr } from 'framer-motion/client';
import RotatingText from './RotatingText';


export default function Home() {
  return (
    <div>
      <TrueFocus 
        sentence="Webbly AI"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <Aurora
        colorStops={["#3A29FF", "#3A29FF", "#3A29FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>  
      <ASCIIText
        text="Hey!"
        enableWaves={true}
        asciiFontSize={6}
      />
      <RotatingText
        texts={['React', 'Bits', 'Is', 'Cool!']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  );
}
