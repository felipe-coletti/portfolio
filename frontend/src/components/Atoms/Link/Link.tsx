import { LinkProps } from './Link.types'
import styles from './styles.module.css'

export const Link = ({ href, children }: LinkProps) => {
    return (
        <a className={styles.link} href={href}>
            {children}
        </a>
    )
}
