const Button = (props: any) => {
    const { children, ...rest } = props
    return <button {...rest} className="bg-amber-500 p-1 px-3 text-white uppercase text-xs">{children}</button>
}

export default Button