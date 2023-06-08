import Paleta from "../spline/2D/Paleta"
import Reloj from "../spline/2D/Reloj"
import Android from "../spline/2D/Android"


const DosD = () => {
    return (
      <section class="px-4 py-24 mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <div>
            <Paleta />
          </div>
          <div>
            <Android />
          </div>
          <div>   
            <Reloj />
          </div>
        </div>
      </section>
    )
}

export default DosD