import React from "react";

// We made the card an individual component and now we can use it anywhere any number of times
function Card(props){   //We can recieve properties as parameters, suppose we want different name in each card according to an array so first we need it, parameters are passed during calling of this Card(in App)
    return(
    <>
      {/* Below is a whole tailwind template used from tailwind website */}
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mt-4 mb-4">
      <img
        class="w-24 h-24 rounded-full mx-auto"
        src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
        alt=""
        width="384"
        height="512" 
        />
      {/* We need to add the closing mark as jsx file need that every tag must be closed and in general img tag is not closed so we need to add a / at the end of the image */}
      <div class="pt-6 space-y-4">
        <blockquote>
          <p class="text-lg">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div>{props.username}</div>
          <div>{props.nametype}</div>
        </figcaption>
      </div>
    </figure>
    </>
    )
}

export default Card