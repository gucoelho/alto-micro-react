import { PropsWithChildren } from "react"

const Button = ({ children }: PropsWithChildren) => {
    return <button className="bg-amber-500 p-1 px-3 text-white uppercase text-xs">{children}</button>
}

export default Button