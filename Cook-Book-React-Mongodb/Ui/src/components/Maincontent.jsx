import React from 'react'

const Maincontent = () => {
  return (
    <>
     <main class="flex-grow p-4">
        <div class="max-w-3xl mx-auto mb-8">
            <form action="/search" method="GET" class="w-full max-w-md flex">
                <input type="text" name="query" placeholder="Search recipes..." class="flex-grow rounded-l px-4 py-2 border border-gray-300"/>
                <button type="submit" class="bg-blue-500 text-white rounded-r px-4 py-2">Search</button>
            </form>
        </div>
        
      </main>
    </>

  )
}

export default Maincontent
