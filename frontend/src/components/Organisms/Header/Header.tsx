import { Tabs } from '../../Molecules/Tabs'
import styles from './styles.module.css'
import { Heading } from '../../Atoms/Heading'
import { ThemeToggle } from '../../Molecules/ThemeToggle'

export const Header = () => {
	const tabs = [
		{
			title: 'Home',
			paths: ['/']
		},
		{
			title: 'Work',
			paths: ['/work']
		},
		{
			title: 'Blog',
			paths: ['/blog']
		},
		{
			title: 'About',
			paths: ['/about']
		},
		{
			title: 'Contact',
			paths: ['/contact']
		}
	]

	return (
		<div className={styles.header}>
			<div className={`${styles.container} page-limit`}>
				<Heading>Felipe Coletti</Heading>
				<Tabs tabs={tabs} />
				<ThemeToggle />
			</div>
		</div>
	)
}
