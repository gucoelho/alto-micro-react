import { HTMLAttributes } from "react"

type SectionProps = HTMLAttributes<HTMLHeadingElement>

const SectionHeader: React.FC<SectionProps> = ({ children }) => <h3 className="font-bold">{children}</h3>

export default SectionHeader