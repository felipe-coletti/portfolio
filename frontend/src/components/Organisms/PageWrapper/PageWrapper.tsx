import styles from './styles.module.css'
import type { PageWrapperProps } from './PageWrapper.types'

export const PageWrapper = ({ className, children }: PageWrapperProps) => {
	return (
		<div className={styles.pageWrapper}>
			<div className={`page-limit ${className}`}>{children}</div>
		</div>
	)
}
