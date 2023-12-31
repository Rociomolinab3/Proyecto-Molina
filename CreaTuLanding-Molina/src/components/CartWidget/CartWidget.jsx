import style from '../CartWidget/CartWidget.module.css'

const CartWidget = () =>{
    return(
    <div>
        <img className={style.logo} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR4nGNgGAWDCTBPWPuJoXbhf3TMMmHdR7o4gAVkERYHgPGAgdpRByz8Tw3M1LnyF/ui3cvIj4Ja6mCOpfsmkeUA4SevcGJi1HDvOgvJUZM3vB4QB/Cfuw1Ww9y/9suAOID36BVICEzZ8GpAHMCz5xzEAdO33CHLAQxUwsyT1t8aUAewTNm0ju5RwLn2EMT3E9Z9Yqj/z0RXBwhce/CfsWHxf4a6Rf/ZV+xPJM1yKjiAbfZ2sBzrjC03GcgCteQ7gGf/BbA4Y9OSf9yrjukSb2n9KjaGmgWdDLULnsETUB35CY990e7VpPq6gxopnqlt+R/2Rbs2MzD8ZyTNATULn4INqV5kxTAgoAbmgIU2A+OAWupEAQIvOEyaA+pXsYEdAQsJSnHNgkMUBwpT24o/IMP4z9z6z3/6JjSRrfhLqhoKHLAcYvjpm//54IYv/0OqGrIB27wdx9GDlm3u9uOkqiEfrLrCA7IA5CMQBlu26goPyWpGwWADAMpHn71UYK4MAAAAAElFTkSuQmCC" height="30px"></img>
        0
    </div>
    )
}

export default CartWidget;