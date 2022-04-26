function MenuLink(props) {
    const [menuIsOpen, setMenuIsOpen] = [props.menuIsOpen,props.setMenuIsOpen];

    return <a href={props.href} onClick={(e) =>{
        e.preventDefault();
        setMenuIsOpen(false);
        console.log(props.href);
        window.scrollTo(0,document.getElementById(props.href).offsetTop - 150);
    }}>{props.children}</a>
}

export default MenuLink;