import Dado from "../spline/3D/Dado"
import Donas from "../spline/3D/Donas"
import Teclado from "../spline/3D/Teclado"
import Ojos from "../spline/3D/Ojos"
import Fisica from "../spline/3D/Fisica"

const TresD = () => {
    return (
      <section class="px-4 py-24 mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <div>
            <Dado />
          </div>
          <div>
            <Donas />
          </div>
          <div>
            <Teclado />
          </div>
          <div>
            <Fisica />
          </div>
          <div>
            <Ojos />
          </div>

        </div>
      </section>
  )
}

export default TresD