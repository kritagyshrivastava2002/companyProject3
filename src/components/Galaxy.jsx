import React from 'react'

function Galaxy() {
  return (
    <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((img) => (
            <img key={img} src="https://s3-alpha-sig.figma.com/img/80a6/515c/6624338225aa14433c7636842aa163c0?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YalIczbOZkL19DL-z8mbBumGPuhWpe6RJUJXxhZ~hRA6sHKIddPVhlXvSfQXmC4p9ZNSBjmhxFV0zc2Hv0ZPAGFk34SsrOLeTAQv9zJs9fQcI~4VVcMFN6rhANHUm4m0mde1~G1FMduBHNNljtuAOXjDYYEMEDMGNegNX9Xf8m6Y7pFcFjPIqkfS5~XDPagK4aohMbneul1p-AOlFWnA59Iezg-EKmNPAleTkd0tFUnLeOhFPpNyGqWsZtw6vZO93IkEgBLlXZGDVtvGDrx0hn73fd6oO5xGofGWcbtid9WymtyDHKi1w7EfoStFP2oSAJmLi236ZUt-9SkkwDO5fw__" alt="Gallery item" className="w-full h-64 object-cover rounded-xl shadow-md" />
          ))}
        </div>
      </section>
  )
}

export default Galaxy