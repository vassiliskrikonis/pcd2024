import { OrbitControls } from "@react-three/drei"
import { Model } from "./Model"

const App = () => (
  <>
    <color args={['ivory']} attach="background" />
    <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
    <ambientLight intensity={0.5} />

    <OrbitControls />
    <Model />
  </>
)

export default App
