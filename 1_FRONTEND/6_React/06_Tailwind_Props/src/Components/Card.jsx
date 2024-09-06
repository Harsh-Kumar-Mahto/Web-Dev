
// function Card({name,role="default"})  in this we can give the default values so that if someone doesn't pass any value then default value will be used


function Card(props){  //We receive all the propertes in the form of an object, we can destructure it manually by writing {name,role} in place of props. Then we will not be required to write props.___
    return(
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        {/* There is a rule in jsx file that every tag must have its closing and that it why we need to close the img tag otherwise there is an error */}
        <img className="w-24 h-24 rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium" >
            <div className="text-sky-500 dark:te">
              {props.name}
            </div>
            <div>
              {props.role}
            </div>
          </figcaption>
        </div>
    </figure>
    )
}

export default Card