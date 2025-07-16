// import React from 'react';
// // Import components as needed
// import Aurora from '@/components/Aurora/Aurora';
// import Threads from '@/components/Threads/Threads';
// import Hyperspeed from '@/components/Hyperspeed/Hyperspeed';
// import Orb from '@/components/Orb/Orb';
// import SplashCursor from '@/components/SplashCursor/SplashCursor';
// import SplitText from '@/components/SplitText/SplitText';
// import BlurText from '@/components/BlurText/BlurText';
// import CurvedLoop from '@/components/CurvedLoop/CurvedLoop';
// import GradientText from '@/components/GradientText/GradientText';
// import FallingText from '@/components/FallingText/FallingText';
// import DecryptedText from '@/components/DecryptedText/DecryptedText';
// import TrueFocus from '@/components/TrueFocus/TrueFocus';
// import ScrambledText from '@/components/ScrambledText/ScrambledText';
// import RotatingText from '@/components/RotatingText/RotatingText';
// import MagicBento from '@/components/MagicBento/MagicBento';
// import Masonry from '@/components/Masonry/Masonry';
// import ProfileCard from '@/components/ProfileCard/ProfileCard';
// import { Navbar } from '@/components/Navbar/Navbar';
// import { HeroParallaxDemo } from '@/components/HeroParallax/HeroParallax';
// import { IconCloudDemo } from '@/components/magicui/IconCloudDemo';


// // create a beautiful landing page for "Webbly AI"—a modern IT service website offering software development, web, mobile, and AI services—I'll redesign your page.tsx using your existing components


// export default function Home() {
//   return (
//     <div>

//       <IconCloudDemo />

  

//       <div className='flex justify-center items-center mt-8'>
//         <h1 className='text-3xl font-bold'>Our Project Section</h1>
//         <div>
//           <HeroParallaxDemo />
//         </div>

//       </div>

//       {/* Navbar */}


//       Dock Navbar 

//       <div>
//         <Navbar />
//       </div>

//       <SplashCursor />

//       {/* hero */}
//       <div className='w-full h-screen relative overflow-hidden'>
//         <Aurora
//           colorStops={["#3A29FF", "#4dff00", "#3A29FF"]}
//           blend={0.5}
//           amplitude={1.0}
//           speed={1.0}
//         />

//         <div className='absolute inset-0 flex items-center justify-center'>
//           <div className='flex items-center'>
//             <div>
//               <SplitText
//                 text="Hello, GSAP!"
//                 className="text-2xl font-semibold text-center"
//                 delay={100}
//                 duration={0.6}
//                 ease="power3.out"
//                 splitType="chars"
//                 from={{ opacity: 0, y: 40 }}
//                 to={{ opacity: 1, y: 0 }}
//                 threshold={0.1}
//                 rootMargin="-100px"
//                 textAlign="center"
//               />

//               <BlurText
//                 text="Isn't this so cool?!"
//                 delay={150}
//                 animateBy="words"
//                 direction="top"
//                 className="text-2xl mb-8"
//               />

//             </div>

//             <div>
//               <Orb
//                 hoverIntensity={0.5}
//                 rotateOnHover={true}
//                 hue={0}
//                 forceHoverState={false}
//               />
//             </div>

//           </div>
//         </div>
      
//       </div>

//         <div className='absolute bottom-0 left-0 w-full text-center'>
//           <CurvedLoop marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦" />
//         </div>

//         <div>
//           <GradientText
//             colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
//             animationSpeed={3}
//             showBorder={false}
//             className="custom-class"
//           >
//             Add a splash of color!
//           </GradientText>
//         </div>

//         <div className='border border-green-500 mt-8 mb-16 w-full h-[500px] text-center'>
//           <FallingText
//             text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
//             highlightWords={["React", "Bits", "animated", "components", "simplify"]}
//             highlightClass="highlighted"
//             trigger="hover"
//             backgroundColor="transparent"
//             wireframes={false}
//             gravity={0.56}
//             fontSize="2rem"
//             mouseConstraintStiffness={0.9}
//           />
//         </div>

//         <div>
//           <DecryptedText
//             text="This text animates when in view"
//             animateOn="view"
//             speed={100}
//             revealDirection="center"
//           />
//         </div>

//       <div className='h-96 w-full relative'>
//         <Threads
//           amplitude={2}
//           distance={0}
//           enableMouseInteraction={true}
//         />
//       </div>

//       <div className='h-[500px] w-full'>
//         <Hyperspeed
//           effectOptions={{
//           distortion: 'turbulentDistortion',
//           length: 400,
//           roadWidth: 10,
//           islandWidth: 2,
//           lanesPerRoad: 4,
//           fov: 90,
//           fovSpeedUp: 150,
//           speedUp: 2,
//           carLightsFade: 0.4,
//           totalSideLightSticks: 20,
//           lightPairsPerRoadWay: 40,
//           shoulderLinesWidthPercentage: 0.05,
//           brokenLinesWidthPercentage: 0.1,
//           brokenLinesLengthPercentage: 0.5,
//           lightStickWidth: [0.12, 0.5],
//           lightStickHeight: [1.3, 1.7],
//           movingAwaySpeed: [60, 80],
//           movingCloserSpeed: [-120, -160],
//           carLightsLength: [400 * 0.03, 400 * 0.2],
//           carLightsRadius: [0.05, 0.14],
//           carWidthPercentage: [0.3, 0.5],
//           carShiftX: [-0.8, 0.8],
//           carFloorSeparation: [0, 5],
//           colors: {
//             roadColor: 0x080808,
//             islandColor: 0x0a0a0a,
//             background: 0x000000,
//             shoulderLines: 0xFFFFFF,
//             brokenLines: 0xFFFFFF,
//             leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
//             rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
//             sticks: 0x03B3C3,
//           }
//           }}
//         />
//         </div>

//         <div>
//           <TrueFocus 
//             sentence="Webbly AI"
//             manualMode={false}
//             blurAmount={5}
//             borderColor="green"
//             animationDuration={2}
//             pauseBetweenAnimations={1}
//           />
//         </div>

//         <div>
//           <ScrambledText
//             className="scrambled-text-demo"
//             radius={100}
//             duration={1.2}
//             speed={0.5}
//             scrambleChars={".:"}
//           >
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//             Similique pariatur dignissimos porro eius quam doloremque 
//             et enim velit nobis maxime.
//           </ScrambledText>
//         </div>

//         <div className='flex justify-center items-center mt-8'>
//           <h1>
//             Webbly AI
//           </h1>

//           <RotatingText
//             texts={['React', 'Bits', 'Is', 'Cool!']}
//             mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
//             staggerFrom={"last"}
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "-120%" }}
//             staggerDuration={0.025}
//             splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//             transition={{ type: "spring", damping: 30, stiffness: 400 }}
//             rotationInterval={2000}
//           />
//         </div>

//         <div>

//           <MagicBento 
//             textAutoHide={true}
//             enableStars={true}
//             enableSpotlight={true}
//             enableBorderGlow={true}
//             enableTilt={true}
//             enableMagnetism={true}
//             clickEffect={true}
//             spotlightRadius={300}
//             particleCount={12}
//             glowColor="132, 0, 255"
//           />

//         </div>


          
//         <div>
//           our latest project 
//               <Masonry
//                 items={[
//                   {
//                     id: "1",
//                     img: "https://picsum.photos/id/1015/600/900?grayscale",
//                     url: "https://example.com/one",
//                     height: 400,
//                   },
//                   {
//                     id: "2",
//                     img: "https://picsum.photos/id/1011/600/750?grayscale",
//                     url: "https://example.com/two",
//                     height: 250,
//                   },
//                   {
//                     id: "3",
//                     img: "https://picsum.photos/id/1020/600/800?grayscale",
//                     url: "https://example.com/three",
//                     height: 600,
//                   },
//                   {
//                     id: "4",
//                     img: "https://picsum.photos/id/1012/600/500?grayscale",
//                     url: "https://example.com/four",
//                     height: 300,
//                   },
//                   {
//                     id: "5",
//                     img: "https://picsum.photos/id/1013/600/700?grayscale",
//                     url: "https://example.com/five",
//                     height: 350,
//                   },
//                 ]}
//                 ease="power3.out"
//                 duration={0.6}
//                 stagger={0.05}
//                 animateFrom="bottom"
//                 scaleOnHover={true}
//                 hoverScale={0.95}
//                 blurToFocus={true}
//                 colorShiftOnHover={false}
//               />

//         </div>


//         <div>
//           meet our team

//           <div className='flex flex-wrap justify-center gap-4'>
//             <ProfileCard
//                   name="Javi A. Torres"
//                   title="Software Engineer"
//                   handle="javicodes"
//                   status="Online"
//                   contactText="Contact Me"
//                   avatarUrl="/path/to/avatar.jpg"
//                   showUserInfo={true}
//                   enableTilt={true}
//                 />
//                 <ProfileCard
//                   name="Javi A. Torres"
//                   title="Software Engineer"
//                   handle="javicodes"
//                   status="Online"
//                   contactText="Contact Me"
//                   avatarUrl="/path/to/avatar.jpg"
//                   showUserInfo={true}
//                   enableTilt={true}
//                 />

//                 <ProfileCard
//                   name="Javi A. Torres"
//                   title="Software Engineer"
//                   handle="javicodes"
//                   status="Online"
//                   contactText="Contact Me"
//                   avatarUrl="/path/to/avatar.jpg"
//                   showUserInfo={true}
//                   enableTilt={true}
//                 />
//           </div>
//         </div>


//     </div>
//   );
// }
