import './Logo.css'

const Logo = (props) => {
    // eslint-disable-next-line react/prop-types
    const {name, href} = props

    return (
        <a className='logo' href={href}>{name}</a>
    )
}

export default Logo;