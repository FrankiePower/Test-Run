import React from 'react'
import Discuss from './discuss'

const Community = () => {
  return (
        <section className="bg-[#E8F5E9] py-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Election Community</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">Discuss the Election</h3>
            </div>
            <Discuss/>
          </div>
        </div>
      </section>
  )
}

export default Community